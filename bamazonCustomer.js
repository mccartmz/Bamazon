var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  //if (err) throw err;
  console.log("connection successful")
  purchase();
});

var purchase = function purchase() {
  connection.query("SELECT * FROM products", function(err, results) {
   // if (err) throw err;
    // when the items are finally loaded, ask the user what they would like to purchase.
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].product_name);
            }
            return choiceArray;
          },
          message: "What item would you like to purchase?"
        },
        {
          name: "quantity",
          type: "input",
          message: "How many items would you like to purchase?"
        }
      ])
      .then(function(answer) {
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.choice) {
            chosenItem = results[i];
          }
        }
        // update the database's stock_quantity and notify user, if there is enough, that their purchase was successful
        if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
          var newQuantity = chosenItem.stock_quantity - parseInt(answer.quantity)
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: newQuantity
              },
              {
                item_id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Thank you. Your purchase was successful!");
              purchase();
            }
          );
        }
        // notify user if there is not enough product
        else {
          console.log("There is not enough stock to fufill your order. Please check back later or lower your requested amount.");
          purchase();
        }
      });
  });
}
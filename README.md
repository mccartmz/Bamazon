**Bamazon**

* Bamazon is a Node application which allows users to select from a list of available items, and, if there is sufficient quantity for that item, to purchase the item.

  * The basic application is fairly simple: Upon loading up the program, the Bamazon database (product table) is printed/consoled (via npm mySQL connection and npm cli-table), and the user is prompted to enter the ID number for whichever item they would like to buy.

    * If the user selects an item by ID, the input is validated, and they are prompted for how many units they want to buy.

    * The quantity the user entered is compared against the mySQL Bamazon database (product table) for stock-quantity.
        * If the quantity the user entered is lower than the stock held in the database, then the purchase proceeds.
            * The database is updated at the time the purchase "goes through" (if the condition is met that there is enough stock of the product to buy).  The quantity is updated. 
    
        * If the quantity the user entered is higher than the stock_quantity, the user is told that the product is out of stock.
            * The database is not updated as no purchase took place.

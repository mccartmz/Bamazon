DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Poncho', 'Clothing', 59.99, 25);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Sweatshirt', 'Clothing', 34.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Swimsuit', 'Clothing', 39.99, 125);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Aviators', 'Sunglasses', 99.99, 10);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Sunblock SPF 30', 'Health', 9.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Mobile Speakers', 'Electronics', 29.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Sandals', 'Footwear', 19.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Beach Chair', 'Furniture', 49.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Phone Charger', 'Electronics', 10.99, 100);

INSERT INTO products (product_name, department, price, stock_quantity)
VALUES ('Aloe', 'Health', 7.99, 100);
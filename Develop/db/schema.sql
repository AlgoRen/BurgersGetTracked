CREATE database burgers_db;
USE database burgers_db;

CREATE TABLE burgers(
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(40),
    devoured BOOLEAN
)
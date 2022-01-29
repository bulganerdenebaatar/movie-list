DROP DATABASE IF EXISTS movielist;

CREATE DATABASE movielist;

USE movielist;

CREATE TABLE movies (
  id int NOT NULL AUTO_INCREMENT,
  title text,
  PRIMARY KEY(ID)
);

INSERT INTO  movies (title) VALUES ('Inception');

/*mysql -u root < server/schema.sql*/
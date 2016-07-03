CREATE DATABASE searches;

USE searches;

CREATE TABLE searches (
  searchId int NOT NULL AUTO_INCREMENT,
  searchPhrase varchar(200),
  watsonResponse varchar(512),
  PRIMARY KEY(searchId)
);

insert into searches values
  (null, 'Where am I?', null);
insert into searches values
  (null, 'Is anyone there?', null);
insert into searches values
  (null, 'What am I doing here?', null);
insert into searches values
  (null, 'This place is weird.', null);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

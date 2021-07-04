DROP DATABASE filters;
CREATE DATABASE filters;

CREATE TABLE users (
   user_id serial primary key,
   first_name varchar(32),
   last_name varchar(32),
   contact varchar(12)
);

CREATE TABLE books (
   book_id serial primary key,
   book_name varchar(64),
   release_year smallint,
   janr varchar(32)
);

CREATE TABLE films (
   fiml_id serial primary key,
   film_name varchar(64),
   release_year smallint,
   janr varchar(32)
);




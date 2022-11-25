CREATE DATABASE `game-score`;

CREATE TABLE Score (
	id INT auto_increment NOT NULL,
	name varchar(500) NOT NULL,
	score INT NOT NULL,
	`time` DATETIME NOT NULL,
	comments varchar(5000) NULL,
	CONSTRAINT Score_pk PRIMARY KEY (id)
);
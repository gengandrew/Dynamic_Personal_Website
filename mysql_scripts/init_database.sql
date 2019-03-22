-- Shown below are the traditional sql commands used to initialize initial setup for the mysql database.
-- Note: This file is used for completeness of full stack initializaiton, the file itself is not active during runtime.

use bookmarktest;
CREATE TABLE DatabaseKeys (DatabaseID int NOT NULL AUTO_INCREMENT, AppName VARCHAR(50) NOT NULL, host VARCHAR(50) NOT NULL, user VARCHAR(50) NOT NULL, passwd VARCHAR(50) NOT NULL, databaseName VARCHAR(50) NOT NULL, PRIMARY KEY (DatabaseID));
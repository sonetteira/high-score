# high-score
# About

This project is a basic snake game. It started as an experiment in using JS animation and expanded to include a simple MariaDB database and PHP for storing high scores.

# Built With

* JavaScript
* PHP
* MariaDB
* Bootstrap

# Getting Started
## Prerequisites

* MariaDB
* Apache Web Server (or something to run PHP script). I used XAMPP.
* Internet connection for loading Bootstrap CDN

## Setup

1. Clone/Fork this repo. If using XAMPP make sure it's in the /xampp/htdocs folder
1. Run setup.sql to set up the database
1. Add a config.ini file or modify the modules/conn.php file with database connection details\
    ```
    [database]
    db_server   = server url
    db_name     = game-score
    db_user     = username
    db_password = password
    db_port     = 3306
    ```
1. Run Apache Web Server
1. Access site in a browser at http://localhost/high-score


# License

Distributed under the MIT License. See LICENSE for more information

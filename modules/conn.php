<?php
$ini = parse_ini_file('config.ini');

function createConnection() {
    //create database connection
    global $ini;
    $con = new mysqli(
        $ini['db_server'],
        $ini['db_user'],
        $ini['db_password'],
        $ini['db_name'], 
        $ini['db_port']
    ) or die(
        "Could not create database connection."
    );
    return $con;
}


function closeConnection($con)
{
    mysqli_close($con);
}
?>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$conn = createConnection();
?>
<!DOCTYPE html>
<html lang="en">

<head>
<?php
require("modules/conn.php");
include("modules/header.html");
?>
</head>
<body>
<?php
include("modules/nav.php");
?>
<main class="container">
<?php
$query = "SELECT name, score, comments FROM score ORDER BY score DESC LIMIT 15;";
$result = $conn->query($query);
if ($result->num_rows > 0) {
    echo '<table class="table table-striped"><thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
            <th scope="col">Comments</th>
        </tr>
        </thead>
        <tbody>
        <tr>';
      while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["name"] . "</td><td>" . $row["score"] . 
        "</td><td>" . $row["comments"] . "</td></tr>";
    }
    echo "</tbody></table>";
}

?>
</main>
</body>

<?php
require("modules/footer.php");
?>

</html>
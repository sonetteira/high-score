<!DOCTYPE html>
<html lang="en">
<head>
<title>Enter Score</title>
<?php
require("modules/conn.php");
include("modules/header.html");
?>
</head>
<body>
<?php
include("modules/nav.php");
if($_SERVER['REQUEST_METHOD']  =='POST')
{
    try {
        $now = date("Y-m-d H:i:s");
        $name = $_POST['name'];
        $score = $_POST['score'];
        $comments = $_POST['comments'];
        $result = NULL;
        $query = $conn->prepare("INSERT INTO Score (name, score, `time`, comments) VALUES(?, ?, ?, ?);");
        $query->bind_param('ssss', $name, $score, $now, $comments);
        $query->execute();
        header("Location: scores.php");
    }catch(Exception $e){
        echo '<h4 class="error">Error!</h4>
                <p class="error">update was unsuccessful</p>';
        echo 'Error: ' .$e->getMessage();
    }       
} else {
    header("Location: index.php");
}
?>
<!-- <main class="container">
    <h2>Enter Your Score</h2>
    <form action="enterScore.php" method="post">
        <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" class="form-control">
        </div>
        <div class="form-group">
            <label for="score">Your Score</label>
            <input id="score" name="score" type="number" min="0" class="form-control">
        </div>
        <div class="form-group">
            <label for="comments">Comments</label>
            <textarea id="comments" name="comments" maxlength="5000" class="form-control"></textarea>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        <label></label>
    </form>
</main> -->
</body>

<?php
require("modules/footer.php");
?>

</html>
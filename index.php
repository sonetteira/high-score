<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Snake Game</title>
    <link rel="stylesheet" href="assets/styles.css">
    <script src="assets/script.js" defer></script>
    <head>
    <?php
    include("modules/header.html");
    ?>
</head>
</head>

<body>
<?php
include("modules/nav.php");
?>
<main class="container">
    <canvas id="canvas" width="640" height="500"></canvas>
    <section id="control" class="text-center">
        <button id="ctrup" type="button" class="btn btn-secondary m-1 p-2 h5" aria-label="Up">↑</button><br>
        <button id="ctrleft" type="button" class="btn btn-secondary m-1 p-2 h5" aria-label="Left">←</button>
        <button id="ctrright" type="button" class="btn btn-secondary m-1 p-2 h5" aria-label="Right">→</button><br>
        <button id="ctrdown" type="button" class="btn btn-secondary m-1 p-2 h5" aria-label="Down">↓</button>
    </section>
</main>
</body>

</html>
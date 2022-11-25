<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href=".">Snake</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="scores.php">View Scores</a>
            </li>
        </ul>
    </div>
    <!-- modal trigger -->
    <button type="button" class="btn btn-primary text-center" data-toggle="modal" data-target="#exampleModal">
        ?
    </button>
</nav>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">How to Play</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <p>Use <span class="pc">↑ ← ↓ → or WASD keys</span><span class="mobile">↑ ← ↓ → buttons</span> to move the red snake. The snake grows by eating the green apples. 
            Be careful not to hit the walls or run into your tail!</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
    </div>
</div>
</div>
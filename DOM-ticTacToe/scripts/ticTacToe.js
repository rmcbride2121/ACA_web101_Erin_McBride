let gameMarker = 'X';
let top_Left,top_Mid,top_Right;

// Changes the variable value to X
function changeMarkerToX(){
    gameMarker = 'X';
    console.log("The x button was clicked!")
}

// Changes the variable  value to O
function changeMarkerToO(){
    gameMarker = 'O';
    console.log("The o button was clicked!")
}

// Inserts the value of gameMarker into the clicked space on the board
function placeMark(myDiv){
    //Select the associated DOM element
    var element = document.getElementById(myDiv);

    //If the element already contains something, then don't change it
    if(element.innerHTML != "") return;

    // Inserts the value of gameMaker into the clicked div element
    document.getElementById(myDiv).innerHTML = gameMarker;
    checkWin();
}

// Resets the the board
$("#button").click(
    function(){
    $(".box").empty();
  }
);

// Logic that determines if there is a winner
function checkWin(){

    top_Left = document.getElementById("topLeft").innerText;
    top_Mid = document.getElementById("topMid").innerHTML;
    top_Right = document.getElementById("topRight").innerHTML;
    mid_Left = document.getElementById("midLeft").innerHTML;
    mid_Mid = document.getElementById("midMid").innerHTML;
    mid_Right = document.getElementById("midRight").innerHTML;
    bottom_Left = document.getElementById("bottomLeft").innerHTML;
    bottom_Mid = document.getElementById("bottomMid").innerHTML;
    bottom_Right = document.getElementById("bottomRight").innerHTML;

    if(top_Left == gameMarker && top_Mid == gameMarker && top_Right == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    } else if(mid_Left == gameMarker && mid_Mid == gameMarker && mid_Right == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    } else if(bottom_Left == gameMarker && bottom_Mid == gameMarker && bottom_Right == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    } else if(top_Left == gameMarker && mid_Left == gameMarker && bottom_Left == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    } else if(top_Mid == gameMarker && mid_Mid == gameMarker && bottom_Mid == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    } else if(top_Right == gameMarker && mid_Right == gameMarker && bottom_Right == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    } else if(top_Left == gameMarker && mid_Mid == gameMarker && bottom_Right == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    } else if(top_Right == gameMarker && mid_Mid == gameMarker && bottom_Left == gameMarker) {
        alert(gameMarker + " wins!");
        $(".box").empty();
    };
}

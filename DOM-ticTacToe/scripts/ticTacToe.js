var gameMarker = "x"

function changeMarkerToX(){
    var gameMarker = "0"
    console.log("The O button was clicked!")
}

function changeMarkerToO(){
    var gameMarker = "X"
    console.log("The X button was clicked!")
}

function placeMark(myDiv){
    console.log("The div button was clicked!")
    document.getElementById(myDiv).innerHTML = gameMarker;
}
var gameMarker = 'x';

function changeMarkerToX(){
    gameMarker = "x";
    console.log("The x button was clicked!")
}

function changeMarkerToO(){
    gameMarker = "o";
    console.log("The o button was clicked!")
}

function placeMark(myDiv){
    console.log("The div button was clicked!")
    document.getElementById(myDiv).innerHTML = gameMarker;
}
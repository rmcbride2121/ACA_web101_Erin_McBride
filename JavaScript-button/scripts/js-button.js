// Stress Reliever

let clicks = 0;

function revealMessage() {
    document.getElementById("hiddenText").style.display = "block";
    document.getElementById("resetButton").style.display = "block";
    clicks++;
    console.log(clicks);
    document.getElementById("newText").innerHTML = 'Punch counter: ' + clicks;
}

// Reset Button

function resetButton() {
    if (clicks == 0) {
        document.getElementById("oops").innerHTML = 'Oops! Counter is already reset';
    };
    clicks = 0;
    document.getElementById("newText").innerHTML = 'Punch counter: ' + clicks;
  }
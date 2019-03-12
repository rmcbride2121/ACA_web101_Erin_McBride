let clicks = 0;

function revealMessage() {
    document.getElementById("hiddenText").style.display = "block";
    clicks++;
    console.log(clicks);
    document.getElementById("newText").innerHTML = 'Current number of clicks: ' + clicks;
}
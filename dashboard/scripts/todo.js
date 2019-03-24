// ToDo List
$(function() {
  let $list = $("ul");
  let $newItemForm = $("#newItemForm");

  $newItemForm.on("submit", function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val("");
  });

  $list.on("click", "li", function() {
    let $this = $(this);
    $this.remove();
  });
});

// Geolocation
var myLocation = document.getElementById("my-coordinates");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayPosition);
  } else {
    myLocation.innerHTML = "Not available";
  }
}

function displayPosition(position) {
  myLocation.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    " Latitude: " +
    position.coords.latitude;
}

// Stress Reliever

let clicks = 0;

function revealMessage() {
  document.getElementById("resetButton").style.display = "block";
  clicks++;
  console.log(clicks);
  document.getElementById("newText").innerHTML = "Punch counter: " + clicks;
  if (clicks > 10) {
    document.getElementById("newText").innerHTML = "Stop! He's already dead..";
  }
}

// Reset Button

function resetButton() {
  if (clicks == 0) {
    document.getElementById("oops").innerHTML = "Counter is already reset";
  }
  clicks = 0;
  document.getElementById("newText").innerHTML = "Punch counter: " + clicks;
}
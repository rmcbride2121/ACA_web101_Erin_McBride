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
    document.getElementById("hiddenText").style.display = "block";
    clicks++;
    console.log(clicks);
    document.getElementById("newText").innerHTML = 'Current number of clicks: ' + clicks;
}
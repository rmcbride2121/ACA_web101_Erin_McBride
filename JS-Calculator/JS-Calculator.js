function addNumber(num) {
  document.querySelector("#results").value += num;
}

// Clear Results
function clearResults() {
  document.querySelector("#results").value = "";
}

// Addition
function addition() {
  document.querySelector("#results").value += "+";
}

// Subtraction
function subtraction() {
  document.querySelector("#results").value += "-";
}

// Multiplication 
function multiplication() {
    document.querySelector("#results").value += "*";
}

// Division
function division() {
    document.querySelector("#results").value += "/";
}

// Plus/Minus Button
function plusMinus() {
    document.querySelector("#results").value = eval(
      document.querySelector("#results").value*-1
    );
  }

// Equal Button
function equals() {
  document.querySelector("#results").value = eval(
    document.querySelector("#results").value
  );
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

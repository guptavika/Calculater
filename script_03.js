let displayValue = "";

function append(value) {
  displayValue += value;
  document.getElementById("result").value = displayValue;
}

function clearScreen() {
  displayValue = "";
  document.getElementById("result").value = displayValue;
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById("result").value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("result").value = displayValue;
  } catch (e) {
    document.getElementById("result").value = "Error";
  }
}

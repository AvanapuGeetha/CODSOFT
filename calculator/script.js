const display = document.getElementById("display");

function appendValue(val) {
  if (display.textContent === "0" || display.textContent === "Error") {
    display.textContent = val;
  } else {
    display.textContent += val;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  if (display.textContent.length <= 1 || display.textContent === "Error") {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

function calculateResult() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}

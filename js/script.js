"user strict";

let calculatorForm = document.querySelector(".calculator__form");

calculatorForm.addEventListener("click", function (event) {
  if (event.target.closest("button") == null) return;
  let valueBtn = event.target.closest("button").value;
  let calculatorDisplay = document.querySelector(".calculator__display");

  switch (valueBtn) {
    case "c":
      calculatorDisplay.value = "";
      break;

    case "=":
      calculatorDisplay.value = eval(calculatorDisplay.value);
      break;

    default:
      calculatorDisplay.value += valueBtn;
  }
});

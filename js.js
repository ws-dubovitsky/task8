// Создаем переменную под каждую кнопку и получаем каждую их id
let calAc = document.getElementById("cal-ac");
let calC = document.getElementById("cal-c"); // сброс
let calPlusMinus = document.getElementById("cal-plus-minus"); // +/-

let calPlus = document.getElementById("cal-plus");
let calMinus = document.getElementById("cal-minus");
let calX = document.getElementById("cal-x");
let calDivide = document.getElementById("cal-divide"); // деление
let calPoint = document.getElementById("cal-point");
let calEqually = document.getElementById("cal-equally");
let calDisplay = document.getElementById("cal-display-val");
let perCent = document.getElementById("per-cent");

let displayValue = "0";
let pendingVal;
let array = [];

let calZero = document.getElementById("cal-zero");
let calOne = document.getElementById("cal-one");
let calTwo = document.getElementById("cal-two");
let calThree = document.getElementById("cal-three");
let calFour = document.getElementById("cal-four");
let calFive = document.getElementById("cal-five");
let calSix = document.getElementById("cal-six");
let calSeven = document.getElementById("cal-seven");
let calEight = document.getElementById("cal-eight");
let calNine = document.getElementById("cal-nine");

let calValue = document.getElementsByClassName("cal-value");
let calOperators = document.getElementsByClassName("cal-operators");

//функция отвечающая за ввод значений на наш дисплей
let updateDisplay = clickObj => {
  let btnText = clickObj.target.innerText;
  if (displayValue === "0") displayValue = "";
  displayValue += btnText;
  calDisplay.innerText = displayValue;
};

let preformOperations = clickObj => {
  let operator = clickObj.target.innerText;

  switch (operator) {
    case "+":
      pendingVal = displayValue;
      displayValue = "0";
      calDisplay.innerText = displayValue;
      array.push(pendingVal);
      array.push("+");
      break;
    case "-":
      pendingVal = displayValue;
      displayValue = "0";
      calDisplay.innerText = displayValue;
      array.push(pendingVal);
      array.push("-");
      break;
    case "×":
      pendingVal = displayValue;
      displayValue = "0";
      calDisplay.innerText = displayValue;
      array.push(pendingVal);
      array.push("*");
      break;
    case "÷":
      pendingVal = displayValue;
      displayValue = "0";
      calDisplay.innerText = displayValue;
      array.push(pendingVal);
      array.push("/");
      break;
    case "%":
      array.push(displayValue);
      let perCent = eval(array.join(" "));
      displayValue = perCent / 100;
      calDisplay.innerText = displayValue;
      array = [];
      break;
    case "+/-": //меняет знак на противоположный
      array.push(displayValue);
      let value = eval(-array.join(" "));
      displayValue = value + "";
      calDisplay.innerText = displayValue;
      array = [];
      break;
    case "=":
      array.push(displayValue);
      let sum = eval(array.join(" "));
      displayValue = sum + "";
      calDisplay.innerText = displayValue;
      array = [];
    default:
      break;
  }
};

for (let i = 0; i < calValue.length; i++) {
  calValue[i].addEventListener("click", updateDisplay, false);
}

for (let i = 0; i < calOperators.length; i++) {
  calOperators[i].addEventListener("click", preformOperations, false);
}

calC.onclick = () => {
  displayValue = "0";
  pendingVal = undefined;
  array = [];
  calDisplay.innerHTML = displayValue;
}; //Очистить все значения

calPoint.onclick = () => {
  displayValue = displayValue.replace(
    /^[^\d{20}]*(\d+([.,]\d{0,5})?).*$/g,
    "$1"
  );
  calDisplay.innerText = displayValue;
};

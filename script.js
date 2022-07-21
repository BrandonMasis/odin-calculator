const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
const keys = document.querySelectorAll(".key");
const symbols = document.querySelectorAll(".symbol");
const equal = document.getElementById("equal");

//get a value, and when we click the symbol get another value and
//return result which becomes the new value

const add = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
};

const subtract = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);
  return a - b;
};

const multiply = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);
  return a * b;
};

const divide = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);
  return a / b;
};

let value = "";
let total = "";
let operator = undefined;

keys.forEach((key) => {
  key.addEventListener("click", () => {
    value += `${key.getAttribute("data-number")}`;
    operation.innerHTML += `${key.getAttribute("data-number")}`;
    if (operator == undefined) {
      result.textContent = 0;
    }
  });
});

function operate(a, b, operator) {
  return (total = operator(a, b));
}

symbols.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    if (total == "") {
      total = parseInt(value);
      value = 0;
      return;
    } else if (operator == "add") {
      operate(total, value, add);
      result.textContent = total;
    } else if (operator == "subtract") {
      operate(total, value, subtract);
      result.textContent = total;
    } else if (operator == "multiply") {
      operate(total, value, multiply);
      result.textContent = total;
    } else if (operator == "divide") {
      operate(total, value, divide);
      result.textContent = total;
    }
    operator = symbol.getAttribute("data-symbol");
    value = 0;
    result.textContent = total;
  });
});

symbols.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    operator = symbol.getAttribute("data-symbol");
    if (operator == "add") {
      operation.innerHTML += `<span id="operator">+</span>`;
    } else if (operator == "subtract") {
      operation.innerHTML += `<span id="operator">-</span>`;
    } else if (operator == "multiply") {
      operation.innerHTML += `<span id="operator">x</span>`;
    } else if (operator == "divide") {
      operation.innerHTML += `<span id="operator">/</span>`;
    }
  });
});

equal.addEventListener("click", () => {
  if (operator == "add") {
    operate(total, value, add);
    result.textContent = total;
  } else if (operator == "subtract") {
    operate(total, value, subtract);
    result.textContent = total;
  } else if (operator == "multiply") {
    operate(total, value, multiply);
    result.textContent = total;
  } else if (operator == "divide") {
    operate(total, value, divide);
    result.textContent = total;
  }
  total = 0;
  operator = undefined;
  value = 0;
  operation.innerHTML = `<div class="typing">I</div>`;
});

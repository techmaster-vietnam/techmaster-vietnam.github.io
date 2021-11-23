const buttonsEl = document.querySelector(".buttons");
const displayContentEl = document.querySelector(".display-content span");
const fnSymbolEls = document.querySelectorAll(".functions-symbol");
const numberBtnsEl = document.querySelectorAll(".btn--number");
const fnBtnsEl = document.querySelectorAll(".btn--fn");
const equalBtnEl = document.querySelector(".btn--equal");

const initialState = {
  display: "0",
  fnState: null,
  firstParam: 0,
  secondParam: null,
  displayError: false,
};

let state = {
  display: "0",
  fnState: null,
  firstParam: 0,
  secondParam: null,
  displayError: false,
};

const stringIsTooLong = (maxLength) => {
  let targetLength;
  const dotIndex = state.display.indexOf(".");

  targetLength = state.display.length;

  if (dotIndex !== -1) {
    targetLength = state.display.length - 1;
  }

  return targetLength > maxLength;
};

const renderDisplayApp = (reset = false) => {
  // Render main display
  const stringIsInvalid = stringIsTooLong(11) || state.display === "Infinity";
  if (stringIsInvalid) {
    state.displayError = true;
  }
  displayContentEl.textContent = stringIsInvalid ? "Too large" : state.display;
  if (reset) state.secondParam = null;

  // Render functions box
  [...fnSymbolEls].forEach((el) => {
    el.classList.remove("active");
    if (reset) return;

    if (el.textContent === "" && state.fnState === "*") {
      el.classList.toggle("active");
      return;
    }

    if (el.textContent !== state.fnState) return;

    el.classList.toggle("active");
  });
};

const functionBoxHandler = (symbol) => {
  if (state.secondParam) showResult();

  if (!state.fnState || state.fnState !== symbol) {
    state.fnState = symbol;
  } else {
    state.fnState = null;
  }

  renderDisplayApp();
};

const addNumberHandler = (number) => {
  if (!state.fnState) {
    // First parameter type in
    if (stringIsTooLong(10) && number !== "3.1415926535") return;
    if (state.display === "0") state.display = "";

    state.display += number;

    // Imidiately show Pi number when user wants change in the first parameter
    if (number === "3.1415926535") {
      state.display = "3.1415926535";
    }

    state.firstParam = +state.display;
    renderDisplayApp();
  } else {
    // Second parameter type in
    if (!state.secondParam && state.secondParam !== 0) {
      state.display = "";
    }

    if (stringIsTooLong(10)) return;

    state.display += number;

    // Fix bug when type 'pi' button as display shows '0'
    if (state.display.slice(-12) === "3.1415926535") {
      state.display = "3.1415926535";
    }

    state.secondParam = +state.display;
    renderDisplayApp();
  }
};

const showResult = (useUtility = false, utilityResult = null) => {
  let finalResult;

  if (useUtility) {
    // For advance utilities
    finalResult = utilityResult;
  } else {
    // For normal math functions
    if (!state.secondParam) return;

    switch (state.fnState) {
      case "+":
        finalResult = state.firstParam + state.secondParam;
        break;
      case "-":
        finalResult = state.firstParam - state.secondParam;
        break;
      case "*":
        finalResult = state.firstParam * state.secondParam;
        break;
      case "÷":
        finalResult = state.firstParam / state.secondParam;
        break;
    }
  }

  // Set the output result to the first parameter and re-clear state
  state.fnState = null;
  state.firstParam = finalResult;
  state.display = finalResult.toString();

  if (state.display.indexOf(".") !== -1) {
    state.display = state.display.slice(0, 12);
  }

  renderDisplayApp(true);
};

const utilityHandler = (type) => {
  let targetnumber;

  const calcFractional = (number) => {
    let num = number;

    for (let i = number - 1; i > 0; i--) {
      num *= i;
    }

    return num;
  };

  // On Pi button
  if (type === "pi") {
    if (
      state.display === "0" ||
      state.fnState ||
      (!state.fnState && state.firstParam)
    ) {
      addNumberHandler(Math.PI.toString().slice(0, 12));
    }
    return;
  }

  // On other utility functions
  switch (type) {
    case "fractional":
      targetnumber = calcFractional(+state.display);
      break;
    case "^3":
      targetnumber = (+state.display) ** 3;
      break;
    case "^2":
      targetnumber = (+state.display) ** 2;
      break;
    case "square-root":
      targetnumber = Math.sqrt(+state.display);
      break;
  }

  // When the output result is too large or infinity, set dummy number value to make the display show "Too large"
  if (
    targetnumber.toString().indexOf("e+") !== -1 ||
    state.display === "Infinity"
  )
    targetnumber = 10 ** 15;

  if (!state.secondParam) {
    showResult(true, targetnumber);
  }
};

const clearAll = () => {
  state = { ...initialState };
  renderDisplayApp();
};

const deleteLastChar = () => {
  state.display = state.display.slice(0, -1);
  if (state.display === "") state.display = "0";

  if (!state.secondParam) {
    state.firstParam = state.display;
  } else {
    state.secondParam = state.display;
  }

  renderDisplayApp();
};

const onDotBtnHandler = () => {
  if (state.display.indexOf(".") === -1) {
    state.display += ".";
    renderDisplayApp();
    return;
  }

  if (state.display.indexOf(".") === state.display.length - 1) {
    state.display = state.display.slice(0, -1);
    renderDisplayApp();
  }
};

// Check type of button
const checkButtonType = (btnEl, matchName, matchType) => {
  if (matchType === "name") return btnEl.name === matchName;

  if (matchType === "data") return btnEl.dataset.type === matchName;

  return btnEl.classList.contains(matchName);
};

// All keys event function
const allKeysPressEvent = (btn) => {
  if (state.displayError) {
    clearAll();
    state.displayError = false;
  }

  // On numbers
  if (checkButtonType(btn, "btn--number")) {
    addNumberHandler(btn.textContent);
  }

  // On math functions
  if (checkButtonType(btn, "symbol", "data")) {
    functionBoxHandler(btn.name);
  }

  // On equal button - Show result
  if (checkButtonType(btn, "btn--equal")) {
    showResult();
  }

  // On uitlities
  if (checkButtonType(btn, "utility", "data")) {
    utilityHandler(btn.name);
  }

  // On AC
  if (checkButtonType(btn, "clear", "name")) {
    clearAll();
  }

  // On Backspace
  if (checkButtonType(btn, "back-space", "name")) {
    deleteLastChar();
  }

  // On dot
  if (checkButtonType(btn, "dot", "name")) {
    onDotBtnHandler();
  }
};

// Calculator click handler
buttonsEl.addEventListener("click", (event) => {
  const btn =
    event.target.closest(".btn--number") ||
    event.target.closest(".btn--fn") ||
    event.target.closest(".btn--equal");
  if (!btn) return;

  allKeysPressEvent(btn);
});

// Add events to keyboard
document.documentElement.addEventListener("keydown", (event) => {
  const keyCode = event.code;
  const codeName = keyCode.slice(6);
  if (!keyCode) return;

  let keyPressed;
  const numberKey = [...numberBtnsEl].find((el) => el.textContent === codeName);
  keyPressed = numberKey;

  if (!numberKey) {
    const functionKey = [...fnBtnsEl].find((el) => {
      if (codeName === "Add") {
        return el.name === "+";
      }
      if (codeName === "Subtract") {
        return el.name === "-";
      }
      if (codeName === "Multiply") {
        return el.name === "*";
      }
      if (codeName === "Divide") {
        return el.name === "÷";
      }
      if (codeName === "Decimal") {
        return el.name === "dot";
      }
      if (keyCode === "Backspace") {
        return el.name === "back-space";
      }
    });

    keyPressed = functionKey;
  }

  if (codeName === "Enter") {
    keyPressed = equalBtnEl;
  }

  if (!keyPressed) return;
  allKeysPressEvent(keyPressed);
});

// Initial functions
const init = () => {
  renderDisplayApp();
};
init();

//Set Time:
let show_hour = document.querySelector(".hour");
let show_minutes = document.querySelector(".minutes");

function updateTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    show_hour.innerText = hour;
    show_minutes.innerText = minutes;
}
updateTime();
setInterval(updateTime, 1000);

//Calculator:
let screenDisplay = document.querySelector(".input");

function input(value) {
    //Xoá số 0 khi nhập vào
    if (screenDisplay.innerHTML === "0") {
        screenDisplay.innerHTML = "";
        //Kiểm tra trường hợp vô nghĩa ban đầu
        if (value == "%" || value == "<sup>2</sup>" || value == ")") {
            value = "0";
        }
        if (value == "." || value == "+" || value == "-" || value == "×" || value == "÷") {
            value = "0" + value;
        }
    }

    //Kiểm tra trường hợp lặp phép toán
    let check = screenDisplay.innerHTML.slice(-1);

    if (check == "+" || check == "-" || check == "×" || check == "÷") {
        if (value == "%" || value == "<sup>2</sup>" || value == "÷" || value == "×" || value == "+" || value == "." || value == ")") {
            value = "";
        }
    }
    if (check == ".") {
        if (value == "%" || value == "<sup>2</sup>" || value == "√(" || value == "(" || value == ")" || value == "÷" || value == "×" || value == "+" || value == "." || value == "-") {
            value = "";
        }
    }
    if (check == "%") {
        if (value == "%" || value == "√(" || value == "(" || value == ")" || value == "÷" || value == "×" || value == "+" || value == "." || value == "-") {
            value = "";
        }
    }
    if (check == ">" || check == ")") { //Bình phương
        if (value == "%" || value == "<sup>2</sup>" || value == "√(" || value == "(" || value == ")" || value == ".") {
            value = "";
        }
    }
    if (check == "(") {
        if (value == "%" || value == "<sup>2</sup>" || value == "(" || value == "×" || value == "÷" || value == ".") {
            value = "";
        }
    }

    screenDisplay.innerHTML += value;

    if (screenDisplay.innerHTML !== "0") {
        document.querySelector(".reset").innerText = "C";
    }
}

function del() {
    screenDisplay.innerHTML = screenDisplay.innerHTML.slice(0, -1);
    if (screenDisplay.innerHTML.length == 0) {
        screenDisplay.innerHTML = "0";
    }
}

function reset() {
    screenDisplay.innerHTML = "0";
    document.querySelector(".reset").innerText = "AC";
}

function equal() {
    let result = screenDisplay.innerHTML.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("√(", "Math.sqrt(").replaceAll("%", "*0.01").replaceAll("<sup>2</sup>", "**2");
    screenDisplay.innerHTML = eval(result).toFixed(2).replace(/\.?0*$/g, '');
}

//Change Theme:
function theme() {
    document.querySelector(".main").classList.toggle("change-style");
}

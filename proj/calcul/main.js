var numberButtons = document.querySelectorAll("#number");
var operatorButtons = document.querySelectorAll("#operator");
var equals = document.querySelector("#equals");
var clear_all = document.querySelectorAll("#clear-all");
var clear_one = document.querySelectorAll("#clear-one");
var calculation_buttons = document.querySelectorAll(".calc");
var every_button = document.querySelectorAll("button");

var previous_calc = document.querySelector(".previous-calc");
var current_calc = document.querySelector(".current-calc");

var isOperator = false;
var calc = "";

function calculate(button){
    const value = button.textContent
    if (value == "/" && isOperator == false || value == "*" && isOperator == false || value == "+" && isOperator == false || value == "-" && isOperator == false){
        previous_calc.innerHTML += " " + value + " "
        calc += value;
        isOperator = true
    } else if (value == "9" || value == "8" || value == "7" || value == "6" || value == "5" || value == "4" || value == "3" || value == "2" || value == "1" || value == "0" || value == ".") {
        previous_calc.innerHTML += value;
        calc += value;
    }
    if (value == "="){
        current_calc.textContent = eval(calc);
        isOperator = false;
        previous_calc.textContent = "";
        calc = "";
    }
    if (value == "AC"){
        previous_calc.textContent = "";
        calc = "";
        current_calc.textContent = "";
        
    }
    if (value == "C"){
        calc = calc.slice(0,-1);
        previous_calc.textContent = calc;
    }
    if (calc ==""){
        isOperator = false;
    }
}

every_button.forEach(button => button.addEventListener("click", () => calculate(button)))



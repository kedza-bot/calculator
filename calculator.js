// Indicates if a new line is being started
var newLine = true;
// Function to handle digit button presses
function digitBtnPressed(button){
    if (newLine === true) {
        document.getElementById("inputbox").value = button;
        newLine = false;
    }else{
        var currentValue = document.getElementById("inputbox").value;
        document.getElementById("inputbox").value = currentValue + button;
    }

}
// Function to handle the AC button press
function buttonACPressed(){
    document.getElementById("inputbox").value = 0;
    newLine = true;
}

var value1;
var currentOperator;
// Function to handle operator button presses

function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputbox").value);
    newLine = true;
}

// Function to handle the equals button press
function equalsBtnPressed() {
    var value2 = parseInt(document.getElementById("inputbox").value);
    var finaltotal;
    switch (currentOperator) {
        case "+":
            finaltotal= value1 + value2;
            break;
        case "-":
            finaltotal = value1 - value2;
            break;
        case "*":
            finaltotal = value1 * value2;
            break;
        case "/":
            finaltotal = value1 / value2;
            break;
    }
    document.getElementById("inputbox").value = finaltotal;
    value1 = 0;
    newLine = true;
}
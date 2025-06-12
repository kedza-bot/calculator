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
function buttonACPressed() {
    var inputBox = document.getElementById("inputbox");
    var currentValue = inputBox.value;

    // Remove the last character
    if (currentValue.length > 1) {
        inputBox.value = currentValue.slice(0, -1);
    } else {
        inputBox.value = "0";
        newLine = true;
    }
}


var value1;
var currentOperator;
// Function to handle operator button presses

function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputbox").value);
    newLine = true;
}
// Function to handle the percentage button press
function buttonPercentPressed() {
    var inputBox = document.getElementById("inputbox");
    var currentValue = parseFloat(inputBox.value);

    // Convert to percentage
    var percentValue = currentValue / 100;

    // Update display
    inputBox.value = percentValue;
}


// minbutton fuction
function buttonPlusMinusPressed() {
    var inputBox = document.getElementById("inputbox");
    var currentValue = inputBox.value;

    // If it's already negative, remove the minus
    if (currentValue.startsWith("-")) {
        inputBox.value = currentValue.slice(1);
    } else if (currentValue !== "0") {
        // If it's not zero, add a minus
        inputBox.value = "-" + currentValue;
    }
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

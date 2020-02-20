//Variables for display conditions
var numDisplay1 = "";
var numString1 = "";
var numDisplay2 = "";
var numString2 = "";
var operationFinal = "";
var operation = "";
var hasOperation = false;
var isDone = false;

// Assigning click event to buttons
document.getElementById("BtnClear").addEventListener("click", function() {
    ButtonClick("BtnClear")
});
document.getElementById("BtnDel").addEventListener("click", function() {
    ButtonClick("BtnDel")
});
document.getElementById("BtnSeven").addEventListener("click", function() {
    ButtonClick("BtnSeven")
});
document.getElementById("BtnEight").addEventListener("click", function() {
    ButtonClick("BtnEight")
});
document.getElementById("BtnNine").addEventListener("click", function() {
    ButtonClick("BtnNine")
});
document.getElementById("BtnDivide").addEventListener("click", function() {
    ButtonClick("BtnDivide")
});
document.getElementById("BtnFour").addEventListener("click", function() {
    ButtonClick("BtnFour")
});
document.getElementById("BtnFive").addEventListener("click", function() {
    ButtonClick("BtnFive")
});
document.getElementById("BtnSix").addEventListener("click", function() {
    ButtonClick("BtnSix")
});
document.getElementById("BtnTimes").addEventListener("click", function() {
    ButtonClick("BtnTimes")
});
document.getElementById("BtnOne").addEventListener("click", function() {
    ButtonClick("BtnOne")
});
document.getElementById("BtnTwo").addEventListener("click", function() {
    ButtonClick("BtnTwo")
});
document.getElementById("BtnThree").addEventListener("click", function() {
    ButtonClick("BtnThree")
});
document.getElementById("BtnMinus").addEventListener("click", function() {
    ButtonClick("BtnMinus")
});
document.getElementById("BtnSign").addEventListener("click", function() {
    ButtonClick("BtnSign")
});
document.getElementById("BtnZero").addEventListener("click", function() {
    ButtonClick("BtnZero")
});
document.getElementById("BtnDot").addEventListener("click", function() {
    ButtonClick("BtnDot")
});
document.getElementById("BtnPlus").addEventListener("click", function() {
    ButtonClick("BtnPlus")
});
document.getElementById("BtnEqual").addEventListener("click", function() {
    ButtonClick("BtnEqual")
});

// Function call on button click
function ButtonClick(btn) {

    var num = 0;
    var isNum = false;
    var isOperation = false;
    var isEqual = false;
    var isClear = false;
    var isSign = false;

    /*
        Check the button type:
        -Clear
        -Number
        -Operation
    */
    switch (btn) {
        case "BtnClear":
        case "BtnDel":
            isClear = true;
            break;
        case "BtnDot":
            num = ".";
            isNum = true;
            break;
        case "BtnSign":
            isSign = true;
            break;
        case "BtnOne":
            num = 1;
            isNum = true;
            break;
        case "BtnTwo":
            num = 2;
            isNum = true;
            break;
        case "BtnThree":
            num = 3;
            isNum = true;
            break;
        case "BtnFour":
            num = 4;
            isNum = true;
            break;
        case "BtnFive":
            num = 5;
            isNum = true;
            break;
        case "BtnSix":
            num = 6;
            isNum = true;
            break;
        case "BtnSeven":
            num = 7;
            isNum = true;
            break;
        case "BtnEight":
            num = 8;
            isNum = true;
            break;
        case "BtnNine":
            num = 9;
            isNum = true;
            break;
        case "BtnZero":
            num = 0;
            isNum = true;
            break;

        case "BtnDivide":
            operation = "/";
            isOperation = true;
            break;
        case "BtnTimes":
            operation = "*";
            isOperation = true;
            break;
        case "BtnMinus":
            operation = "-";
            isOperation = true;
            break;
        case "BtnPlus":
            operation = "+";
            isOperation = true;
            break;

        case "BtnEqual":
            isEqual = true;
            break;

    }

    if (isNum) {

        if (numDisplay1 == "" || isDone) {
            //Display first number
            numString1 = numString1 + num;
            document.getElementById("rowOne").innerHTML = numString1;

        } else {
            //Display second number
            numString2 = numString2 + num;
            document.getElementById("rowOne").innerHTML = numString2
        }
        isDone = false;
    } else if (isOperation) {
        if (numDisplay1 == "" && numString1 == "") {
            //Display number 0 and Operator in first line
            numDisplay1 = 0 + " " + operation;
            operationFinal = operation;
            document.getElementById("rowTwo").innerHTML = numDisplay1;
            document.getElementById("rowOne").innerHTML = "";
        } else if (numDisplay1 == "" || (numString1 != "" && numString2 == "" && hasOperation)) {
            //Display number and Operator in first line
            numDisplay1 = numString1 + " " + operation;
            document.getElementById("rowTwo").innerHTML = numDisplay1;
            document.getElementById("rowOne").innerHTML = "";
            hasOperation = true;
            operationFinal = operation;
        } else {
            //Perform operation and display result in first line then add new operation
            var result
            switch (operationFinal) {
                case "+":
                    result = Number(numString1) + Number(numString2);
                    break;
                case "/":
                    result = Number(numString1) / Number(numString2);
                    break;
                case "-":
                    result = Number(numString1) - Number(numString2);
                    break;
                case "*":
                    result = Number(numString1) * Number(numString2);
                    break;
            }

            operationFinal = operation;

            document.getElementById("rowTwo").innerHTML = result + " " + operationFinal;
            document.getElementById("rowOne").innerHTML = "";
            numString1 = result;
            numDisplay1 = result + " " + operationFinal;
            numString2 = "";
            numDisplay2 = "";
            isDone = false;

        }

        isDone = false;

    } else if (isClear) {
        if (btn == "BtnClear") {
            //Perform clear all
            document.getElementById("rowTwo").innerHTML = "";
            document.getElementById("rowOne").innerHTML = "";
            numString1 = "";
            numDisplay1 = "";
            numString2 = "";
            numDisplay2 = "";
            operation = "";
            operationFinal = "";
            isDone = false;
        } else {
            //Delete last digit of the number on first line.
            if (numString1 != "" && numString2 == "") {
                numString1 = deleteLast(numString1);
                document.getElementById("rowOne").innerHTML = numString1;
            } else if (numString2 != "") {
                numString2 = deleteLast(numString2);
                document.getElementById("rowOne").innerHTML = numString2;
            }
        }

    } else if (isSign) {
        //Perform change of positive to negative or vise versa
        if (numString1 != "" && numString2 == "") {
            numString1 = isNegative(numString1);
            document.getElementById("rowOne").innerHTML = numString1;
        } else if (numString2 != "") {
            numString2 = isNegative(numString2);
            document.getElementById("rowOne").innerHTML = numString2;
        }
    } else {
        if (numString1 != "" && numString2 != "") {
            //Perform operation to 2 numbers
            switch (operationFinal) {
                case "+":
                    result = Number(numString1) + Number(numString2);
                    break;
                case "/":
                    result = Number(numString1) / Number(numString2);
                    break;
                case "-":
                    result = Number(numString1) - Number(numString2);
                    break;
                case "*":
                    result = Number(numString1) * Number(numString2);
                    break;
            }

            document.getElementById("rowTwo").innerHTML = "";
            document.getElementById("rowOne").innerHTML = result;

            numDisplay1 = "";
            numString1 = result.toString();
            numDisplay2 = "";
            numString2 = "";
            operationFinal = "";
            operation = "";
            hasOperation = false;
            isDone = true;
        } else {
            //No Operation
            document.getElementById("rowTwo").innerHTML = "";
            document.getElementById("rowOne").innerHTML = numString1;
        }

    }

    //Function for changing from positive to negative or vice versa
    function isNegative(numStr) {
        isNegative = numStr.startsWith("-");
        if (isNegative) {
            numStr = numStr.substring(1);
        } else {
            numStr = "-" + numStr;
        }
        return numStr;
    }

    //Function fo remove last number
    function deleteLast(numStr) {

        if (numStr.length == 1) {
            return "";
        } else {
            numStr = numStr.slice(0, -1);
            return numStr;
        }
    }
}

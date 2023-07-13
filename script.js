"use strict";
// THEME
import {
    themeBtnFunction
} from "./scripts/theme-switch.js";

// DOM ELEMENTS
const view_wrapper = document.querySelector(".view")
const view = document.querySelector(".view-value");

const calcBtnWrapper = document.querySelector(".calc-buttons");
const calcBtns = document.querySelectorAll(".number");
const calcReset = document.querySelector(".calc.reset");
const calcDel = document.querySelector(".calc.del");

const calcEqual = document.querySelector(".calc.equal");
const calcPlus = document.querySelector(".calc.plus");
const calcMinus = document.querySelector(".calc.minus");
const calcDivision = document.querySelector(".calc.division");
const calcMultiplication = document.querySelector(".calc.multiplication");

// LOGICAL VALUE
let viewWalue = "";
let numbersArray = [];
let action = 0;
let actionType;
let actionArr = [];
let resultArr = [];
let result = 0;
let check_value = 0;



// FUNCTIONS
const actionFunction = () => {
    viewWalue = Number(viewWalue);
    numbersArray.push(viewWalue);
    viewWalue = "";
    actionArr.push(actionType);
    check_value = 1;

}

const resultFunction = () => {
    view.textContent = result;
    resultArr.push(result);
    actionArr.shift();
}

const EqualFunctions = (actions) => {
    viewWalue = Number(viewWalue);
    numbersArray.push(viewWalue);
    check_value = 0;
    actions.forEach(actionType => {

        if (actionType === "+") {
            if (action == 0) {
                if (numbersArray.length == 2) {
                    result = numbersArray[0] + numbersArray[1];

                    resultFunction();
                    action = 1;
                };
            } else if (action == 1) {
                if (numbersArray.length >= 3) {
                    result = numbersArray[numbersArray.length - 1] + resultArr[resultArr.length - 1];
                    resultFunction();

                };
            }
        } else if (actionType === "-") {
            if (action == 0) {
                if (numbersArray.length == 2) {
                    result = numbersArray[0] - numbersArray[1];
                    resultFunction();
                    action = 1;

                };
            } else if (action == 1) {
                if (numbersArray.length >= 3) {
                    result = resultArr[resultArr.length - 1] - numbersArray[numbersArray.length - 1];
                    resultFunction();
                };
            }

        } else if (actionType === "*") {
            if (action == 0) {
                if (numbersArray.length == 2) {
                    result = numbersArray[0] * numbersArray[1];
                    resultFunction();
                    action = 1;
                };
            } else if (action == 1) {
                if (numbersArray.length >= 3) {
                    result = resultArr[resultArr.length - 1] * numbersArray[numbersArray.length - 1];
                    resultFunction();
                }
            }
        } else if (actionType === "/") {
            if (action == 0) {
                if (numbersArray[0] == 0 || numbersArray[1] == 0) {
                    view.textContent = "Nie dziel przez 0!";
                    resetFunction()

                } else if (numbersArray.length == 2) {
                    result = numbersArray[0] / numbersArray[1];
                    resultFunction();
                    action = 1;
                };
            } else if (action == 1) {
                if (resultArr[resultArr.length - 1] == 0 || numbersArray[numbersArray.length - 1] == 0) {
                    view.textContent = "Nie dziel przez 0!";
                    //remove once function

                } else if (numbersArray.length >= 3) {
                    result = resultArr[resultArr.length - 1] / numbersArray[numbersArray.length - 1];
                    resultFunction();

                };
            }
        };

    })
}

const delFunction = () => {
    let lastResult = new String(resultArr[resultArr.length - 1]).slice(0, -1)
    if (action == 0) {
        let viewValueCopy = viewWalue.slice(0, -1);
        viewWalue = viewValueCopy
        view.textContent = viewWalue;
    } else {

        if (check_value == 0) {
            console.log(check_value)
            result = Number(lastResult);
            view.textContent = result;
            resultArr.push(result);
            console.log(resultArr);
        } else {
            let viewValueCopy = viewWalue.slice(0, -1);
            viewWalue = viewValueCopy
            view.textContent = viewWalue;
        }
    }
    if (viewWalue == "") {
        view.textContent = 0
    }
}

const resetFunction = () => {
    viewWalue = "";
    view.textContent = 0;
    numbersArray = [];
    action = 0;
    actionType;
    actionArr = [];
    resultArr = [];
    result = 0;
}




// BTN ACTIONS

// CALC BTN
calcBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        if (numbersArray.length == 0 && actionType === "-") {
            viewWalue = "-";

        }
        viewWalue += btn.innerHTML.trim();
        view.textContent = viewWalue;
        view_wrapper.scrollLeft = view_wrapper.offsetWidth;
    });
});


// ADD
calcPlus.addEventListener("click", function () {
    actionType = "+";
    if (actionArr.length >= 1) {
        EqualFunctions(actionArr)
    }
    actionFunction();
    console.log(numbersArray)

});

// SUBSTRACTION
calcMinus.addEventListener("click", function () {
    actionType = "-";
    if (actionArr.length >= 1) {
        EqualFunctions(actionArr)
    }
    if (viewWalue != "") {
        actionFunction();
    };
});

// MULTIPLICATION
calcMultiplication.addEventListener("click", function () {
    actionType = "*";
    if (actionArr.length >= 1) {
        EqualFunctions(actionArr)
    }
    actionFunction();
});

// DIVISION
calcDivision.addEventListener("click", function () {
    actionType = "/";
    if (actionArr.length >= 1) {
        EqualFunctions(actionArr)
    }
    actionFunction();
});

// EQUAL
calcEqual.addEventListener("click", function () {
    EqualFunctions(actionArr)
    actionArr = []
});


calcReset.addEventListener("click", resetFunction)

calcDel.addEventListener("click", delFunction)

// MAIN FUNCTION
const main = () => {
    themeBtnFunction();

};

main()
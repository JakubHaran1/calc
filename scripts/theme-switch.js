"use strict";
const themeWrapper = document.querySelector(".theme-wrapper");
let position = 1;
const CalculatorWrapper = document.querySelector(".calculator-wrapper")
const mainHeader = document.querySelector(".main-header")
const themeHeader = document.querySelector(".theme-header");
const themeOptions = document.querySelectorAll(".theme-options")
const circleWrapper = document.querySelector(".button");
const circleBtn = document.querySelector(".circle");
const view = document.querySelector(".view-value");
const calcBtnWrapper = document.querySelector(".calc-buttons");
const calcBtns = document.querySelectorAll(".calc");
const calcReset = document.querySelector(".calc.reset");

const calcEqual = document.querySelector(".calc.equal");


export function themeBtnFunction() {
    // switch  
    const switcher = (option, theme) => {
        const switching = (theme) => {
            CalculatorWrapper.classList.add(theme);
            mainHeader.classList.add(theme);
            themeHeader.classList.add(theme);
            view.classList.add(theme);
            circleWrapper.classList.add(theme);
            circleBtn.classList.add(theme);
            calcBtnWrapper.classList.add(theme);
            calcReset.classList.add(theme);


            calcEqual.classList.add(theme);
            for (let i = 0; i < themeOptions.length; i++) {
                themeOptions[i].classList.add(theme);
                calcBtns[i].classList.add(theme);
            }
            for (let i = 0; i < calcBtns.length; i++) {
                calcBtns[i].classList.add(theme);
            }
        };
        const removing = (theme) => {
            CalculatorWrapper.classList.remove(theme);
            mainHeader.classList.remove(theme);
            themeHeader.classList.remove(theme);
            view.classList.remove(theme);
            circleWrapper.classList.remove(theme);
            circleBtn.classList.remove(theme);
            calcBtnWrapper.classList.remove(theme);
            calcReset.classList.remove(theme);

            calcEqual.classList.remove(theme);
            for (let i = 0; i < themeOptions.length; i++) {
                themeOptions[i].classList.remove(theme);
                calcBtns[i].classList.remove(theme);
            }
            for (let i = 0; i < calcBtns.length; i++) {
                calcBtns[i].classList.remove(theme);
            }
        };
        if (option == "s") {
            switching(theme);
        } else {
            removing(theme);
        }
    };
    // switching mechanism
    const switchTheme = () => {
        position++;

        switch (position) {
            case 1:
                switcher("r", "third-theme");
                switcher("s", "first-theme");
                circleBtn.classList.remove("third-option");
                circleBtn.classList.add("first-option");
                break;
            case 2:
                switcher("r", "first-theme");
                switcher("s", "second-theme");
                circleBtn.classList.remove("first-option");
                circleBtn.classList.add("second-option");
                break;
            case 3:
                switcher("r", "second-theme");
                switcher("s", "third-theme");
                circleBtn.classList.remove("second-option");
                circleBtn.classList.add("third-option");
                position = 0;
                break;
        }
    };
    // restart mechanim
    themeWrapper.addEventListener("click", function () {
        if (position < 3) {
            switchTheme()
        } else {
            switchTheme()
        }
    });
};
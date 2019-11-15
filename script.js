
let displayer = document.querySelector("#display");
let displayerAbove = document.querySelector("#displayAbove")

let calculator = document.querySelector(".calculator");
let allButtons = document.querySelectorAll("button");

let input = "";
let numberA = "";
let numberB = "";
let numberZ = "";


display();





function display() {

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", event => {
      input = allButtons[i].value;


      if (input === "+") {
        operatorSigns(input);

      } else if (input === "-") {
        operatorSigns(input);

      } else if (input === "x") {
        operatorSigns(input);

      } else if (input === "/") {
        operatorSigns(input);

      } else if (input === "AC") {
        clearDisplay();
        displayerAbove.innerHTML = ""
        numberA = "";
        numberB = "";
        numberZ = "";


      } else if (input === "=") 
        equals();     
      
      else {
        (displayer.append(allButtons[i].value))
        if (input === "AC") {
          clearDisplay();
        }
        numberZ += allButtons[i].value;

      }

    })
  }


}



function equals(){

    if (numberZ.includes("+")) {
      numberB = parseInt(numberZ.replace("+", ""));
      clearDisplay();
      displayer.append(add(numberA, numberB));


    } else if (numberZ.includes("-")) {
      numberB = parseInt(numberZ.replace("-", ""));
      clearDisplay();
      displayer.append(subtract(numberA, numberB));

    }

    else if (numberZ.includes("x")) {
      numberB = parseInt(numberZ.replace("x", ""));
      clearDisplay();
      displayer.append(multiply(numberA, numberB));

    } else {
      (numberZ.includes("/")) 
      numberB = parseInt(numberZ.replace("/", ""));
      clearDisplay();
      displayer.append(divide(numberA, numberB));

    }

  }



function operatorSigns(input){

    numberA = parseInt(numberZ);
    numberZ = input;
    displayerAbove.append(numberA);
    clearDisplay();
  }



function clearDisplay() {
  displayer.innerHTML = "";

}


//math operators
function add(numberA, numberB) {
  return numberA + numberB;
}

function subtract(numberA, numberB) {
  return numberA - numberB;
}

function multiply(numberA, numberB) {
  return numberA * numberB;
}

function divide(numberA, numberB) {
  return numberA / numberB;
}
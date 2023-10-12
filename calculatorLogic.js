// Section to add the required variable for the calculator
let number1;
let number2;
let operatorType;
let result;
const calculationArray=[];

// Function to: Add Numbers
let addNumbers=(number1,number2)=>
{
    result=number1+number2;
    console.log(result);

}


// Function to: subtract Numbers


let subtract=(number1,number2)=>
{
    result=number1-number2;
    console.log(result);

}


// Function to: multiply Numbers

let multiply=(number1,number2)=>
{
    result=number1*number2;
    console.log(result);
}


// Function to: divide Numbers

// function divide(number1,number2)
// {
    
// }

let divide =(number1,number2) =>
{
    result=number1/number2;
    console.log(result);

}


// Operator Function to call up each operator
function operate(number1,operatorType,number2,)
{
if (operatorType==="+")
{
    console.log("Plus operator")
    addNumbers(number1,number2);
}

else if(operatorType==="-")
{
    console.log("Minus Operator");
    subtract(number1,number2);
}

else if (operatorType==="*")
{
    console.log("Multiplication");
    multiply(number1,number2);

}

else if (operatorType==="/")
{
console.log("Division")
divide(number1,number2);
}
}

//Add Click Event listeners to all the buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

  button.addEventListener('click', () => {

    testing(); 
    
  });

  function testing ()
  {
    const calculatorDisplay=document.querySelector('#displayOutput');
    calculationArray[0]=Number(button.id);
    calculationArray[1]=Number(button.id);
    calculationArray[2]=Number(button.id);
    calculatorDisplay.textContent=calculationArray; // This code will show array in displayout


    number1=Number(calculationArray[0]);
    operatorType=Number(calculationArray[1]);
    number2=Number(calculationArray[2]);
    

    console.log("Number Entered is: "+operatorType+"Type is "+ typeof(operatorType));
    operate(number1,operatorType,number2);

  }

});
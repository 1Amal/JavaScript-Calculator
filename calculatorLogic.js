/*
Task List / Logic for the project

Pseudo code
* calculationArray[1] = First Number
* calculationArray[2] = Second number 
* calculationArray[3] = Operator

*User enters the first number: User can pause and keep continuing to enter the number, this process only stops
when the user enters operators (+  -  *  /  =  CLEAR). If = is entered currently entered number is shown, if user enters CLEAR then the Array and display is cleared. Currently entered number is shown on display in real time and saved to calculationArray[1]

* User enters a operator (+  -  *  /) then first entered number is saved to an calculationArray[1] and program keeps listening to the entered operator, If the user enters few operators only the last entered operator is saved in calculationArray[3], then programs moves to listen to the second number. First Number and operator is shown on display in real time

*User enters the Second number: User can pause and keep continuing to enter the number, this process only stops
when the user enters operators (+  -  *  /  =  CLEAR). If = is entered Second number is saved to calculationArray[2] 
based on saved operator on array[3] required arithmetic function is called and array[1] and array[2]is passed to relevant arithmetic function, if user enters CLEAR then the Array and display is cleared. Currently entered calculation is shown on display in real time and saved to oncalculationArray[4]. Whole oncalculationArray is shown on the display


*/
// Section to add the required variable for the calculator
let number1=null;
let number2=null;
let operatorType;
let result;
const calculationArray=[]; // This array is used to capture the numbers and operator from the user input buttons.
let a=1;

// Following function will clear the calculationArray
function calculationArrayClear ()
    {
        calculationArray.length=0;
    }

// Following function will set the number 1 and number 2 values to Null

function numberNullSet ()
    {
        number1=null;
        number2=null;
    }

// Following function will update the calculator display
function displayUpdate (displayValue)
      {
        const calculatorDisplay=document.querySelector('#displayOutput');
        

        calculatorDisplay.textContent=displayValue; // This code will show array in displayout
               
      }

// *User enters the first number: User can pause and keep continuing to enter the number, this process only stops
// when the user enters operators (+  -  *  /  =  CLEAR). If = is entered currently entered number is shown, if user enters CLEAR then the Array and display is cleared. Currently entered number is shown on display in real time and saved to calculationArray[1]
function buttonCapture(){
    //Add Click Event listeners to all the buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
    
      button.addEventListener('click', () => {

        console.log("number1 value" +number1);
        console.log("number2 value" +number2);

        if (button.id==="0"
            ||button.id==="1"
            ||button.id==="2"
            ||button.id==="3"
            ||button.id==="4"
            ||button.id==="5"
            ||button.id==="6"
            ||button.id==="7"
            ||button.id==="8"
            ||button.id==="9"
            )
                {
                    console.log("Number Entered")
                    calculationArray.push(button.id);
        console.log(calculationArray);
        console.log("Length of the CalculationArray is: "+ calculationArray.length);
        
                }

        else if (button.id==="/"
                ||button.id==="*"
                ||button.id==="-"
                ||button.id==="+"

            ) 
                {
                    

                    operatorType=button.id;
                    console.log("Operator Entered " + operatorType);



                    if (number1===null)
                    {
                        number1=calculationArray.join("") // This will join the array together to a single string
                        number1=parseInt(number1,10); // This will convert string to a number
                        console.log("Number 1 Details: "+ number1+ "Type is" + typeof(number1));
                        console.log(calculationArrayClear());
                        displayUpdate(number1);

                       
                    }

                    else if (number2===null)
                    {
                        number2=calculationArray.join("") // This will join the array together to a single string
                        number2=parseInt(number2,10); // This will convert string to a number
                        console.log("Number 2 Details: "+ number2+ "Type is" + typeof(number2));
                        console.log(calculationArrayClear());
                        displayUpdate(number2);
                    }

                    else {
                        console.log("Both Numbers have values")
                        operate(number1,operatorType,number2);

                    }
  


                }
        
        else if(button.id==="=")
                {
                    console.log("Equal Operator Entered")


                }
        
        else if (button.id==="clear")
                {
                    console.log("Clear Button pressed")
                    calculationArray.length=0;
                    console.log(calculationArray);
                }
        
        
       

        // displayUpdate();


        
      });
    
    
    });
    }

    // Operator Function to call up each operator
function operate(number1,operatorType,number2,)
{

    calculationArray.length=0;
    

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
    

// Function to: Add Numbers
let addNumbers=(number1,number2)=>
{
    result=number1+number2;
    console.log(result);
    displayUpdate(result);
    numberNullSet();


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



buttonCapture();




// Code to be checked and removed
                  // console.log(calculationArray);

                    // for (i=0;i<calculationArray.length;i++)
                    // {
                    //     number1=+calculationArray[i];
                    //     console.log("Number1 is: " + number1);
                    //     console.log(typeof(number1));

                    // }



        // for (let i=0; i<3; i++){
        //     // console.log(i);
        //     calculationArray[i]=Number(button.id);
        //     console.log(calculationArray[i]);
        // }

        // console.log("Array 1= "+calculationArray[1] +"  Array 2= " +calculationArray[2] + "  Array 3= "+ calculationArray[3])

         // Number(button.id);
        // if (button.id==="+")
        // {
        //     console.log("It is a +");

        // }

        // else if (button.id==="+"){
        //     console.log("Not a Number");
        // }
    
        // if (a<=3){
        //     calculationArray[a]=Number(button.id)
        //     a++;
        // }

        // else if (a==4)
        // {
        //     a=0;
        // }
// calculationArray Testing code
        // calculationArray[1]=34;
        // calculationArray[2]=67;
        // calculationArray[3]="+";
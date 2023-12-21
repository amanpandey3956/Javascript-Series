function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}

sayMyName()

//**************************************************************

function addTwoNumbers(number1, number2){

 console.log(number1 + number2);
}
addTwoNumbers(3, 5) // its called function call and gives o/p - 8

//*******************************************************************

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result // we need to return the result bcoz without it we dont get o/p -8 it shows undefined instead that
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);

// *****************************************************************************

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage("hitesh")) // it will overwrite hitesh over sam 

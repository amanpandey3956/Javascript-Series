// This and Arrow Function in detail and without Object its not possible to talk hence we take one object named 'user'

const user = {
    username: "aman",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage() // o/p is - aman , welcome to website
user.username = "sam"
user.welcomeMessage() // sam , welcome to website
console.log(this); // o/p is - {}
// what we learned is (this) always talks about current context or current values

//*****************************************************************************************

function chai(){
     let username = "hitesh"
     console.log(this.username);
 }

chai() // this gives o/p - undefined bcoz this context doesnt work in function it only works in object

const chai = function () {
     let username = "hitesh"
     console.log(this.username);
 }

chai() // // this will also gives o/p - undefined bcoz this context doesnt work in function it only works in object

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

chai() // // this will again gives o/p - undefined bcoz this context doesnt work in arrow also function it only works in object

// ****************************************************************************************

// *************lets talk in detail about the Arrow function*******************************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } this is how we can declare arrow function

// const addTwo = (num1, num2) =>  num1 + num2 (In this method of declaration we dont use return) 

// Note - parenthesis() use kiya toh return nhi likhna pdta but curly braces{} use kiya toh return likhna pdta hai

// const addTwo = (num1, num2) => ( num1 + num2 ) (same method like previous one bas parenthesis() me wrap kiya hai taki confusion na ho)

const addTwo = (num1, num2) => ({username: "hitesh"}) // this is how we can use object in arrow function and its o/p is - username: "hitesh"

console.log(addTwo(3, 4))

//*****************************************************************************************

const myArray = [2, 5, 3, 7, 8]
myArray.forEach() // will talk about it later in loops 

//*****************************************************************************************
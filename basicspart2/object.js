// object literals

const mySym = Symbol("key1") // for accessing this symbol in below object

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // for writing symbol of outside object we can use this syntax but if we did not use [] this square bracket it gives the type of mySym as a string not a symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// below are some correct and unique method to access elements of object name [JsUser]

console.log(JsUser.email) // common method to access the object 

console.log(JsUser["email"]) // another and good method to access the object 

console.log(JsUser["full name"]) // same method to access the object 
// "full name": "Hitesh Choudhary", to access this key-value pair we cannot be able to use any other method except this one 

console.log(JsUser[mySym]) // we cannot give strign [" "] like this for accessing the symbol value of object 

// ****************************************************************************

JsUser.email = "hitesh@chatgpt.com" // In this way we can change the value of object 
Object.freeze(JsUser) // we can freeze the value of object like this so further it cannot be changed 
JsUser.email = "hitesh@microsoft.com" // it doesn't have any effect bcoz it's already freezed 
console.log(JsUser); // for printing JsUser object o/p

// ****************************************************************************
// so now we are going to add function in object

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // to refrence same object value we have used {this.name}
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
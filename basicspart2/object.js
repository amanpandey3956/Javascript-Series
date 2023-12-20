// object literals

const mySym = Symbol("key1") // for accessing this symbol in below object

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // for writing symbol of outside object we can use this syntax
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

// ************************************************************

JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
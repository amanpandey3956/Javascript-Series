// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // here semicolon is must to close context if u dont give semicolon at end it gives error if you goes for another iife 

// ****************************************************************************************

// now we use arrow function in iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('aman') // argument hai just like this chai('aman')
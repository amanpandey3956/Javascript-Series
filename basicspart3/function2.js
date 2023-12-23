function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,5000));

//******************************************************************************
// how to use object inside function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
}) // you can directly use object inside call like this

// how to use Array inside function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); // you can directly use array inside call like this

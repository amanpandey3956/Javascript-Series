// Detailed discussion on (Reduce In JS)

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
     console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
}, 0)

console.log(myTotal);

/* o/p - 
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
 mytotal - 6   */

// now same example in arrow function method

//const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);

// ****************************************************************************************

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

//*****************************************************************************************
// Global and local scopes

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// Scope level and mini Hoisting 

function one(){
    const username = "Aman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Aman"
    if (username === "Aman") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // yes u can access 'addone' before its function initialization

function addone(num){
    return num + 1
}



addTwo(5) // cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
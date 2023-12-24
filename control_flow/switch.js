//All about switch case statement
// below is sample format of switch case

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// shift + altkey + downarrow = duplicate of selected text

const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:console.log("default case match");
        break;
}

/*const month = "march" // reverse of upper example if month is string instead of number

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}*/


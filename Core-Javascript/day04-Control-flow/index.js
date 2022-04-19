// if else statement
// if(condition){

// }else{

// }
// let rupees = 100

// if (rupees == 100) {
//     console.log("you can buy the coldrink")
// } else {
//     console.log("you can not buy the coldrink")
// }

// let rain = "raining"

// if(rain == "rainsding"){
//     console.log("barish ho rahi hai chata kholo")
// } else{
//     console.log("barish  nahi ho rahi hai chata mat kholo")
// }


// let userInput = prompt("enter your age")
// let result = document.queryS"elector("#result")"
// if (userInput >= 18) {
//     console.log("you are elegible to vote")
//     result.innerHTML = "you are elegible to vote"
// } else {
//     console.log("you are not elegible to vote")
//     result.innerHTML = "you are not elegible to vote"
// }

// if else if
// let x = 12
// if (x < 8) {
//     console.log("you are less then 8")
// } else if (x > 8) {
//     console.log("you are grater then 8")
// } else if (x >= 8) {
//     console.log("you are les then or equal 8")
// } else {
//     console.log("you are  out of range")
// }

// if Else nesting

// if (condition) {

//     if (condition) {

//         if (condition) {

//             if (condition) {

//             } else {

//             }
//         } else {

//         }
//     } else {

//     }
// } else {

// }




// ternary operator

// condition ? { } : { }

// let x = 5;
// x === 54 ? console.log("x == 5") : console.log("x is not equal to  5")


let userInput = prompt("Enter your name")
switch (userInput) {
    case "juned": {
        console.log("you are a web developer")
        break;
    }
    case "adil": {
        console.log("you are a backend developer")
        break;
    }
    case "naushad": {
        console.log("you are a frontend developer")
        break;
    }


    default: {
        console.log("you are nothing ")
    }
}
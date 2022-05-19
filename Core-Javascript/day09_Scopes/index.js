// var x = 25   // global variable

// console.log(x)

// // var y = "helllo"
// function printNum() {
//     var y = 4    // local variable scoped
//     console.log(y)
//     x = 13346
//     console.log(x)
// }

// printNum()
// console.log(y)



// Function And blocked scope

// FunctionL scope
var x = 25
function greet() {
  var  x = "hello"
    console.log(x)
}

console.log(x)

greet()

console.log(x)

// Var key is not blocked scope
// var x = 25
// if (true) {
//     var x = "hello"
//     console.log(x)
// }

// console.log(x)

// let and const are functional and blocked scope


// let x = 25
// if (true) {
//     let x = "hello"
//     console.log(x)
// }

// console.log(x)

// let y = 2
// function Change(){
//     let y = "hello"
//     console.log(y)

// }

// console.log(y)
// Change()
console.log(y)



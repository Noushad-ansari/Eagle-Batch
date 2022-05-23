// function sum(a,b){
//     // console.log(a+b)
//     return a+b
// }
// function sub(a,b){
//     // console.log(a+b)
//     return a-b
// }
// function mul(a,b){
//     // console.log(a+b)
//     return a*b
// }

// // let result = sum(2,5)
// // console.log(result)
// // let result2 = sub(25,5)
// // console.log(result2)

// // Callback function is a function that is passed as a argument inside another function

// function cal(cb) {
//     console.log(cb(5,4))
// }


// // cal(function () {
// //     console.log("hello good morning")
// // })

// cal(sum)
// cal(sub)
// cal(mul)


function register(cb) {
    setTimeout(() => {
        console.log("register")
        cb()
    }, 3000)

}
function login(cb) {
    setTimeout(() => {
        console.log("login")
        cb()
    }, 1000)
}
function display() {
    setTimeout(() => {
        console.log("display")
    }, 200)
}

register(function () {
    login(function () {
        display()
    })
})

// display()
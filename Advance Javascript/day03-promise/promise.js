
//  let juned = 1000
// let myPromise = new Promise((resolve, reject) => {
//     let john = "john"
//     if (juned === 1000) {
//         resolve("we will have party tomorrow")
//     } else {

//         reject("sorry we dont have sfficient balnace")
//     }
// })

// myPromise
//     .then((x) => { console.log(x) })
//     .catch((error) => { console.log(error) })

// function register() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log("register")
//             res()
//             // rej("something went wrong in register")

//         }, 1000)
//     })
// }


async function sayHello() {
    let res = await new Promise((res, rej) => {
        setTimeout(() => {
            // console.log("register")
            res("Registration Done")
            // rej("something went wrong in register")

        }, 2000)
    })
    console.log(res)
    let loginRes = await new Promise((res, rej) => {
        setTimeout(() => {
            // console.log("login")
            res("login successful")
            // res()
        }, 500)
    })
    console.log(loginRes)
    console.log("byee")


}
sayHello()


async function users() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let userData = await res.json()
        console.log(userData)
    } catch (err) {
        console.log(err + " something went wrong")
    }
    // fetch('https://jsonplsaceholder.typicode.com/users')
    // .then((res)=>{return res.json()})
    // .then((data)=>console.log(data))
    // .catch((err=>console.log(err)))
throw "sab kam bigad dia";
}
users()
.then(()=>console.log("we have got users"))
.catch(err=>console.log(err + "hello bhaiya"))



//******* */ scop chaining and lexical scop****

// var name = "x"

// function greet() {
//     // var name = "y"
//    return function person() {
//         console.log(name)
//     }
// }

// greet()()
// name = "x"

// console.log(name)

// console.log(john)
// console.log(juned)


// fetch(url).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})

// Promise((res,reject)=>{
//     if(url = "correct"){
//         resolve("successfull")
//     }else{
//         reject("something went wrong")
//     }
// }).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})


// function fetch(appEndPoint){
// return new Promise((res,reject)=>{
//     if(url = "correct"){
//         resolve()
//     }else{
//         reject("something went wrong")
//     }
// })
// }
// let myPromise = new Promise((resolve, reject) => {
//     let rain = "yes"
//     if (rain === "not") {
//         resolve("it is raining i will not go to school")
//     } else {

//         reject("NOt raining so i will go to school")
//     }
// })


// myPromise.then((data) => console.log(data))
// .catch((err) => console.log(err))

// async function authenticate(params) {
//     await setTimeout(() => {
//         console.log("hello")
//     }, 3000)
//     await setTimeout(() => {
//         console.log("bye")
//     }, 2000)
//     throw "something went wron"
// }

// authenticate()
//     .then((data) => console.log(data))
//     .catch((err)=>console.log("hjello" +err))


function register() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("register")
            res()
            // rej("something went wrong in register")

        }, 1000)
    })
    // setTimeout(() => {
    //     console.log("register")
    // },5000)

    // console.log("register")
}
function login() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("login")
            rej("login error")
            // res()
        }, 1000)
    })
    // console.log("login")
}
function display() {
    setTimeout(() => {
        console.log("display")
    }, 1000)
    // console.log("display")
}

async function authenctication() {
    try {
        await register()
        await login()
        await display()
    } catch (err) {
        console.log("try-catch:" + err)
    }
    throw "SOmething went wrong in authentication"
    // .finally(()=>console.log("finall Authentication executed "))

}

authenctication()
    .then((data) => console.log("hello"))
    .catch(err => console.log("Authenctication Error:"+err))
    .finally(()=>console.log("finall Authentication executed "))



// function abc(){}
// register()
//     .then(login)
//     .then(display)
//     .catch((err)=>console.log(err))





// register()
// login()
// display()
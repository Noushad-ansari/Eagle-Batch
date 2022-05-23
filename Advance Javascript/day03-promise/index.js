let myPromise = new Promise((resolve,reject)=>{
    let test = "monday"
    if(test == "sunday"){
        resolve("yes i am giving test")
    }else{
        reject("test cancelled")
    }

})


myPromise
.then((data)=>console.log(data))
.catch((err)=>console.log(err))



// function fetcheData() {
//     const xhttp = new XMLHttpRequest();

//     // xhttp.onload = function () {
//     //     console.log(xhttp.responseText)
//     // }
//     xhttp.onreadystatechange = function () {
//         let userName = document.querySelector("#userName")
//         if (this.readyState === 0) {
//             console.log(" request not initialized")
//         } else if (this.readyState === 1) {
//             console.log("server connection established")

//         } else if (this.readyState === 3) {
//             console.log("processing request")

//         }
//         if (this.readyState === 4 && this.status === 200) {
//             // console.log(this.responseText)
//             let fetchedData = JSON.parse(this.responseText)
//             // console.log(fetchedData[0].name,fetchedData[0].email,fetchedData[0].address.city)

//             fetchedData.forEach(user => {
//                 let img =  document.createElement("img")
//                 img.src = `https://robohash.org/${user.id}?set=set4`
//             console.log(user.id,user.name,user.email)
//             let h2 =  document.createElement("h2")
//             h2.innerText = user.name
           
//             userName.appendChild(img)
//             userName.appendChild(h2)
           
//            });
           
//         }
//     }

//     xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//     xhttp.send()
// }
let p =  document.querySelector("#err")
function fetcheData() {
   
   fetch("https://jsonplacesholder.typicode.com/users")
   .then((res)=>res.json())
   .then((data)=>console.log(data))
   .catch(err=>{
   p.innerHTML = `Something went Wrong ${err}`
setTimeout(()=>{
    p.innerHTML = ''
},2000)
   })
}
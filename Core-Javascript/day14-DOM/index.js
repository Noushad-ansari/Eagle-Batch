
// let heading = document.getElementById("heading")
// console.log(heading.innerHTML)
// console.log(heading.innerText)
// console.log(heading.textContent)
// heading.innerHTML = "bye"

// let heading = document.getElementsByClassName("heading")
// console.log(heading[2].innerHTML)

// for (let i = 0; i < heading.length; i++) {
//  console.log(heading[i].innerHTML)
// }
// heading.innerHTML
// let heading = document.getElementsByTagName("h1")

// for (let i = 0; i < heading.length; i++) {
//  console.log(heading)
//  console.log(heading[i].innerHTML)
// }



// function changeContent() {
//   let main = document.getElementById("main")
//   main.innerHTML = "React"
//   main.style.color = "red"
//   main.style.fontSize = "50px"
// }

// querySelector || CSS selector
// let  heading =  document.querySelector("#heading")

// let heading = document.querySelectorAll(".heading")
// console.log(heading[2].innerHTML)
// // document.querySelector("h1")

// for (let i = 0; i < heading.length; i++) {
// console.log(heading[i].innerHTML)

// }



// function changeImage() {
//   let img =document.querySelector("#img")
// // img.src = "https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

// img.setAttribute("src","https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80")

// }





// function addElement(){
//   let div = document.createElement("div")
//   div.textContent = "bye"
//   div.id = "main"
//   div.className = "hello"
//   console.log(div)

//   // div.style.fontSize = "50px"
//   // div.style.color = "red"

//   div.style.cssText = "font-size : 50px; background:teal; color:red;"

//   document.body.appendChild(div)

//   let heading=document.querySelector("#heading")
//   document.body.removeChild(heading)
// }

// function replaceElement() {
//   let heading = document.querySelector("#heading")

//   let p = document.createElement("p")
//   p.textContent = "hello i am learning  js"
//   p.id = "para"
//   p.className = "para"
//   p.style.cssText = "color:teal; font-size : 50px; background : grey;"

//   document.body.replaceChild(p,heading)
// }

// function replaceElement () {
//   let heading = document.querySelector("#heading")

//   let p = document.createElement("p")
//   p.textContent = "hello i am learning  js"
//   p.id = "para"
//   p.className = "para"
//   p.style.cssText = "color:teal; font-size : 50px; background : grey;"

//   document.body.replaceChild(p,heading)
// }

// let btn = document.getElementById("btn")

// btn.onclick = replaceElement


// let btn = document.querySelector("#btn")

// function greet () {
//   console.log("hello")
//   };

// btn.onclick = greet

// let btn = document.querySelector("#btn")

// function greet(){
//   console.log("byee")
//   let btn2 = document.querySelector("#btn2")
//   btn2.addEventListener("mousemove",function(){
//     console.log("btn2 ka mouse move event")
//     let btn =  document.getElementById("btn")
//     btn.removeEventListener("click",greet)
//   })
// }

// // function hello(params) {
// //   console.log("hello")
// // }

// btn.addEventListener("click", greet)

//
// btn.addEventListener("mousemove" , hello)


// 

// btn.addEventListener("click",function  () {
//     let heading = document.querySelector("#heading")
  
//     let p = document.createElement("p")
//     p.textContent = "hello i am learning  js"
//     p.id = "para"
//     p.className = "para"
//     p.style.cssText = "color:teal; font-size : 50px; background : grey;"
  
//     document.body.replaceChild(p,heading)
//   } )


// let note = document.querySelector('.note');
// // note.parentNode.innerHTML = "hello"
// note.parentNode.style.fontSize = "50px"
// console.log();

// let input = document.querySelector("#input")
// input.addEventListener("change",(event)=>{
//   console.log(event.target.value)
// })

// let addTask = document.querySelector("#addTask")

// addTask.addEventListener("click",function () {

 
//   let input = document.querySelector("#input")
//   let inputValue = input.value
//   console.log(inputValue)

//   let ul = document.querySelector("#list")

//   let li = document.createElement("li")
//   li.textContent = inputValue

//   ul.appendChild(li)
//   input.value = ''

//   let update = document.createElement("button")
//   update.textContent = "UPDATE"
// update.style.cssText = "margin-left : 20px; background:green"

//   let deletebtn = document.createElement("button")
//   deletebtn.textContent = "DELETE"
//   deletebtn.style.cssText = "margin-left : 20px; background:red"

//   li.appendChild(update)
//   li.appendChild(deletebtn)
// })


// let btn =  document.querySelector("#btn")
// btn.onclick = function(){
  //   alert("hello")
  // }


  let btn =  document.querySelector("#btn")

  btn.addEventListener("click", function(){
    // alert("add Event listener")
    let heading =  document.querySelector("#heading")
    heading.innerHTML = '<span> hello </span>'
    console.log(heading)
    // heading.style.cssText = "background : black; color:white;"; 
    heading.classList.toggle("dark")

  })

  function show () {
    alert("hello double click")
  }
  btn.addEventListener("dblclick", show)
btn.removeEventListener("dblclick", show)


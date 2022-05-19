let showColor = document.querySelector("#myButton")


showColor.addEventListener("click",function () {
 box1()
 box2()
 box3()
 box4()
})

function box1() {
    let box1 = document.querySelector("#box1")
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)
    console.log(r,g,b)
    // box1.style.backgroundColor = "rgb(14, 217, 121)"
    box1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    box1.innerText =  `rgb(${r}, ${g}, ${b})`
    box1.style.color = "white"
}
function box2() {
    let box2 = document.querySelector("#box2")
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)
    console.log(r,g,b)
    // box1.style.backgroundColor = "rgb(14, 217, 121)"
    box2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    box2.innerText =  `rgb(${r}, ${g}, ${b})`
    box2.style.color = "white"
}
function box3() {
    let box3 = document.querySelector("#box3")
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)
    console.log(r,g,b)
    // box1.style.backgroundColor = "rgb(14, 217, 121)"
    box3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    box3.innerText =  `rgb(${r}, ${g}, ${b})`
    box3.style.color = "white"
}
function box4() {
    let box4 = document.querySelector("#box4")
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)
    console.log(r,g,b)
    // box1.style.backgroundColor = "rgb(14, 217, 121)"
    box4.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    box4.innerText =  `rgb(${r}, ${g}, ${b})`
    box4.style.color = "white"
}
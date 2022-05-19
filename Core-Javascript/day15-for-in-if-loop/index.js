
// for in loop
let age = [25,14,32,65,4,5]



// for(let i = 0; i<age.length; i++){
//     console.log(age[i])
// }

for (let x in age) {
    // text += person[x];
    console.log(x)
    console.log(age[x])
  }
  
  const person = {fname:"John", lname:"Doe", age:25};
  
  for (let x in person) {
      // text += person[x];
      console.log(x)
      console.log(person[x])
    }


    // for of loop

    const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
for (let x of person) {
 console.log(x)
}
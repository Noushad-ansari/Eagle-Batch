 export let message = 'ES6 Modules';
console.log("hello sum file")


export function sum(a,b) {
   
  let  c = a + b
    console.log(c)
    return c
}
// export default message

 export let obj = {
    name :"john",
    age : 25
}

// export default {message,sum,obj}
// let person = {
//     name:"john",
//     age: 25,
//     gender : "male",
//     // getName : function () {
//     //     console.log(this.name)
//     // }
//     getName(userName){
//             console.log(userName)
//     }
// }
// // console.log(person)
// // person.getName("john")

// class Car {
//     constructor(carName, carYear,carColor) {
//       this.name = carName;
//       this.year = carYear;
//       this.color = carColor;
//       this.carModel = function (modal) {
//         console.log(modal)
//       }
//     }

//  static  start(){
//         console.log("car is starting")
//     }


//   }

// let ford = new Car("ford",2009,"black")
// let swift = new Car("swift",2008,"white")

// swift.carModel("vdi")

// Car.start()
// // console.log(ford)
// // console.log(swift)


// Class Inheritance

class Parent {
  constructor(pName, pAge, color) {
    this.name = pName
    this.age = pAge
    this.color = color
  }
  showName() {
    console.log(this.name)
  }
}

// let p1 = new Parent("john",25,"fair")

class Child extends Parent {
  constructor(pName,pAge,color, cName, cAge) {
    super(pName,pAge,color);
    this.cName = cName
    this.cAge = cAge
  }
}


let child1 = new Child("ramlal",45,"fair","john",5)

console.log(child1)


console.log(p1)
p1.showName()


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// let returnedValue = myCar.show()
// console.log(returnedValue)
// // document.getElementById("demo").innerHTML = myCar.show();
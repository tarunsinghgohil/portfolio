// let num = [1,2,3,4,5,78]

// let result = num.reduce((acc, curr) => {return acc + curr})
// console.log(result)


// objects
// let student = ["name1", "name2", "name3"]
// let stu1 = student[2]
// console.log(stu1)

// let student1 = [{
//     name1 : "john",
//     age: 23,
//     country: "usa"
// },{
//     name2 : "smith",
//     age: 25,
//     country: "uk"   
// }]
// console.log(student1.country)

// let num = [4,5,6,2,7,3]
// let result = num.sort()
// console.log(result)
// let result1 = num.reverse()
// console.log(result1)
// let result2 = num.splice(0,3)
// console.log(result2)
// console.log(num)


// let student = {}
// student.name = "john"
// student.age = 23
// student.age = 24
// console.log(student)

// let obj = {
//     title: "list of students" ,
//     std1: {
//         name1: "john",
//         age: 23,
//         country: "usa"
//     },
//     std2: {
//         name2: "smith",
//         age: 25,
//         country: "uk"
//     },
//     std3: {
//         name3: "jane",
//         age: 22,
//     }
// }

// console.log(obj)



// let obj = {
//     fname: "john",
//     lname: "doe",

//     fullname: function() {
//         return this.fname + " " + this.lname
// }
// }
// console.log(obj.fullname()) 

// let obj = {
//     name: "john",
//     lname: "doe",
//     fullname : function(){
//     return this.name + " " + this.lname
// }}
// console.log(obj.fullname())


// let name = {
//     fname: "tarun",
//     lname: "singh",
//     fullname : function() {
//         return this.lname + this.fname
//     }
// }
// let result = name.fullname()
// console.log(result)


// let obj = {
//     fname: "john",
//     lname: "doe",
//     fullname : function() {
//         return (obj.fname + " " + obj.lname)
//  }
// }
// console.log(obj.fullname())
// console.log(typeof obj.fname)


// let obj = {
//     fname: "john",
//     lname: "doe",
//     fullname : function() {
//         return (this)
//     }
// }
// console.log(obj.fullname())
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// object cloning

// let student2 = obj
// console.log(student2)

// student2.fname = "smith"
// student2.lname = "jane"
// shallow copy
// console.log(student2)
// console.log(obj)

// deep copy
// let student3 = {...obj}
// student3.fname = "harry"

// console.log(student3)
// console.log(obj)

// let obj1 = {
//     name: "john",
//     age: 23,

//     studentone: {
//         fname: "smith",
//         lname: "jane"
//     }

// }
// console.log(obj1)

// obj1.studentone.fname = "harry"
// console.log(obj1)

// let obj2 = structuredClone(obj1)
// console.log(obj2)
// obj2.name = "smith"
// console.log(obj2)
// console.log(obj1)

// console.log(JSON.stringify(obj1))
// console.log(JSON.parse(JSON.stringify(obj1)))
// let obj2 = JSON.parse(JSON.stringify(obj1))
// console.log(obj2)
// obj2.name = "harry"
// console.log(obj2)
// console.log(obj1)



// 31/ may/2025 

// let currDate = new Date()
// console.log(currDate.toString())

// Math
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.pow(2,3))

// console.log(Math.ceil(3.5))
// console.log(Math.floor(3.5))
// console.log(Math.random(4.6))

// console.log(Math.round(8.4))
// console.log(Math.trunc(5.77))

// letsixdigit = Math.floor(Math.random() * 900000)
// console.log(letsixdigit)

// let randomNum = Math.ceil(Math.random() * 900000)
// console.log(randomNum)




// IIFE immediately invoked function expression
// function hello(){
//     console.log("hello world")
// }
// hello()

// (() => {
//   console.log("arrow function");
// })();

// ((a, b) => {console.log(a+b);})(4,5);

// (
//    function(x){
//     return (function(y){
//         console.log(x)
//     })(2)
//    } 
// )(1)


// function hof(cb){
//     console.log(cb(7,9));
// }

// function cb(a,b){
//     return a+b;
// }
// hof(cb);



// timer functions

// setTimeout(()=>{console.log("hello world")}, 3000)
// let count = 0;
// let intervalId = setInterval(function() {
//   console.log("Count:", count++);
//   if (count === 5) {
//     clearInterval(intervalId); // Stops the interval after 5 iterations
//   }
// }, 1000);


// let count = 0;
// let newTimer = setTimeout(
//    function(){
//     console.log("count:", count++);
//      if(count === 5){
//         clearInterval(newTimer)
//     }
//    },1000 
// )


document.getElementById("btn").addEventListener("click", function() {
      alert("button clicked 🚀");
    });
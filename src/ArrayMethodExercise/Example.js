// const Array = [3, 4, 5, 2,6, 34, 45,23, 67,453,66,576,88,6, 5, 7, 6,9, 8,20, 22, 90]

    //Find Duplicate Values 

// const DuplicateValues = Array.filter((ele, index, arr) =>{
//     return arr.indexOf(ele)!== index
// })

// console.log("DuplicateValues", DuplicateValues)

/********************************************************************/

//Find Unique Values
// const UniqueValues = Array.filter((ele, index, arr) =>{
//     return arr.indexOf(ele)=== index
// })

// console.log("UniqueValues", UniqueValues)

/******************************************************************* */

// count Number of Occurence

// const CountNumberOfOccurence = Array.reduce((obj, ele)=>{

// if(obj[ele] === undefined){
//     obj[ele] = 1;
//     return obj;
// }
// else{
// obj[ele] ++;
// return obj;
// }
// }, {})

// console.log("CountNumberOfOccurence", CountNumberOfOccurence)


/******************************************************************* */

//Sorting

// const sorExa = Array.sort((a, b)=>{
//     return a - b;
// })

// console.log(sorExa)


/********************************************************************/

//Find Unique Values and sort value

// const UniqueAndSort = Array.filter((ele, index, arr)=>{
//     return arr.indexOf(ele)===index
// }).sort((a, b)=>{
//     return a-b
// })

// console.log("UniqueAndSort", UniqueAndSort)


/********************************************************************/
//Find Max Value Or Greater Than Value Using Function

// function MaxValue(arr){
// return arr.reduce((prev, curr)=>{
// return prev > curr ? prev : curr
// })
// }

// const MaxValueRes = MaxValue(Array)  

// console.log(MaxValueRes)


/********************************************************************/
//Find Min Value Or Less Than Value Using Function

// function MinValue(arr){
// return arr.reduce((prev, curr)=>{
// return prev < curr ? prev : curr
// })
// }

// const MinValueRes = MinValue(Array)

// console.log(MinValueRes)


//Find Max Value Or Greater  Value without using any built In function
// const ArrayNymber = [1, 2, 8, 2, 8, 40, 9];

// function findMaxValue(arr) {
//   let max = arr[0]; // Assume the first element is the max
//   for (let i = 1; i < arr.length; i++) { // Start from the second element
//     if (arr[i] > max) { // Compare each element with the current max
//       max = arr[i]; // Update the max if current element is greater
//     }
//   }
//   return max; // Return the max value
// }

// const maxValue = findMaxValue(ArrayNymber);
// console.log(maxValue); // Outputs: 40



// How To find second Largest value in array
// const ArrayNumber = [1, 2, 8, 2, 8, 40, 50, 20, 70, 9];

// function LargstValue (arr){
//     FirstLargetsValue =  Math.max(...arr)
// //   return (FirstLargetsValue) //first find FirstLargetsValue 70
  
//   index = arr.indexOf(FirstLargetsValue)
//   arr.splice(index, 1)
  
//   SecondLargestValue =  Math.max(...arr)
//   return(SecondLargestValue)  //first find SecondLargestValue 50
  
// }
// console.log(LargstValue(ArrayNumber))




/********************************************************************/


// How to Find missing elements in a given Array 1 to 10

// const ArrayNumber = [1, 2, 3, 4,5,6, 9];

// const MissingValue = []
// function FindMissingValue(arr){
    
//     const MinValue = Math.min(...arr)
//      const MaxValue = Math.max(...arr)
     
//      for(let i = MinValue; i< MaxValue; i++){
//          if(arr.indexOf(i)< 0){
//              MissingValue.push(i)
//          }
//      }
//      return MissingValue
// }



// console.log(FindMissingValue(ArrayNumber))

/********************************************************************/


//how to find even or odd numbers in array in javascript

// const ArrayNumber = [1, 2, 3, 4,5,6, 9];
// const  OddEvenFind = ArrayNumber.filter((arr)=>{
//       return arr % 2==0
// })

// console.log(OddEvenFind)

/********************************************************************/



//Find Average of Numbers in Array

// const AverageTotal = Array.reduce((a, b)=>a+b, 0)

// console.log("AverageTotal", AverageTotal)
// const ArrLngth = Array.length
// console.log("ArrLngth", ArrLngth)

// const FinalAverageTotal = AverageTotal / ArrLngth;

// console.log("FinalAverageTotal", FinalAverageTotal)





/********************************************************************/

//how to find fictorial of a given number in Javascript

// const input = prompt(" Enter a Number")

//     var fact =1;
    
//    if(input < 0){
//       console.log("not a possible for factorial")
//    }else{
//          for(let i = 1; i<=input; i++){
//              fact = fact*i
        
//     }
//     console.log(`factorial=>, ${input} is ${fact}`)
//    }


/********************************************************************/

//First letter uppercase
// const FistCapital = (str)=>{
//     var StrArray = str.split(" ")
//  var NewStr = StrArray.map((newstr)=>{
   
//      return newstr.charAt(0).toUpperCase() + newstr.slice(1)
//  })
//  return NewStr.join(" ")
// }

// console.log(FistCapital("farjana"))

/********************************************************************/

// PrintStart
// for(let i = 1; i<=6; i++){
  
//     for(let k=1; k<=6-i; k++){
//        for(let j=1; j<=i; j++){
//      console.log("*")
//  }
//  console.log("<br/>")
//  }



// }

// // PrintStart top to bottom 
// for(let i = 1; i<=6; i++){
  
//     for(let k=1; k<=6-i; k++){
     
//      console.log("*")
//  }
//  console.log("<br/>")
// }



//Diamond Start

// for(let i = 1; i<=6; i++){
  
//         for(let k=1; k<=6-i; k++){
          
//      console.log("&nbsp;")
//      }
//      for(let j=1; j<=i; j++){
//         console.log("*")
//     }
//     console.log("<br/>")
// }
//      for(let i = 1; i<=6; i++){
  
//         for(let k=1; k<=i; k++){
          
//             console.log("&nbsp;")
//      }
//      for(let j=1; j<=6-i; j++){
//         console.log("*")
//     }
//     console.log("<br/>")
// }
/********************************************************************/

const Days = ["mon", "tue", "wed" ,"thur", "fri", "sat", "sun"]

//Uppercase First Letter of String Using For Of Loop

// for(let days of Days){
//     days = days.charAt(0).toUpperCase() + days.substring(1)
//     console.log(days)
// }


//Uppercase First Letter of String Using Function

// function UpperCaseLetter(name){
//     return name.charAt(0).toUpperCase() + name.slice(1)
// }

// console.log(UpperCaseLetter("farjana"))


/********************************************************************/

//How to check if an Array containes any element of another Array

// const SecArray = [2, 34, 56, 3, 4, 6]
// const Res = Array.some((ele)=>{
// return SecArray.includes(ele)
// })

// console.log("Res", Res)


/********************************************************************/

//Find Argam in Two Strings

// const String1 = "Mary"
// const String2 = "Army"

// function Argamnam(){
//     var a = String1.toUpperCase()
//     var b = String2.toUpperCase()


//     a = a.split("").sort().join("")
//     a = a.split("").sort().join("")

//     return a==b
// }

// console.log("Argamnam", Argamnam(String1, String2))


/********************************************************************/

//Extract few fields from JSON object and from a new Array

const Obj = {
    employee: [
        {   id: 1,
            name: "Farjana",
            email: "farjana09khan@gmail.com"
        },
        {    id: 2,
            name: "Farjana",
            email: "farjana09khan@gmail.com"
        },
        {    id: 3,
            name: "Farjana",
            email: "farjana09khan@gmail.com"
        }
    ]
}

//Fetch Employee Name from JSON Object of Array

// const FetchEmployee =  Obj.employee.map((emp)=>{

//     let ObjEmp = {
//         name: emp.name
//     }

//     return ObjEmp
// })

// console.log("FetchEmployee", FetchEmployee)


//Filter Employee name using By ID

// const EmployeeId = Obj.employee.filter((emp)=>{
//     return emp.id > 20 ? emp : ""
// })

// console.log("EmployeeId", EmployeeId)


/********************************************************************/

//How to check if the variable passed is an Array or not

// const Array1 = [3, 4, 3, 45, 643, 435,234,346,7,8,9]
// console.log("Array or not", Array.isArray(Array1))


/********************************************************************/
//Given an Array of String, reverse each word in the senetence

//  const String = "Welcome to Home"

// const ReverseString = String.split("").reverse().join("").split(" ").reverse().join(" ")

// console.log("ReverseString =>", ReverseString)


/********************************************************************/

// const String = "Welcome to Home"
// var reverseStr = Reverse(String, "")

// function Reverse(Input, seprator){
//     return Input.split(seprator).reverse().join(seprator)
// }


// console.log("reverseStr", reverseStr)



/********************************************************************/

// const String = "Welcome to Home"
// var reverseStr = Reverse(String, "")

// function Reverse(Input){
//     return Input.split("").reverse().join("")
// }


// console.log("reverseStr", reverseStr)



/********************************************************************/

//How to Empty Array

let a = [2, 3, 5, 7, 8,9, 34, 22, 54]

// //1)
// a = []

// console.log("First", a)

//2)
// a.length = 0

// console.log("Second", a)


//3)
// while(a.length > 0){
//     a.pop()
// }
//  console.log("Third", a)

//4)

// a.splice(0, a.length)
// console.log("Fourth", a)


/********************************************************************/
//Check Palidrome or Not

// function Palidrome(str){
//     str = str.toLowerCase()
//     return(str == str.split("").reverse().join(" "))
// }

// console.log("Palidrome", Palidrome("farjana"))


/********************************************************************/
//How to combined Two Arrays into a third Array using spread operator

// const x = [3, 4, 6, 7,2, 5]
// const b = [3, 4, 6, 7,2, 5]
// const c = [...x, ...b]
// console.log(c)


/********************************************************************/
//Sort and Reverse Array without changing the original Array

// const Arr = ['a', 'b', 'c', 'd', 'e', 'f']
// const newArray = Arr.reverse()
// console.log(newArray)


/********************************************************************/
//How can replace  element at a specific index in an Array

// const student = [23,45,11,23,6,87,33]
// const replaceIndex = 2;
// const element = 200

// const Result = [...student.slice(0, replaceIndex), element, ...student.slice(replaceIndex + 1)]
// console.log("Result", Result)


/********************************************************************/
//How can we insert  element at a specific index in an Array.

//  const Arr = [23,45,11,23,6,87,33]
// const element = 250
// const insertAtIndex = 1;
// const Result = [...Arr.slice(0, insertAtIndex), element, ...Arr.slice(insertAtIndex)]
// console.log(Result)


/********************************************************************/
//How can we delete  element at a specific Element (means Exact Element) in an Array.

//  const Arr = [23,45,11,23,6,87,33]
// const DeleteElement = 23

// const Result = Arr.filter(arr=>arr !== DeleteElement)
// console.log(Result)


/********************************************************************/
//How can we delete  element at a specific index in an Array

//  const Arr = [23,45,11,23,6,87,33]
// const DeleteElement = 2

// const Result = [...Arr.slice(0, DeleteElement), ...Arr.slice(DeleteElement + 1)]

// console.log(Result)


/********************************************************************/

//How to clone a javascript Object

// const employee = {
//     id: 1,
//     name: "farjana",
//     email: "farjana09khan@gmail.com"
// }


//Way1

// const newEmployee = Object.assign({}, employee)

// console.log(newEmployee)

//Way2

// const employedObj = {...employee}
// console.log(employedObj)


/********************************************************************/

//How can you add an element to the object 
//to add an element to an existing object, we will use the spread operator

// const originObj = {

//     street: "1 mewat",
//     city: "Gurgaon",
//     state: "Haryana",
//     zip: 122103
// }

// const modiefiedObj = {
//     ...originObj,
//     country: "India"
// }

// console.log(modiefiedObj)


/********************************************************************/

//How to add existing element to the object

// const originObj = {

//     street: "1 mewat",
//     city: "Gurgaon",
//     state: "Haryana",
//     zip: 122103
// }

// const modiefiedObj = {
//     ...originObj,
//     zip: 212104
// }

//  console.log(modiefiedObj)

/********************************************************************/

//How to combined Two Objects

// const originObj = {

//     street: "1 mewat",
//     city: "Gurgaon",
//     state: "Haryana",
//     zip: 122103
// }

// const Employee = {
//    name: "farjana"
    
// }


// const combineTwoObj = {
//    ...originObj,
//     ...Employee
// }
//  console.log(combineTwoObj)



// /********************************************************************/

// let employee = [

//     {
//         name: "Farjana",
//         email: "farjana09khan@gmail.com",
//         address: "Haryana"
//     },
//     {
//         name: "Inaya",
//         email: "Inayakhan@gmail.com",
//         address: "Haryana"
//     },
//     {
//         name: "Hunain",
//         email: "Hunainkhan@gmail.com",
//         address: "Haryana"
//     }
// ]

// console.log(employee)

// //Display Name of Employees using for loop
// let name = []

// for(let i = 0; i<employee.length; i++){
//     name.push(employee[i].name.toUpperCase())
// }

// console.log(name)


/********************************************************************/



// let employee = [

//     {
//         name: "Farjana",
//         email: "farjana09khan@gmail.com",
//         address: "Haryana"
//     },
//     {
//         name: "Inaya",
//         email: "Inayakhan@gmail.com",
//         address: "Haryana"
//     },
//     {
//         name: "Hunain",
//         email: "Hunainkhan@gmail.com",
//         address: "Haryana"
//     }
// ]

//Using map method

// const  EmployeeName  = employee.map((emp)=>emp.name)

// console.log(EmployeeName)



/********************************************************************/

//IIF
// (function(x1){

//     return (function(y1){
//         console.log(x1)
//         console.log(y1)
//     })(2)
// })(1)

/********************************************************************/

//SetTimeOut

// for(let i =0; i<5; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, i * 1000)
// }

/********************************************************************/

//Closures

// function Exam(){
//     var name = "Farjana"

//     function Display() {
//         console.log(name)
//     }
//     Display()
// }

// Exam()

/********************************************************************/

//Object convert-> object to string and string to object

// const user = {
//     name: "Farjana",
//     email:"Farjana09khan@gmail.com"
// }

//object to string
// const Result = JSON.stringify(user)
// console.log(Result)

//string to object
// const ParseResult = JSON.parse(Result)
// console.log(ParseResult)



/********************************************************************/

//Object Destructing
const user = {
    name: "Farjana",
    email:"Farjana09khan@gmail.com",
    fulname: {
        surname: "khan"
    }
}

const {fulname} = user
console.log(fulname)


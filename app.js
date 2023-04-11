 //javascript Assignment 2
//Q1) Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.    
//  function add_number(num1){
// return function(num2){
//     // return num1+num2;
//     console.log(num1+num2);
// }
//  }   
// let inerfunc = add_number(5)
// inerfunc(5);


//Q2) Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// let array = ["farwa" , "ume" , "latif"]
// function search(array,value){
//     if(array.includes(value)){
//         return true;
//     }
//     else{
//        return false;
//     }
// }
// console.log(search(array,"farwa"))
// console.log(search(array,"umee"))
// console.log(search(array,5))


//Q3) Write a function that adds a new paragraph element to the bottom of an
//HTML document. The function should take a string argument that will be
//used as the text content of the new paragraph element.
// function para(string){
//     console.log(string)
//     let newPara = document.querySelector("#new")
//     newPara.innerHTML ="<p>"+string+"</p>" 
// }
// para("hellow! how are you")


// Q4)Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

// function unorderList(string){
//     console.log(string)
//     let newlist= document.querySelector("#list")
//     newlist.innerHTML += "<li>"+string+"</li>"
// }
// unorderList("this is unorder list1")
// unorderList("this is unorder list2")
// unorderList("this is unorder list3")


// Q5)Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

//  function chanageColor(tag,newcolor){
//     console.log(ta6g,newcolor);
//    let new1= document.querySelector("#"+tag);
//     new1.innerHTML ="<p>Pakistan</p>";
//     new1.style.backgroundColor=newcolor;
//  }
// chanageColor("new","pink")
// chanageColor("new1","purple")
// chanageColor("new2","green")



//Q6) Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store. 

// function data(argument1,argument2){
//     console.log(argument1,argument2)
//     let stringify= JSON.stringify(argument2);
//     localStorage.setItem(argument1,stringify)
// }
// let person ={
//     names : "farwa",
//     clas : "js",
//     rollNum : 123,
// }
// data("the student bio data", person);
// let newdata = JSON.parse(localStorage.getItem("the student bio data"))
// console.log(data)


// Q7) Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
// function data(value) {
//     const newValue = localStorage.getItem(value);
//     if (newValue === null) {
//       return null;
//     }
//     return JSON.parse(newValue);
 // }
  
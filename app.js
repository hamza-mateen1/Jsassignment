// Task 1

// function first(number){
//     return function(number2){
//         console.log(number + number2);
//     }
// }

// let localScope = first(2);
// localScope(8);

// Task 2

// let arr = [1,2,6,7,8,4,6,4,6,3];
// function searching(arr,value){
// if(arr.length === 0){
//     return false;
// }
// else if(arr[0]===value){
//        return true
//     }
// else{
//         return searching(arr.slice(1), value);
//     }
// };

// console.log(searching(arr,5));




// Task 3

//   function addParagraph() {
//     let para = prompt("Hey, Introduce Yourself");
//     const newParagraph = document.createElement('p');
//     newParagraph.innerHTML = para; 
//     document.body.appendChild(newParagraph); 
//   }

//    Calling Function via button tag


// Task 4

// function addList() {
//     let para = prompt("Enter List Item");
//     const fetching = document.getElementsByTagName('ul');
//     const creating = document.createElement('li');
//     creating.innerHTML = para; 
//     document.body.appendChild(creating); 
//   }

//    Calling Function via button tag

// Task 5

// function changeColor(tagging,color){
// tagging.style.backgroundColor = color;
// }
// let tagging = document.getElementById("body");
// changeColor(tagging,"yellow");


// Task 6

// function store(key1,value1){
//     localStorage.setItem(key1,value1);
// }

// store("name","Hamza");

//Task 7

// function store(key1){
//     let obj = localStorage.getItem(key1);
//     return (obj);
// }

// let stg = store('name');
// console.log(stg);

//Task 8


// function task8() {

//     let provide = {
//         name: "hamza",
//         fathername: "Mateen",
//         Roll: 654654,
//     }
// let stringify = JSON.stringify(provide);
// localStorage.setItem("opst",stringify);

// return JSON.parse(localStorage.getItem("opst"));
// };

// let stg = task8();
// console.log(stg);

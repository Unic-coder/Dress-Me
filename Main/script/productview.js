// // Display products from json
// //JS value stoage
// let myprod ={
//     name:"Akil",
//     age:21
// }

// //Converting object to string (serialization) to store the data as string in local storage
// myprod= JSON.stringify(myprod);

// //setting the data to local storage as myobj
// localStorage.setItem("myobj",myprod);

// //print the value 
// console.log(myprod);
// console.log(localStorage);

// //getting the html id and name it is sorce
// var sorce=document.getElementById("disp");

// //Getting the Item from localstorage
// //JSON.parse : converts the string back in to object
// product=JSON.parse(localStorage.getItem("myobj"));

// //Dispaying the data from local storage to html page
// sorce.innerHTML=product.age + product.name;
// console.log(product.name);

// //Displaying data from .json file
// fetch('script/products.json')
// .then(response => response.json())
// .then(json=> {productslist = json});





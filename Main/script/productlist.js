//XMLhtttp request for object
let http = new XMLHttpRequest();

//Request with open method
http.open('get','script/products.json',true)

//first arg sets the http request
//path of our data
//last keyword true, sets the req to async.

//send the request
http.send();

//catch the response

http.onload=function(){
    //cecking ready state and status property
    if(this.readyState == 4 && this.status == 200){
        //if success response , parse the json data, and conver to js array
        let products=JSON.parse(this.responseText);

        //creating empty variable to add incoming data
        let output = "";

        //loop through the product in every iteratio to display all 

        //adding html template to output variable
        for(let item of products){
            output += `<div id="product4" class="single_product col-md-5 col-lg-4 col-sm-5 ms-lg-0">

            <img class="rimg row-cols-1" src="Image/${item.Name}.jpg" alt="dress2">`;
            snew=`<span class="ntag">${item.product}</span>
            `
            if(item.product=="new")
                output+=snew;
            output+=`<div class="icon_over_img">
                <a href="productpage.html"><i class="fa-solid fa-eye fa-2x"></i></a>
                <a><i id="cart-icon" class="fa-solid fa-cart-plus fa-2x"></i></a>
                <a><i class="fa-solid fa-heart fa-2x"></i></a>
            </div>
            <div class="Product_detail">
            <div style="color: gold;>`
            let reviews=""; lowstar=0; i=0;
            lowstar=6-item.ratting;
            for(i=0;i<item.ratting;i++){
            reviews+=`<i class="fa-solid fa-star "></i>`
            }
            for(i=0;i<lowstar;i++){
            reviews+=`<i class="fa-regular fa-star"></i>`
            }
            // <i class="fa-solid fa-star-half-stroke"></i>
            output+= reviews;
            output+=`
                </div>
                <div class="category-caption">
                    <h5 class="nam">Women Maxi Multicolor Dress</h5>
                    <h4>Womens</h4>
                </div>
                <div class="price">
                    <h5 class="pric mt-2 text-danger">₹ ${item.price}</h5>
                </div>
                
            </div>
        </div>`;
        }
        /*Display the data to html page where the json data to be displayed by calling the id ,target the product container 
        and added the data that the output variable holds*/
        document.querySelector("#products").innerHTML = output;

    }
}
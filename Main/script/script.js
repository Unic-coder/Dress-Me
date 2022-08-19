//Drop down 
function DroupDown(val) {
    if (val.style.display === "none") {
        val.style.display = "block";
    } else {
        val.style.display = "none";

    }
}

//scroll back to top
window.onscroll = function() {
    scrollFunction()
}
var mybutton = document.getElementById("Bto");

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Product hover effect & icon

//Hide the icon 
document.querySelectorAll(".icon_over_img").forEach(product => {
    product.classList.add("hide");
})

//do the things for each product
document.querySelectorAll('div[id^="product"]').forEach(product => {

    //mouse-over blur the product image
    product.addEventListener('mouseover', event => {
            product.classList.add("blur");
            product.querySelector(".icon_over_img").classList.remove("hide");
            product.querySelector(".icon_over_img").classList.add("show");
        })
        //mouse-out hide the icon and remove blur
    product.addEventListener('mouseout', event => {
        product.classList.remove("blur");
        product.querySelector(".icon_over_img").classList.remove("show");
        product.querySelector(".icon_over_img").classList.add("hide");

    })
})
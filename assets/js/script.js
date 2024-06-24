// let menu_close_btn = document.querySelector(".menu-close-btn");
// let menu_open_btn = document.querySelector(".menu-open");
// let mobile_nav_box = document.querySelector(".side-menu");
// menu_open_btn.addEventListener('click', function() {
//     mobile_nav_box.classList.add("open");
    
// })
// menu_close_btn.addEventListener('click' , function(){
//     mobile_nav_box.classList.remove("open");
// })


// for contact form 
let form = document.getElementById("contact-form");
form.onsubmit=function(e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    console.log(name);
    console.log(email);
    console.log(message);
}

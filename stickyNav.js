window.onscroll = function() {stickyScroll();};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyScroll(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }
}
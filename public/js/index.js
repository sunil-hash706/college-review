var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.documentElement.scrollTop>= 50 ) {
    console.log("hii");

        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
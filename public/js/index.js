var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.documentElement.scrollTop>= 50 ) {

        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        myNav.innerHTML=`   <ul>
        <li><a href="#">HOME</a></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div class="line"></div>
    `;
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        myNav.innerHTML=`   <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">COLLEGES</a></li>
        <li><a href="#">NIRF</a></li>
        <li><a href="#">REVIEWS</a></li>
        <li><a href="#">CONTACT US</a></li>
        
    </ul>
    <div class="line"></div>`;
    }
};
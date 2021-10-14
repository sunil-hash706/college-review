$("#iitList").slideUp();
$("#listIit").on("click", function () {
    $("#iitList").slideToggle();
})

var process = document.getElementById('_progress2');
setInterval(() => {
    var scrollTop = $(window).scrollTop();
    process.style.width=scrollTop+"px";  
}, 10);



var myNav = document.getElementById('mynav');
window.onscroll = function () {
    "use strict";
    if (document.documentElement.scrollTop >= 50) {

        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        myNav.innerHTML = `   <ul>
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
        myNav.innerHTML = `   <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">COLLEGES</a></li>
        <li><a href="#">NIRF</a></li>
        <li><a href="#">REVIEWS</a></li>
        <li><a href="#">CONTACT US</a></li>
        
    </ul>
    <div class="line"></div>`;
    }
};



var ct = "k";
function fn1() {
    var collegeType = document.getElementById('colleges').value;
    var collegeName = document.getElementById('clgname');


    if (ct != collegeType) {


        if (collegeType == "IIT") {


            collegeName.innerHTML = ` <option value="IIT">IIT Bombay</option>
        <option value="NIT">IIT Madras</option>
        <option value="IIIT">IIT Delhi</option>
        <option value="IIIT">IIT Kharagpur</option>
        <option value="IIIT">IIT Roorkee</option>
        <option value="IIIT">IIT Kanpur</option>
        <option value="IIIT">IIT BHU</option>
        <option value="IIIT">IIT Hyderabad</option>
        <option value="IIIT">IIT Gandhinagar</option>
        <option value="IIIT">IIT Bhubaneswar</option>
        <option value="IIIT">IIT Patna</option>
        <option value="IIIT">IIT Guwahati</option>
        <option value="IIIT">IIT Ropar</option>
        <option value="IIIT">IIT Dhanbad</option>
        <option value="IIIT">IIT Tirupati</option>
        <option value="IIIT">IIT Indore</option>
        <option value="IIIT">IIT Palakkad</option>
        <option value="IIIT">IIT Dharwad</option>
        <option value="IIIT">IIT Jodhpur</option>
        <option value="IIIT">IIT Mandi</option>
        <option value="IIIT">IIT Bhilai</option>
        <option value="IIIT">IIT Goa</option>
        <option value="IIIT">IIT Jammu</option>`
        }
        else if (collegeType == "NIT") {
            collegeName.innerHTML = `
        <option value="IIT">NIT Trichy</option>
        <option value="NIT">NIT Karnataka</option>
        <option value="IIIT">NIT Rourkela</option>
        <option value="IIIT">NIT Warangal</option>
        <option value="IIIT">NIT Calicut</option>
        <option value="IIIT">NIT Durgapur</option>
        <option value="IIIT">NIT Nagpur</option>
        <option value="IIIT">MNIT Jaipur</option>
        <option value="IIIT">MNNIT Allahabad (MNNIT)</option>
        <option value="IIIT">NIT Kurukshetra</option>
        <option value="IIIT">NIT Surat</option>
        <option value="IIIT">NIT Silchar</option>
        <option value="IIIT">NIT Jalandhar</option>
        <option value="IIIT">NIT Meghalaya</option>
        <option value="IIIT">MANIT Bhopal</option>
        <option value="IIIT">NIT Raipur</option>
        <option value="IIIT">NIT Srinagar</option>
        <option value="IIIT">NIT Patna</option>
        <option value="IIIT">NIT Goa</option>
        <option value="IIIT">NIT Jamshedpur</option>
        <option value="IIIT">NIT Agartala</option>
        <option value="IIIT">NIT Hamirpur</option>
        <option value="IIIT">NIT Manipur</option>
        <option value="IIIT">NIT Puducherry</option>
        <option value="IIIT">NIT Arunachal Pradesh</option>
        <option value="IIIT">NIT Uttarakhand</option>
        <option value="IIIT">NIT Delhi</option>
        <option value="IIIT">NIT Mizoram</option>
        <option value="IIIT">NIT Nagaland</option>
        <option value="IIIT">NIT Sikkim</option>
        <option value="IIIT">NIT Andhra Pradesh</option>`
        }
        else {
            collegeName.innerHTML = `
        <option value="IIT">IIIT Hyderabad</option>
        <option value="NIT">IIIT Bangalore</option>
        <option value="IIIT">IIIT Guwahati</option>
        <option value="IIIT">PDSM IIITDM Jabalpur</option>
        <option value="IIIT">ABV IIIT Gwalior</option>
        <option value="IIIT">IIIT Allahabad</option>
        <option value="IIIT">IIITDM Kanchipuram</option>
        <option value="IIIT">IIIT Bhubaneshwar</option>
        <option value="IIIT">IIIT Pune</option>
        <option value="IIIT">IIIT Kota</option>
        <option value="IIIT">IIIT Sri City</option>
        <option value="IIIT">IIIT Vadodara</option>
        <option value="IIIT">IIIT Nagpur</option>
        <option value="IIIT">IIIT Kalyani</option>
        <option value="IIIT">IIIT Lucknow</option>
        <option value="IIIT">IIIT Dharwad</option>
        <option value="IIIT">IIIT Bhagalpur</option>
        <option value="IIIT">IIIT Bhopal</option>
        <option value="IIIT">IIIT Kottayam</option>
        <option value="IIIT">IIIT Ranchi</option>
        <option value="IIIT">IIIT Una</option>
        <option value="IIIT">IIIT Surat</option>
        <option value="IIIT">IIIT Manipur</option>
        <option value="IIIT">IIITDM Kurnool</option>
        <option value="IIIT">IIIT Tiruchirapalli</option>
        <option value="IIIT">IIIT Sonepat</option>
        <option value="IIIT">IIIT Agartala</option>
        <option value="IIIT">IIIT Karnataka</option>`
        }
        ct = collegeType;
    }
}

$("#iitList").slideUp();
$("#listIit").on("click", function () {
    $("#iitList").slideToggle();
})

var process = document.getElementById('_progress2');
setInterval(() => {
    var scrollTop = $(window).scrollTop();
    process.style.width=scrollTop+"%";  
}, 10);



var myNav = document.getElementById('mynav');
window.onscroll = function () {
    "use strict";
    if (document.documentElement.scrollTop >= 50) {

        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        myNav.innerHTML = `   <ul>
        <li><a href="/">HOME</a></li>
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
        <li><a href="/">HOME</a></li>
        <li><a href="/colleges">COLLEGES</a></li>
        <li><a href="/">NIRF</a></li>
        <li><a href="/review">REVIEWS</a></li>
        <li><a href="/about">ABOUT US</a></li>
        
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


            collegeName.innerHTML = ` <option value="IITBY">IIT Bombay</option>
        <option value="IITMS">IIT Madras</option>
        <option value="IITDI">IIT Delhi</option>
        <option value="IITKR">IIT Kharagpur</option>
        <option value="IITRE">IIT Roorkee</option>
        <option value="IITKR">IIT Kanpur</option>
        <option value="IITBU">IIT BHU</option>
        <option value="IITHD">IIT Hyderabad</option>
        <option value="IITGR">IIT Gandhinagar</option>
        <option value="IITBR">IIT Bhubaneswar</option>
        <option value="IITPA">IIT Patna</option>
        <option value="IITGI">IIT Guwahati</option>
        <option value="IITRR">IIT Ropar</option>
        <option value="IITDD">IIT Dhanbad</option>
        <option value="IITTI">IIT Tirupati</option>
        <option value="IITIE">IIT Indore</option>
        <option value="IITPD">IIT Palakkad</option>
        <option value="IITDD2">IIT Dharwad</option>
        <option value="IITJR">IIT Jodhpur</option>
        <option value="IITMI">IIT Mandi</option>
        <option value="IITBI">IIT Bhilai</option>
        <option value="IITGA">IIT Goa</option>
        <option value="IITJU">IIT Jammu</option>`
        }
        else if (collegeType == "NIT") {
            collegeName.innerHTML = `
        <option value="NITTY">NIT Trichy</option>
        <option value="NITKA">NIT Karnataka</option>
        <option value="NITRA">NIT Rourkela</option>
        <option value="NITWL">NIT Warangal</option>
        <option value="NITCT">NIT Calicut</option>
        <option value="NITDR">NIT Durgapur</option>
        <option value="NITNR">NIT Nagpur</option>
        <option value="NITJR">MNIT Jaipur</option>
        <option value="NITMA">MNNIT Allahabad (MNNIT)</option>
        <option value="NITKA">NIT Kurukshetra</option>
        <option value="NITST">NIT Surat</option>
        <option value="NITSR">NIT Silchar</option>
        <option value="NITJR">NIT Jalandhar</option>
        <option value="NITMA">NIT Meghalaya</option>
        <option value="NITBL">MANIT Bhopal</option>
        <option value="NITRR">NIT Raipur</option>
        <option value="NITSR">NIT Srinagar</option>
        <option value="NITPA">NIT Patna</option>
        <option value="NITSA">NIT Goa</option>
        <option value="NITJR">NIT Jamshedpur</option>
        <option value="NITAA">NIT Agartala</option>
        <option value="NITHR">NIT Hamirpur</option>
        <option value="NITMR">NIT Manipur</option>
        <option value="NITPY">NIT Puducherry</option>
        <option value="NITAH">NIT Arunachal Pradesh</option>
        <option value="NITUD">NIT Uttarakhand</option>
        <option value="NITDI">NIT Delhi</option>
        <option value="NITMM">NIT Mizoram</option>
        <option value="NITMD">NIT Nagaland</option>
        <option value="NITSM">NIT Sikkim</option>
        <option value="NITAH2">NIT Andhra Pradesh</option>`
        }
        else {
            collegeName.innerHTML = `
        <option value="IIITHD">IIIT Hyderabad</option>
        <option value="IIITBE">IIIT Bangalore</option>
        <option value="IIITGI">IIIT Guwahati</option>
        <option value="IIITJR">PDSM IIITDM Jabalpur</option>
        <option value="IIITGR">ABV IIIT Gwalior</option>
        <option value="IIITAD">IIIT Allahabad</option>
        <option value="IIITKM">IIITDM Kanchipuram</option>
        <option value="IIITBR">IIIT Bhubaneshwar</option>
        <option value="IIITPE">IIIT Pune</option>
        <option value="IIITKA">IIIT Kota</option>
        <option value="IIITCY">IIIT Sri City</option>
        <option value="IIITVA">IIIT Vadodara</option>
        <option value="IIITNR">IIIT Nagpur</option>
        <option value="IIITKI">IIIT Kalyani</option>
        <option value="IIITLW">IIIT Lucknow</option>
        <option value="IIITDD">IIIT Dharwad</option>
        <option value="IIITBR">IIIT Bhagalpur</option>
        <option value="IIITBL">IIIT Bhopal</option>
        <option value="IIITKM">IIIT Kottayam</option>
        <option value="IIITRI">IIIT Ranchi</option>
        <option value="IIITUA">IIIT Una</option>
        <option value="IIITST">IIIT Surat</option>
        <option value="IIITMR">IIIT Manipur</option>
        <option value="IIITKL">IIITDM Kurnool</option>
        <option value="IIITTI">IIIT Tiruchirapalli</option>
        <option value="IIITST2">IIIT Sonepat</option>
        <option value="IIITAA">IIIT Agartala</option>
        <option value="IIITKA">IIIT Karnataka</option>`
        }
        ct = collegeType;
    }
}




var clg = document.getElementById('colleges');
console.log(clg);
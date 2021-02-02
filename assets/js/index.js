var modal = document.getElementById("modal");
var btnBuyTicket = document.getElementsByClassName("btn-buy-ticket");

for (let b = 0; b < btnBuyTicket.length; b++) {
    btnBuyTicket[b].addEventListener("click", function () {
        modal.style.display = "block";
    });
}

var hideAnimation = document.getElementsByClassName("hide-animation");
for (let h = 0; h < hideAnimation.length; h++) {
    hideAnimation[h].addEventListener("click", function () {
        setTimeout(() => {
            modal.style.display = "none";
        }, 501);
    });
}

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
};

var btnFaCheck = document.getElementsByClassName("btn-fa-check")[0];
btnFaCheck.addEventListener("click", function () {
    var ticketOrdersContentInputInfo = document.getElementsByClassName("ticket-orders-content-input-info");
    for (var j = 0; j < ticketOrdersContentInputInfo.length; j++) {
        if (ticketOrdersContentInputInfo[j].value == "") {
            alert("Please fill in the information below to complete your ticket purchase!");
        } else {
            alert("Thank you! You have successfully purchased your ticket.");
        }
    }
});

var navMore = document.getElementById("nav-more");
navMore.addEventListener("click", function (e) {
    e.preventDefault();
});

var liFaSearch = document.getElementById("li-fa-search");
liFaSearch.addEventListener("click", function (e) {
    e.preventDefault();
});

var subNav = document.getElementsByClassName("sub-nav")[0];
subNav.addEventListener("click", function (e) {
    e.preventDefault();
});

var liFaBars = document.getElementById("li-fa-bars");
liFaBars.addEventListener("click", function (e) {
    e.preventDefault();
});

var index = 0;
function Carousel() {
    var sliderAnimation = document.getElementsByClassName("slider-animation");
    for (let i = 0; i < sliderAnimation.length; i++) {
        sliderAnimation[i].style.display = "none";
    }
    index++;

    if (index > sliderAnimation.length) {
        index = 1;
    }
    sliderAnimation[index - 1].style.display = "block";
    setTimeout(Carousel, 3000);
}
Carousel();

var navBars = document.getElementById("nav-bars");
navBars.addEventListener("click", function () {
    var navHome = document.getElementById("nav-home");
    var navBand = document.getElementById("nav-band");
    var navTour = document.getElementById("nav-tour");
    var navContact = document.getElementById("nav-contact");
    var navMore = document.getElementById("nav-more");

    navHome.style.display = "block";
    navBand.style.display = "block";
    navTour.style.display = "block";
    navContact.style.display = "block";
    navMore.style.display = "block";
});

var navBars = document.getElementById("nav-bars");
navBars.addEventListener("click", function (e) {
    e.preventDefault();
    var header = document.getElementById("header");
    var headerHeight = header.clientHeight === 46;
    if (headerHeight) {
        header.style.height = "auto";
    } else {
        header.style.height = "46px";
        header.style.overflow = "hidden";
    }

    var navBand = document.getElementById("nav-band");
    var navTour = document.getElementById("nav-tour");
    var navContact = document.getElementById("nav-contact");
    var navMore = document.getElementById("nav-more");

    navBand.addEventListener("click", function () {
        navBand.style.display = "none";
        navTour.style.display = "none";
        navContact.style.display = "none";
        navMore.style.display = "none";
        header.style.height = "46px";
    });
    navTour.addEventListener("click", function () {
        navBand.style.display = "none";
        navTour.style.display = "none";
        navContact.style.display = "none";
        navMore.style.display = "none";
        header.style.height = "46px";
    });
    navContact.addEventListener("click", function () {
        navBand.style.display = "none";
        navTour.style.display = "none";
        navContact.style.display = "none";
        navMore.style.display = "none";
        header.style.height = "46px";
    });
    navMore.addEventListener("click", function () {
        navBand.style.display = "none";
        navTour.style.display = "none";
        navContact.style.display = "none";
        navMore.style.display = "none";
        header.style.height = "46px";
    });
});

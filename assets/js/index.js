var ticketOrdersStyle = document.getElementById("ticket-orders").style;

function BuyTicket() {
    var bodyStyle = document.getElementById("body").style;

    ticketOrdersStyle.display = "block";
    ticketOrdersStyle.zIndex = 1;
    bodyStyle.animationName = "ChangeOpacityBlur";
}

var btnFaCheck = document.getElementsByClassName("btn-fa-check");
for (var i = 0; i < btnFaCheck.length; i++) {
    btnFaCheck[i].addEventListener("click", function (e) {
        var ticketOrdersContentInputInfo = document.getElementsByClassName(
            "ticket-orders-content-input-info"
        );
        for (var j = 0; j < ticketOrdersContentInputInfo.length; j++) {
            if (ticketOrdersContentInputInfo[j].value == "") {
                alert(
                    "Please fill in the information below to complete your ticket purchase!"
                );
            } else {
                alert(
                    "Thank you! You have successfully purchased your ticket."
                );
            }
        }
    });
}

var navMore = document.getElementById("nav-more");
navMore.addEventListener("click", function (e) {
    e.preventDefault();
});

var liFaSearch = document.getElementById("li-fa-search");
liFaSearch.addEventListener("click", function (e) {
    e.preventDefault();
});
var subNav = document.getElementsByClassName("sub-nav");
for (let u = 0; u < subNav.length; u++) {
    subNav[u].addEventListener("click", function (e) {
        e.preventDefault();
    });
}
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

var btnBuyTicket = document.getElementsByClassName("btn-buy-ticket");
for (let k = 0; k < btnBuyTicket.length; k++) {
    var tourStyle = document.getElementById("tour").style;
    var imgMapStyle = document.getElementById("img-map").style;
    var contactInputBlock = document.getElementById("contact-input-block")
        .style;

    btnBuyTicket[k].addEventListener("click", function () {
        tourStyle.backgroundColor = "#ccc";
        imgMapStyle.filter = "grayscale(80%)";
        contactInputBlock.backgroundColor = "#ccc";

        var contactInputInline = document.getElementsByClassName(
            "contact-input-inline"
        );
        for (let c = 0; c < contactInputInline.length; c++) {
            contactInputInline[c].style.backgroundColor = "#ccc";
        }

        var tourLi = document.getElementsByClassName("tour-li");
        for (let h = 0; h < tourLi.length; h++) {
            tourLi[h].style.backgroundColor = "#ccc";
        }

        var soldOut = document.getElementsByClassName("sold-out");
        for (let l = 0; l < soldOut.length; l++) {
            soldOut[l].style.backgroundColor = " #c48682";
        }

        var ticketPlaceBody = document.getElementsByClassName(
            "ticket-place-body"
        );
        for (let n = 0; n < ticketPlaceBody.length; n++) {
            ticketPlaceBody[n].style.backgroundColor = "#ccc";
        }

        var aboutBandMemberImg = document.getElementsByClassName(
            "about-band-member-img"
        );
        for (let b = 0; b < aboutBandMemberImg.length; b++) {
            aboutBandMemberImg[b].style.opacity = "0.6";
        }

        var ticketPlaceImg = document.getElementsByClassName(
            "ticket-place-img"
        );
        for (let a = 0; a < ticketPlaceImg.length; a++) {
            ticketPlaceImg[a].style.opacity = "0.6";
        }
    });
}

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

// khi click thi height = 46

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

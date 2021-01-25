function HideTicketOrder() {
    var ticketOrdersStyle = document.getElementById("ticket-orders").style;
    var bodyStyle = document.getElementById("body").style;
    var tourStyle = document.getElementById("tour").style;
    var imgMapStyle = document.getElementById("img-map").style;
    var contactInputBlock = document.getElementById("contact-input-block")
        .style;

    setTimeout(() => {
        ticketOrdersStyle.display = "none";
        bodyStyle.animationName = "ChangeOpacityBackOne";
        tourStyle.backgroundColor = "black";
        imgMapStyle.filter = "grayscale(50%)";
        contactInputBlock.backgroundColor = "white";

        var contactInputInline = document.getElementsByClassName(
            "contact-input-inline"
        );
        for (let c = 0; c < contactInputInline.length; c++) {
            contactInputInline[c].style.backgroundColor = "white";
        }

        var tourLi = document.getElementsByClassName("tour-li");
        for (let h = 0; h < tourLi.length; h++) {
            tourLi[h].style.backgroundColor = "white";
        }

        var soldOut = document.getElementsByClassName("sold-out");
        for (let l = 0; l < soldOut.length; l++) {
            soldOut[l].style.backgroundColor = " #f44336";
        }

        var ticketPlaceBody = document.getElementsByClassName(
            "ticket-place-body"
        );
        for (n = 0; n < ticketPlaceBody.length; n++) {
            ticketPlaceBody[n].style.backgroundColor = "white";
        }

        var contactInputInline = document.getElementsByClassName(
            "contact-input-inline"
        );
        for (let m = 0; m < contactInputInline.length; m++) {
            contactInputInline[m].style.backgroundColor = "white";
        }

        var aboutBandMemberImg = document.getElementsByClassName(
            "about-band-member-img"
        );
        for (let b = 0; b < aboutBandMemberImg.length; b++) {
            aboutBandMemberImg[b].style.opacity = "1";
        }

        var ticketPlaceImg = document.getElementsByClassName(
            "ticket-place-img"
        );
        for (let a = 0; a < ticketPlaceImg.length; a++) {
            ticketPlaceImg[a].style.opacity = "1";
        }
    }, 501);
}

var btnBuyTicket = document.getElementsByClassName("btn-buy-ticket");
for (var i = 0; i < btnBuyTicket.length; i++) {
    btnBuyTicket[i].addEventListener("click", function () {
        var ticketOrdersStyle = document.getElementById("ticket-orders").style;
        ticketOrdersStyle.animationName = "Scroll-top-mid";
    });
}

var hideAnimation = document.getElementsByClassName("hide-animation");
for (var j = 0; j < hideAnimation.length; j++) {
    hideAnimation[j].addEventListener("click", function () {
        var ticketOrdersStyle = document.getElementById("ticket-orders").style;
        ticketOrdersStyle.animationName = "Scroll-mid-top";
    });
}

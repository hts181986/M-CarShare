$(document).ready(function () {
    var arrayWithAllReservationt = [];

    function buildNewReservationOnPage(pickUpLocation, pickUpDate, car, price) {
        var headOfDetails = $("<div></div>").appendTo($("#resevationsArea")).addClass("headOfDetails");
        $("<hr>").appendTo($("#resevationsArea"));
        $("<div>" + pickUpLocation + "</div>").appendTo(headOfDetails).addClass("details");
        $("<div>" + pickUpDate + "</div>").appendTo(headOfDetails).addClass("details");
        $("<div>" + car + "</div>").appendTo(headOfDetails).addClass("details");
        $("<div>" + "$" + price + "</div>").appendTo(headOfDetails).addClass("detailsPrice");
    }

    function getReservationDetails(reservation) {
        var pickUpLocation = reservation.pickUpLocation;
        var pickUpDate = reservation.pickUpDate;
        var car = reservation.car;
        var price = reservation.price;
        buildNewReservationOnPage(pickUpLocation, pickUpDate, car, price)
    }

    function checkIfThisClientHasAReservaiton() {
        for (var i = 0; i < arrayWithAllReservationt.length; i++) {
            var curentUserArr = JSON.parse(localStorage.getItem("arrayOfCurentUser"));
            var userName = curentUserArr[0].usernameChoosen;
            if (arrayWithAllReservationt[i].userName == userName) {
                getReservationDetails(arrayWithAllReservationt[i]);
            }
        }
    }

    if (localStorage.getItem("allResevations") !== null && localStorage.getItem("allResevations") !== "[]") {
        $("#resevationsArea").show();
        var oldReservationt = JSON.parse(localStorage.getItem("allResevations"));
        for (var i = 0; i < oldReservationt.length; i++) {
            arrayWithAllReservationt.push(oldReservationt[i]);
        }
        checkIfThisClientHasAReservaiton();
    }
})

$(document).ready(function () {
    var arrayWithAllReservationt = [];

    function buildNewReservationOnPage(pickUpLocation, pickUpDate, car, price) {
        var headOfDetails = $("<div></div>").appendTo($("#showOnlyIfClientHasReservation")).addClass("headOfDetails");
        $("<hr>").appendTo($("#showOnlyIfClientHasReservation"));
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
                $("#showWhenClientHasNoReservation11").hide();
                $("#showOnlyIfClientHasReservation").show();
                getReservationDetails(arrayWithAllReservationt[i]);
            }
        }
    }

    function startProssesOfGettingClientsResevation() {
        if (localStorage.getItem("allResevations") !== null && localStorage.getItem("allResevations") !== "[]") {
            var oldReservationt = JSON.parse(localStorage.getItem("allResevations"));
            for (var i = 0; i < oldReservationt.length; i++) {
                arrayWithAllReservationt.push(oldReservationt[i]);
            }
            checkIfThisClientHasAReservaiton();
        }
    }

    if (localStorage.getItem("arrayOfCurentUser") !== null && localStorage.getItem("arrayOfCurentUser") !== "[]") {
        $("#showOnlyIfLogdOut").hide();
        $("#showOnlyIfLogdIn").show();
        startProssesOfGettingClientsResevation();
    }
})

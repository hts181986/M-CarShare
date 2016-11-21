var bookingDetailsArr = [];

function BookingDetails(picUpLocation, returnLocation, pickUpDate, pickUpHour, returnDate, returnHour, carSize, carOrderd, carPrice, gear, milesToDrive, cameFromHomePage, carImg) {
    this.picUpLocation = picUpLocation;
    this.returnLocation = returnLocation;
    this.pickUpDate = pickUpDate;
    this.pickUpHour = pickUpHour;
    this.returnDate = returnDate;
    this.returnHour = returnHour;
    this.carSize = carSize;
    this.carOrderd = carOrderd;
    this.carPrice = carPrice;
    this.gear = gear;
    this.milesToDrive = milesToDrive;
    this.cameFromHomePage = cameFromHomePage;
    this.carImg = carImg;
}

function createLocalStorageWithBookingProsses(arrayOfBookingDetails) {
    var arrayInString = JSON.stringify(arrayOfBookingDetails);
    localStorage.setItem("bookingDetails", arrayInString);
}

function getCarClientChoose() {
    var carClientWantsToSee = location.search;
    carClientWantsToSee = carClientWantsToSee.replace("?", "");
    var allCarsArray = JSON.parse(localStorage.getItem("allCarsMaxDetails"));
    for (var i = 0; i < allCarsArray.length; i++) {
        if (allCarsArray[i].carNumber === carClientWantsToSee) {
            return allCarsArray[i];
            break;
        }
    }
}

function getValAndBuildObjAndPutInLS() {
    var picUpLocation = $("#selectPicUpLocation").val();
    if ($("#selectReturnLocation").val() == "notSelected") {
        var returnLocation = $("#selectPicUpLocation").val();
    } else {
        var returnLocation = $("#selectReturnLocation").val();
    }
    var pickUpDate = $("#pickUpDate").val();
    var pickUpHour = $("#pickUpHour").val();
    var returnDate = $("#returnDate").val();
    var returnHour = $("#returnHour").val();
    var carClientWants = getCarClientChoose();
    var carSize = carClientWants.carClass;
    var carOrderd = carClientWants.name + " " + carClientWants.model;
    var carPrice = carClientWants.price;
    var gear = carClientWants.gear;
    var milesToDrive = "not choose yet";
    var cameFromHomePage = false;
    var carImg = carClientWants.imgUrl;

    var bookingObj = new BookingDetails(picUpLocation, returnLocation, pickUpDate, pickUpHour, returnDate, returnHour, carSize, carOrderd, carPrice, gear, milesToDrive, cameFromHomePage, carImg);
    bookingDetailsArr.push(bookingObj);
    createLocalStorageWithBookingProsses(bookingDetailsArr);
}

$(document).ready(function () {
    $("#notHomePageBookingButton").on("click", function () {
        if ($("#selectPicUpLocation").val() == "notSelected" || $("#pickUpDate").val() == "" || $("#pickUpHour").val() == "notSelected" || $("#returnDate").val() == "" || $("#returnHour").val() == "notSelected") {
            $("#warning").show();
        } else {
            getValAndBuildObjAndPutInLS();
            location.assign("pricePage.html");
        }
    });
})

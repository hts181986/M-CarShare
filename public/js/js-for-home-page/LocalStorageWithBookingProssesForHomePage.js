var bookingDetailsArr = [];

function BookingDetails(picUpLocation, returnLocation, pickUpDate, pickUpHour, returnDate, returnHour, carSize, carOrderd, milesToDrive) {
    this.picUpLocation = picUpLocation;
    this.returnLocation = returnLocation;
    this.pickUpDate = pickUpDate;
    this.pickUpHour = pickUpHour;
    this.returnDate = returnDate;
    this.returnHour = returnHour;
    this.carSize = carSize;
    this.carOrderd = carOrderd;
    this.milesToDrive = milesToDrive;
}

function createLocalStorageWithBookingProsses(arrayOfBookingDetails) {
    var arrayInString = JSON.stringify(arrayOfBookingDetails);
    localStorage.setItem("bookingDetails", arrayInString);
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
    if ($("#selectTheCarSize").val() == "notSelected") {
        var carSize = "not choose yet"
    } else {
        var carSize = $("#selectTheCarSize").val();
    }
    var carOrderd = "not choose yet";
    var milesToDrive = "not choose yet";

    var bookingObj = new BookingDetails(picUpLocation, returnLocation, pickUpDate, pickUpHour, returnDate, returnHour, carSize, carOrderd, milesToDrive);
    bookingDetailsArr.push(bookingObj);
    createLocalStorageWithBookingProsses(bookingDetailsArr);
}

$(document).ready(function () {
    $("#homePageBookingButton").on("click", function () {
        if ($("#selectPicUpLocation").val() == "notSelected" || $("#pickUpDate").val() == "" || $("#pickUpHour").val() == "notSelected" || $("#returnDate").val() == "" || $("#returnHour").val() == "notSelected") {
            $("#warning").show();
        } else {
            getValAndBuildObjAndPutInLS();
            if ($("#selectTheCarSize").val() == "notSelected") {
                location.assign("all%20the%20cars.html?iCameFromHomePage");
            } else {
                location.assign("exactCar.html?" + $("#selectTheCarSize").val());
            }
        }
    });
})

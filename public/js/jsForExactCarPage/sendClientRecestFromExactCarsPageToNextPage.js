$(document).ready(function () {
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

    function getCarClientChoose(urlSearchWords) {
        var allCarsArray = JSON.parse(localStorage.getItem("allCarsMaxDetails"));
        for (var i = 0; i < allCarsArray.length; i++) {
            if (allCarsArray[i].carNumber === urlSearchWords) {
                return allCarsArray[i];
                break;
            }
        }
    }

    function getValAndBuildObjAndPutInLS(urlSearchWords) {
        var bookingProssesFromLS = JSON.parse(localStorage.getItem("bookingDetails"));

        var picUpLocation = bookingProssesFromLS[0].picUpLocation;
        var returnLocation = bookingProssesFromLS[0].returnLocation;
        var pickUpDate = bookingProssesFromLS[0].pickUpDate;
        var pickUpHour = bookingProssesFromLS[0].pickUpHour;
        var returnDate = bookingProssesFromLS[0].returnDate;
        var returnHour = bookingProssesFromLS[0].returnHour;

        var carClientWants = getCarClientChoose(urlSearchWords);

        var carSize = carClientWants.carClass;
        var carOrderd = carClientWants.name + " " + carClientWants.model;
        var carPrice = carClientWants.price;
        var gear = carClientWants.gear;
        var milesToDrive = "not choose yet";
        var cameFromHomePage = true;
        var carImg = carClientWants.imgUrl;

        var bookingObj = new BookingDetails(picUpLocation, returnLocation, pickUpDate, pickUpHour, returnDate, returnHour, carSize, carOrderd, carPrice, gear, milesToDrive, cameFromHomePage, carImg);
        bookingDetailsArr.push(bookingObj);
        createLocalStorageWithBookingProsses(bookingDetailsArr);
    }

    var carsClientWantsToSee = location.search;
    carsClientWantsToSee = carsClientWantsToSee.replace("?", "");

    var carArray = [];
    var arrAllCars = JSON.parse(localStorage.getItem("allCarsMaxDetails"));
    for (var i = 0; i < arrAllCars.length; i++) {
        if (arrAllCars[i].carClass == carsClientWantsToSee) {
            carArray.push(arrAllCars[i]);
        }
    }

    function popUpAlertAndSendToNextStep(typeSelected, urlSearchWords) {
        $(".TypeOfCar").text(typeSelected);
        $("#theWholePage").addClass("opa");
        $("#popUpAlert").show();
        $("#continuToChooseExactCar").on("click", function () {
            if (localStorage.getItem("bookingDetails")) {
                getValAndBuildObjAndPutInLS(urlSearchWords);
                location.assign("pricePage.html?" + urlSearchWords)
            } else {
                location.assign("picUpLocationAndDates.html?" + urlSearchWords)

            }
        })
        $("#goBackToSelectSize").on("click", function () {
            $("#theWholePage").removeClass("opa");
            $("#popUpAlert").hide();
        })
    }

    $("#choosenCar_1").on("click", function () {
        var typeSelected = carArray[0].name + " " + carArray[0].model;
        var urlSearchWords = carArray[0].carNumber;
        popUpAlertAndSendToNextStep(typeSelected, urlSearchWords);
    })

    $("#choosenCar_2").on("click", function () {
        var typeSelected = carArray[1].name + " " + carArray[1].model;
        var urlSearchWords = carArray[1].carNumber;
        popUpAlertAndSendToNextStep(typeSelected, urlSearchWords);
    })

    $("#choosenCar_3").on("click", function () {
        var typeSelected = carArray[2].name + " " + carArray[2].model;
        var urlSearchWords = carArray[2].carNumber;
        popUpAlertAndSendToNextStep(typeSelected, urlSearchWords);
    })

    $("#choosenCar_4").on("click", function () {
        var typeSelected = carArray[3].name + " " + carArray[3].model;
        var urlSearchWords = carArray[3].carNumber;
        popUpAlertAndSendToNextStep(typeSelected, urlSearchWords);
    })
    $("#xToGoBack").on("click", function () {
        $("#popUpAlert").hide();
        $("#theWholePage").removeClass("opa");
    })
})

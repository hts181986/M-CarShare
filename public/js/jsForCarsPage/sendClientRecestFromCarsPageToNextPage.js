$(document).ready(function () {
    function popUpAlertAndSendToNextStep(typeSelected) {
        $(".TypeOfCar").text(typeSelected);
        $("#theWholePage").addClass("opa");
        $("#popUpAlert").show();
        $("#continuToChooseExactCar").on("click", function () {
            location.assign("exactCar.html?" + typeSelected)
        })
        $("#goBackToSelectSize").on("click", function () {
            $("#theWholePage").removeClass("opa");
            $("#popUpAlert").hide();
        })
    }

    $("#choosenMiniCars").on("click", function () {
        var typeSelected = "Mini"
        popUpAlertAndSendToNextStep(typeSelected);
    })

    $("#choosenFSCars").on("click", function () {
        var typeSelected = "FullSize"
        popUpAlertAndSendToNextStep(typeSelected);
    })

    $("#choosenSUVCars").on("click", function () {
        var typeSelected = "SUV"
        popUpAlertAndSendToNextStep(typeSelected);
    })

    $("#choosenLCars").on("click", function () {
        var typeSelected = "Luxury"
        popUpAlertAndSendToNextStep(typeSelected);
    })

    $("#xToGoBack").on("click", function () {
        $("#popUpAlert").hide();
        $("#theWholePage").removeClass("opa");
    })
})

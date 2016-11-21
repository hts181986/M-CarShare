$(document).ready(function () {
    var carArray = [];

    var carsClientWantsToSee = location.search;
    carsClientWantsToSee = carsClientWantsToSee.replace("?", "");

    var arrAllCars = JSON.parse(localStorage.getItem("allCarsMaxDetails"));
    for (var i = 0; i < arrAllCars.length; i++) {
        if (arrAllCars[i].carClass == carsClientWantsToSee) {
            carArray.push(arrAllCars[i]);
        }
    }

    $("#carOptionImg_1").attr("src", carArray[0].imgUrl);
    $("#carOptionNameAndModel_1").text(carArray[0].name + " " + carArray[0].model);
    $("#carOptionClass_1").text(carArray[0].carClass);
    $("#carOptionGear_1").text(carArray[0].gear);
    $("#carOptionYear_1").text(carArray[0].year);
    $("#carOptionCarNumber_1").text(carArray[0].carNumber);
    $("#carOptionPrice_1").text(carArray[0].price + "$ a Day");

    $("#carOptionImg_2").attr("src", carArray[1].imgUrl);
    $("#carOptionNameAndModel_2").text(carArray[1].name + " " + carArray[1].model);
    $("#carOptionClass_2").text(carArray[1].carClass);
    $("#carOptionGear_2").text(carArray[1].gear);
    $("#carOptionYear_2").text(carArray[1].year);
    $("#carOptionCarNumber_2").text(carArray[1].carNumber);
    $("#carOptionPrice_2").text(carArray[1].price + "$ a Day");

    $("#carOptionImg_3").attr("src", carArray[2].imgUrl);
    $("#carOptionNameAndModel_3").text(carArray[2].name + " " + carArray[2].model);
    $("#carOptionClass_3").text(carArray[2].carClass);
    $("#carOptionGear_3").text(carArray[2].gear);
    $("#carOptionYear_3").text(carArray[2].year);
    $("#carOptionCarNumber_3").text(carArray[2].carNumber);
    $("#carOptionPrice_3").text(carArray[2].price + "$ a Day");

    $("#carOptionImg_4").attr("src", carArray[3].imgUrl);
    $("#carOptionNameAndModel_4").text(carArray[3].name + " " + carArray[3].model);
    $("#carOptionClass_4").text(carArray[3].carClass);
    $("#carOptionGear_4").text(carArray[3].gear);
    $("#carOptionYear_4").text(carArray[3].year);
    $("#carOptionCarNumber_4").text(carArray[3].carNumber);
    $("#carOptionPrice_4").text(carArray[3].price + "$ a Day");
})

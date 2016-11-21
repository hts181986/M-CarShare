$(document).ready(function () {
    var arrM_cars = [];
    var arrFs_cars = [];
    var arrSuv_cars = [];
    var arrL_cars = [];

    var arrAllCars = JSON.parse(localStorage.getItem("allCarsMaxDetails"));
    for (var i = 0; i < arrAllCars.length; i++) {
        if (arrAllCars[i].carClass == "Mini") {
            arrM_cars.push(arrAllCars[i]);
        } else if (arrAllCars[i].carClass == "FullSize") {
            arrFs_cars.push(arrAllCars[i]);
        } else if (arrAllCars[i].carClass == "SUV") {
            arrSuv_cars.push(arrAllCars[i]);
        } else if (arrAllCars[i].carClass == "Luxury") {
            arrL_cars.push(arrAllCars[i]);
        }
    }

    var i = -1;
    var x = -1;
    var y = -1;
    var z = -1;
    /*set the first (its the last in array) img on page seen*/
    /*mini*/
    var lastIndexInArr1 = arrM_cars.length - 1;

    $("#bigImgMiniCar").attr("src", arrM_cars[lastIndexInArr1].imgUrl)
    $("#textForMiniCarInImg").text(arrM_cars[lastIndexInArr1].name + " " + arrM_cars[lastIndexInArr1].model + " " + arrM_cars[lastIndexInArr1].year);

    /*full size*/
    var lastIndexInArr2 = arrFs_cars.length - 1;
    $("#bigImgFullSizeCar").attr("src", arrFs_cars[lastIndexInArr2].imgUrl)
    $("#textForFullSizeCarInImg").text(arrFs_cars[lastIndexInArr2].name + " " + arrFs_cars[lastIndexInArr2].model + " " + arrM_cars[lastIndexInArr2].year);

    /*suv*/
    var lastIndexInArr3 = arrSuv_cars.length - 1;
    $("#bigImgSuv").attr("src", arrSuv_cars[lastIndexInArr3].imgUrl)
    $("#textForSUVCarInImg").text(arrSuv_cars[lastIndexInArr3].name + " " + arrSuv_cars[lastIndexInArr3].model + " " + arrM_cars[lastIndexInArr3].year);

    /*luxury*/
    var lastIndexInArr4 = arrL_cars.length - 1;
    $("#bigImgLuxuryCar").attr("src", arrL_cars[lastIndexInArr4].imgUrl)
    $("#textForLuxuryCarInImg").text(arrL_cars[lastIndexInArr4].name + " " + arrL_cars[lastIndexInArr4].model + " " + arrM_cars[lastIndexInArr4].year);

    /*calls the intervalfunction*/
    startTimer()

    function displayNextImageMini() {
        i = (i === arrM_cars.length - 1) ? 0 : i + 1;
        $("#bigImgMiniCar").attr("src", arrM_cars[i].imgUrl)
        $("#textForMiniCarInImg").text(arrM_cars[i].name + " " + arrM_cars[i].model + " " + arrM_cars[i].year);
    }

    function displayNextImageFullSize() {
        x = (x === arrFs_cars.length - 1) ? 0 : x + 1;
        $("#bigImgFullSizeCar").attr("src", arrFs_cars[x].imgUrl)
        $("#textForFullSizeCarInImg").text(arrFs_cars[x].name + " " + arrFs_cars[x].model + " " + arrFs_cars[x].year);
    }

    function displayNextImageSUV() {
        y = (y === arrSuv_cars.length - 1) ? 0 : y + 1;
        $("#bigImgSuv").attr("src", arrSuv_cars[y].imgUrl)
        $("#textForSUVCarInImg").text(arrSuv_cars[y].name + " " + arrSuv_cars[y].model + " " + arrSuv_cars[y].year);
    }

    function displayNextImageLuxury() {
        z = (z === arrL_cars.length - 1) ? 0 : z + 1;
        $("#bigImgLuxuryCar").attr("src", arrL_cars[z].imgUrl)
        $("#textForLuxuryCarInImg").text(arrL_cars[z].name + " " + arrL_cars[z].model + " " + arrL_cars[z].year);
    }

    function startTimer() {
        setInterval(displayNextImageMini, 4000);
        setInterval(displayNextImageFullSize, 4000);
        setInterval(displayNextImageSUV, 4000);
        setInterval(displayNextImageLuxury, 4000);
    }

    $(".homeMadeTitle").mousemove(function (event) {
        var text = $(this).attr("text");
        $("")
        $("#titel").show().text(text).css("left", event.clientX + 14).css("top", event.clientY + 10)
    }).mouseout(function () {
        $("#titel").hide()
    });
})

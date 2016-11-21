$(document).ready(function () {
/*    navigator.sayswho = (function () {
        var ua = navigator.userAgent,
            tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (M[1] !== 'Chrome') {
            location.replace("webSiteNotGood.html")
        }
    })();*/

    $("#signIn").on("click", function () {
        location.assign("sign%20in%20page.html?logIn");
    })

    $("#signUp").on("click", function () {
        location.assign("sign%20in%20page.html");
    })

    $("#modify").on("click", function () {
        $("#bookACar").hide();
        $("#modifyReservation").show();
    })
    $("#bookAcar2").on("click", function () {
        $("#modifyReservation").hide();
        $("#bookACar").show();
    })
    $("#returnToDiffrentLocationInput").change(function () {
        if ($(this).is(":checked")) {
            $("#selectBoxIfReturnToDiffrentLocation").show();
            $("#picUpReturnLocation").addClass("flex12");
            $("#picUpReturnDate").addClass("flex10");
            $("#carSize").addClass("flex6");
            $("#bookNowButton").addClass("flex3");
        } else {
            $("#selectBoxIfReturnToDiffrentLocation").hide();
            $("#picUpReturnLocation").removeClass("flex12");
            $("#picUpReturnDate").removeClass("flex10");
            $("#carSize").removeClass("flex6");
            $("#bookNowButton").removeClass("flex3");
        }
    })

    $("#selectPicUpLocation, #returnToDiffrentLocationInput, #selectReturnLocation,#pickUpDate , #pickUpHour , #returnDate , #returnHour").mousedown(function () {
        $("#warning").hide();
    });
})

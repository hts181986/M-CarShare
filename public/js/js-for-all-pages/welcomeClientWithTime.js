$(document).ready(function () {
    if (arrayWithCurrentUser.length > 0) {
        $("#showOnlyWhenLogedIn").show();
        $("#dontShowWhenLogedaiN").hide();
        $("#logIn").hide();
        $("#logOut").show();
        var fName = arrayWithCurrentUser[0].fName;
        var lName = arrayWithCurrentUser[0].lName;
        $("#slideToWelcomeClient").text("Welcome Mr. " + fName + " " + lName);
        $("#slideToWelcomeClient").slideDown(1000);

    } else {
        var fName = "";
    }
   

});

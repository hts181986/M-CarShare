$(document).ready(function () {
    $("#submitLogIn").on("click", function () {
        $("#noSuchAccount").show();
        var userNameHeWantsToGpInto = $("#userNameHeWantsToGpInto").val();
        var passwordHeEnterd = $("#passwordHeEnterd").val();
        for (i = 0; i < arrayWithAllUsers.length; i++) {
            var userNameInAraay = arrayWithAllUsers[i].usernameChoosen;
            var passwordInAraay = arrayWithAllUsers[i].firstPassword;
            if (userNameInAraay === userNameHeWantsToGpInto && passwordInAraay === passwordHeEnterd) {
                $("#noSuchAccount").hide();
                var arr = [arrayWithAllUsers[i]];
                createLocalStorageWithCurrentUser(arr);
                var goToLogInSection = window.location.search;
                if (goToLogInSection == "?coustumerNeedsToSignUpForBooking" || goToLogInSection == "?coustumerNeedsToLogInForBooking") {
                    location.replace("reviewAndBook.html");
                } else {
                    location.replace("index.html")
                }
            }
        }
    });
});

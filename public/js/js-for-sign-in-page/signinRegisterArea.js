$(document).ready(function () {
    $("#fName, #lName, #emailAdreess,#homePhone , #cellPhone , #DOB , #licenseNumber, #usernameChoosen , #firstPassword , #repetPassword").mousedown(function () {
        $("#notAlltInputsCoract").hide();
    });

    $("#signInPasswordShow, #passwordHeEnterd, #userNameHeWantsToGpInto").mousedown(function () {
        $("#noSuchAccount").hide();
    });

    var goToLogInSection = window.location.search;
    if (goToLogInSection == "?logIn" || goToLogInSection == "?coustumerNeedsToLogInForBooking") {
        $("#register").hide();
        $("#signin").show();
    }

    /*toggol between register to sign in*/
    /*logIn link When Email Is In Use*/
    $("#signIn, #logInWhenEmailIsInUse, #logInWhenUserNameInUse").on("click", function () {
        $("#register").hide();
        $("#signin").show();
    });
    $("#backToRegister").on("click", function () {
        $("#signin").hide();
        $("#register").show();
    });

    /*focus on top input*/
    $("#fName").focus();

    $("#firstPasswordShow").change(function () {
        if ($(this).is(":checked")) {
            $("#firstPassword").attr("type", "text");
        } else {
            $("#firstPassword").attr("type", "password");
        }
    })
    $("#secondPasswordShow").change(function () {
        if ($(this).is(":checked")) {
            $("#repetPassword").attr("type", "text");
        } else {
            $("#repetPassword").attr("type", "password");
        }
    })
    $("#signInPasswordShow").change(function () {
        if ($(this).is(":checked")) {
            $("#passwordHeEnterd").attr("type", "text");
        } else {
            $("#passwordHeEnterd").attr("type", "password");
        }
    })

});

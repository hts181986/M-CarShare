$(document).ready(function () {
    /*show a v when corect and a x when wrong*/
    $("#DOB").focusin(function () {
        $("#DOBBad").show();
    })

    $("#fName").keyup(function () {
        var fName = $("#fName").val();
        
        if (fName.length > 2) {
            $("#fNameGood").show();
            $("#fNameBad").hide();
        } else {
            $("#fNameGood").hide();
            $("#fNameBad").show();
        }
    });
    $("#lName").keyup(function () {
        var lName = $("#lName").val();
        if (lName.length > 2) {
            $("#lNameGood").show();
            $("#lNameBad").hide();
        } else {
            $("#lNameGood").hide();
            $("#lNameBad").show();
        }
    });
    $("#emailAdreess").keyup(function () {
        $("#emailInUse").hide();
        var emailAdreess = $("#emailAdreess").val();
        if (emailAdreess.indexOf("@") != -1) {
            $("#emailGood").show();
            $("#emailBad").hide();
            for (var i = 0; i < arrayWithAllUsers.length; i++) {
                var email = arrayWithAllUsers[i].emailAdreess;
                if (email === emailAdreess) {
                    $("#emailInUse").show();
                    $("#emailGood").hide();
                    $("#emailBad").show();
                }
            }
        } else {
            $("#emailGood").hide();
            $("#emailBad").show();
        }
    });

    $("#homePhone, #cellPhone").keyup(function () {
        var homePhone = $("#homePhone").val();
        var cellPhone = $("#cellPhone").val();
        if (homePhone.length > 8 || cellPhone.length > 8) {
            $("#homePhoneGood, #cellPhoneGood").show();
            $("#homePhoneBad, #cellPhoneBad").hide();
        } else {
            $("#homePhoneGood, #cellPhoneGood").hide();
            $("#homePhoneBad, #cellPhoneBad").show();
        }
    });
    $("#DOB").change(function () {
        var DOB = $("#DOB").val();
        if (DOB.length > 0) {
            $("#DOBGood").show();
            $("#DOBBad").hide();
        } else {
            $("#DOBGood").hide();
            $("#DOBBad").show();
        }
    });

    $("#licenseNumber").keyup(function () {
        var licenseNumber = $("#licenseNumber").val();
        if (licenseNumber.length > 4) {
            $("#licenseNumberGood").show();
            $("#licenseNumberBad").hide();
        } else {
            $("#licenseNumberGood").hide();
            $("#licenseNumberBad").show();
        }
    });
    $("#usernameChoosen").keyup(function () {
        $("#userNameInUse").hide();
        var usernameChoosen = $("#usernameChoosen").val();
        if (usernameChoosen.length > 5) {
            $("#usernameGood").show();
            $("#usernameBad").hide();
            for (var i = 0; i < arrayWithAllUsers.length; i++) {
                var userName = arrayWithAllUsers[i].usernameChoosen;
                if (userName === usernameChoosen) {
                    $("#userNameInUse").show();
                    $("#usernameGood").hide();
                    $("#usernameBad").show();
                    break;
                }
            }
        } else {
            $("#usernameGood").hide();
            $("#usernameBad").show();
        }
    });
    $("#firstPassword").keyup(function () {
        var firstPassword = $("#firstPassword").val();
        if (firstPassword.length > 5) {
            $("#passwordGood").show();
            $("#passwordBad").hide();
        } else {
            $("#passwordGood").hide();
            $("#passwordBad").show();
        }
    });
    $("#repetPassword").keyup(function () {
        var firstPassword = $("#firstPassword").val();
        var repetPassword = $("#repetPassword").val();
        if (firstPassword === repetPassword && repetPassword != "") {
            $("#repPasswordGood").show();
            $("#repPasswordBad").hide();
        } else {
            $("#repPasswordGood").hide();
            $("#repPasswordBad").show();
        }
    });
})

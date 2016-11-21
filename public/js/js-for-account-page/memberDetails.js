$(document).ready(function () {
    $("#fName").val(arrayWithCurrentUser[0].fName);
    $("#lName").val(arrayWithCurrentUser[0].lName);
    $("#emailAdreess").val(arrayWithCurrentUser[0].emailAdreess);
    $("#homePhone").val(arrayWithCurrentUser[0].homePhone);
    $("#cellPhone").val(arrayWithCurrentUser[0].cellPhone);
    $("#DOB").val(arrayWithCurrentUser[0].DOB);
    $("#licenseNumber").val(arrayWithCurrentUser[0].licenseNumber);
    $("#usernameChoosen").val(arrayWithCurrentUser[0].usernameChoosen);
    $("#firstPassword").val(arrayWithCurrentUser[0].firstPassword);
    $("#repetPassword").val(arrayWithCurrentUser[0].firstPassword);
    $("#fNameMember").text(arrayWithCurrentUser[0].fName);
    $("#lNameMember").text(arrayWithCurrentUser[0].lName);
    $("#emailMember").text(arrayWithCurrentUser[0].emailAdreess);
    $("#hPhoneMember").text(arrayWithCurrentUser[0].homePhone);
    $("#cPhoneMember").text(arrayWithCurrentUser[0].cellPhone);
    $("#DOBMember").text(arrayWithCurrentUser[0].DOB);
    $("#licenceNumberMember").text(arrayWithCurrentUser[0].licenseNumber);
    $("#userNameMember").text(arrayWithCurrentUser[0].usernameChoosen);
    $("#passwordMember").text(arrayWithCurrentUser[0].firstPassword);

    $("#changeAccountDetails").on("click", function () {
        $("#changeDetailsArea").slideDown("700")
    })
})

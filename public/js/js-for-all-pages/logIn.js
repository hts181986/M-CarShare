$(document).ready(function () {
    $("#logIn").on("click", function () {
        $("#register").hide();
        $("#signin").show();
        location.replace("sign%20in%20page.html?logIn");
    });
});

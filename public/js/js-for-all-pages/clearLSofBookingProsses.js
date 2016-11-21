$(document).ready(function () {
    $("#seeCarsPage").on("click", function () {
        if (localStorage.getItem("bookingDetails") !== null) {
            localStorage.removeItem("bookingDetails");
        }
    })
})

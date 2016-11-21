$(document).ready(function () {
    $("#logOut").click(function () {
        arrayWithCurrentUser.splice(0, 1);
        createLocalStorageWithCurrentUser(arrayWithCurrentUser);
        location.reload();
    });
})

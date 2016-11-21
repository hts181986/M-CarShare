function createLocalStorageWithAllUsers(arrayOfAllUsers) {
    var arrayInString = JSON.stringify(arrayOfAllUsers);
    localStorage.setItem("arrayOfAllUsers", arrayInString);
}

function createLocalStorageWithCurrentUser(arrayOfCurentUser) {
    var arrayInString = JSON.stringify(arrayOfCurentUser);
    localStorage.setItem("arrayOfCurentUser", arrayInString);
}

$(document).ready(function () {
    if (localStorage.getItem("arrayOfAllUsers") !== null) {
        var arrayOfAllUsersThatCameFromLocalStorage = JSON.parse(localStorage.getItem("arrayOfAllUsers"));
        for (var i = 0; i < arrayOfAllUsersThatCameFromLocalStorage.length; i++) {
            arrayWithAllUsers.push(arrayOfAllUsersThatCameFromLocalStorage[i]);
        }
    }
    if (localStorage.getItem("arrayOfCurentUser") !== null) {
        var arrayOfCurentUserThatCameFromLocalStorage = JSON.parse(localStorage.getItem("arrayOfCurentUser"));
        for (var i = 0; i < arrayOfCurentUserThatCameFromLocalStorage.length; i++) {
            arrayWithCurrentUser.push(arrayOfCurentUserThatCameFromLocalStorage[i]);
        }
    }
})

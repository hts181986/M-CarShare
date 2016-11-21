 function NewUser(fName, lName, emailAdreess, homePhone, cellPhone, DOB, licenseNumber, usernameChoosen, firstPassword) {
     this.fName = fName;
     this.lName = lName;
     this.emailAdreess = emailAdreess;
     this.homePhone = homePhone;
     this.cellPhone = cellPhone;
     this.DOB = DOB;
     this.licenseNumber = licenseNumber;
     this.usernameChoosen = usernameChoosen;
     this.firstPassword = firstPassword;
 }

 function whatHappensWhenClientLogsIn(curentLogIn) {
     var goToLogInSection = window.location.search;
     if (goToLogInSection == "?coustumerNeedsToSignUpForBooking" || goToLogInSection == "?coustumerNeedsToLogInForBooking") {
         location.replace("reviewAndBook.html");
     } else {
         location.replace("index.html")
     }

     /*replace makes that user cant go back to this page, assign would give this option*/
     $("#logIn").hide();
     $("#logOut").show();
 }

 $(document).ready(function () {
     $("#submitForm").on("click", function () {
         /*value of all inputs*/
         var fName = $("#fName").val();
         var lName = $("#lName").val();
         var emailAdreess = $("#emailAdreess").val();
         var homePhone = $("#homePhone").val();
         var cellPhone = $("#cellPhone").val();
         var DOB = $("#DOB").val();
         var licenseNumber = $("#licenseNumber").val();
         var usernameChoosen = $("#usernameChoosen").val();
         var firstPassword = $("#firstPassword").val();
         var repetPassword = $("#repetPassword").val();

         /*validation that all inputs are filled up*/
         if (fName.length > 2 && lName.length > 2 && emailAdreess.indexOf("@") != -1 && (homePhone.length > 8 || cellPhone.length > 8) && DOB.length > 0 && licenseNumber.length > 4 && usernameChoosen.length > 5 && firstPassword.length > 5 && (firstPassword === repetPassword && repetPassword != "")) {

             /*validate that there is no email or user name the same*/
             if (arrayWithAllUsers.length > 0) {
                 for (var i = 0; i < arrayWithAllUsers.length; i++) {
                     var email = arrayWithAllUsers[i].emailAdreess;
                     var userName = arrayWithAllUsers[i].usernameChoosen;
                     if (userName === usernameChoosen || email === emailAdreess) {
                         $("#notAlltInputsCoract").show();
                         break;
                     } else {
                         buildUser();
                         break;
                     }
                 }
             } else {
                 buildUser();
             }

         } else {
             $("#notAlltInputsCoract").show();
         }

         function buildUser() {
             var curentEnterey = new NewUser(fName, lName, emailAdreess, homePhone, cellPhone, DOB, licenseNumber, usernameChoosen, firstPassword);
             arrayWithAllUsers.push(curentEnterey);
             arrayWithCurrentUser.splice(0, 100);
             arrayWithCurrentUser.push(curentEnterey);
             createLocalStorageWithAllUsers(arrayWithAllUsers);
             createLocalStorageWithCurrentUser(arrayWithCurrentUser);
             whatHappensWhenClientLogsIn();
         }
     });
 })

/**
 * @file authState.js
 * @author Sanjay Sunil
 * @license MIT
 */

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var user = firebase.auth().currentUser;
    globalEmail = user.email;
    if (user != null) {
      var email_id = user.email;
      var email_verified = user.emailVerified;
      if (email_verified != true) {
        // User Verification Box displayed
        console.log("Waiting for verification ...")
        document.getElementById("user-div").style.display = "none";
        document.getElementById("login-div").style.display = "none";
        document.getElementById("registration-div").style.display = "none";
        document.getElementById("send-verification-div").style.display =
          "block";
        document.getElementById("user_para").innerHTML = "Email : " + email_id;
        send_verification();
      } else {
        // User is logged in
        console.log("User is logged in.")
        successNotification("Welcome, " + email_id + "!")
        document.getElementById("user-div").style.display = "block";
        document.getElementById("login-div").style.display = "none";
        document.getElementById("registration-div").style.display = "none";
        document.getElementById("send-verification-div").style.display = "none";
        document.getElementById("user_email_show").innerHTML = email_id;
      }
    }
  } else {
    // No user is signed in.
    console.log("You are currently not logged in to any account.")
    document.getElementById("user-div").style.display = "none";
    document.getElementById("login-div").style.display = "block";
    document.getElementById("registration-div").style.display = "none";
    document.getElementById("send-verification-div").style.display = "none";
  }
});

function reg_account() {
  document.getElementById("registration-div").style.display = "block";
  document.getElementById("login-div").style.display = "none";
  document.getElementById("send-verification-div").style.display = "none";
}
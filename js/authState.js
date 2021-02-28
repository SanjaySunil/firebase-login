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
        document.getElementById("user-div").style.display = "none";
        document.getElementById("login-div").style.display = "none";
        document.getElementById("registration-div").style.display = "none";
        document.getElementById("send-verification-div").style.display =
          "block";
        document.getElementById("user_para").innerHTML = "Email : " + email_id;
        send_verification();
      } else {
        // User is logged in
        new Noty({
          type: 'success',
          theme: "nest",
          closeWith: ['button'],
          text: "Welcome, " + email_id + "!",
          timeout: 5000,
          progressBar: true
        }).show()
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
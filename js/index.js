/**
 * @file index.js
 * @author Sanjay Sunil (a.k.a D3VSJ)
 * @license MIT
 */

let globalEmail = "";

function login() {
  console.log('Attempting to login user ...')
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(userEmail, userPass);
  promise.then((response) => {
    globalEmail = response.user.email;
  });
  promise.catch((err) => new Noty({
    type: 'error',
    theme: "nest",
    closeWith: ['button'],
    text: err.message,
    timeout: 5000,
    progressBar: true
  }).show());
}

function logout() {
  firebase.auth().signOut();
  new Noty({
    type: 'success',
    theme: "nest",
    closeWith: ['button'],
    text: 'Successfully logged out!',
    timeout: 5000,
    progressBar: true
  }).show()
}

function registration() {
  console.log('Attempting to register user ...')
  var user_email = document.getElementById("user_email").value;
  var user_password = document.getElementById("user_password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  if (user_password != confirm_password) {
    new Noty({
      type: 'error',
      theme: "nest",
      closeWith: ['button'],
      text: "Passwords do not match!",
      timeout: 5000,
      progressBar: true
    }).show();
} else {
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(user_email, user_password);
  promise.catch((err) =>
    new Noty({
      type: 'error',
      theme: "nest",
      closeWith: ['button'],
      text: err.message,
      timeout: 5000,
      progressBar: true
    }).show());
}
}

function send_verification() {
  new Noty({
    type: 'success',
    theme: "nest",
    closeWith: ['button'],
    text: "Verification email has successfully been sent!",
    timeout: 5000,
    progressBar: true
  }).show()
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {}).catch((err) =>
    new Noty({
      type: 'error',
      theme: "nest",
      closeWith: ['button'],
      text: err.message,
      timeout: 5000,
      progressBar: true
    }).show());
}


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
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

function myFunction_reload() {
  window.location.reload();
}

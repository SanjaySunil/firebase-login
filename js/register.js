/**
 * @file register.js
 * @author Sanjay Sunil
 * @license MIT
 */

function registration() {
  console.log('Attempting to register user ...')
  var user_email = document.getElementById("user_email").value;
  var user_password = document.getElementById("user_password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  if (user_password !== confirm_password) {
    errorNotification("Passwords do not match!")
  } else {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(user_email, user_password);
    promise.catch((err) => errorNotification(err.message))
  }
}
/**
 * @file sendVerification.js
 * @author Sanjay Sunil
 * @license MIT
 */

function send_verification() {
  successNotification("Verification email has successfully been sent!")
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => { }).catch((err) => errorNotification(err.message));
}
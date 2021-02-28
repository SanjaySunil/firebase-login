/**
 * @file sendVerification.js
 * @author Sanjay Sunil
 * @license MIT
 */

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
  user.sendEmailVerification().then(() => { }).catch((err) =>
    new Noty({
      type: 'error',
      theme: "nest",
      closeWith: ['button'],
      text: err.message,
      timeout: 5000,
      progressBar: true
    }).show());
}
/**
 * @file logout.js
 * @author Sanjay Sunil
 * @license MIT
 */

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
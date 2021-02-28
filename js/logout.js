/**
 * @file logout.js
 * @author Sanjay Sunil
 * @license MIT
 */

function logout() {
  firebase.auth().signOut();
  successNotification("Successfully logged out!")
}
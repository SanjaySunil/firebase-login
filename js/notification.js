/**
 * @file notificaton.js
 * @author Sanjay Sunil
 * @license MIT
 */

function successNotification(message) {
  new Noty({
    type: 'success',
    theme: "nest",
    closeWith: ['button'],
    text: message,
    timeout: 5000,
    progressBar: true
  }).show()
}

function errorNotification(message) {
  new Noty({
    type: 'error',
    theme: "nest",
    closeWith: ['button'],
    text: message,
    timeout: 5000,
    progressBar: true
  }).show()
}
const socket = io('http://localhost:8000');

const form = document.getElementsByClassName('message-form');
const messageInput = document.getElementById('message-input');
const message = document.getElementsByClassName('messages');
const naam=prompt("Enter your name to join");
socket.emit('new-user-joined',naam); //sending this name to socket i.e, index.js in nodeServer
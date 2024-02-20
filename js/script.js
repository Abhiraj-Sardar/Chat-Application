document.querySelector('.message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const messageInput = document.querySelector('#message-input');
    const message = messageInput.value.trim();
    if (message) {
      const messages = document.querySelector('.messages');
      const newMessage = document.createElement('div');
      newMessage.textContent = message;
      messages.appendChild(newMessage);
      messageInput.value = '';
    }
  });
function sendMessage() {
    const input = document.getElementById("chatInput");
    const chatBox = document.getElementById("chatBox");
    if (input.value.trim() !== "") {
      const message = document.createElement("div");
      message.innerHTML = `<strong>You:</strong> ${input.value}`;
      chatBox.appendChild(message); 
      input.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }

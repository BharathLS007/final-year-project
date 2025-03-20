document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.querySelector("button");
    const inputField = document.querySelector("input");
    const messageContainer = document.querySelector(".messages");

    if (sendButton && inputField && messageContainer) {
        sendButton.addEventListener("click", function() {
            let userMessage = inputField.value.trim();
            if (userMessage !== "") {
                let messageElement = document.createElement("div");
                messageElement.classList.add("user-message");
                messageElement.textContent = userMessage;
                messageContainer.appendChild(messageElement);
                inputField.value = "";
            }
        });
    }
});

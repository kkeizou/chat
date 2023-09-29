document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.querySelector(".chat-messages");
    const speakerSelect = document.getElementById("speaker-select");

    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value;
        const selectedSpeaker = speakerSelect.value;

        if (messageText.trim() !== "") {
            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messageText;
            messageElement.style.color = getSpeakerColor(selectedSpeaker); // テキストの色を設定
            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;

            const speakerElement = document.createElement("div");
            speakerElement.classList.add("speaker");
            speakerElement.setAttribute("data-speaker", selectedSpeaker);
            speakerElement.textContent = `${selectedSpeaker}が言いました:`;
            chatMessages.appendChild(speakerElement);
        }
    });

    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });

    // スピーカーの色を取得する関数
    function getSpeakerColor(speaker) {
        switch (speaker) {
            case "りんごさん":
                return "red";
            case "みかんさん":
                return "orange";
            case "ばななさん":
                return "yellow";
            default:
                return "black"; // デフォルトは黒色
        }
    }
});

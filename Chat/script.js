document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.querySelector(".chat-messages");
    const speakerSelect = document.getElementById("speaker-select");

    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value;
        const selectedSpeaker = speakerSelect.value;

        if (messageText.trim() !== "") {
            const speakerElement = document.createElement("div");
            speakerElement.classList.add("speaker");
            speakerElement.setAttribute("data-speaker", selectedSpeaker);
            //speakerElement.textContent = `${selectedSpeaker}が言いました:`;
            chatMessages.appendChild(speakerElement);

            const messageElement = document.createElement("div");
            messageElement.classList.add("message");
            messageElement.textContent = messageText;
            messageElement.style.color = getSpeakerColor(selectedSpeaker);
            // オフセットを設定
            let offset = 0;
            switch (selectedSpeaker) {
                case "りんごさん":
                    offset = 10;
                    break;
                case "みかんさん":
                    offset = 20;
                    break;
                case "ぶどうさん":
                    offset = 30;
                    break;
                default:
                    offset = 0;
            }

            // オフセットを適用
            messageElement.style.marginLeft = offset + "px";

            chatMessages.appendChild(messageElement);
            messageInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;


        }
    });

    /* //enterで送信 基本コメントアウト
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
    */

    function getSpeakerColor(speaker) {
        switch (speaker) {
            case "りんごさん":
                return "red";
            case "みかんさん":
                return "orange";
            case "ぶどうさん":
                return "purple";
            default:
                return "black";
        }
    }
});

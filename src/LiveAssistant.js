import "./css/chatbox.css";
import { useRef } from "react";

//const loadingConversation = document.querySelector(".loading-bubbles");

function LiveAssistant() {
  const chatBoxRef = useRef(null);
  var chatbox = null;
  function appendMessage(sender, message, senderClass) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(senderClass);
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageElement);
  }

  function sendMessage() {
    chatbox = chatBoxRef.current;
    const userInput = document.getElementById("userInput");
    const loader = document.getElementById("loading-bubbles");
    const message = userInput.value;
    appendMessage("You", message, "user-message");
    chatbox.appendChild(loader);
    loader.style.display = "inline-flex";
    userInput.value = "";
    const userMessageObj = {
      userMessage: message,
    };

    fetch("faqappservice.azurewebsites.net/api/FAQ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(userMessageObj),
    })
      .then((response) => response.text())
      .then((data) => {
        loader.style.display = "none";
        const botMessage = data || "Sorry, I don't have an answer for that.";
        appendMessage("TheManeAllureGPT", botMessage, "assistant-message");
      })
      .catch((err) => {
        const botMessage =
          "Oops, something went wrong 😭, let's try again later!";
        loader.style.display = "none";
        appendMessage("TheManeAllureGPT", botMessage, "assistant-message");
      });
  }

  return (
    <section id="chat" className="container mx-auto my-8 text-black bg-black">
      <h2 className="text-6xl font-bold mb-4 text-center text-white shadow-sm shadow-white">
        ManeGPT
      </h2>
      <div className="max-w-md mx-auto bg-white p-4 rounded-md shadow-md">
        <div
          className="message-container"
          id="messageContainer"
          ref={chatBoxRef}
        >
          <div className="assistant-message message bg-blue-200 rounded-md p-4 mb-2">
            <strong>ManeGPT:</strong> How can I assist you today?
          </div>
          <div className="user-message hidden message text-right rounded-md p-4 mb-2"></div>
          {/* <!--<div className="user-message text-right bg-gray-400 rounded-md p-4 mb-2">Lorem ipsum?</div>
                <div className="assistant-message bg-blue-200 rounded-md p-4 mb-2">Pellentesque habitant morbi tristique
                    senectus et netus et
                    malesuada fames ac turpis egestas.</div> --> */}
          {/* <!-- More messages can be added here --> */}
          <div
            className="loading-bubbles items-center justify-center mt-4"
            id="loading-bubbles"
          >
            <div className="bubble bg-blue-200 w-4 h-4 rounded-full mr-2 animate-bubble"></div>
            <div className="bubble bg-blue-200 w-4 h-4 rounded-full mr-2 animate-bubble"></div>
            <div className="bubble bg-blue-200 w-4 h-4 rounded-full animate-bubble"></div>
          </div>
        </div>
        <div className="message-input mt-4">
          <div className="flex">
            <input
              type="text"
              id="userInput"
              className="flex-1 border-2 rounded-l-lg p-2"
              placeholder="Type your message..."
            />
            <button
              className="bg-green-900 text-white rounded-r-md p-2"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveAssistant;

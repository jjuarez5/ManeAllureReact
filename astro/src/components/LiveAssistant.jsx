import { useEffect, useRef, useState } from "react";

const FAQ_ENDPOINT = "https://faqappservice.azurewebsites.net/api/FAQ";

const GREETING = {
  sender: "ManeGPT",
  text: "How can I assist you today?",
  role: "assistant",
};

/**
 * The only interactive component on the site, hydrated as an Astro island.
 *
 * The CRA original drove the DOM directly (createElement / getElementById /
 * innerHTML). That fights React and breaks if the component hydrates twice, so
 * the message list is React state here instead.
 */
export default function LiveAssistant() {
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, pending]);

  async function sendMessage() {
    const message = input.trim();
    if (!message || pending) return;

    setMessages((prev) => [
      ...prev,
      { sender: "You", text: message, role: "user" },
    ]);
    setInput("");
    setPending(true);

    try {
      const response = await fetch(FAQ_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({ userMessage: message }),
      });
      const data = await response.text();
      setMessages((prev) => [
        ...prev,
        {
          sender: "ManeGPT",
          text: data || "Sorry, I don't have an answer for that.",
          role: "assistant",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ManeGPT",
          text: "Oops, something went wrong 😭, let's try again later!",
          role: "assistant",
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="chat" className="px-4 py-16">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="pixel-kicker">LEVEL 05</p>
        <h2 className="pixel-title mt-3 font-pixel text-2xl sm:text-4xl">
          ASK MANEGPT
        </h2>
      </div>

      <div className="pixel-window mx-auto max-w-2xl">
        <div className="pixel-window__bar">
          <span>MANEGPT.EXE</span>
          <span className="flex gap-1">
            <span className="pixel-window__btn" />
            <span className="pixel-window__btn" />
            <span className="pixel-window__btn" />
          </span>
        </div>

        <div className="pixel-window__body">
        <div className="message-container" ref={containerRef}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={
                message.role === "user"
                  ? "user-message message"
                  : "assistant-message message"
              }
            >
              <strong>{message.sender}:</strong> {message.text}
            </div>
          ))}

          {pending && (
            <div
              className="loading-bubbles items-center justify-center mt-4"
              style={{ display: "inline-flex" }}
            >
              <div className="bubble" />
              <div className="bubble" />
              <div className="bubble" />
            </div>
          )}
        </div>

        <div className="message-input mt-4">
          <div className="flex">
            <input
              type="text"
              id="userInput"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendMessage();
              }}
              aria-label="Ask ManeGPT a question"
              className="flex-1 p-2"
              placeholder="Type your message..."
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={pending}
              className="pixel-btn pixel-btn--pink ml-3 disabled:opacity-60"
            >
              SEND
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

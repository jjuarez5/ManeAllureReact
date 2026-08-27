import { useEffect, useRef, useState } from "react";

const FAQ_ENDPOINT = "https://faqappservice.azurewebsites.net/api/FAQ";

const GREETING = {
  sender: "ManeGPT",
  text: "How can I assist you today?",
  role: "assistant",
};

/** Inline tags the FAQ service is allowed to send. Everything else is dropped. */
const ALLOWED_TAGS = new Set(["A", "B", "STRONG", "I", "EM", "BR", "P"]);
const ALLOWED_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);
/** Dropped with their contents, rather than unwrapped to text. */
const STRIPPED_TAGS = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED"]);

/**
 * The FAQ backend returns HTML (links to booking and Instagram), so the text
 * cannot simply be printed -- React would escape it and the user would see raw
 * <a href=...> markup.
 *
 * It also cannot be passed to dangerouslySetInnerHTML: the response is remote
 * input, and one compromised or malformed reply would inject script into the
 * page. So the markup is parsed and rebuilt from an allowlist, keeping only
 * safe inline tags and http(s)/mailto/tel links.
 *
 * Incoming `class` attributes are deliberately ignored -- the service sends
 * class='text-white', which is invisible against these message bubbles.
 */
function renderRichText(html, keyPrefix = "n") {
  // Runs during the static build too, where DOMParser does not exist. The only
  // message rendered then is the plain-text greeting.
  if (typeof DOMParser === "undefined") return html;

  let body;
  try {
    body = new DOMParser().parseFromString(String(html), "text/html").body;
  } catch {
    return html;
  }

  const convert = (nodes) =>
    Array.from(nodes).map((node, index) => {
      const key = `${keyPrefix}-${index}`;

      if (node.nodeType === Node.TEXT_NODE) return node.textContent;
      if (node.nodeType !== Node.ELEMENT_NODE) return null;

      const tag = node.tagName;

      // Executable/embedded content: drop the node and everything in it, so
      // script bodies don't leak through as visible text.
      if (STRIPPED_TAGS.has(tag)) return null;

      // Unknown tag: drop the wrapper, keep the text inside it.
      if (!ALLOWED_TAGS.has(tag)) return convert(node.childNodes);

      if (tag === "BR") return <br key={key} />;

      if (tag === "A") {
        let href;
        try {
          href = new URL(node.getAttribute("href"), window.location.origin);
        } catch {
          return convert(node.childNodes); // unparseable href -> plain text
        }
        if (!ALLOWED_PROTOCOLS.has(href.protocol)) {
          return convert(node.childNodes);
        }
        return (
          <a
            key={key}
            href={href.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-2 underline-offset-2"
          >
            {convert(node.childNodes)}
          </a>
        );
      }

      const Tag = tag.toLowerCase();
      return <Tag key={key}>{convert(node.childNodes)}</Tag>;
    });

  return convert(body.childNodes);
}

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
              <strong>{message.sender}:</strong>{" "}
              {renderRichText(message.text, `m${index}`)}
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

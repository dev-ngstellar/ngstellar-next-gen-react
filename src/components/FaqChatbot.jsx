import { useState, useRef, useEffect, useMemo } from "react";
import faqData from "./faq-data.json";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";

export default function FaqChatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi there! How can I help you today?",
      sender: "bot",
    },
  ]);
  const messagesEndRef = useRef(null);

  // Initialize Fuse instance with tuned settings
  const fuse = useMemo(() => {
    return new Fuse(faqData, {
      keys: [
        { name: "keywords", weight: 0.6 }, // Increased weight for keywords
        { name: "question", weight: 0.4 },
        { name: "answer", weight: 0.1 }, // Lowered weight for answer text
      ],
      threshold: 0.5, // Relaxed threshold for better matching
      includeScore: true,
      ignoreLocation: true,
      minMatchCharLength: 3,
    });
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMessage = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponseText = "";
      let options = undefined;
      const lowerText = text.toLowerCase().trim();

      // 1. Check for greetings FIRST (Exact or start of sentence)
      const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon"];
      const isGreeting = greetings.some(g => lowerText === g || lowerText.startsWith(`${g} `));

      if (isGreeting) {
        botResponseText = "Hello! Feel free to ask me anything about our services.";
      } else {
        // 2. Check for EXACT match first (for chips)
        const exactMatch = faqData.find(item => 
          item.question.toLowerCase() === lowerText || 
          item.question === text
        );

        if (exactMatch) {
          botResponseText = exactMatch.answer;
          options = exactMatch.options; // Use options from the matched item
        } else {
          // 3. Fuzzy search using Fuse.js
          const results = fuse.search(text);
          console.log("Search results for:", text, results);

          // Filter results by score if needed
          const bestMatch = results.length > 0 ? results[0] : null;

          if (bestMatch && bestMatch.item) {
               botResponseText = bestMatch.item.answer;
               options = bestMatch.item.options; // Use options from the matched item
          } else {
               // 4. Fallback logic
               botResponseText = "I'm sorry, I didn't quite catch that. Here are some topics I can help with:";
               options = [
                  "What services do you offer?",
                  "I need a website",
                  "I need a mobile app",
                  "What is your timeline?",
               ];
          }
        }
      }

      const newBotMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: "bot",
        options: options,
      };
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1000); // Slightly longer delay for "typing" effect
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage(inputValue);
    }
  };

  return (
    <>
      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 20px;
        }
        .scrollbar-thin:hover::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[50] flex flex-col items-start pointer-events-none">
      {/* Chat Window */}
      <div
        className={`mb-4 flex h-[500px] w-80 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "translate-y-10 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 p-4 text-white">
          <div>
            <h3 className="text-lg font-bold">NG Stellar Support</h3>
            <p className="text-xs text-white/80">We usually reply instantly</p>
          </div>
          <button
            onClick={toggleChat}
            className="rounded-full p-1 text-white transition hover:bg-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 scrollbar-thin">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-3 flex flex-col ${
                msg.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 text-white rounded-br-none shadow-md"
                    : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              {/* Suggestion Chips */}
              {msg.options && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {msg.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(option)}
                      className="rounded-full border border-fuchsia-200 bg-white px-3 py-1 text-xs font-medium text-fuchsia-600 transition hover:bg-fuchsia-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="mb-3 flex items-start">
               <div className="bg-white text-gray-800 shadow-sm border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
                 <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                 </div>
               </div>
            </div>
          )}

          {/* Initial Suggested Questions (only show if just welcome message) */}
          {messages.length === 1 && !isTyping && (
             <div className="mt-4 flex flex-col gap-2">
                <p className="text-xs font-medium text-gray-400 mb-1">Suggested Questions:</p>
                {faqData.slice(0, 4).map(faq => (
                    <button 
                        key={faq.id}
                        onClick={() => handleSendMessage(faq.question)}
                        className="text-left text-xs bg-white border border-fuchsia-100 text-fuchsia-600 px-3 py-2 rounded-lg hover:bg-fuchsia-50 transition"
                    >
                        {faq.question}
                    </button>
                ))}
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-100 bg-white p-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-800 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 text-white transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-fuchsia-500/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <div className="mt-2 text-center">
             <p className="text-[10px] text-gray-400">Powered by NG Stellar</p>
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 pointer-events-auto ${
          isOpen ? "bg-gray-800 text-white rotate-90" : "bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 text-white shadow-fuchsia-500/40"
        }`}
        aria-label="Open FAQ Chatbot"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
    </>
  );
}

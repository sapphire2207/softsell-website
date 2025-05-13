import React, { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent, ChangeEvent } from 'react';
import { MessageCircle, Send, X, User } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! How can I help you with selling your software licenses?", sender: 'bot' }
  ]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (): void => {
    if (message.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { id: prev.length + 1, text: message, sender: 'user' }]);
    setMessage('');
    setIsTyping(true);

    // Simulate bot response with hardcoded messages
    const botResponses = [
      "Great question! We support licenses from major vendors like Microsoft, Adobe, and Oracle.",
      "Our valuation process is quick and transparent. We'll provide a quote within minutes.",
      "Yes, we handle bulk license sales for businesses of all sizes.",
      "Our team specializes in getting the maximum value for your unused software licenses."
    ];

    const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

    // Add bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: prev.length + 2, text: randomResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Button */}
      <div 
        className={`shadow-2xl transition-all duration-300 ${isOpen ? 'transform translate-y-3' : ''}`}
        style={{ filter: isOpen ? 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))' : 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.1))' }}
      >
        <button
          style={{ 
            animation: !isOpen && !messages.some(m => m.sender === 'user') 
              ? "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" 
              : "none" 
          }}
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center justify-center 
            bg-gradient-to-r from-blue-600 to-blue-500
            text-white p-4 rounded-full shadow-lg
            hover:from-blue-700 hover:to-blue-600
            transition-all duration-300
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          style={{
            animation: "fadeIn 0.3s ease-out forwards",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4">
            <div className="flex items-center">
              <div>
                <h3 className="font-bold text-lg">SoftSell Support</h3>
                <p className="text-xs text-blue-100 opacity-90">Online | Typically replies within minutes</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 flex-shrink-0">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tr-none shadow-md'
                      : 'bg-white text-gray-800 rounded-tl-none shadow-md border border-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
                    <User size={16} className="text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 flex-shrink-0">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div className="p-3 rounded-2xl max-w-[80%] bg-white text-gray-800 rounded-tl-none shadow-md border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex items-center bg-gray-50 rounded-full pr-2">
              <input
                type="text"
                ref={inputRef}
                value={message}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                onKeyPress={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-grow p-3 bg-transparent rounded-l-full focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={message.trim() === ''}
                className={`
                  flex items-center justify-center
                  w-10 h-10 rounded-full p-2
                  ${message.trim() === '' ? 'bg-gray-200 text-gray-400' : 'bg-blue-600 text-white hover:bg-blue-700'}
                  transition-colors duration-200
                `}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-xs text-gray-400">
                Powered by SoftSell • <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;
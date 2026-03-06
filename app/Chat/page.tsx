"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot, MessageCircle, X } from "lucide-react";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

/**
 * Chat Plugin Component
 * 
 * This component is designed to be a standalone, "copy-paste" plugin.
 * It handles its own state, colors, and toggle logic.
 * No props are required for basic functionality.
 */
export default function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Hello! How can I help you today?",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Industry Standard Design Configuration
    const PRIMARY_COLOR = "#4c2cee"; // Meituan Brand Red
    const SECONDARY_COLOR = "#F4F4F5";
    const ACCENT_GREEN = "#10B981";

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        // Simulated Bot Response
        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "I'm a standalone chat plugin. I can be easily integrated into any web page!",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiMessage]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans select-none">
            {/* Chat Window Container */}
            {isOpen && (
                <div
                    className="flex flex-col h-[500px] w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-6 duration-300 ease-out origin-bottom-right"
                    style={{ "--plugin-primary": PRIMARY_COLOR } as React.CSSProperties}
                >
                    {/* Plugin Header */}
                    <div className="bg-[var(--plugin-primary)] p-4 flex items-center justify-between text-white shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                                <Bot size={22} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-sm tracking-tight uppercase">Support Bot</span>
                                <div className="flex items-center gap-1.5 leading-none">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                    <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Active</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-all active:scale-95"
                            aria-label="Close Chat"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Custom Scrollbar Styles */}
                    <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 5px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f1f1;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: ${PRIMARY_COLOR};
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              filter: brightness(0.9);
            }
          `}</style>

                    {/* Message Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30 custom-scrollbar">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in duration-200`}
                            >
                                <div className={`p-3 rounded-2xl text-sm leading-relaxed max-w-[85%] shadow-sm ${message.role === "user"
                                    ? "bg-[var(--plugin-primary)] text-white rounded-tr-none font-medium"
                                    : "bg-white text-gray-800 rounded-tl-none border border-gray-100 font-medium"
                                    }`}>
                                    {message.content}
                                    <div className={`text-[9px] mt-1.5 opacity-50 font-bold ${message.role === "user" ? "text-right" : "text-left"}`}>
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100">
                        <div className="flex gap-2 items-center bg-gray-100 rounded-xl px-3 py-1.5 transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-[var(--plugin-primary)]/10 border border-transparent focus-within:border-[var(--plugin-primary)]/20">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                placeholder="How can we help?"
                                className="flex-1 bg-transparent border-none focus:outline-none text-xs font-semibold text-gray-700 placeholder:text-gray-400"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="p-2 rounded-lg bg-[var(--plugin-primary)] text-white hover:opacity-90 active:scale-90 transition-all disabled:bg-gray-300 shadow-lg disabled:shadow-none"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] flex items-center justify-center text-white transition-all transform hover:scale-110 active:scale-95 group relative overflow-hidden"
                style={{ backgroundColor: PRIMARY_COLOR }}
                aria-label={isOpen ? "Close Chat" : "Open Chat"}
            >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isOpen ? (
                    <X size={24} strokeWidth={2.5} />
                ) : (
                    <MessageCircle size={24} strokeWidth={2.5} className="animate-bounce" />
                )}
            </button>
        </div>
    );
}

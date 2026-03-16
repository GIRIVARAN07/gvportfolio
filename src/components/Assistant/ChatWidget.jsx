import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hello! I'm Girivaran's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', text: input }]);
    setInput("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I'm currently in 'Demo Mode'. In the full version, I can answer specific questions about Girivaran's projects, skills, and availability!" 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] shadow-2xl"
          >
            <GlassCard className="p-0 border-crimson-red/30">
              {/* Header */}
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-crimson-red/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-crimson-red rounded-full flex items-center justify-center">
                    <Bot size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">AI Assistant</div>
                    <div className="text-[10px] text-crimson-red animate-pulse">Online</div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="h-[300px] overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-crimson-red text-white rounded-tr-none' 
                        : 'bg-white/5 text-white/80 border border-white/10 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10 flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask something..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-crimson-red/50"
                />
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 bg-crimson-red rounded-full flex items-center justify-center text-white hover:bg-crimson-red/80 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-crimson-red rounded-full shadow-red-glow flex items-center justify-center text-white z-50 relative"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </motion.button>
    </div>
  );
};

export default ChatAssistant;

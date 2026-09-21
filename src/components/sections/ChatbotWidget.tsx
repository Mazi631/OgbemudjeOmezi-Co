import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Calendar, Bot } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  showApptBtn?: boolean;
}

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const [apptForm, setApptForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: 'consultation',
  });
  const [bookingLoading, setBookingLoading] = useState(false);

  const msgsEndRef = useRef<HTMLDivElement>(null);
  const [clientId] = useState(() => {
    try {
      const stored = localStorage.getItem('ocw_client_id');
      if (stored) return stored;
      const newId = 'web_' + Math.random().toString(36).substring(2, 11);
      localStorage.setItem('ocw_client_id', newId);
      return newId;
    } catch {
      return 'web_' + Math.random().toString(36).substring(2, 11);
    }
  });

  const scrollToBottom = () => {
    msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showBookingForm]);

  const toggleChat = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState && messages.length === 0) {
      setMessages([
        {
          id: '1',
          sender: 'bot',
          text: "Hello! I'm Amaka, legal assistant for Ogbemudje, Omezi & Co. How can I assist you with your legal needs today?",
          showApptBtn: true,
        },
      ]);
    }
  };

  const handleSend = async () => {
    if (!inputVal.trim()) return;

    const userText = inputVal.trim();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    try {
      const res = await fetch('https://obeksai.pythonanywhere.com/api/website/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          ai_id: 'bd64a448-2a4e-4d44-a654-ea05fcb6dcec',
          user_id: '5da6f04a-fc9b-45f1-a4c2-d94012e52c4c',
          client_id: clientId,
          conversation_id: `website_5da6f04a-fc9b-45f1-a4c2-d94012e52c4c_bd64a448-2a4e-4d44-a654-ea05fcb6dcec_${clientId}`,
        }),
      });

      const data = await res.json();
      setIsTyping(false);

      const needsAppt = /appoint|book|schedul/i.test(userText);
      if (data.success) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: data.response,
            showApptBtn: needsAppt,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Sorry, something went wrong. Please try again.',
          },
        ]);
      }
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Connection error. Please try again.',
        },
      ]);
    }
  };

  const handleApptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apptForm.name || !apptForm.email || !apptForm.date || !apptForm.time) {
      alert('Please fill in all fields.');
      return;
    }

    setBookingLoading(true);

    try {
      const res = await fetch('https://obeksai.pythonanywhere.com/api/website/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          client_name: apptForm.name,
          client_email: apptForm.email,
          service_type: apptForm.service,
          date: apptForm.date,
          time: apptForm.time,
          duration: 60,
          notes: 'Booked via website chatbot',
          ai_id: 'bd64a448-2a4e-4d44-a654-ea05fcb6dcec',
          user_id: '5da6f04a-fc9b-45f1-a4c2-d94012e52c4c',
        }),
      });

      const data = await res.json();
      setBookingLoading(false);
      setShowBookingForm(false);

      if (data.success) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: `✅ Appointment successfully booked for ${apptForm.date} at ${apptForm.time}. Confirmation sent to ${apptForm.email}.`,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            sender: 'bot',
            text: `❌ Could not book: ${data.error || 'Unknown error'}`,
          },
        ]);
      }
    } catch {
      setBookingLoading(false);
      setShowBookingForm(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Connection error while booking.',
        },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Trigger Button with Pulsing Halo */}
      <div className="relative">
        <span className="absolute -inset-1 rounded-full bg-[var(--color-champagne)]/40 animate-ping opacity-75 pointer-events-none" />
        <button
          type="button"
          onClick={toggleChat}
          title="Chat with our AI Legal Assistant"
          className="relative bg-[var(--color-champagne)] text-[var(--color-obsidian)] hover:bg-[var(--color-gold-bright)] rounded-full w-14 h-14 flex items-center justify-center shadow-[0_8px_30px_rgba(197,155,39,0.45)] transition-all duration-300 hover:scale-105 cursor-pointer border border-[var(--color-gold-bright)]"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[340px] sm:w-[370px] h-[500px] bg-white rounded-xl shadow-2xl border border-[var(--color-border-subtle)] flex flex-col overflow-hidden animate-fadeIn backdrop-blur-md">
          {/* Header */}
          <div className="bg-[var(--color-obsidian)] text-white p-4 flex justify-between items-center border-b-2 border-[var(--color-champagne)]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[var(--color-champagne)] text-[var(--color-obsidian)] flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-[0.95rem] font-semibold text-white leading-tight">
                  Amaka &mdash; Legal Assistant
                </h4>
                <span className="text-[0.68rem] text-[var(--color-gold-bright)] italic">
                  Ogbemudje, Omezi &amp; Co.
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={toggleChat}
              className="text-white/60 hover:text-white p-1 cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-stone-50 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[85%] p-3 rounded-xl text-[0.82rem] leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-[var(--color-obsidian)] text-white ml-auto rounded-br-xs'
                    : 'bg-white border border-[var(--color-line)] text-gray-800 rounded-bl-xs'
                }`}
              >
                <div>{msg.text}</div>
                {msg.showApptBtn && (
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(true)}
                    className="w-full mt-3 bg-[var(--color-champagne)] text-[var(--color-obsidian)] hover:bg-[var(--color-gold-bright)] py-2 px-3 rounded-md font-bold text-[0.77rem] flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" /> Book Consultation
                  </button>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="bg-white border border-[var(--color-line)] text-gray-400 max-w-[85%] p-3 rounded-xl text-[0.82rem] italic rounded-bl-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-champagne)] animate-bounce" />
                <span>Typing guidance…</span>
              </div>
            )}

            {/* Embedded Booking Form */}
            {showBookingForm && (
              <div className="bg-white border border-[var(--color-champagne)] p-3.5 rounded-xl text-[0.8rem] space-y-2.5 shadow-md">
                <div className="font-serif font-bold text-[var(--color-champagne)] text-[0.95rem]">
                  📅 Schedule Legal Consultation
                </div>
                <form onSubmit={handleApptSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={apptForm.name}
                    onChange={(e) => setApptForm({ ...apptForm, name: e.target.value })}
                    className="w-full p-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[var(--color-champagne)]"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={apptForm.email}
                    onChange={(e) => setApptForm({ ...apptForm, email: e.target.value })}
                    className="w-full p-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[var(--color-champagne)]"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      required
                      value={apptForm.date}
                      onChange={(e) => setApptForm({ ...apptForm, date: e.target.value })}
                      className="w-full p-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[var(--color-champagne)]"
                    />
                    <input
                      type="time"
                      required
                      value={apptForm.time}
                      onChange={(e) => setApptForm({ ...apptForm, time: e.target.value })}
                      className="w-full p-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[var(--color-champagne)]"
                    />
                  </div>
                  <select
                    value={apptForm.service}
                    onChange={(e) => setApptForm({ ...apptForm, service: e.target.value })}
                    className="w-full p-2 border border-gray-200 rounded-md text-xs focus:outline-none focus:border-[var(--color-champagne)] bg-white"
                  >
                    <option value="consultation">Consultation</option>
                    <option value="corporate">Corporate Advisory</option>
                    <option value="litigation">Litigation</option>
                    <option value="real_estate">Real Estate</option>
                    <option value="aviation">Aviation</option>
                    <option value="maritime">Maritime</option>
                  </select>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      disabled={bookingLoading}
                      className="flex-2 bg-[var(--color-champagne)] text-[var(--color-obsidian)] py-2 rounded-md font-bold text-xs cursor-pointer hover:bg-[var(--color-gold-bright)] transition-colors"
                    >
                      {bookingLoading ? 'Booking…' : 'Book Now'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowBookingForm(false)}
                      className="flex-1 bg-stone-200 text-gray-700 py-2 rounded-md text-xs cursor-pointer hover:bg-stone-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div ref={msgsEndRef} />
          </div>

          {/* Input Row */}
          <div className="p-3.5 bg-white border-t border-[var(--color-line)] flex gap-2">
            <input
              type="text"
              placeholder="Ask Amaka a legal question…"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-xs focus:outline-none focus:border-[var(--color-champagne)]"
            />
            <button
              type="button"
              onClick={handleSend}
              className="bg-[var(--color-champagne)] text-[var(--color-obsidian)] hover:bg-[var(--color-gold-bright)] p-2 px-3 rounded-md font-bold text-xs flex items-center justify-center cursor-pointer transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

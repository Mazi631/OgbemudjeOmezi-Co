import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare, X, Send, Calendar, Bot,
  Phone, ArrowRight, MapPin, Mail, Clock,
  Scale, Building2, Users, Briefcase, FileText,
  Shield, HeartHandshake, HelpCircle, ThumbsUp,
  Sparkles, ChevronRight,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  showApptBtn?: boolean;
  quickReplies?: string[];
}

// ─── Knowledge Base: Firm Context ───
const FIRM_NAME = 'Ogbemudje, Omezi & Co.';

const FIRM_KNOWLEDGE = {
  greeting: [
    `Hello! I'm Amaka, the virtual legal assistant for ${FIRM_NAME}. How may I assist you today?`,
    `Welcome to ${FIRM_NAME}! I'm Amaka, your AI legal assistant. How can I help you?`,
    `Good day! I'm Amaka from ${FIRM_NAME}. What legal matter can I assist you with today?`,
  ],
  about: `${FIRM_NAME} is a full-service Nigerian law firm established in 1994 by Sampson Ogbemudje and Okechukwu Omezi. We are Barristers, Solicitors & Arbitrators with over 30 years of combined expertise, providing strategic legal counsel across 16 practice areas from our Victoria Island, Lagos office.`,
  address: '3rd Floor, 34 Kofo Abayomi Street, Victoria Island, Lagos State, Nigeria.',
  phone: '+234 802 303 2981',
  email: 'info@ogbemudjeomezi.com',
  hours: 'Monday – Friday: 9:00 AM – 5:00 PM. Saturday: By Appointment. Sunday & Public Holidays: Closed.',
  team: {
    'sampson': 'Sampson Ogbemudje is a Managing Partner, called to the Nigerian Bar in 1988 with over 35 years of experience specializing in Real Estate & Corporate Law. He is a former Vice Chairman of the NBA Ikeja Branch and a Member of the Chartered Institute of Arbitrators (CIArb).',
    'okechukwu': 'Okechukwu Omezi is a Managing Partner with nearly 40 years of legal practice, specializing in Dispute Resolution, Corporate Law, Aviation, Maritime, and Energy Law. He serves as an Independent Non-Executive Director of Eterna Plc.',
    'morenikeji': 'Morenikeji Elemi is a Partner and Head of Chamber with over two decades of legal practice. She holds an LL.M from Lagos State University and specializes in Corporate Restructuring, Property Law, and Company Secretarial functions.',
  },
  services: [
    { name: 'Banking & Financial Services Law', keywords: ['bank', 'financial', 'credit', 'loan', 'debt'] },
    { name: 'Taxation Law & Advisory', keywords: ['tax', 'taxation', 'revenue', 'fiscal'] },
    { name: 'Petroleum & Energy Law', keywords: ['oil', 'gas', 'petroleum', 'energy', 'upstream', 'downstream'] },
    { name: 'Shipping & Admiralty Law', keywords: ['shipping', 'maritime', 'admiralty', 'vessel', 'cargo', 'marine'] },
    { name: 'Aviation Law', keywords: ['aviation', 'airline', 'aircraft', 'flight', 'ncaa'] },
    { name: 'Intellectual Property Law', keywords: ['ip', 'intellectual property', 'trademark', 'patent', 'copyright'] },
    { name: 'Commercial Arbitration & ADR', keywords: ['arbitration', 'adr', 'mediation', 'dispute resolution'] },
    { name: 'Investment Law & Foreign Participation', keywords: ['investment', 'foreign', 'nipc', 'expatriate'] },
    { name: 'Joint Ventures & Partnerships', keywords: ['joint venture', 'partnership', 'shareholder'] },
    { name: 'Construction & Development Law', keywords: ['construction', 'development', 'contractor', 'fidic'] },
    { name: 'Mergers & Acquisitions', keywords: ['merger', 'acquisition', 'takeover', 'due diligence'] },
    { name: 'Receivership & Insolvency Practice', keywords: ['receivership', 'insolvency', 'liquidation', 'debt recovery'] },
    { name: 'Contract Negotiation & Drafting', keywords: ['contract', 'drafting', 'agreement', 'negotiation'] },
    { name: 'General Commercial Litigation', keywords: ['litigation', 'lawsuit', 'court', 'sue', 'case'] },
    { name: 'Real Estate Practice', keywords: ['real estate', 'property', 'land', 'house', 'tenancy', 'lease'] },
    { name: 'Preparation & Perfection of Titles', keywords: ['title', 'c of o', 'governor consent', 'deed', 'certificate of occupancy'] },
  ],
};

// ─── SVG Icon Helper ───
const getIntentIcon = (intent: string): React.ReactNode => {
  const cls = "w-3.5 h-3.5 text-[#B8860B] shrink-0";
  switch (intent) {
    case 'services': return <Briefcase className={cls} />;
    case 'appointment': return <Calendar className={cls} />;
    case 'contact': return <Phone className={cls} />;
    case 'about': return <Building2 className={cls} />;
    case 'team': return <Users className={cls} />;
    case 'location': return <MapPin className={cls} />;
    case 'hours': return <Clock className={cls} />;
    case 'pricing': return <FileText className={cls} />;
    case 'help': return <HelpCircle className={cls} />;
    default: return <ChevronRight className={cls} />;
  }
};

const quickReplyIconMap: Record<string, React.ReactNode> = {
  'Our services': <Briefcase className="w-3 h-3" />,
  'Other services': <Briefcase className="w-3 h-3" />,
  'Book consultation': <Calendar className="w-3 h-3" />,
  'Contact info': <Phone className="w-3 h-3" />,
  'About the firm': <Building2 className="w-3 h-3" />,
  'Meet the team': <Users className="w-3 h-3" />,
  'Call the office': <Phone className="w-3 h-3" />,
  'Real Estate': <Scale className="w-3 h-3" />,
  'Corporate Law': <Building2 className="w-3 h-3" />,
  'Litigation': <Shield className="w-3 h-3" />,
  'Thank you': <ThumbsUp className="w-3 h-3" />,
};

// ─── Intent Matching Engine ───
type IntentType = 'greeting' | 'about' | 'services' | 'specific_service' | 'contact' | 'hours' | 'location' | 'team' | 'specific_team' | 'appointment' | 'pricing' | 'thanks' | 'goodbye' | 'help' | 'unknown';

interface IntentResult {
  intent: IntentType;
  matchedService?: string;
  matchedTeamMember?: string;
}

function detectIntent(message: string): IntentResult {
  const lower = message.toLowerCase().trim();

  if (/^(hi|hello|hey|good\s?(morning|afternoon|evening|day)|howdy|sup|what'?s?\s?up|yo)\b/i.test(lower) || lower.length <= 3 && /^(hi|hey|yo)$/i.test(lower)) {
    return { intent: 'greeting' };
  }
  if (/\b(thanks|thank\s?you|appreciate|grateful|cheers)\b/i.test(lower)) {
    return { intent: 'thanks' };
  }
  if (/\b(bye|goodbye|see\s?you|take\s?care|goodnight|later)\b/i.test(lower)) {
    return { intent: 'goodbye' };
  }
  if (/\b(appointment|book|schedule|consult|consultation|meet|meeting|visit|come\s?in)\b/i.test(lower)) {
    return { intent: 'appointment' };
  }
  if (/\b(price|pricing|cost|how\s?much|fee|charge|rate|afford|pay|payment|billing|invoice)\b/i.test(lower)) {
    return { intent: 'pricing' };
  }
  if (/\b(address|location|where|office|directions?|locate|find\s?you|map|victoria\s?island)\b/i.test(lower)) {
    return { intent: 'location' };
  }
  if (/\b(hour|hours|open|close|when|time|schedule|available|working\s?hours|office\s?hours|business\s?hours|what\s?time)\b/i.test(lower)) {
    return { intent: 'hours' };
  }
  if (/\b(contact|phone|email|call|reach|number|mail|get\s?in\s?touch)\b/i.test(lower)) {
    return { intent: 'contact' };
  }
  for (const [key] of Object.entries(FIRM_KNOWLEDGE.team)) {
    if (lower.includes(key)) {
      return { intent: 'specific_team', matchedTeamMember: key };
    }
  }
  if (/\b(team|lawyer|attorney|partner|staff|who|counsel|barrister|solicitor|personnel|people)\b/i.test(lower)) {
    return { intent: 'team' };
  }
  for (const svc of FIRM_KNOWLEDGE.services) {
    for (const kw of svc.keywords) {
      if (lower.includes(kw)) {
        return { intent: 'specific_service', matchedService: svc.name };
      }
    }
  }
  if (/\b(service|practice|area|specializ|what\s?(do|can)\s?you\s?(do|offer|handle|provide)|help\s?with|legal\s?(service|help|support|need)|what\s?kind)\b/i.test(lower)) {
    return { intent: 'services' };
  }
  if (/\b(about|firm|company|who\s?are|tell\s?me|history|established|founded|background|overview)\b/i.test(lower)) {
    return { intent: 'about' };
  }
  if (/\b(help|assist|support|what\s?can\s?you\s?do|options|menu)\b/i.test(lower)) {
    return { intent: 'help' };
  }
  return { intent: 'unknown' };
}

// ─── Response Generator ───
function generateResponse(intentResult: IntentResult): { text: string; showApptBtn?: boolean; quickReplies?: string[] } {
  const { intent, matchedService, matchedTeamMember } = intentResult;

  switch (intent) {
    case 'greeting': {
      const greetings = FIRM_KNOWLEDGE.greeting;
      return {
        text: greetings[Math.floor(Math.random() * greetings.length)],
        quickReplies: ['Our services', 'Book consultation', 'Contact info', 'About the firm'],
      };
    }
    case 'about':
      return {
        text: FIRM_KNOWLEDGE.about,
        quickReplies: ['Our services', 'Meet the team', 'Book consultation'],
      };
    case 'services':
      return {
        text: `We offer legal services across 16 practice areas, including:\n\n▸ Banking & Financial Services Law\n▸ Real Estate Practice\n▸ Commercial Arbitration & ADR\n▸ Mergers & Acquisitions\n▸ General Commercial Litigation\n▸ Petroleum & Energy Law\n▸ Aviation Law\n▸ Shipping & Admiralty Law\n▸ Contract Negotiation & Drafting\n▸ Intellectual Property Law\n\n…and more.\n\nWhich area interests you? I can provide more details.`,
        quickReplies: ['Real Estate', 'Corporate Law', 'Litigation', 'Book consultation'],
      };
    case 'specific_service':
      return {
        text: `Yes, we handle **${matchedService}** matters. Our experienced legal team can advise and represent you in this area.\n\nWould you like to schedule a consultation with one of our partners to discuss your specific situation?`,
        showApptBtn: true,
        quickReplies: ['Book consultation', 'Other services', 'Contact info'],
      };
    case 'contact':
      return {
        text: `You can reach ${FIRM_NAME} through:\n\n☎ Phone: ${FIRM_KNOWLEDGE.phone}\n✉ Email: ${FIRM_KNOWLEDGE.email}\n⌂ Office: ${FIRM_KNOWLEDGE.address}\n\nWould you like to schedule a consultation instead?`,
        showApptBtn: true,
      };
    case 'hours':
      return {
        text: `Our office hours are:\n\n${FIRM_KNOWLEDGE.hours}\n\nWould you like to book an appointment during our working hours?`,
        showApptBtn: true,
      };
    case 'location':
      return {
        text: `Our office is located at:\n\n${FIRM_KNOWLEDGE.address}\n\nWe're on Victoria Island, Lagos. Would you like to schedule a visit?`,
        showApptBtn: true,
      };
    case 'team':
      return {
        text: `Our firm is led by a team of experienced legal professionals:\n\n▸ **Sampson Ogbemudje** — Managing Partner (Real Estate & Corporate Law)\n▸ **Okechukwu Omezi** — Managing Partner (Dispute Resolution & Energy Law)\n▸ **Morenikeji Elemi** — Partner, Head of Chamber (Corporate Restructuring & Property Law)\n\nPlus a team of dedicated senior associates and legal support staff.\n\nWould you like to know more about any specific team member?`,
        quickReplies: ['Sampson', 'Okechukwu', 'Morenikeji', 'Book consultation'],
      };
    case 'specific_team':
      return {
        text: FIRM_KNOWLEDGE.team[matchedTeamMember as keyof typeof FIRM_KNOWLEDGE.team] || 'I don\'t have details on that team member.',
        quickReplies: ['Meet the team', 'Book consultation', 'Our services'],
      };
    case 'appointment':
      return {
        text: `I'd be happy to help you schedule a consultation! You can:\n\n1. Use the booking form below to pick a date and time\n2. Call us directly at ${FIRM_KNOWLEDGE.phone}\n3. Email us at ${FIRM_KNOWLEDGE.email}\n\nWhich would you prefer?`,
        showApptBtn: true,
      };
    case 'pricing':
      return {
        text: `Thank you for your interest. Legal fees depend on the nature and complexity of your matter. We offer:\n\n▸ Initial consultation to assess your needs\n▸ Transparent fee structures discussed upfront\n▸ Flexible arrangements for ongoing retainers\n\nI'd recommend scheduling a consultation where our partners can discuss fees specific to your case. Shall I help you book one?`,
        showApptBtn: true,
      };
    case 'thanks':
      return {
        text: `You're welcome! If you have any other questions about our legal services, feel free to ask. We're here to help.`,
        quickReplies: ['Our services', 'Book consultation', 'Contact info'],
      };
    case 'goodbye':
      return {
        text: `Thank you for contacting ${FIRM_NAME}. Have a wonderful day! If you need legal assistance in the future, don't hesitate to reach out.`,
      };
    case 'help':
      return {
        text: `I can help you with:\n\n▸ Learn about our legal services & practice areas\n▸ Meet our team of attorneys\n▸ Get our office location & contact info\n▸ Check our working hours\n▸ Schedule a consultation\n▸ Inquire about fees\n\nJust ask me anything or pick an option below!`,
        quickReplies: ['Our services', 'Meet the team', 'Contact info', 'Book consultation'],
      };
    case 'unknown':
    default:
      return {
        text: `I appreciate your question, but I'm not able to provide specific legal advice on that matter. For detailed guidance, I'd recommend speaking directly with one of our attorneys.\n\nWould you like me to:\n▸ Connect you with our office at ${FIRM_KNOWLEDGE.phone}\n▸ Schedule a consultation with a partner\n▸ Help you with something else?`,
        showApptBtn: true,
        quickReplies: ['Call the office', 'Book consultation', 'Our services'],
      };
  }
}

// ─── Component ───
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
  const inputRef = useRef<HTMLInputElement>(null);
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
          text: `Hello! I'm Amaka, the virtual legal assistant for ${FIRM_NAME}. How may I assist you today?`,
          showApptBtn: true,
          quickReplies: ['Our services', 'Book consultation', 'Contact info', 'About the firm'],
        },
      ]);
    }
    if (nextState) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  const processUserMessage = (userText: string) => {
    const intentResult = detectIntent(userText);
    const response = generateResponse(intentResult);
    const typingDelay = Math.min(800 + userText.length * 15, 2000);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: response.text,
          showApptBtn: response.showApptBtn,
          quickReplies: response.quickReplies,
        },
      ]);
    }, typingDelay);
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;
    const userText = inputVal.trim();
    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'user', text: userText }]);
    setInputVal('');
    processUserMessage(userText);
  };

  const handleQuickReply = (reply: string) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'user', text: reply }]);
    const quickReplyMap: Record<string, string> = {
      'Our services': 'services',
      'Other services': 'services',
      'Book consultation': 'appointment',
      'Contact info': 'contact',
      'About the firm': 'about',
      'Meet the team': 'team',
      'Sampson': 'sampson',
      'Okechukwu': 'okechukwu',
      'Morenikeji': 'morenikeji',
      'Real Estate': 'real estate',
      'Corporate Law': 'corporate',
      'Litigation': 'litigation',
      'Call the office': 'contact',
      'Thank you': 'thank you',
    };
    processUserMessage(quickReplyMap[reply] || reply);
  };

  const handleApptSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apptForm.name || !apptForm.email || !apptForm.date || !apptForm.time) return;

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
            text: `Appointment successfully booked for ${apptForm.date} at ${apptForm.time}. A confirmation will be sent to ${apptForm.email}.\n\nIs there anything else I can help you with?`,
            quickReplies: ['Our services', 'Contact info', 'Thank you'],
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { id: Date.now().toString(), sender: 'bot', text: `Could not book: ${data.error || 'Unknown error'}. Please try again or call us at ${FIRM_KNOWLEDGE.phone}.` },
        ]);
      }
    } catch {
      setBookingLoading(false);
      setShowBookingForm(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: 'bot', text: `Connection error while booking. Please try again or reach us directly at ${FIRM_KNOWLEDGE.phone}.` },
      ]);
    }
  };

  const formatText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-[#38291B]">{part.slice(2, -2)}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* ─── Trigger Button ─── */}
      <button
        type="button"
        onClick={toggleChat}
        title="Chat with our AI Legal Assistant"
        className={`group relative bg-[#38291B] text-white hover:bg-[#B8860B] rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-white/80 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6 text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full border-2 border-[#B8860B]/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
      </button>

      {/* ─── Chat Window ─── */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 w-[350px] sm:w-[390px] h-[540px] bg-[#FAFAF7] rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-[#E6E1D5]/80 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* ─── Header ─── */}
          <div className="bg-gradient-to-r from-[#1A1815] via-[#2A241E] to-[#1A1815] text-white px-5 py-4 flex justify-between items-center shrink-0 relative overflow-hidden">
            {/* Decorative gold line at top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] text-[#1A1A1A] flex items-center justify-center shadow-md ring-2 ring-white/20">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-white leading-tight tracking-wide">
                  Amaka — Legal Assistant
                </h4>
                <span className="text-[0.65rem] text-[#D4AF37]/90 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                  Online · {FIRM_NAME}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={toggleChat}
              className="text-white/50 hover:text-white hover:bg-white/10 p-1.5 rounded-lg cursor-pointer transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* ─── Messages Area ─── */}
          <div className="flex-1 px-4 py-4 overflow-y-auto space-y-3 bg-[#FAFAF7]">
            {messages.map((msg, msgIdx) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[85%] space-y-2">
                  {/* Avatar + Message */}
                  <div className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar */}
                    {msg.sender === 'bot' && (
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shrink-0 shadow-sm">
                        <Scale className="w-3.5 h-3.5 text-[#1A1A1A]" />
                      </div>
                    )}

                    <div
                      className={`p-3 rounded-2xl text-[0.8rem] leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-br from-[#2A241E] to-[#38291B] text-white rounded-br-md shadow-md'
                          : 'bg-white border border-[#E6E1D5] text-[#2D2A26] rounded-bl-md shadow-sm'
                      }`}
                    >
                      <div>{formatText(msg.text)}</div>
                      {msg.showApptBtn && (
                        <button
                          type="button"
                          onClick={() => setShowBookingForm(true)}
                          className="w-full mt-3 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] text-[#1A1A1A] hover:from-[#D4AF37] hover:to-[#F3E5AB] py-2.5 px-3 rounded-lg font-bold text-[0.75rem] flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm tracking-wide"
                        >
                          <Calendar className="w-4 h-4" /> Book Consultation
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Quick Reply Chips */}
                  {msg.sender === 'bot' && msg.quickReplies && msg.quickReplies.length > 0 && msgIdx === messages.length - 1 && (
                    <div className="flex flex-wrap gap-1.5 pl-9">
                      {msg.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          type="button"
                          onClick={() => handleQuickReply(reply)}
                          className="bg-white hover:bg-[#F5F2EB] text-[#38291B] text-[0.7rem] font-semibold px-3 py-1.5 rounded-full border border-[#E6E1D5] hover:border-[#B8860B]/50 transition-all cursor-pointer flex items-center gap-1.5 shadow-xs hover:shadow-sm"
                        >
                          {quickReplyIconMap[reply] || <ChevronRight className="w-3 h-3" />}
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shrink-0 shadow-sm">
                  <Scale className="w-3.5 h-3.5 text-[#1A1A1A]" />
                </div>
                <div className="bg-white border border-[#E6E1D5] px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {/* ─── Booking Form ─── */}
            {showBookingForm && (
              <div className="bg-white border border-[#D4AF37]/30 p-4 rounded-xl text-[0.8rem] space-y-3 shadow-md ml-9">
                <div className="flex items-center gap-2 pb-2 border-b border-[#E6E1D5]">
                  <Calendar className="w-4 h-4 text-[#B8860B]" />
                  <span className="font-serif font-bold text-[#38291B] text-[0.9rem]">
                    Schedule Consultation
                  </span>
                </div>
                <form onSubmit={handleApptSubmit} className="space-y-2.5">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    value={apptForm.name}
                    onChange={(e) => setApptForm({ ...apptForm, name: e.target.value })}
                    className="w-full p-2.5 bg-[#F5F2EB] border border-[#E6E1D5] rounded-lg text-xs focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={apptForm.email}
                    onChange={(e) => setApptForm({ ...apptForm, email: e.target.value })}
                    className="w-full p-2.5 bg-[#F5F2EB] border border-[#E6E1D5] rounded-lg text-xs focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-all"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      required
                      value={apptForm.date}
                      onChange={(e) => setApptForm({ ...apptForm, date: e.target.value })}
                      className="w-full p-2.5 bg-[#F5F2EB] border border-[#E6E1D5] rounded-lg text-xs focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-all"
                    />
                    <input
                      type="time"
                      required
                      value={apptForm.time}
                      onChange={(e) => setApptForm({ ...apptForm, time: e.target.value })}
                      className="w-full p-2.5 bg-[#F5F2EB] border border-[#E6E1D5] rounded-lg text-xs focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-all"
                    />
                  </div>
                  <select
                    value={apptForm.service}
                    onChange={(e) => setApptForm({ ...apptForm, service: e.target.value })}
                    className="w-full p-2.5 bg-[#F5F2EB] border border-[#E6E1D5] rounded-lg text-xs focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-all"
                  >
                    <option value="consultation">General Consultation</option>
                    <option value="corporate">Corporate Advisory</option>
                    <option value="litigation">Litigation</option>
                    <option value="real_estate">Real Estate</option>
                    <option value="aviation">Aviation</option>
                    <option value="maritime">Maritime</option>
                    <option value="energy">Petroleum & Energy</option>
                    <option value="arbitration">Arbitration & ADR</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="contract">Contract Drafting</option>
                  </select>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="submit"
                      disabled={bookingLoading}
                      className="flex-[2] bg-gradient-to-r from-[#38291B] to-[#2A241E] text-white py-2.5 rounded-lg font-bold text-xs cursor-pointer hover:from-[#B8860B] hover:to-[#D4AF37] hover:text-[#1A1A1A] transition-all shadow-sm"
                    >
                      {bookingLoading ? 'Booking…' : 'Confirm Booking'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowBookingForm(false)}
                      className="flex-1 bg-[#F5F2EB] text-[#59544B] py-2.5 rounded-lg text-xs cursor-pointer hover:bg-[#E6E1D5] transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div ref={msgsEndRef} />
          </div>

          {/* ─── Input Row ─── */}
          <div className="px-4 py-3 bg-white border-t border-[#E6E1D5] flex gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your legal question…"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-4 py-2.5 bg-[#F5F2EB] border border-[#E6E1D5] rounded-xl text-xs focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/20 transition-all placeholder:text-[#8A7D6E]"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={!inputVal.trim()}
              className="bg-gradient-to-r from-[#38291B] to-[#2A241E] text-white hover:from-[#B8860B] hover:to-[#D4AF37] hover:text-[#1A1A1A] p-2.5 rounded-xl font-bold text-xs flex items-center justify-center cursor-pointer transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom accent line */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shrink-0" />
        </div>
      )}
    </div>
  );
};

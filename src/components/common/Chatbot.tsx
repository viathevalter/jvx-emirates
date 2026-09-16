import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  Building2,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '../../i18n';
import { chatbotData, type ChatFaqItem } from '../../data/chatbotFaq';
import { JvxSymbol } from './JvxLogo';

interface ChatbotProps {
  onOpenConsultation: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionText?: string;
  actionType?: 'consultation' | 'services' | 'approach' | 'dubai';
}

export const Chatbot: React.FC<ChatbotProps> = ({ 
  onOpenConsultation, 
  onNavigateToSection 
}) => {
  const { language } = useLanguage();
  const locale = chatbotData[language] || chatbotData.pt;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showFaqPills, setShowFaqPills] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome message when opened or language changes
  useEffect(() => {
    const getTime = () => {
      const d = new Date();
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: locale.welcomeMessage,
        time: getTime()
      }
    ]);
  }, [language, locale.welcomeMessage]);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    }
  }, [isOpen]);

  const getTimeString = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleActionClick = (actionType?: string) => {
    if (actionType === 'consultation') {
      onOpenConsultation();
    } else if (actionType === 'services') {
      if (onNavigateToSection) onNavigateToSection('services');
      else {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (actionType === 'approach') {
      if (onNavigateToSection) onNavigateToSection('approach');
      else {
        const el = document.getElementById('approach');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (actionType === 'dubai') {
      if (onNavigateToSection) onNavigateToSection('dubai');
      else {
        const el = document.getElementById('dubai');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleFaqClick = (faq: ChatFaqItem) => {
    const userMsg: Message = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: faq.question,
      time: getTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: 'bot_' + Date.now(),
        sender: 'bot',
        text: faq.answer,
        time: getTimeString(),
        actionText: faq.actionText,
        actionType: faq.actionType
      };
      setMessages(prev => [...prev, botMsg]);
    }, 450);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanText = inputValue.trim();
    if (!cleanText) return;

    const userMsg: Message = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: cleanText,
      time: getTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Normalize query to match keywords
    const lower = cleanText.toLowerCase();
    
    // Find best match in FAQs
    let matchedFaq: ChatFaqItem | undefined;
    let maxMatches = 0;

    for (const faq of locale.faqs) {
      let score = 0;
      for (const kw of faq.keywords) {
        if (lower.includes(kw.toLowerCase())) {
          score += 1;
        }
      }
      if (score > maxMatches) {
        maxMatches = score;
        matchedFaq = faq;
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      if (matchedFaq && maxMatches > 0) {
        const botMsg: Message = {
          id: 'bot_' + Date.now(),
          sender: 'bot',
          text: matchedFaq.answer,
          time: getTimeString(),
          actionText: matchedFaq.actionText,
          actionType: matchedFaq.actionType
        };
        setMessages(prev => [...prev, botMsg]);
      } else {
        const botMsg: Message = {
          id: 'bot_' + Date.now(),
          sender: 'bot',
          text: locale.fallbackMessage,
          time: getTimeString(),
          actionText: locale.consultationCta,
          actionType: 'consultation'
        };
        setMessages(prev => [...prev, botMsg]);
      }
    }, 550);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome_' + Date.now(),
        sender: 'bot',
        text: locale.welcomeMessage,
        time: getTimeString()
      }
    ]);
    setShowFaqPills(true);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#061824] border-2 border-gold-500/70 text-gold-300 hover:text-white hover:border-gold-400 hover:scale-105 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 cursor-pointer group focus:outline-none"
          aria-label={isOpen ? 'Fechar chat corporativo' : 'Abrir chat corporativo'}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 rounded-full bg-gold-500/15 group-hover:bg-gold-500/25 blur-sm transition-colors" />

          {/* Icon Crossfade */}
          <div className="relative z-10">
            {isOpen ? (
              <X className="w-6 h-6 text-gold-300 transition-transform duration-300 rotate-90 group-hover:rotate-180" />
            ) : (
              <MessageSquare className="w-6 h-6 text-gold-300 transition-transform duration-300 group-hover:scale-110" />
            )}
          </div>

          {/* Unread Indicator Pulse */}
          {!isOpen && hasUnread && (
            <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold-500 border-2 border-navy-950" />
            </span>
          )}
        </button>
      </div>

      {/* Floating Chatbot Window */}
      {isOpen && (
        <div 
          className="fixed inset-x-3 bottom-3 top-auto h-[84vh] sm:h-[590px] sm:max-h-[85vh] sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[410px] z-50 bg-[#040E16]/98 border border-gold-500/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden backdrop-blur-2xl animate-fadeIn"
          role="dialog"
          aria-label="JVX Concierge"
        >
          {/* Header Bar */}
          <div className="relative px-5 py-4 border-b border-navy-800/90 bg-[#061824] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-navy-900 border border-gold-500/40 flex items-center justify-center p-1.5 shrink-0 shadow-inner">
                <JvxSymbol variant="white-gold" className="w-full h-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-serif font-bold text-white tracking-wide">
                    {locale.botName}
                  </h3>
                  <span className="inline-flex items-center px-1.5 py-0.2 text-[9px] font-mono uppercase tracking-wider text-gold-400 bg-gold-500/10 border border-gold-500/30 rounded">
                    FAQ
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{locale.botStatus}</span>
                </div>
              </div>
            </div>

            {/* Actions: Reset & Close */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reiniciar conversa"
                className="p-1.5 text-slate-400 hover:text-gold-300 transition-colors rounded hover:bg-navy-900/60 cursor-pointer focus:outline-none"
                aria-label="Reiniciar conversa"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white transition-colors rounded hover:bg-navy-900/60 cursor-pointer focus:outline-none"
                aria-label="Fechar chat"
              >
                <ChevronDown className="w-5 h-5 sm:hidden" />
                <X className="w-4 h-4 hidden sm:block" />
              </button>
            </div>
          </div>

          {/* Conversation Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-xs font-sans">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                {/* Message Bubble */}
                <div
                  className={`max-w-[88%] rounded-xl px-4 py-3 shadow-md leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-950 font-medium rounded-br-sm'
                      : 'bg-[#071F2D]/90 border border-navy-700/80 text-slate-200 font-light rounded-bl-sm'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>

                  {/* Interactive Embedded Action Button */}
                  {msg.actionText && (
                    <button
                      type="button"
                      onClick={() => handleActionClick(msg.actionType)}
                      className="mt-3 w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-bold uppercase tracking-wider bg-gold-500 hover:bg-gold-400 text-navy-950 rounded transition-colors shadow focus:outline-none cursor-pointer"
                    >
                      <span>{msg.actionText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Timestamp */}
                <span className="text-[10px] text-slate-500 font-mono mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#071F2D]/80 border border-navy-800 w-20">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            {/* Suggested FAQ Chips */}
            {showFaqPills && (
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400/90 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    {locale.suggestedQuestionsTitle}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {locale.faqs.map(faq => (
                    <button
                      key={faq.id}
                      type="button"
                      onClick={() => handleFaqClick(faq)}
                      className="text-left px-3 py-2 text-[11px] bg-navy-900/80 hover:bg-[#0B3248] border border-navy-800 hover:border-gold-500/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 flex items-center justify-between group cursor-pointer focus:outline-none"
                    >
                      <span className="line-clamp-1">{faq.question}</span>
                      <ArrowRight className="w-3 h-3 text-gold-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Direct Consultation Shortcut Bar */}
          <div className="px-4 py-2 bg-[#030B11] border-t border-navy-900 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Building2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>{locale.botRole}</span>
            </div>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="text-[11px] font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors cursor-pointer"
            >
              {locale.consultationCta}
            </button>
          </div>

          {/* Input Form Bar */}
          <form 
            onSubmit={handleSend}
            className="p-3 bg-[#061824] border-t border-navy-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder={locale.inputPlaceholder}
              className="flex-1 bg-navy-950 border border-navy-700 focus:border-gold-400 text-white placeholder-slate-500 text-xs px-3.5 py-2.5 rounded-lg focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="px-3.5 py-2.5 bg-gold-500 hover:bg-gold-400 disabled:opacity-40 disabled:cursor-not-allowed text-navy-950 rounded-lg font-semibold transition-all duration-200 cursor-pointer focus:outline-none flex items-center justify-center shrink-0 shadow"
              aria-label={locale.sendButton}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

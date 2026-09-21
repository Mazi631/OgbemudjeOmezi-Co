import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatbotWidget } from '../sections/ChatbotWidget';
import { ScrollToTop } from './ScrollToTop';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[var(--color-obsidian)] flex flex-col font-sans selection:bg-[var(--color-emerald)] selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ChatbotWidget />
      <Footer />
    </div>
  );
};

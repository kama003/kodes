import React from 'react';
import { BackgroundPaths } from './components/ui/background-paths';
import { Navbar } from './components/Navbar';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { About } from './components/About';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <Navbar />
      <main>
        {/* Hero Section */}
        <BackgroundPaths title="KODES AGENCY" />
        
        {/* Work Section */}
        <Work />

        {/* Services Section */}
        <Services />
        
        {/* About Section */}
        <About />

        {/* Insights Section */}
        <Insights />
        
        {/* Contact/CTA Section */}
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-sm text-neutral-500 dark:text-neutral-600 border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Kodes Agency. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Twitter</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
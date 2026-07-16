import { Mail, Globe, MessageCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-background border-t border-border py-10 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-secondary">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-secondary hover:text-primary transition-colors">
            <Globe size={20} />
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

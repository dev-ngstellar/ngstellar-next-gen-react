import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, theme, toggleTheme }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}

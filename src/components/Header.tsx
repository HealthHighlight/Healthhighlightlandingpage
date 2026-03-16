import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "figma:asset/4b9629b4d3621ec7f055f4958df7a118fd3bc5ba.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Health Highlight Logo" className="w-12 h-12" />
            <span className="font-semibold text-xl">Health Highlight</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-gray-900 transition-colors text-left"
              >
                About
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

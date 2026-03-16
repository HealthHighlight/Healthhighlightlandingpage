import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import logo from "figma:asset/3ae3d9991a503ff871a2ed945175be5601d85417.png";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Health Highlight Logo" className="w-12 h-12" />
            <span className="font-serif-brand text-2xl" style={{ color: 'var(--color-brand-purple)' }}>
              Health Highlight
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-[rgb(69,71,116)] font-semibold"
                  : "text-gray-600 hover:text-[rgb(69,71,116)]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`transition-colors ${
                isActive("/products")
                  ? "text-[rgb(69,71,116)] font-semibold"
                  : "text-gray-600 hover:text-[rgb(69,71,116)]"
              }`}
            >
              Products
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-[rgb(69,71,116)] font-semibold"
                  : "text-gray-600 hover:text-[rgb(69,71,116)]"
              }`}
            >
              About
            </Link>
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
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-left ${
                  isActive("/")
                    ? "text-[rgb(69,71,116)] font-semibold"
                    : "text-gray-600 hover:text-[rgb(69,71,116)]"
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-left ${
                  isActive("/products")
                    ? "text-[rgb(69,71,116)] font-semibold"
                    : "text-gray-600 hover:text-[rgb(69,71,116)]"
                }`}
              >
                Products
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-left ${
                  isActive("/about")
                    ? "text-[rgb(69,71,116)] font-semibold"
                    : "text-gray-600 hover:text-[rgb(69,71,116)]"
                }`}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
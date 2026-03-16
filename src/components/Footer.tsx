import logo from "figma:asset/3ae3d9991a503ff871a2ed945175be5601d85417.png";
import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'linear-gradient(to bottom, rgb(69, 71, 116), rgb(60, 120, 102))' }} className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Health Highlight Logo" className="w-12 h-12" />
              <span className="font-serif-brand text-xl">
                Health Highlight
              </span>
            </div>
            <p className="text-white/80">
              All days are good... make today a better day
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Apps */}
          <div>
            <h4 className="font-semibold mb-4">Our Apps</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Easy Streak
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Lito
                </a>
              </li>
              <li>
                <span className="text-white/60">What's Next? (Coming Soon)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
          <p>&copy; {currentYear} Health Highlight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
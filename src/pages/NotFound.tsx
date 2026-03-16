import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="pt-20">
      <section
        className="min-h-screen flex items-center justify-center"
        style={{ background: 'linear-gradient(to bottom, rgb(69, 71, 116), rgb(92, 141, 195))' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif-brand text-7xl sm:text-9xl text-white mb-6">
            404
          </h1>
          <h2 className="font-serif-brand text-3xl sm:text-4xl text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link to="/">
            <Button
              size="lg"
              className="px-8 py-6"
              style={{ background: 'rgb(255, 193, 95)', color: 'rgb(69, 71, 116)' }}
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

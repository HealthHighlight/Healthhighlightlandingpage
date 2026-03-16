import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "../assets/health-highlight.svg";

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgb(69, 71, 116), rgb(92, 141, 195), rgb(60, 120, 102))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img
                src={logo}
                alt="Health Highlight Logo"
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>

            {/* Brand Name */}
            <h1 className="font-serif-brand text-5xl sm:text-6xl lg:text-7xl text-white">
              Health Highlight
            </h1>

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl text-white/90">
              All days are good... make today a better day.
            </p>

            {/* Description */}
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Invest in your well-being, one day at a time. Our carefully
              crafted apps help you build healthy habits through the power of
              small, consistent actions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/products">
                <Button
                  size="lg"
                  className="px-8 py-6 cursor-pointer"
                  style={{
                    background: "rgb(255, 193, 95)",
                    color: "rgb(69, 71, 116)",
                  }}
                >
                  Explore Our Apps
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 border-2 border-white text-white hover:bg-white/10 cursor-pointer"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ background: "rgb(255, 193, 95)" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-20 blur-3xl"
          style={{ background: "rgb(255, 193, 95)" }}
        ></div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="font-serif-brand text-4xl sm:text-5xl mb-6"
              style={{ color: "rgb(69, 71, 116)" }}
            >
              Why Health Highlight?
            </h2>
            <p className="text-xl text-gray-600">
              We believe in the power of incremental improvement. Small,
              consistent actions lead to remarkable transformations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(69, 71, 116), rgb(92, 141, 195))",
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3
                className="font-serif-brand text-2xl mb-4"
                style={{ color: "rgb(69, 71, 116)" }}
              >
                Simple & Effective
              </h3>
              <p className="text-gray-600">
                Our apps are designed to be intuitive and easy to use, so you
                can focus on building habits that matter.
              </p>
            </div>

            <div className="text-center p-8">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(92, 141, 195), rgb(60, 120, 102))",
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3
                className="font-serif-brand text-2xl mb-4"
                style={{ color: "rgb(69, 71, 116)" }}
              >
                The 1% Principle
              </h3>
              <p className="text-gray-600">
                Just 1% of your day dedicated to health actions compounds into
                remarkable well-being over time.
              </p>
            </div>

            <div className="text-center p-8">
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(60, 120, 102), rgb(69, 71, 116))",
                }}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3
                className="font-serif-brand text-2xl mb-4"
                style={{ color: "rgb(69, 71, 116)" }}
              >
                Built with Care
              </h3>
              <p className="text-gray-600">
                Created by two friends who understand the challenges of fitting
                health into a busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(to right, rgb(92, 141, 195), rgb(60, 120, 102))",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif-brand text-4xl sm:text-5xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Discover our apps and start your journey to better health today.
          </p>
          <Link to="/products">
            <Button
              size="lg"
              className="px-10 py-6 cursor-pointer"
              style={{
                background: "rgb(255, 193, 95)",
                color: "rgb(69, 71, 116)",
              }}
            >
              View Our Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

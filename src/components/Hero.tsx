import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import logo from "figma:asset/4b9629b4d3621ec7f055f4958df7a118fd3bc5ba.png";

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-amber-50 text-amber-900 px-4 py-2 rounded-full border border-amber-200">
              <img
                src={logo}
                alt="Health Highlight Logo"
                className="w-10 h-10"
              />
              <span>Health Highlight</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-gray-900">
              All days are good...{" "}
              <span className="text-amber-500">
                make today a better day
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              Invest in your well-being, one day at a time. Our
              carefully crafted apps help you build healthy
              habits through the power of small, consistent
              actions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProducts}
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6"
              >
                Explore Our Apps
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => {
                  const element =
                    document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                variant="outline"
                size="lg"
                className="px-8 py-6 border-blue-900 text-blue-900 hover:bg-blue-50"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1635367216109-aa3353c0c22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGhlYWx0aCUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NjM0MjQzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Wellness and healthy lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
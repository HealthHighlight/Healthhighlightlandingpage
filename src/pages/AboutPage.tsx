import { Heart, Target, TrendingUp } from "lucide-react";

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(to bottom, rgb(69, 71, 116), rgb(92, 141, 195))",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif-brand text-5xl sm:text-6xl text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-white/90">
            Welcome to our corner of wellness! We're thrilled to introduce
            ourselves—two friends, J. and Tiger, on a shared journey to lead
            healthier lives.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              As we found ourselves entrenched in the work-from-home routine,
              nurturing relationships, raising kids, and pursuing personal
              passions—all this can leave little time for self-care. That's
              where our journey began.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="text-center p-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 193, 95, 0.1), rgba(255, 140, 60, 0.1))",
              }}
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(255, 193, 95), rgb(255, 140, 60))",
                }}
              >
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3
                className="font-serif-brand text-2xl mb-3"
                style={{ color: "rgb(69, 71, 116)" }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700">
                Fit health into your dynamic lifestyle
              </p>
            </div>

            <div
              className="text-center p-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(92, 141, 195, 0.1), rgba(69, 71, 116, 0.1))",
              }}
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(92, 141, 195), rgb(69, 71, 116))",
                }}
              >
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3
                className="font-serif-brand text-2xl mb-3"
                style={{ color: "rgb(69, 71, 116)" }}
              >
                The 1% Principle
              </h3>
              <p className="text-gray-700">
                Small consistent steps lead to transformation
              </p>
            </div>

            <div
              className="text-center p-6 rounded-2xl"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(60, 120, 102, 0.1), rgba(92, 141, 195, 0.1))",
              }}
            >
              <div
                className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(60, 120, 102), rgb(92, 141, 195))",
                }}
              >
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3
                className="font-serif-brand text-2xl mb-3"
                style={{ color: "rgb(69, 71, 116)" }}
              >
                Daily Investment
              </h3>
              <p className="text-gray-700">
                Investing in well-being every single day
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div
            className="rounded-3xl p-8 sm:p-12 shadow-xl mb-12 border-2"
            style={{ borderColor: "rgb(92, 141, 195)" }}
          >
            <h2
              className="font-serif-brand text-4xl mb-6"
              style={{ color: "rgb(69, 71, 116)" }}
            >
              Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Health Highlight is here to fit health into your dynamic
              lifestyle. We urge everyone, ourselves included, to invest in
              well-being every day. Just as saving money little by little yields
              results, dedicating a little time and effort to our health pays
              dividends.
            </p>
          </div>

          {/* Core Values */}
          <div className="space-y-6 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore our carefully crafted apps—whether you focus on physical
              fitness, mental clarity, or simply having a moment of fun, they
              are designed to assist your daily well-being investment.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              As two friends on the same journey, we celebrate
              triumphs—regardless of how big or small.
            </p>
          </div>

          {/* The 1% Principle Deep Dive */}
          <div
            className="rounded-3xl p-8 sm:p-12 mb-12"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(92, 141, 195, 0.15), rgba(60, 120, 102, 0.15))",
            }}
          >
            <h2
              className="font-serif-brand text-3xl mb-6 text-center"
              style={{ color: "rgb(69, 71, 116)" }}
            >
              Understanding the 1% Principle
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The concept is simple yet powerful: dedicating just 1% of your
              day—approximately 15 minutes—to deliberate health actions can lead
              to transformative results over time. This approach is rooted in
              the idea that small, consistent improvements compound
              exponentially.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl">
                <h3
                  className="font-semibold text-xl mb-3"
                  style={{ color: "rgb(60, 120, 102)" }}
                >
                  Daily Actions
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 15 minutes of exercise</li>
                  <li>• Mindful journaling</li>
                  <li>• Meditation or breathing</li>
                  <li>• Healthy meal preparation</li>
                </ul>
              </div>
              <div className="p-6 bg-white rounded-xl">
                <h3
                  className="font-semibold text-xl mb-3"
                  style={{ color: "rgb(92, 141, 195)" }}
                >
                  Long-term Impact
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Improved physical fitness</li>
                  <li>• Enhanced mental clarity</li>
                  <li>• Better stress management</li>
                  <li>• Increased life satisfaction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Closing */}
          <div
            className="rounded-3xl p-8 sm:p-12 text-center"
            style={{
              background:
                "linear-gradient(to right, rgb(92, 141, 195), rgb(60, 120, 102))",
            }}
          >
            <p className="text-2xl text-white mb-6 leading-relaxed">
              Thank you for joining us at Health Highlight. Here's to investing
              in health, one day at a time.
            </p>
            <p className="text-xl text-white/90">
              Warmly,
              <br />
              <span className="font-serif-brand text-2xl">J. & Tiger</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

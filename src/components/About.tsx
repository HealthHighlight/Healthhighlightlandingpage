import { Heart, Target, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">About Us</h2>
          <p className="text-xl text-gray-600">
            Welcome to our corner of wellness! We're thrilled to introduce
            ourselves—two friends, J. and Tiger, on a shared journey to lead
            healthier lives.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700">
              As we found ourselves entrenched in the work-from-home routine,
              nurturing relationships, raising kids, and pursuing personal
              passions—all this can leave little time for self-care. That's
              where our journey began.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Our Mission</h3>
              <p className="text-gray-600">
                Fit health into your dynamic lifestyle
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">The 1% Principle</h3>
              <p className="text-gray-600">
                Small consistent steps lead to transformation
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Daily Investment</h3>
              <p className="text-gray-600">
                Investing in well-being every single day
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg">
            <h3 className="text-3xl mb-6 text-gray-900">Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              Health Highlight is here to fit health into your dynamic
              lifestyle. We urge everyone, ourselves included, to invest in
              well-being every day. Just as saving money little by little yields
              results, dedicating a little time and effort to our health pays
              dividends.
            </p>
          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Explore our carefully crafted apps—whether you focus on physical
              fitness, mental clarity, or simply having a moment of fun, they
              are designed to assist your daily well-being investment.
            </p>

            <p className="text-lg text-gray-700">
              As two friends on the same journey, we celebrate triumphs—
              regardless of how big or small.
            </p>
          </div>

          {/* Closing */}
          <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-3xl p-8 sm:p-12 text-center border border-amber-200">
            <p className="text-xl text-gray-800 mb-4">
              Thank you for joining us at Health Highlight. Here's to investing
              in health, one day at a time.
            </p>
            <p className="text-lg text-gray-700">
              Warmly,
              <br />
              <span className="font-semibold">J. & Tiger</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

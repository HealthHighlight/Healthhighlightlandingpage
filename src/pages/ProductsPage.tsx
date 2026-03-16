import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Zap, BookOpen, Calendar } from "lucide-react";

const products = [
  {
    name: "Easy Streak",
    description:
      "Track your fitness journey with ease. Build lasting workout habits and celebrate your progress every day.",
    icon: Zap,
    status: "Available",
    platform: "iOS App Store",
    link: "#",
    gradient: "linear-gradient(to bottom right, rgb(255, 193, 95), rgb(255, 140, 60))",
    image: "https://images.unsplash.com/photo-1571952288324-552b8c0daceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzczNjA3NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Daily fitness tracking",
      "Streak maintenance",
      "Progress visualization",
      "Personalized reminders"
    ]
  },
  {
    name: "Lito",
    description:
      "Your personal journaling companion. Reflect, grow, and discover insights about yourself through daily writing.",
    icon: BookOpen,
    status: "Available",
    platform: "Web App",
    link: "#",
    gradient: "linear-gradient(to bottom right, rgb(92, 141, 195), rgb(69, 71, 116))",
    image: "https://images.unsplash.com/photo-1653569693215-3b1fc81d2b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaW5nJTIwbm90ZWJvb2slMjB3cml0aW5nJTIwcmVmbGVjdGlvbnxlbnwxfHx8fDE3NzM2ODM4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Daily journaling prompts",
      "Mood tracking",
      "Reflection insights",
      "Secure & private"
    ]
  },
  {
    name: "What's Next?",
    description:
      "Plan your projects with clarity and confidence. Stay organized and make consistent progress on what matters most.",
    icon: Calendar,
    status: "Coming Soon",
    platform: "In Development",
    link: null,
    gradient: "linear-gradient(to bottom right, rgb(60, 120, 102), rgb(92, 141, 195))",
    image: "https://images.unsplash.com/photo-1770250959829-de36726e99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwcGxhbm5pbmclMjBvcmdhbml6YXRpb258ZW58MXx8fHwxNzczNjgzODUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: [
      "Project planning",
      "Task organization",
      "Progress tracking",
      "Goal setting"
    ]
  },
];

export function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(to bottom, rgb(69, 71, 116), rgb(92, 141, 195))' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif-brand text-5xl sm:text-6xl text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-white/90">
            Explore our carefully crafted apps designed to fit health into your dynamic lifestyle. Each app helps you invest in your well-being, one small step at a time.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const Icon = product.icon;
              return (
                <Card
                  key={product.name}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: product.gradient, opacity: 0.3 }}></div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          product.status === "Available" ? "default" : "secondary"
                        }
                        style={
                          product.status === "Available"
                            ? { background: 'rgb(255, 193, 95)', color: 'rgb(69, 71, 116)' }
                            : { background: 'rgb(200, 200, 200)' }
                        }
                      >
                        {product.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-serif-brand text-2xl" style={{ color: 'rgb(69, 71, 116)' }}>
                      {product.name}
                    </CardTitle>
                    <p className="text-sm" style={{ color: 'rgb(92, 141, 195)' }}>
                      {product.platform}
                    </p>
                    <CardDescription className="text-base mt-4">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3" style={{ color: 'rgb(69, 71, 116)' }}>
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 120, 102)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {product.link ? (
                      <Button 
                        className="w-full" 
                        style={{ background: 'linear-gradient(to right, rgb(92, 141, 195), rgb(60, 120, 102))', color: 'white' }}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit App
                      </Button>
                    ) : (
                      <Button className="w-full" variant="outline" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 1% Principle Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 border-4" style={{ background: 'linear-gradient(to bottom right, rgba(92, 141, 195, 0.1), rgba(60, 120, 102, 0.1))', borderColor: 'rgb(92, 141, 195)' }}>
            <div className="text-center">
              <h2 className="font-serif-brand text-4xl sm:text-5xl mb-6" style={{ color: 'rgb(69, 71, 116)' }}>
                The 1% Principle
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Much of our work is inspired by the principle of incremental improvement—transformation comes from consistent small steps. Like compounding interest fuels financial growth, investing a mere 1% of your day in deliberate health actions accumulates into remarkable well-being over time.
              </p>
              <div className="inline-block px-6 py-3 rounded-full text-white" style={{ background: 'linear-gradient(to right, rgb(92, 141, 195), rgb(60, 120, 102))' }}>
                <p className="font-semibold">
                  1% of your day = ~15 minutes of health investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
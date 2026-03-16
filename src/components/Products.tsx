import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
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
    image:
      "https://images.unsplash.com/photo-1762768767074-e491f1eebdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM0MjQzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    name: "Lito",
    description:
      "Your personal journaling companion. Reflect, grow, and discover insights about yourself through daily writing.",
    icon: BookOpen,
    status: "Available",
    platform: "Web App",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1612907527100-f02bb2b26b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsJTIwd3JpdGluZyUyMG5vdGVib29rfGVufDF8fHx8MTc2MzM0MDY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    name: "What's Next?",
    description:
      "Plan your projects with clarity and confidence. Stay organized and make consistent progress on what matters most.",
    icon: Calendar,
    status: "Coming Soon",
    platform: "In Development",
    link: null,
    image:
      "https://images.unsplash.com/photo-1671009183482-8ea2dd6d7ddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFubmluZyUyMHByb2R1Y3Rpdml0eSUyMG1pbmltYWx8ZW58MXx8fHwxNzYzNDI0MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-cyan-400 to-blue-500",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
            Our Products
          </h2>
          <p className="text-xl text-gray-600">
            Explore our carefully crafted apps designed to fit health into your
            dynamic lifestyle. Each app helps you invest in your well-being,
            one small step at a time.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.name}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20`}
                  ></div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        product.status === "Available" ? "default" : "secondary"
                      }
                      className={
                        product.status === "Available"
                          ? "bg-amber-500"
                          : "bg-gray-600"
                      }
                    >
                      {product.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <p className="text-sm text-gray-500">
                        {product.platform}
                      </p>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {product.link ? (
                    <Button className="w-full" variant="outline">
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

        {/* 1% Principle Callout */}
        <div className="mt-20 bg-gradient-to-br from-amber-50 to-blue-50 rounded-3xl p-8 sm:p-12 border border-amber-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              The 1% Principle
            </h3>
            <p className="text-lg text-gray-700">
              Much of our work is inspired by the principle of incremental
              improvement—transformation comes from consistent small steps. Like
              compounding interest fuels financial growth, investing a mere 1%
              of your day in deliberate health actions accumulates into
              remarkable well-being over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

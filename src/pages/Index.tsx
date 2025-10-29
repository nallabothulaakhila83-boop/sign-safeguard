import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Camera, Zap, Shield, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-traffic-ai.jpg";

const Index = () => {
  const features = [
    {
      icon: Camera,
      title: "Real-Time Detection",
      description: "Instantly detect and identify traffic signs from live video feeds or images.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process multiple frames per second with minimal latency for real-time applications.",
    },
    {
      icon: Shield,
      title: "High Accuracy",
      description: "98.5% accuracy rate across 43 different traffic sign categories.",
    },
    {
      icon: Target,
      title: "Multi-Angle Support",
      description: "Recognize signs from various angles, distances, and lighting conditions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={heroImage} 
              alt="AI detecting traffic signs" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Empowering Safer Roads with{" "}
                <span className="text-gradient">AI Vision</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Advanced traffic sign recognition powered by deep learning and computer vision technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo">
                  <Button size="lg" className="glow-effect group">
                    Try Demo
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="secondary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-warning/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with cutting-edge AI technology to deliver accurate and reliable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="card-gradient p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <Card className="card-gradient border-border p-12 max-w-5xl mx-auto animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">98.5%</div>
                  <p className="text-muted-foreground">Recognition Accuracy</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">43</div>
                  <p className="text-muted-foreground">Sign Categories</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">30ms</div>
                  <p className="text-muted-foreground">Processing Time</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <Card className="card-gradient border-primary/30 p-12 max-w-4xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Experience AI-Powered Detection?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Try our demo and see how our system recognizes traffic signs in real-time
              </p>
              <Link to="/demo">
                <Button size="lg" className="glow-effect">
                  Try Demo Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

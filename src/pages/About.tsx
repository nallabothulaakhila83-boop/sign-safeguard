import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Eye, Brain, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image processing to detect and identify traffic signs in real-time from any angle or lighting condition.",
    },
    {
      icon: Brain,
      title: "Deep Learning",
      description: "Neural networks trained on millions of traffic sign images for accurate classification and recognition.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Designed to enhance road safety by providing instant alerts and warnings to drivers and autonomous systems.",
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Lightning-fast inference capable of processing multiple frames per second for immediate sign detection.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Our System</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our Traffic Sign Recognition System uses state-of-the-art artificial intelligence 
              and computer vision to detect, classify, and interpret road signs with exceptional accuracy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-gradient p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It <span className="text-gradient">Works</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start animate-fade-in">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Image Capture</h3>
                  <p className="text-muted-foreground">
                    The system receives video feed from cameras or uploaded images containing traffic signs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Detection</h3>
                  <p className="text-muted-foreground">
                    Advanced object detection algorithms locate and isolate traffic signs within the image.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Classification</h3>
                  <p className="text-muted-foreground">
                    Deep neural networks analyze the detected signs and classify them into specific categories.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Output & Alert</h3>
                  <p className="text-muted-foreground">
                    The system provides instant results with sign labels, confidence scores, and relevant warnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Layers, Database, Cpu, Gauge } from "lucide-react";

const Technology = () => {
  const techStack = [
    {
      icon: Layers,
      title: "Convolutional Neural Networks",
      description: "Deep CNN architecture with multiple layers for feature extraction and pattern recognition.",
      details: ["ResNet-50 backbone", "Custom classification head", "Transfer learning approach"],
    },
    {
      icon: Database,
      title: "Training Dataset",
      description: "Trained on extensive datasets of traffic signs from multiple countries and conditions.",
      details: ["50,000+ labeled images", "43 traffic sign classes", "Augmented data variations"],
    },
    {
      icon: Cpu,
      title: "Model Architecture",
      description: "Optimized neural network design for accuracy and speed.",
      details: ["Batch normalization", "Dropout regularization", "Adam optimizer"],
    },
    {
      icon: Gauge,
      title: "Performance Metrics",
      description: "Industry-leading accuracy and inference speed for real-time applications.",
      details: ["98.5% accuracy", "30ms inference time", "99.2% precision rate"],
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
              Our <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Built on cutting-edge deep learning and computer vision technologies 
              to deliver accurate and reliable traffic sign recognition.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {techStack.map((tech, index) => (
              <Card 
                key={index}
                className="card-gradient p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <tech.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {tech.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {tech.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Model <span className="text-gradient">Architecture</span>
            </h2>
            
            <Card className="card-gradient p-8 border-border">
              <div className="space-y-6">
                {/* Input Layer */}
                <div className="flex items-center gap-4 animate-fade-in">
                  <div className="flex-shrink-0 w-32 h-20 rounded-lg bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">Input Layer</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      224x224x3 RGB image input
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
                </div>

                {/* Convolutional Layers */}
                <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <div className="flex-shrink-0 w-32 h-20 rounded-lg bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">Conv Layers</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      5 convolutional blocks with ReLU activation
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
                </div>

                {/* Pooling Layers */}
                <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex-shrink-0 w-32 h-20 rounded-lg bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">Pooling</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Max pooling and global average pooling
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
                </div>

                {/* Fully Connected */}
                <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <div className="flex-shrink-0 w-32 h-20 rounded-lg bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">Dense Layers</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Fully connected layers with dropout
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-primary/50 to-primary/20" />
                </div>

                {/* Output Layer */}
                <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="flex-shrink-0 w-32 h-20 rounded-lg bg-warning/10 border-2 border-warning/30 flex items-center justify-center">
                    <span className="text-sm font-semibold text-warning">Output Layer</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      Softmax activation for 43 sign classes
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Technology;

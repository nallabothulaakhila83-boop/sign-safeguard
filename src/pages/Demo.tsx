import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Upload, Image as ImageIcon, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedFile(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPG, PNG, etc.)",
          variant: "destructive",
        });
      }
    }
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      toast({
        title: "Analysis Started",
        description: "Processing your image... (Demo mode - backend integration pending)",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Try Our <span className="text-gradient">Demo</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload an image containing traffic signs and see our AI in action
            </p>
          </div>

          {/* Demo Interface */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="card-gradient p-8 border-border animate-slide-up">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Upload Image</h2>
              
              <div className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PNG, JPG up to 10MB
                    </p>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </div>

                {previewUrl && (
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-border">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <Button 
                      onClick={handleAnalyze}
                      className="w-full glow-effect"
                    >
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Analyze Image
                    </Button>
                  </div>
                )}
              </div>
            </Card>

            {/* Results Section */}
            <Card className="card-gradient p-8 border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">Detection Results</h2>
              
              {!selectedFile ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Upload an image to see detection results
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Sign Type:</span>
                      <span className="text-warning">Speed Limit</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-foreground">Confidence:</span>
                      <span className="text-primary">95.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">Location:</span>
                      <span className="text-muted-foreground">Center-right</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/30 border border-border">
                    <h3 className="font-semibold mb-2 text-foreground">Additional Details</h3>
                    <p className="text-sm text-muted-foreground">
                      The system detected a speed limit sign with high confidence. 
                      The sign is clearly visible and properly oriented.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                    <div className="flex gap-3">
                      <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1 text-warning">Note</h3>
                        <p className="text-sm text-muted-foreground">
                          This is a demo interface. Full AI analysis requires backend integration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Sample Images */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Or Try With Sample Images
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card 
                  key={i}
                  className="overflow-hidden cursor-pointer hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;

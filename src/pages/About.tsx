import { useState } from "react";
import { X, Mail, Phone, Users, Calendar, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import panel images
import panel20222023 from "@/assets/Panel pictures/Panel pictures/panel 2022-2023.jpeg";
import panel20232024 from "@/assets/Panel pictures/Panel pictures/Panel 2023-2024.jpg";
import panel20242025 from "@/assets/Panel pictures/Panel pictures/Panel 2024_2025.jpg";

// Import advisor images
import advisorRafiqul from "@/assets/Dr. Mohammad Rafiqul Islam.jpg";
import advisorTawsif from "@/assets/Tawsif Ur Rashid.jpg";

interface PanelMember {
  name: string;
  designation: string;
  department: string;
  semester: string;
  id: string;
  contact: string;
  email: string;
}

const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const panelImages = [
    { year: "2024-2025", image: panel20242025 },
    { year: "2023-2024", image: panel20232024 },
    { year: "2022-2023", image: panel20222023 },
  ];

  const panelMembers: PanelMember[] = [
    {
      name: "Sheikh Samanta",
      designation: "President",
      department: "MNS (Microbiology)",
      semester: "11th",
      id: "22126006",
      contact: "01732689180",
      email: "sheikh.samanta@g.bracu.ac.bd",
    },
    {
      name: "Avijit Saha",
      designation: "Vice-President",
      department: "MNS (Biotechnology)",
      semester: "9th",
      id: "22236125",
      contact: "01791002913",
      email: "avijit.saha1@g.bracu.ac.bd",
    },
    {
      name: "Mekail Khan",
      designation: "General Secretary",
      department: "MNS (Microbiology)",
      semester: "11th",
      id: "22126050",
      contact: "01791666066",
      email: "mekail.khan@g.bracu.ac.bd",
    },
    {
      name: "Tasmin Tamanna",
      designation: "Treasurer",
      department: "MNS (Microbiology)",
      semester: "11th",
      id: "22126035",
      contact: "01313486797",
      email: "tasmin.tamanna@g.bracu.ac.bd",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gradient mb-8 text-center">About BUNSC</h1>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Our Club Section */}
          <section id="club" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Club</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The BRAC University Natural Sciences Club (BUNSC) is a student-led organization
              dedicated to promoting scientific research, environmental awareness, and community
              service. We bridge the gap between academic learning and practical application,
              fostering innovation and sustainability.
            </p>
          </section>

          {/* Advisors Section */}
          <section id="advisors" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Advisors</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Advisor 1 */}
              <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mx-auto mb-4">
                  <img 
                    src={advisorRafiqul} 
                    alt="Dr. Mohammad Rafiqul Islam" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">Dr. Mohammad Rafiqul Islam</h3>
                <p className="text-center text-primary font-semibold mb-2">Club Advisor</p>
                <p className="text-center text-muted-foreground mb-2">Professor of Statistics</p>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Department of Mathematics and Natural Sciences
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:01726331009" className="hover:text-primary transition-colors">
                      01726331009
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:mrafiq@bracu.ac.bd" className="hover:text-primary transition-colors">
                      mrafiq@bracu.ac.bd
                    </a>
                  </div>
                </div>
              </div>

              {/* Advisor 2 */}
              <div className="glass p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 mx-auto mb-4">
                  <img 
                    src={advisorTawsif} 
                    alt="Md. Tawsif Ur Rashid" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">Md. Tawsif Ur Rashid</h3>
                <p className="text-center text-primary font-semibold mb-2">Club Co-Advisor</p>
                <p className="text-center text-muted-foreground mb-2">Lecturer, Biotechnology Program</p>
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Department of Mathematics and Natural Sciences
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:01689900896" className="hover:text-primary transition-colors">
                      01689900896
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:tawsif.rashid@bracu.ac.bd" className="hover:text-primary transition-colors">
                      tawsif.rashid@bracu.ac.bd
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Panel Section */}
          <section id="panel" className="scroll-mt-24 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Panel Pictures</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {panelImages.map((panel) => (
                <div
                  key={panel.year}
                  className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => setSelectedImage(panel.image)}
                >
                  <img
                    src={panel.image}
                    alt={`Panel ${panel.year}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg">Panel {panel.year}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* More sections can be added similarly */}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            size="icon"
            variant="outline"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-background/80 hover:bg-background"
          >
            <X className="h-5 w-5" />
          </Button>
          <img
            src={selectedImage}
            alt="Full size panel"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default About;

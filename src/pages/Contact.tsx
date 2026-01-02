import { Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gradient mb-4 text-center">Contact Us</h1>
          <p className="text-center text-muted-foreground text-lg mb-12">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 glass p-6 rounded-xl hover:scale-105 transition-transform">
              <Mail className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a 
                  href="mailto:club.bunsc@g.bracu.ac.bd"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  club.bunsc@g.bracu.ac.bd
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 glass p-6 rounded-xl hover:scale-105 transition-transform">
              <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  BRAC University Campus<br/>Merul Badda, Dhaka
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 glass p-6 rounded-xl hover:scale-105 transition-transform">
              <Facebook className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Facebook</h3>
                <a 
                  href="https://www.facebook.com/share/1AYawDpv3X/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  BUNSC Facebook Page
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 glass p-6 rounded-xl hover:scale-105 transition-transform">
              <Instagram className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Instagram</h3>
                <a 
                  href="https://www.instagram.com/nsc.bracu?igsh=YjcxdTU4c3VrYWp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  @nsc.bracu
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 glass p-6 rounded-xl hover:scale-105 transition-transform">
              <Youtube className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">YouTube</h3>
                <a 
                  href="https://youtube.com/@bunsc?si=kzhz3BvwpS9qGVOy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  @bunsc
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 glass p-6 rounded-xl hover:scale-105 transition-transform">
              <Linkedin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/company/brac-university-natural-sciences-club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  BUNSC Linkedin Page
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gradient mb-8">Follow Us</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/share/1AYawDpv3X/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-7 w-7" />
              </a>
              <a
                href="https://www.instagram.com/nsc.bracu?igsh=YjcxdTU4c3VrYWp4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-7 w-7" />
              </a>
              <a
                href="https://youtube.com/@bunsc?si=kzhz3BvwpS9qGVOy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Youtube className="h-7 w-7" />
              </a>
              <a
                href="https://www.linkedin.com/company/brac-university-natural-sciences-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

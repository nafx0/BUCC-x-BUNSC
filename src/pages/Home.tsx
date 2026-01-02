import { Play, Minimize2, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCarousel from "@/components/EventCarousel";
import SponsorScroll from "@/components/SponsorScroll";
import heroImage from "@/assets/hero-nature.jpg";
import introVideo from "@/assets/intro.mp4";
import videoThumbnail from "@/assets/Screenshot 2025-11-05 010709.png";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
  const [isVideoMinimized, setIsVideoMinimized] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const minimizedVideoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const handleVideoClick = () => {
    if (mainVideoRef.current) {
      if (isVideoPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleWatchIntro = () => {
    setIsVideoFullscreen(true);
    setIsVideoMinimized(false);
    setTimeout(() => {
      if (fullscreenVideoRef.current) {
        fullscreenVideoRef.current.play();
        setIsVideoPlaying(true);
      }
    }, 100);
  };

  const handleMinimizeVideo = () => {
    setIsVideoMinimized(true);
    setIsVideoFullscreen(false);
  };

  const handleMaximizeVideo = () => {
    setIsVideoMinimized(false);
    setIsVideoFullscreen(true);
  };

  const handleCloseVideo = () => {
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
    }
    if (minimizedVideoRef.current) {
      minimizedVideoRef.current.pause();
    }
    setIsVideoPlaying(false);
    setIsVideoFullscreen(false);
    setIsVideoMinimized(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Nature and Science"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              BRAC University Natural Sciences Club
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
               BUNSC - Fostering innovation,
              research, and sustainability through scientific exploration and community engagement.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={() => navigate('/contact')}
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Join Our Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWatchIntro}
                className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Introduction
              </Button>
            </div>

            {/* Video Player */}
            <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={handleVideoClick}>
              <video
                ref={mainVideoRef}
                className="w-full h-auto"
                poster={videoThumbnail}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
              >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform animate-glow">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal - YouTube Layout */}
      {isVideoFullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/90">
            <h2 className="text-white text-lg font-semibold">BUNSC Introduction Video</h2>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={handleMinimizeVideo}
                className="text-white hover:bg-white/20"
              >
                <Minimize2 className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={handleCloseVideo}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Video Container */}
          <div className="flex-1 flex items-center justify-center bg-black">
            <div className="w-full max-w-7xl aspect-video">
              <video
                ref={fullscreenVideoRef}
                className="w-full h-full"
                controls
                controlsList="nodownload"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
              >
                <source src={introVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Bottom Section - YouTube Style */}
          <div className="px-4 py-4 bg-black/90 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-white text-xl font-bold mb-2">About BUNSC</h3>
              <p className="text-gray-400 text-sm">
                BRAC University Natural Sciences Club (BUNSC) - Fostering innovation, research, 
                and sustainability through scientific exploration and community engagement.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Minimized Video (YouTube-style picture-in-picture) */}
      {isVideoMinimized && (
        <div className="fixed bottom-20 right-4 z-50 w-80 shadow-2xl rounded-lg overflow-hidden animate-fade-in">
          <div className="relative">
            {/* Video Controls */}
            <div className="absolute top-2 right-2 flex gap-1 z-10">
              <Button
                size="icon"
                variant="outline"
                onClick={handleMaximizeVideo}
                className="h-8 w-8 bg-background/80 hover:bg-background"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={handleCloseVideo}
                className="h-8 w-8 bg-background/80 hover:bg-background"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Video */}
            <video
              ref={minimizedVideoRef}
              className="w-full h-auto"
              controls
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
              onEnded={() => setIsVideoPlaying(false)}
            >
              <source src={introVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Event Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Recent Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our latest events, campaigns, and initiatives making a positive impact
              on science education and environmental conservation.
            </p>
          </div>
          <EventCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Events Hosted" },
              { number: "20+", label: "Research Projects" },
              { number: "10K+", label: "Lives Impacted" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl glass hover:bg-card/60 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Sponsors & Partners section (temporarily disabled) */}
      {/*
      <section className="py-12">
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold text-gradient mb-2">
            Our Sponsors & Partners
          </h2>
          <p className="text-muted-foreground">
            Supporting our mission for a sustainable future
          </p>
        </div>
        <SponsorScroll />
      </section>
      */}
    </div>
  );
};

export default Home;

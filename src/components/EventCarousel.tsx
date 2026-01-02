import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import event images
const eventImages = import.meta.glob("../assets/**/**.jpg", { eager: true });

interface ImageModule {
  default: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  folderName: string;
  date: string;
}

const eventsData: Event[] = [
  {
    id: 1,
    title: "Vitamin D Test Day",
    description: "Community health initiative offering free Vitamin D testing and raising awareness about deficiency prevention",
    folderName: "Vitamin D test Day",
    date: "October 2024",
  },
  {
    id: 2,
    title: "Club Fair 2024",
    description: "Annual club fair showcasing BUNSC activities, achievements, and welcoming new members to our community",
    folderName: "Club fair",
    date: "September 2024",
  },
  {
    id: 3,
    title: "BUNSC Day Tour",
    description: "Educational field trip exploring natural habitats and environmental conservation sites with club members",
    folderName: "BUNSC day tour",
    date: "August 2024",
  },
  {
    id: 4,
    title: "Food Safety & Climate Agriculture",
    description: "Seminar by Dr. Abed Chaudhury on sustainable agriculture and food security in climate change",
    folderName: "Food safety and climate-resilient agriculture, Dr. Abed Chaudhury",
    date: "July 2024",
  },
  {
    id: 5,
    title: "Ribbon of Hope",
    description: "Awareness campaign supporting cancer patients and survivors, spreading messages of hope and solidarity",
    folderName: "Ribbon of hope",
    date: "June 2024",
  },
  {
    id: 6,
    title: "Spectrum Splash",
    description: "Colorful celebration of diversity in science featuring experiments, demonstrations, and creative expression",
    folderName: "Spectrum Splash",
    date: "May 2024",
  },
];

// Get representative image for each event
const getEventImage = (folderName: string): string => {
  const imagePath = Object.keys(eventImages).find((path) => 
    path.includes(folderName) && !path.includes('Panel pictures') && !path.includes('icon') && !path.includes('hero-nature')
  );
  return imagePath ? (eventImages[imagePath] as ImageModule).default : "";
};

const events = eventsData.map(event => ({
  ...event,
  image: getEventImage(event.folderName)
}));

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {events.map((event) => (
            <div key={event.id} className="w-full flex-shrink-0">
              <Card className="border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-96 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                      <span className="text-sm text-primary font-semibold mb-2">
                        {event.date}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 hover:border-primary bg-background/80 backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30 hover:border-primary bg-background/80 backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;

import { Badge } from "@/components/ui/badge";

// Import representative images from events
const eventImages = import.meta.glob("../assets/**/**.jpg", { eager: true });

interface ImageModule {
  default: string;
}

interface BlogPost {
  title: string;
  author: string;
  date: string;
  preview: string;
  category: string;
  folderName: string;
}

interface Magazine {
  title: string;
  issue: string;
  date: string;
  description: string;
  folderName: string;
}

const Publications = () => {
  const blogs: BlogPost[] = [
    {
      title: "Advancing Healthcare Through Community Screening Programs",
      author: "BUNSC Medical Team",
      date: "November 2024",
      preview: "Exploring the impact of our Vitamin D and Lipid Profile testing campaigns. Learn how community health initiatives bridge the gap between medical awareness and preventive care.",
      category: "Health & Wellness",
      folderName: "Vitamin D test Day",
    },
    {
      title: "Food Safety and Climate-Resilient Agriculture",
      author: "Dr. Abed Chaudhury",
      date: "October 2024",
      preview: "A comprehensive overview of sustainable agricultural practices in the face of climate change. Insights from our seminar on ensuring food security for future generations.",
      category: "Environment",
      folderName: "Food safety and climate-resilient agriculture, Dr. Abed Chaudhury",
    },
    {
      title: "Ribbon of Hope: Standing with Cancer Warriors",
      author: "BUNSC Awareness Team",
      date: "September 2024",
      preview: "Our journey in creating awareness and spreading hope for cancer patients and survivors. A reflection on the power of community support and solidarity.",
      category: "Social Impact",
      folderName: "Ribbon of hope",
    },
    {
      title: "The BRACU National Biotech Olympiad Experience",
      author: "BUNSC Competition Team",
      date: "August 2024",
      preview: "Behind the scenes of organizing a national-level biotechnology competition. Celebrating young minds pushing the boundaries of biological sciences.",
      category: "Education",
      folderName: "Bracu national biotech olympiad",
    },
    {
      title: "Spectrum Splash: Where Science Meets Art",
      author: "BUNSC Creative Team",
      date: "July 2024",
      preview: "A vibrant celebration of diversity in science through creative expression. How art and science converge to inspire innovation and inclusivity.",
      category: "Culture",
      folderName: "Spectrum Splash",
    },
    {
      title: "Welcoming Fresh Minds: Fresher Orientation 2024",
      author: "BUNSC Panel",
      date: "September 2024",
      preview: "Introducing new students to the world of natural sciences at BRACU. Our approach to mentorship, guidance, and building a strong scientific community.",
      category: "Education",
      folderName: "Fresher Orientation of fall2024,  Department of Mathematics and Natural Sciences",
    },
  ];

  const magazines: Magazine[] = [
    {
      title: "BUNSC Annual Report 2024",
      issue: "Volume 3",
      date: "November 2024",
      description: "A comprehensive review of our achievements, events, and impact throughout the year. Featuring highlights from major campaigns and competitions.",
      folderName: "Club fair",
    },
    {
      title: "BioScience Today",
      issue: "Fall Edition",
      date: "October 2024",
      description: "Quarterly magazine featuring research articles, student projects, and breakthroughs in biotechnology and natural sciences.",
      folderName: "IBC",
    },
    {
      title: "The Nature Chronicle",
      issue: "Environmental Special",
      date: "September 2024",
      description: "Special issue focusing on environmental conservation, sustainable practices, and our field trips exploring natural habitats.",
      folderName: "BUNSC day tour",
    },
  ];

  // Get representative image for each publication
  const getPublicationImage = (folderName: string): string => {
    const imagePath = Object.keys(eventImages).find((path) => 
      path.includes(folderName) && !path.includes('Panel pictures') && !path.includes('icon') && !path.includes('hero-nature')
    );
    return imagePath ? (eventImages[imagePath] as ImageModule).default : "";
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Health & Wellness":
        return "bg-green-500/10 text-green-500 border-green-500/30";
      case "Environment":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/30";
      case "Social Impact":
        return "bg-pink-500/10 text-pink-500 border-pink-500/30";
      case "Education":
        return "bg-blue-500/10 text-blue-500 border-blue-500/30";
      case "Culture":
        return "bg-purple-500/10 text-purple-500 border-purple-500/30";
      default:
        return "bg-primary/10 text-primary border-primary/30";
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gradient mb-8 text-center">Publications</h1>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Explore our blogs, research articles, and magazines documenting our journey in science and community service
        </p>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Blogs Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Latest Blogs</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={getPublicationImage(blog.folderName)}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge
                      variant="outline"
                      className={`mb-3 ${getCategoryColor(blog.category)}`}
                    >
                      {blog.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      By {blog.author} • {blog.date}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {blog.preview}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Magazines Section */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Magazines & Publications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {magazines.map((magazine, index) => (
                <div
                  key={index}
                  className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="h-72 overflow-hidden">
                    <img
                      src={getPublicationImage(magazine.folderName)}
                      alt={magazine.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{magazine.issue}</Badge>
                      <span className="text-xs text-muted-foreground">{magazine.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{magazine.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {magazine.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Publications;

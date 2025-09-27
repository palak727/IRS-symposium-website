import { useState } from "react";
import { GalleryModal } from "./gallery-modal";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Conference presentation in auditorium"
    },
    {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Researchers at poster session"
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Networking coffee break"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Expert panel discussion"
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Awards ceremony"
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Workshop collaboration"
    }
  ];

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-background" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="gallery-title">
            Last Year's Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="gallery-subtitle">
            Relive the memorable moments from our previous symposium and get excited for this year's event.
          </p>
        </div>
        
        {/* Video Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-card rounded-lg border border-border shadow-lg overflow-hidden" data-testid="youtube-container">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Institute Research Symposium 2023 Highlights" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                data-testid="youtube-iframe"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4" data-testid="video-caption">
              Experience the highlights from our 2023 Research Symposium
            </p>
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer" 
              onClick={() => openModal(image)}
              data-testid={`gallery-image-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>

      <GalleryModal 
        image={selectedImage} 
        onClose={closeModal} 
      />
    </section>
  );
}

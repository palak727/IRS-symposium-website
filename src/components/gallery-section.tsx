import { useState } from "react";
import { GalleryModal } from "./gallery-modal";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const galleryImages = [
    {
      src: "/images/ppt.jpg",
      alt: "Conference presentation in auditorium"
    },
    {
      src: "/images/poster.jpg",
      alt: "poster"
    },
    {
      src: "/images/audience.jpg",
      alt: ""
    },
    {
      src: "/images/award.jpg",
      alt: "Awards ceremony"
    },
    {
      src: "/images/banner.jpg",
      alt: "banner"
    },
    {
      src: "/images/exhibi.jpg",
      alt: ""
    },
    {
      src: "/images/grp.jpg",
      alt: "Workshop collaboration"
    },
    {
      src: "/images/grp2.jpg",
      alt: "Workshop collaboration"
    },
    {
      src: "/images/opening.jpg",
      alt: "Workshop collaboration"
    },
    {
      src: "/images/ppt.jpg",
      alt: "Workshop collaboration"
    },
    {
      src: "/images/proflec.jpg",
      alt: "Workshop collaboration"
    },
    {
      src: "/images/proflec2.jpg",
      alt: "Workshop collaboration"
    },
    {
      src: "/images/speaker.jpg",
      alt: "Workshop collaboration"
    },
    {
      src: "/images/speaker2.jpg",
      alt: "Workshop collaboration"
    },
  
    {
      src: "/images/team.jpg",
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
    <section id="gallery" className="py-20 bg-teal-50" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="gallery-title">
            Last Year's Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="gallery-subtitle">
            Relive the memorable moments from our previous symposium and get excited for this year's event.
          </p>
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
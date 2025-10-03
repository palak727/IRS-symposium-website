export function HeroSection() {
  const images = [
    "https://iitk.ac.in/doip/images/slider/doip-slide-1.jpg",
    "https://iitk.ac.in/doip/images/slider/doip-slide-2.jpg",
    "https://www.iitk.ac.in/data/media/landing_pages/incubation-space_0.jpg",
    "https://techportal.in/wp-content/uploads/2023/11/IIT-Kanpur-image.jpg",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 font-sans">
      {/* Carousel background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-carousel flex w-[400%] h-full">
          {images.map((src, i) => (
            <div
              key={i}
              className="w-1/4 h-full bg-cover bg-center transition-transform duration-1000"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
        {/* Green haze overlay */}
        <div className="absolute inset-0 bg-green-900/50"></div>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fade-in" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Institute Research Symposium <p className="text-green-400"> IRS 2025</p>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium animate-slide-up">
          Advancing Knowledge Through Collaborative Research
        </p>

        <p className="text-base sm:text-lg text-white/80 animate-slide-up max-w-3xl mx-auto">
          Join us for an inspiring gathering of researchers, academics, and innovators as we explore groundbreaking discoveries and foster meaningful collaborations.
        </p>

        {/* Dates & deadlines */}
        <div className="mt-6 space-y-2 text-white/90 font-semibold text-lg sm:text-xl">
          <p>📅 Dates: 26th–28th Oct 2025</p>
          <p>📝 Abstract Submission Deadline: 10th Oct 2025</p>
        </div>

  
      </div>
    </section>
  );
}

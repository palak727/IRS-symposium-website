import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside (optional enhancement)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // You can enhance this with ref checks if necessary
      if (
        !event.target.closest(".events-dropdown") &&
        !event.target.closest(".events-button")
      ) {
        setEventsOpen(false);
      }
      if (
        !event.target.closest(".more-dropdown") &&
        !event.target.closest(".more-button")
      ) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-green-950/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 text-white">
              <img
                src="https://www.anciitk.co.in/favicon.ico"
                alt="ANC Logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl tracking-wide">IRS 2025</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-green-300 transition-colors">Home</Link>
            <a href="#about" className="hover:text-green-300 transition-colors">About</a>
            <a href="#topics" className="hover:text-green-300 transition-colors">Topics</a>
            <a href="#abstract" className="hover:text-green-300 transition-colors">Abstract</a>
            <a href="#schedule" className="hover:text-green-300 transition-colors">Schedule</a>
            <a href="#guidelines" className="hover:text-green-300 transition-colors">Guidelines</a>
            <a href="#speakers" className="hover:text-green-300 transition-colors">Speakers</a>
            <a href="#workshops" className="hover:text-green-300 transition-colors">Workshops</a>

            {/* Events Dropdown */}
            <div className="relative">
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                className="flex items-center hover:text-green-300 transition-colors events-button"
              >
                Events <ChevronDown size={16} className="ml-1" />
              </button>
              {eventsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-80 events-dropdown">
                  <Link
                    to="/plenary-talks"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setEventsOpen(false)}
                  >
                    Plenary Talks
                  </Link>
                  <Link
                    to="/panel-discussion"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setEventsOpen(false)}
                  >
                    Panel Discussion
                  </Link>
                  <Link
                    to="/research-hackathon"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setEventsOpen(false)}
                  >
                    Research Hackathon
                  </Link>
                  <Link
                    to="/research-contest"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setEventsOpen(false)}
                  >
                    Research Contest
                  </Link>
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center hover:text-green-300 transition-colors more-button"
              >
                More <ChevronDown size={16} className="ml-1" />
              </button>
              {moreOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-80 more-dropdown">
                  <a
                    href="/team"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    Our Team
                  </a>
                  <a
                    href="/sponsors"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    Sponsors
                  </a>
                  <a
                    href="/venue"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    Venue
                  </a>
                  <a
                    href="/associates"
                    className="block px-4 py-2 hover:bg-green-100"
                    onClick={() => setMoreOpen(false)}
                  >
                    Previous Associates
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-950/95 backdrop-blur-lg pb-4">
          <div className="flex flex-col items-center space-y-4 text-white font-medium">
            <Link to="/" className="hover:text-green-300 transition-colors">Home</Link>
            <a href="#about" className="hover:text-green-300 transition-colors">About</a>
            <a href="#topics" className="hover:text-green-300 transition-colors">Topics</a>
            <a href="#abstract" className="hover:text-green-300 transition-colors">Abstract</a>
            <a href="#schedule" className="hover:text-green-300 transition-colors">Schedule</a>
            <a href="#guidelines" className="hover:text-green-300 transition-colors">Guidelines</a>
            <a href="#speakers" className="hover:text-green-300 transition-colors">Speakers</a>
            <a href="#workshops" className="hover:text-green-300 transition-colors">Workshops</a>

            {/* Mobile Events */}
            <div className="relative w-full">
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                className="flex items-center justify-center w-full py-2 hover:text-green-300 transition-colors"
              >
                Events <ChevronDown size={16} className="ml-1" />
              </button>
              {eventsOpen && (
                <div className="flex flex-col w-full bg-white text-gray-800 rounded-lg shadow-xl py-2 z-80">
                  <Link to="/plenary-talks" className="block px-4 py-2 hover:bg-green-100" onClick={() => setEventsOpen(false)}>
                    Plenary Talks
                  </Link>
                  <Link to="/panel-discussion" className="block px-4 py-2 hover:bg-green-100" onClick={() => setEventsOpen(false)}>
                    Panel Discussion
                  </Link>
                  <Link to="/research-hackathon" className="block px-4 py-2 hover:bg-green-100" onClick={() => setEventsOpen(false)}>
                    Research Hackathon
                  </Link>
                  <Link to="/research-contest" className="block px-4 py-2 hover:bg-green-100" onClick={() => setEventsOpen(false)}>
                    Research Contest
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile More */}
            <div className="relative w-full">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center justify-center w-full py-2 hover:text-green-300 transition-colors"
              >
                More <ChevronDown size={16} className="ml-1" />
              </button>
              {moreOpen && (
                <div className="flex flex-col w-full bg-white text-gray-800 rounded-lg shadow-xl py-2 z-80">
                  <a href="#team" className="block px-4 py-2 hover:bg-green-100" onClick={() => setMoreOpen(false)}>Our Team</a>
                  <a href="#sponsors" className="block px-4 py-2 hover:bg-green-100" onClick={() => setMoreOpen(false)}>Sponsors</a>
                  <a href="#venue" className="block px-4 py-2 hover:bg-green-100" onClick={() => setMoreOpen(false)}>Venue</a>
                  <a href="#associates" className="block px-4 py-2 hover:bg-green-100" onClick={() => setMoreOpen(false)}>Previous Associates</a>
                  <a href="#glimpses" className="block px-4 py-2 hover:bg-green-100" onClick={() => setMoreOpen(false)}>Glimpses from Last Year</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

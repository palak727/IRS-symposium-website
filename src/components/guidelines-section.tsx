import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const GuidelineSection = () => {
  return (
    <section id="guidelines" className="bg-teal-50 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Presentation & Contest Guidelines
        </h2>

        {/* Card 1: Oral Presentations */}
        <Card className="bg-white shadow-lg rounded-xl p-8 max-w-6xl mx-auto">
          <CardContent className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Guidelines for Oral Presentations
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>No restrictions on template or number of slides. Structure your presentation to complete within the allotted time.</li>
              <li>Use standard fonts to avoid compatibility issues. Include slide numbers for better navigation.</li>
              <li>Each presenter has 10 minutes + 2 minutes Q&A. Adhering to time limits is mandatory.</li>
              <li>Arrive at the venue at least 10 minutes before your session.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Card 2: Poster Presentations */}
        <Card className="bg-white shadow-lg rounded-xl p-8 max-w-6xl mx-auto">
          <CardContent className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Guidelines for Poster Presentations
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>Prepare poster in A0 size (33.11 × 46.81 in / 84.1 × 118.9 cm) in portrait orientation.</li>
              <li>Ensure Abstract ID is prominently displayed.</li>
              <li>Use clear headers: Introduction, Methods, Results, Conclusion.</li>
              <li>Choose readable fonts and include high-quality visuals.</li>
              <li>Underline presenter’s name and mark corresponding authors with an asterisk (*).</li>
              <li>Each participant has 7 minutes, including presentation and Q&A.</li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <a
                href="https://docs.google.com/document/d/poster_template_link/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Download Poster Template
                </Button>
              </a>
              <a
                href="https://forms.gle/poster_submission_form_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  Submit Poster
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Metallography Contest */}
        <Card className="bg-white shadow-lg rounded-xl p-8 max-w-6xl mx-auto">
          <CardContent className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Metallography Contest Guidelines
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
              <li>Submit metallography entries in physical form for final display.</li>
              <li>Micrographs can be color or black & white, affixed to a white backing sheet no larger than A4.</li>
              <li>Include caption, brief description (≤30 words), entry ID, technique, and unique features.</li>
              <li>Micrographs must be high-quality, include a micron scale marker, and be original work.</li>
              <li>Submit entries in one of the four categories:
                <ul className="list-decimal list-inside ml-5 mt-2">
                  <li>Light Microscopy (LM)</li>
                  <li>Scanning Electron Microscopy (SEM)</li>
                  <li>Transmission Electron Microscopy (TEM)</li>
                  <li>Other Microscopy Technique</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

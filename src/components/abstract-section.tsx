import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const AbstractSection = () => {
  return (
    <section id="abstract" className="bg-teal-50 py-16 px-6 font-sans">
      <div className="max-w-300 mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
          Abstract Submission
        </h2>

        {/* Deadline Info */}
        <div className="mb-8 text-center">
          <p className="text-xl text-gray-700 font-medium">
             Deadline:{" "}
            <span className="font-semibold text-gray-900">
              10th October 2025
            </span>
          </p>
        </div>

        {/* Abstract Instructions Card */}
        <Card className="bg-white shadow-lg rounded-xl p-8 max-w-6xl mx-auto">
          <CardContent className="space-y-6">
            <p className="text-gray-700 text-base">
              Submit your abstract to present your research through an oral or poster presentation. Highlight your innovative discoveries, connect with leading experts, and receive valuable feedback. Ensure compliance with the guidelines provided in the attached abstract template.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://docs.google.com/document/d/1DGcpahwPNtwjqNiYDUDpZza4cuRB1w78/edit" target="_blank" rel="noopener noreferrer">
  <Button className="bg-green-600 hover:bg-green-700 text-white">
    Download Template
  </Button>
</a>

<a href="https://docs.google.com/forms/d/e/1FAIpQLSflCz36gnDY46dLADou4SlF5kdZ1HOII6PrPZjG_3781ad6Fg/viewform" target="_blank" rel="noopener noreferrer">
  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
    Submit Abstract
  </Button>
</a>

              
            </div>

            {/* Notes */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Please Note:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 text-base">
                <li>Symposium Committee will review the abstracts for relevance, originality & significance of the research.</li>
                <li>The review decision will be intimated to the candidates via email.</li>
                <li>Presentation mode (Oral or Poster) will be decided at the time of session scheduling and informed with abstract acceptance email.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

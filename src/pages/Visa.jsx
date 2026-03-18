import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

// Import slide components
import VisaIntro from "../slides/VisaIntro";
import VisaTypes from "../slides/VisaTypes";
import VisaRequirements from "../slides/VisaRequirements";
import ExtendedStayCountries from "../slides/ExtendedStayCountries";
import VisaApplicationOverview from "../slides/VisaApplicationOverview";
import WorkVisaSpecifics from "../slides/WorkVisaSpecifics";
import MexicoOverview from "../slides/MexicoOverview";
import MexicoApplication from "../slides/MexicoApplication";
import CanadaOverview from "../slides/CanadaOverview";
import UruguayOverview from "../slides/UruguayOverview";
import CountryComparison from "../slides/CountryComparison";
import TipsAndResources from "../slides/TipsAndResources";

function Visa() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Visa Information Guide",
      subtitle: "Essential Information for International Relocation",
      component: VisaIntro,
    },
    {
      title: "Understanding Visa Types",
      subtitle: "Key Categories Explained",
      component: VisaTypes,
    },
    {
      title: "Visa Requirements",
      subtitle: "Global Access for U.S. Citizens",
      component: VisaRequirements,
    },
    {
      title: "Extended Stay Countries",
      subtitle: "6+ Months Visa-Free for U.S. Citizens",
      component: ExtendedStayCountries,
    },
    {
      title: "Visa Application Overview",
      subtitle: "General Process & Timeline",
      component: VisaApplicationOverview,
    },
    {
      title: "Work Visa Specifics",
      subtitle: "What You Need to Know",
      component: WorkVisaSpecifics,
    },
    {
      title: "Mexico Overview",
      subtitle: "Temporary Resident Visa for Remote Workers",
      component: MexicoOverview,
    },
    {
      title: "Mexico: Application Process",
      subtitle: "Step-by-Step Guide",
      component: MexicoApplication,
    },
    {
      title: "Canada Overview",
      subtitle: "Work Permits & Immigration Pathways",
      component: CanadaOverview,
    },
    {
      title: "Uruguay Overview",
      subtitle: "Simple Residency Process",
      component: UruguayOverview,
    },
    {
      title: "Country Comparison",
      subtitle: "Quick Reference Guide",
      component: CountryComparison,
    },
    {
      title: "Critical Tips & Resources",
      subtitle: "Keys to Success",
      component: TipsAndResources,
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Slide Container */}
      <div className="bg-white rounded-lg shadow-2xl p-8 mb-6 min-h-[600px] flex flex-col">
        {/* Slide Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-lg text-gray-600">
            {slides[currentSlide].subtitle}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-3"></div>
        </div>

        {/* Slide Content */}
        <div className="flex-1 overflow-y-auto">
          <CurrentSlideComponent />
        </div>

        {/* Slide Number */}
        <div className="text-center text-sm text-gray-500 mt-6">
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            currentSlide === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-black hover:bg-blue-700"
          }`}
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <button
          onClick={() => goToSlide(0)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-black rounded-lg font-medium hover:bg-gray-700 transition-all"
        >
          <Home size={20} />
          Home
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
            currentSlide === slides.length - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-black hover:bg-blue-700"
          }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Slide Dots */}
      <div className="flex justify-center gap-2 flex-wrap">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Visa;

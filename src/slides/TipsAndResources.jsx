import React from 'react';

const TipsAndResources = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Top 5 Tips for Success</h4>
        <ol className="space-y-2 text-sm list-decimal list-inside text-gray-700">
          <li><strong>Start Early:</strong> Begin passport/document gathering 6-12 months before planned move</li>
          <li><strong>Save Money:</strong> Have 6-12 months living expenses saved</li>
          <li><strong>Get Organized:</strong> Track deadlines, keep copies of everything</li>
          <li><strong>Be Accurate:</strong> Never provide false information — it's grounds for permanent denial</li>
          <li><strong>Connect:</strong> Join trans expat communities in your destination country</li>
        </ol>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <h4 className="font-bold text-gray-800 mb-2">Essential Resources</h4>
          <ul className="space-y-1 text-gray-700">
            <li><strong>Help Me Leave:</strong> helpmeleave.us</li>
            <li><strong>Lambda Legal:</strong> Trans passport info</li>
            <li><strong>Rainbow Railroad:</strong> Emergency relocation</li>
            <li><strong>Immigration Equality:</strong> LGBTQ+ legal support</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <h4 className="font-bold text-gray-800 mb-2">Don't Forget</h4>
          <ul className="space-y-1 text-gray-700">
            <li>U.S. citizens file taxes wherever they live</li>
            <li>Research local HRT/healthcare access</li>
            <li>Get documents apostilled</li>
            <li>Consider immigration consultant/lawyer</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-500 p-3">
        <p className="text-sm font-bold text-gray-800">Stay Informed</p>
        <p className="text-xs text-gray-700 mt-1">
          U.S. passport policies are under active litigation but the Supreme Court stayed the
          injunction in November 2025 — gender marker changes are not currently available.
          Do not renew your passport unless necessary, as renewals revert to birth sex.
          Check the{" "}
          <a href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html" target="_blank" rel="noopener noreferrer" className="underline">State Department sex marker page</a>{" "}
          for the latest.
        </p>
      </div>

      <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-center">
        <p className="font-bold text-lg text-gray-800">Your safety, wellbeing, and authenticity matter.</p>
        <p className="text-sm mt-2 text-gray-700">Many have walked this path before you. You're not alone.</p>
      </div>
    </div>
  );
};

export default TipsAndResources;

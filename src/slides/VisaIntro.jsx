import React from 'react';

const VisaIntro = () => {
  return (
    <div className="space-y-6 text-center">
      <div className="text-6xl mb-6">🌍✈️</div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Understanding Visas for International Relocation
      </h2>
      <p className="text-xl text-gray-700 leading-relaxed">
        This presentation covers the basics of visa types and visa applications for U.S. citizens seeking to relocate internationally.
      </p>
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-4 text-left">
        <h3 className="font-bold text-blue-900 mb-2">What You'll Learn:</h3>
        <ul className="space-y-2 text-blue-800">
          <li>• Different types of visas and their purposes</li>
          <li>• Visa requirements and application processes</li>
          <li>• Country-specific information for Mexico, Canada, and Uruguay</li>
          <li>• Extended stay options for U.S. citizens</li>
          <li>• Essential tips and resources for successful relocation</li>
        </ul>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        <p>Use the navigation arrows to move through the slides</p>
      </div>
    </div>
  );
};

export default VisaIntro;

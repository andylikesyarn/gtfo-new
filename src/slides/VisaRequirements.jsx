import React from 'react';

const VisaRequirements = () => {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
        <h4 className="font-bold text-blue-900 mb-2">Global Visa Access for U.S. Citizens</h4>
        <p className="text-blue-800 text-sm">
          As a U.S. passport holder, you have visa-free or visa-on-arrival access to many countries worldwide. 
          This map shows visa requirements for U.S. citizens traveling internationally.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4 overflow-hidden">
        <img 
          src="/visa-map.png" 
          alt="World map showing visa requirements for United States citizens"
          className="w-full h-auto"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
          <div className="font-bold text-green-900 mb-1">✓ Visa-Free Access</div>
          <p className="text-green-800">Most of Europe, Americas, and many countries in Asia and Oceania</p>
        </div>
        <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
          <div className="font-bold text-yellow-900 mb-1">⚠️ Visa Required</div>
          <p className="text-yellow-800">Parts of Africa, Middle East, and some Asian countries</p>
        </div>
      </div>

      <div className="bg-purple-50 p-3 rounded text-xs">
        <p className="font-bold text-purple-900 mb-1">Key Considerations:</p>
        <ul className="space-y-1 text-purple-800">
          <li>• Visa-free doesn't mean you can work - typically tourism/business only</li>
          <li>• Length of stay varies by country (usually 30-90 days)</li>
          <li>• Always check current requirements before booking travel</li>
          <li>• Some countries require passport validity of 6+ months</li>
        </ul>
      </div>
    </div>
  );
};

export default VisaRequirements;

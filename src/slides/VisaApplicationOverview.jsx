import React from 'react';

const VisaApplicationOverview = () => {
  const steps = [
    { num: 1, text: "Research requirements for your destination country" },
    { num: 2, text: "Gather required documents (6+ months in advance)" },
    { num: 3, text: "Get apostilles and certified translations as needed" },
    { num: 4, text: "Schedule appointment at embassy/consulate" },
    { num: 5, text: "Attend interview with all documentation" },
    { num: 6, text: "Wait for processing (varies by country and visa type)" },
    { num: 7, text: "Receive approval and visa/permit" },
    { num: 8, text: "Complete in-country registration if required" }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold mb-3">Standard Application Steps</h4>
        <div className="space-y-2">
          {steps.map(step => (
            <div key={step.num} className="flex items-start text-sm">
              <div className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1">{step.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center text-sm">
        <div className="bg-gray-50 p-3 rounded border border-gray-200">
          <div className="font-bold">Tourist Visas</div>
          <div className="text-2xl font-bold text-gray-700">Days–Weeks</div>
        </div>
        <div className="bg-gray-50 p-3 rounded border border-gray-200">
          <div className="font-bold">Work Permits</div>
          <div className="text-2xl font-bold text-gray-700">Weeks–Months</div>
        </div>
        <div className="bg-gray-50 p-3 rounded border border-gray-200">
          <div className="font-bold">Residency</div>
          <div className="text-2xl font-bold text-gray-700">Months</div>
        </div>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-500 p-3">
        <p className="text-gray-800 text-xs">
          <strong>Critical:</strong> Never provide false information. Inconsistencies can lead to permanent denial.
        </p>
      </div>
    </div>
  );
};

export default VisaApplicationOverview;

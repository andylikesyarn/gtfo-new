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
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <h4 className="font-bold mb-3">Standard Application Steps</h4>
        <div className="space-y-2">
          {steps.map(step => (
            <div key={step.num} className="flex items-start text-sm">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                {step.num}
              </div>
              <div className="flex-1">{step.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center text-sm">
        <div className="bg-yellow-50 p-3 rounded">
          <div className="font-bold">Tourist Visas</div>
          <div className="text-2xl font-bold text-yellow-600">Days-Weeks</div>
        </div>
        <div className="bg-blue-50 p-3 rounded">
          <div className="font-bold">Work Permits</div>
          <div className="text-2xl font-bold text-blue-600">Weeks-Months</div>
        </div>
        <div className="bg-green-50 p-3 rounded">
          <div className="font-bold">Residency</div>
          <div className="text-2xl font-bold text-green-600">Months</div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-3">
        <p className="text-red-800 text-xs">
          <strong>Critical:</strong> Never provide false information. Inconsistencies can lead to permanent denial.
        </p>
      </div>
    </div>
  );
};

export default VisaApplicationOverview;

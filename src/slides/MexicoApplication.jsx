import React from 'react';

const MexicoApplication = () => {
  const steps = [
    { step: "1", title: "Schedule Appointment", detail: "At Mexican consulate in your home country" },
    { step: "2", title: "Gather Documents", detail: "Passport, application form, photo, proof of income, background check" },
    { step: "3", title: "Attend Interview", detail: "Submit all documents at consulate" },
    { step: "4", title: "Receive Approval", detail: "Visa sticker in passport (valid 6 months to enter)" },
    { step: "5", title: "Enter Mexico", detail: "Within 6 months of approval" },
    { step: "6", title: "Register with INM", detail: "Within 30 days of arrival" },
    { step: "7", title: "Get Resident Card", detail: "Valid for 1 year, renewable" }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
        <p className="text-sm text-yellow-900">
          <strong>Critical:</strong> Must apply from OUTSIDE Mexico at a consulate/embassy
        </p>
      </div>

      <div className="space-y-2">
        {steps.map(item => (
          <div key={item.step} className="flex items-start bg-white border border-gray-200 rounded p-3">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
              {item.step}
            </div>
            <div className="flex-1">
              <div className="font-bold text-sm">{item.title}</div>
              <div className="text-xs text-gray-600">{item.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-3 rounded">
        <div className="font-bold text-sm mb-2">Popular Cities for Trans Expats:</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>• <strong>Mexico City</strong> - Large LGBTQ+ community</div>
          <div>• <strong>Playa del Carmen</strong> - Beach lifestyle</div>
          <div>• <strong>Oaxaca</strong> - Cultural richness</div>
          <div>• <strong>Puerto Vallarta</strong> - LGBTQ+ beach town</div>
        </div>
      </div>
    </div>
  );
};

export default MexicoApplication;

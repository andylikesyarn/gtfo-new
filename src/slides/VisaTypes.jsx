import React from 'react';

const VisaTypes = () => {
  return (
    <div className="space-y-3">
      <div className="bg-white border-l-4 border-purple-500 p-4">
        <h4 className="font-bold text-purple-900">Tourist/Visitor Visas</h4>
        <p className="text-sm text-gray-700 mt-1">
          Short-term visits (30-180 days). No work permitted.
        </p>
        <p className="text-xs text-gray-600 mt-1">
          ✓ Best for: Exploring before committing to move
        </p>
      </div>

      <div className="bg-white border-l-4 border-blue-500 p-4">
        <h4 className="font-bold text-blue-900">Work Visas/Permits</h4>
        <div className="text-sm text-gray-700 mt-1 space-y-1">
          <p><strong>Employer-Specific:</strong> Tied to one employer</p>
          <p><strong>Open Work Permit:</strong> Work for any employer</p>
          <p><strong>Digital Nomad:</strong> Work remotely for foreign employers</p>
        </div>
      </div>

      <div className="bg-white border-l-4 border-green-500 p-4">
        <h4 className="font-bold text-green-900">Student Visas</h4>
        <p className="text-sm text-gray-700 mt-1">
          Study at recognized institutions. Often includes limited work rights.
        </p>
        <p className="text-xs text-gray-600 mt-1">
          ✓ Often pathway to permanent residency
        </p>
      </div>

      <div className="bg-white border-l-4 border-orange-500 p-4">
        <h4 className="font-bold text-orange-900">Residency Visas</h4>
        <div className="text-sm text-gray-700 mt-1 space-y-1">
          <p><strong>Temporary:</strong> 1-4 years, renewable</p>
          <p><strong>Permanent:</strong> Indefinite stay, pathway to citizenship</p>
        </div>
      </div>
    </div>
  );
};

export default VisaTypes;

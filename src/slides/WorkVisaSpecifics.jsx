import React from 'react';

const WorkVisaSpecifics = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold text-gray-800 mb-3">Key Requirements (Most Countries)</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="font-bold mb-1">Documentation</div>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>Valid passport (6+ months)</li>
              <li>Job offer letter or contract</li>
              <li>Proof of qualifications</li>
              <li>Police clearance</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="font-bold mb-1">Financial</div>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>Proof of income/funds</li>
              <li>Bank statements</li>
              <li>Tax returns</li>
              <li>Application fees</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="font-bold mb-1">Health</div>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>Medical examination</li>
              <li>Health insurance proof</li>
              <li>Vaccination records</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <div className="font-bold mb-1">Professional</div>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>Credentials evaluation</li>
              <li>Professional licenses</li>
              <li>Work experience proof</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h4 className="font-bold mb-2">Digital Nomad Permits</h4>
        <div className="text-sm space-y-2 text-gray-700">
          <p><strong>What they allow:</strong> Work remotely for employers/clients OUTSIDE the destination country</p>
          <p><strong>What they DON'T allow:</strong> Employment with local companies</p>
          <p><strong>Typical requirements:</strong> Proof of $2,000–$4,000 USD/month income or significant savings</p>
        </div>
      </div>

      <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-400 text-xs text-gray-800">
        <strong>Important:</strong> Employer-sponsored work permits often require the employer to prove
        no local workers are available for the role (Labor Market Impact Assessment or similar).
      </div>
    </div>
  );
};

export default WorkVisaSpecifics;

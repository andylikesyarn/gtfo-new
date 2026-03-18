import React from 'react';

const CanadaOverview = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-red-600 via-white to-red-600 text-gray-900 p-4 rounded-lg text-center">
        <h3 className="text-2xl font-bold">🇨🇦 CANADA</h3>
        <p className="text-sm mt-1">Multiple Pathways to Work & Residency</p>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-3">
        <h4 className="font-bold text-green-900">U.S. Citizen Benefits:</h4>
        <ul className="text-sm text-green-800 mt-2 space-y-1">
          <li>✓ No tourist visa required (6 months visit)</li>
          <li>✓ USMCA streamlined work permits for certain professions</li>
          <li>✓ Strong LGBT protections & gender identity rights</li>
          <li>✓ Same-sex marriage recognized (spousal sponsorship available)</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-blue-50 border border-blue-200 p-3 rounded">
          <h4 className="font-bold text-blue-900 text-sm mb-2">Employer-Specific Permit</h4>
          <ul className="text-xs space-y-1">
            <li>• Requires job offer</li>
            <li>• Usually needs LMIA</li>
            <li>• USMCA may exempt LMIA</li>
            <li>• Processing: 60-120 days</li>
          </ul>
        </div>
        <div className="bg-purple-50 border border-purple-200 p-3 rounded">
          <h4 className="font-bold text-purple-900 text-sm mb-2">Open Work Permit</h4>
          <ul className="text-xs space-y-1">
            <li>• Work for any employer</li>
            <li>• For spouses, graduates</li>
            <li>• More flexible</li>
            <li>• Specific eligibility</li>
          </ul>
        </div>
      </div>

      <div className="bg-orange-50 p-3 rounded">
        <h4 className="font-bold text-sm mb-2">Pathways to Permanent Residence:</h4>
        <div className="text-xs space-y-1">
          <p><strong>Express Entry:</strong> Points-based system, ~6 months processing</p>
          <p><strong>Provincial Nominee Programs:</strong> Province-specific needs</p>
          <p><strong>Spousal Sponsorship:</strong> For partners of citizens/PRs, ~12 months</p>
        </div>
      </div>

      <div className="bg-gray-100 p-2 rounded text-xs">
        <strong>Best Cities:</strong> Toronto (largest LGBTQ+ community), Vancouver (progressive, expensive), 
        Montreal (French required), Ottawa (government jobs)
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded">
        <h4 className="font-bold text-sm mb-2">📄 Official Resources</h4>
        <div className="space-y-1 text-xs">
          <p>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              IRCC — Work in Canada ↗
            </a>
            <span className="text-gray-500"> — Work permits & eligibility</span>
          </p>
          <p>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Express Entry — Permanent Residence ↗
            </a>
            <span className="text-gray-500"> — Points-based immigration</span>
          </p>
          <p>
            <a href="https://ca.usembassy.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              U.S. Embassy in Canada ↗
            </a>
            <span className="text-gray-500"> — Info for U.S. citizens abroad</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanadaOverview;

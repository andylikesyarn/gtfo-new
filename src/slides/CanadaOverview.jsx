import React from 'react';

const CanadaOverview = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center border border-gray-300">
        <h3 className="text-2xl font-bold">Canada</h3>
        <p className="text-sm mt-1">Multiple Pathways to Work & Residency</p>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-400 p-3">
        <h4 className="font-bold text-gray-800">U.S. Citizen Benefits:</h4>
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          <li>No tourist visa required (6 months visit)</li>
          <li>USMCA streamlined work permits for certain professions</li>
          <li>Strong federal LGBT protections & gender identity rights (note: Alberta has enacted significant restrictions on trans healthcare and rights — research province carefully)</li>
          <li>Same-sex marriage recognized (spousal sponsorship available)</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <h4 className="font-bold text-gray-800 text-sm mb-2">Employer-Specific Permit</h4>
          <ul className="text-xs space-y-1 text-gray-700">
            <li>Requires job offer</li>
            <li>Usually needs LMIA</li>
            <li>USMCA may exempt LMIA</li>
            <li>Processing: 60-120 days</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 p-3 rounded">
          <h4 className="font-bold text-gray-800 text-sm mb-2">Open Work Permit</h4>
          <ul className="text-xs space-y-1 text-gray-700">
            <li>Work for any employer</li>
            <li>For spouses, graduates</li>
            <li>More flexible</li>
            <li>Specific eligibility</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded">
        <h4 className="font-bold text-sm mb-2">Pathways to Permanent Residence:</h4>
        <div className="text-xs space-y-1 text-gray-700">
          <p><strong>Express Entry:</strong> Points-based system, ~6 months processing</p>
          <p><strong>Provincial Nominee Programs:</strong> Province-specific needs</p>
          <p><strong>Spousal Sponsorship:</strong> For partners of citizens/PRs, ~12 months</p>
        </div>
      </div>

      <div className="bg-gray-100 p-2 rounded text-xs text-gray-700">
        <strong>Best Cities:</strong> Toronto (largest LGBTQ+ community), Vancouver (progressive, expensive),
        Montreal (French required), Ottawa (government jobs)
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded">
        <h4 className="font-bold text-sm mb-2">Official Resources</h4>
        <div className="space-y-1 text-xs">
          <p>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              IRCC — Work in Canada
            </a>
            <span className="text-gray-500"> — Work permits & eligibility</span>
          </p>
          <p>
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Express Entry — Permanent Residence
            </a>
            <span className="text-gray-500"> — Points-based immigration</span>
          </p>
          <p>
            <a href="https://ca.usembassy.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              U.S. Embassy in Canada
            </a>
            <span className="text-gray-500"> — Info for U.S. citizens abroad</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanadaOverview;

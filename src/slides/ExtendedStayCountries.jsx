import React from 'react';

const ExtendedStayCountries = () => {
  const countries = [
    { country: "Marshall Islands", requirement: "Visa not required", stay: "Unlimited", notes: "Compact of Free Association with US" },
    { country: "Micronesia", requirement: "Visa not required", stay: "365 days", notes: "Compact of Free Association with US" },
    { country: "Albania", requirement: "Visa not required", stay: "1 year", notes: "Must leave for 90 days to reset" },
    { country: "Georgia", requirement: "Visa not required", stay: "1 year", notes: "—" },
    { country: "Palau", requirement: "Visa not required", stay: "1 year", notes: "Compact of Free Association with US" },
    { country: "Bahamas", requirement: "Visa not required", stay: "8 months", notes: "Passport card valid for sea travel" },
    { country: "Antigua and Barbuda", requirement: "Visa not required", stay: "6 months", notes: "Proof of funds/return ticket required" },
    { country: "Armenia", requirement: "Visa not required", stay: "180 days", notes: "—" },
    { country: "Barbados", requirement: "Visa not required", stay: "6 months", notes: "—" },
    { country: "Belize", requirement: "Visa not required", stay: "180 days", notes: "Mandatory car disinfection at border" },
    { country: "Canada", requirement: "Visa not required", stay: "6 months", notes: "Criminal record may bar entry; Passport Card valid for land/sea" },
    { country: "Dominica", requirement: "Visa not required", stay: "6 months", notes: "—" },
    { country: "El Salvador", requirement: "Visa not required", stay: "180 days", notes: "CA-4 Free Mobility Agreement (90 days total in CA-4)" },
    { country: "Jamaica", requirement: "Visa not required", stay: "6 months", notes: "Departure tax by airline" },
    { country: "Latvia", requirement: "Visa not required", stay: "180 days", notes: "90 days in Schengen + 90 additional days in Latvia" },
    { country: "Mexico", requirement: "Visa not required", stay: "180 days", notes: "FMM required; Passport Card valid for land/sea" },
    { country: "Panama", requirement: "Visa not required", stay: "180 days", notes: "Criminal conviction may bar entry" },
    { country: "United Kingdom", requirement: "ETA required", stay: "6 months", notes: "Electronic Travel Authorization required" }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-4">
        <h4 className="font-bold text-blue-900 mb-2">Extended Stay Options for U.S. Citizens</h4>
        <p className="text-blue-800 text-sm">
          These countries offer visa-free stays of 6 months or longer for U.S. passport holders. 
          This makes them excellent options for extended stays or potential relocation planning.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-3 overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-blue-900">
              <th className="border border-gray-400 p-2 text-left font-bold bg-blue-200">Country/Region</th>
              <th className="border border-gray-400 p-2 text-left font-bold bg-blue-200">Requirement</th>
              <th className="border border-gray-400 p-2 text-left font-bold bg-blue-200">Max Stay</th>
              <th className="border border-gray-400 p-2 text-left font-bold bg-blue-200">Important Notes</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border border-gray-300 p-2 font-semibold text-gray-900">
                  {country.country}
                </td>
                <td className="border border-gray-300 p-2">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    country.requirement === 'Visa not required' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {country.requirement}
                  </span>
                </td>
                <td className="border border-gray-300 p-2 font-bold text-blue-700">
                  {country.stay}
                </td>
                <td className="border border-gray-300 p-2 text-gray-700">
                  {country.notes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-3 gap-3 text-xs">
        <div className="bg-blue-50 border border-blue-200 p-3 rounded">
          <div className="font-bold text-blue-900 mb-1">🌟 Unlimited/1 Year</div>
          <p className="text-blue-800">Marshall Islands, Micronesia, Albania, Georgia, Palau</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-3 rounded">
          <div className="font-bold text-green-900 mb-1">✓ 6-8 Months</div>
          <p className="text-green-800">Bahamas, Antigua, Barbados, Dominica, Jamaica, UK</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 p-3 rounded">
          <div className="font-bold text-purple-900 mb-1">📋 Special Agreements</div>
          <p className="text-purple-800">CA-4 area, Compact of Free Association, Schengen + bilateral</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3">
        <p className="text-xs text-yellow-900">
          <strong>⚠️ Important:</strong> Visa-free entry does NOT grant work authorization. 
          For employment, you'll need a separate work visa/permit in these countries.
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded text-center">
        <p className="text-xs text-gray-700">
          📄 Verify entry requirements for any country:{" "}
          <a href="https://travel.state.gov/content/travel/en/international-travel.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
            U.S. State Department — International Travel ↗
          </a>
        </p>
      </div>
    </div>
  );
};

export default ExtendedStayCountries;

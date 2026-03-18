import React from 'react';

const CountryComparison = () => {
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="bg-gray-800 text-blue-900">
              <th className="border border-gray-600 p-2 text-left bg-gray-200">Factor</th>
              <th className="border border-gray-600 p-2 bg-gray-200">Mexico</th>
              <th className="border border-gray-600 p-2 bg-gray-200">Canada</th>
              <th className="border border-gray-600 p-2 bg-gray-200">Uruguay</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 font-bold">Tourist Entry</td>
              <td className="border border-gray-300 p-2 text-center">180 days</td>
              <td className="border border-gray-300 p-2 text-center">180 days</td>
              <td className="border border-gray-300 p-2 text-center">90 days</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Min. Income</td>
              <td className="border border-gray-300 p-2 text-center">$3,738/mo</td>
              <td className="border border-gray-300 p-2 text-center">Varies</td>
              <td className="border border-gray-300 p-2 text-center">~$1,500/mo</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 font-bold">Apply From</td>
              <td className="border border-gray-300 p-2 text-center">Outside</td>
              <td className="border border-gray-300 p-2 text-center">Outside*</td>
              <td className="border border-gray-300 p-2 text-center">Inside</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Processing</td>
              <td className="border border-gray-300 p-2 text-center">2-6 weeks</td>
              <td className="border border-gray-300 p-2 text-center">2-4 months</td>
              <td className="border border-gray-300 p-2 text-center">6-12 months</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 font-bold">LGBT Rights</td>
              <td className="border border-gray-300 p-2 text-center">Strong</td>
              <td className="border border-gray-300 p-2 text-center">Excellent</td>
              <td className="border border-gray-300 p-2 text-center">Excellent</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Language</td>
              <td className="border border-gray-300 p-2 text-center">Spanish</td>
              <td className="border border-gray-300 p-2 text-center">English/French</td>
              <td className="border border-gray-300 p-2 text-center">Spanish</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 font-bold">Cost of Living</td>
              <td className="border border-gray-300 p-2 text-center">Low-Moderate</td>
              <td className="border border-gray-300 p-2 text-center">High</td>
              <td className="border border-gray-300 p-2 text-center">Moderate</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-bold">Path to Citizenship</td>
              <td className="border border-gray-300 p-2 text-center">5 years</td>
              <td className="border border-gray-300 p-2 text-center">3-5 years</td>
              <td className="border border-gray-300 p-2 text-center">3-5 years</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2 font-bold">Official Info</td>
              <td className="border border-gray-300 p-2 text-center">
                <a href="https://www.gob.mx/inm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs font-medium">
                  INM ↗
                </a>
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs font-medium">
                  IRCC ↗
                </a>
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <a href="https://migracion.minterior.gub.uy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs font-medium">
                  Migraciones ↗
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-600 text-center">
        * Some Canadian work permits can be applied for from inside Canada
      </p>
    </div>
  );
};

export default CountryComparison;

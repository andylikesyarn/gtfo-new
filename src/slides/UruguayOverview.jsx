import React from 'react';

const UruguayOverview = () => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg text-center border border-gray-300">
        <h3 className="text-2xl font-bold">Uruguay</h3>
        <p className="text-sm mt-1">"Switzerland of South America"</p>
      </div>

      <div className="bg-gray-50 border-l-4 border-gray-400 p-3">
        <h4 className="font-bold text-gray-800">Why Uruguay?</h4>
        <ul className="text-sm text-gray-700 mt-2 space-y-1">
          <li>Most straightforward residency in Latin America</li>
          <li>Strong LGBT protections (2nd in Americas to legalize same-sex marriage)</li>
          <li>Stable democracy, low corruption</li>
          <li>Universal healthcare, high literacy (98.4%)</li>
          <li>Lower cost of living than U.S.</li>
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-white border border-gray-200 p-2 rounded">
          <div className="font-bold">Tourist Entry</div>
          <div className="text-2xl font-bold text-gray-700">90 days</div>
          <div className="text-gray-600">No visa required</div>
        </div>
        <div className="bg-white border border-gray-200 p-2 rounded">
          <div className="font-bold">Citizenship Wait</div>
          <div className="text-2xl font-bold text-gray-700">3-5 yrs</div>
          <div className="text-gray-600">After residency</div>
        </div>
        <div className="bg-white border border-gray-200 p-2 rounded">
          <div className="font-bold">Min. Income</div>
          <div className="text-2xl font-bold text-gray-700">~$1,500 USD</div>
          <div className="text-gray-600">per month</div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded">
        <h4 className="font-bold text-sm mb-2">Application Must Be Done IN Uruguay</h4>
        <ol className="text-xs space-y-1 list-decimal list-inside text-gray-700">
          <li>Enter as tourist</li>
          <li>Find local address, register with police</li>
          <li>Schedule residency interview</li>
          <li>Submit documents (apostilled, translated to Spanish)</li>
          <li>Receive "Residente en trámite" status (resident rights while processing)</li>
          <li>Get Cédula (Uruguayan ID card)</li>
        </ol>
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded text-xs text-gray-800">
        <strong>Physical Presence:</strong> Must spend at least 6 months/year in Uruguay to maintain residency
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded text-xs text-gray-800">
        <strong>Passport Benefits:</strong> Uruguayan passport = visa-free access to 150+ countries
        (Schengen, UK, Japan)
      </div>

      <div className="bg-gray-50 border border-gray-200 p-3 rounded">
        <h4 className="font-bold text-sm mb-2">Official Resources</h4>
        <div className="space-y-1 text-xs">
          <p>
            <a href="https://migracion.minterior.gub.uy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Migraciones Uruguay
            </a>
            <span className="text-gray-500"> — National immigration authority</span>
          </p>
          <p>
            <a href="https://www.gub.uy/tramites/residencia-legal-permanente" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              Residency Application Info
            </a>
            <span className="text-gray-500"> — Permanent residency process</span>
          </p>
          <p>
            <a href="https://uy.usembassy.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
              U.S. Embassy in Uruguay
            </a>
            <span className="text-gray-500"> — Info for U.S. citizens abroad</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UruguayOverview;

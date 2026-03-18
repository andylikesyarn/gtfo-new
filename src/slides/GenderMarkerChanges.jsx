import React from 'react';

const GenderMarkerChanges = () => {
  return (
    <div className="space-y-4">
      <div className="bg-red-50 border-l-4 border-red-500 p-4">
        <h4 className="font-bold text-red-900 mb-2">🚨 Policy Enforced — Updated March 2026</h4>
        <p className="text-red-800 text-sm">
          On November 6, 2025, the U.S. Supreme Court stayed the <em>Orr v. Trump</em> injunction,
          allowing full enforcement of Executive Order 14168. <strong>Gender marker changes and X markers 
          are no longer available</strong> on new, renewed, or replaced passports. The case remains 
          ongoing in lower courts but the attestation process is currently blocked.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-4">
        <h4 className="font-bold mb-3">Current Policy for Passport Applications:</h4>
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li>All passport applications must list <strong>sex assigned at birth (M or F only)</strong></li>
          <li>X gender marker option has been removed from applications</li>
          <li>Requesting a marker different from birth sex will result in <strong>delays or denial</strong></li>
          <li>Reports of applications with discrepancies being <strong>held indefinitely</strong></li>
          <li>The Orr v. Trump attestation form process is <strong>currently suspended</strong></li>
        </ul>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-bold text-green-900 mb-2">✓ Existing Passports Still Valid</h4>
        <p className="text-green-800 text-sm">
          <strong>All currently valid passports remain valid until expiration</strong>, including those 
          with X markers or gender markers different from sex assigned at birth. CBP has stated gender 
          markers are "not criteria for admission" into the U.S.
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-bold text-yellow-900 mb-2">⚠️ International Flight Alert</h4>
        <p className="text-yellow-800 text-sm">
          Since October 2025, CBP's Advance Passenger Information System (APIS) only accepts M or F. 
          Airlines must override X markers when submitting passenger data. <strong>Contact your airline 
          before booking</strong> to ask how they handle X marker passports, and arrive early for 
          international flights.
        </p>
      </div>

      <div className="mt-4 text-xs text-gray-600 bg-gray-50 p-3 rounded">
        <strong>Pro Tips:</strong> Don't renew a passport with your preferred marker until necessary. 
        Carry a printout of the State Dept. page confirming passport validity. Save{' '}
        <a href="https://lambdalegal.org/helpdesk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Lambda Legal's Help Desk
        </a>{' '}
        number in case of border issues.
      </div>
    </div>
  );
};

export default GenderMarkerChanges;

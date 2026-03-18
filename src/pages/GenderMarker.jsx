import { Link } from "react-router-dom";
import "./GenderMarker.css";

function GenderMarker() {
  return (
    <div className="page-container">
      <h1>Sex Marker Changes</h1>

      <div className="content-section">
        <h2>Important Legal Updates</h2>
        <div className="alert-box">
          <p>
            <strong className="datestamp">
              THIS INFORMATION IS ACCURATE AS OF 8 MARCH 2026
            </strong>{" "}
            <br></br>
            <strong>Current Status (March 2026):</strong> On November 6, 2025,
            the U.S. Supreme Court stayed the Orr v. Trump injunction, allowing
            full enforcement of{" "}
            <a href="https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/">
              Executive Order 14168
            </a>
            . The State Department no longer processes gender marker changes or
            issues X gender markers on passports. All new, renewed, or replaced
            passports must list sex assigned at birth (M or F only) per the{" "}
            <a href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html">
              State Dept. Sex Marker page
            </a>
            .
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>What Changed &amp; When</h2>
        <p>
          Here's a timeline of the key changes since the original executive
          order:
        </p>
        <ul>
          <li>
            <strong>January 20, 2025:</strong> Executive Order 14168 signed,
            directing all federal agencies to define sex as an immutable
            male-female binary determined at birth.
          </li>
          <li>
            <strong>April–June 2025:</strong> Federal courts issued preliminary
            injunctions in <em>Orr v. Trump</em>, temporarily blocking the
            policy and allowing some gender marker changes via an attestation
            form process.
          </li>
          <li>
            <strong>October 14, 2025:</strong> CBP's Advance Passenger
            Information System (APIS) began only accepting "M" or "F" in the sex
            field for international flights. Airlines must now override X markers
            with either M or F when submitting passenger data.
          </li>
          <li>
            <strong>November 6, 2025:</strong>{" "}
            <strong>
              The U.S. Supreme Court stayed the Orr v. Trump injunction
            </strong>
            , allowing the Trump administration to fully enforce the passport
            sex-at-birth policy while litigation continues.
          </li>
          <li>
            <strong>As of February 2026:</strong> The ACLU confirms{" "}
            <a
              href="https://www.aclu.org/cases/orr-v-trump"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orr v. Trump
            </a>{" "}
            is still "Ongoing" in lower courts, but the attestation form process
            is effectively blocked.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>What This Means Right Now</h2>
        <p>
          The bottom line is that since the Supreme Court's November 2025
          decision, the federal government is fully enforcing the policy that
          passports must reflect sex assigned at birth. Here's what that means
          for different scenarios:
        </p>
        <br />

        <h3>Applying for a New Passport</h3>
        <p>
          <strong>
            If you're applying for a passport for the first time, you will
            receive M or F based on your sex assigned at birth.
          </strong>{" "}
          Even with supporting documents like an amended birth certificate, prior
          Social Security/REAL ID changes, or other documentation, the State
          Department requires biological sex at birth&mdash;full stop. Requesting
          an X marker or a marker different from birth sex will result in delays,
          and the passport will be issued with birth sex.
        </p>
        <br />

        <h3>Renewing a Passport</h3>
        <p>
          <strong>
            If you're renewing a passport, you will not be able to change your
            gender marker.
          </strong>{" "}
          For example, if someone got their first passport with an F on it and
          wanted to change it to an M, they are currently not allowed to do
          so&mdash;it will issue with biological sex at birth, per the{" "}
          <a href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html">
            State Dept. Sex Marker page
          </a>
          .
        </p>
        <br />

        <h3>Renewing a Passport That Had a Changed Gender Marker</h3>
        <p>
          <strong>
            If you're renewing a passport that previously had the gender marker
            changed, the new one will revert to biological sex at birth.
          </strong>{" "}
          Your existing passport remains valid until expiration, but a renewed
          one will list your birth sex. (More info:{" "}
          <a href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html">
            State Dept
          </a>
          ,{" "}
          <a href="https://lambdalegal.org/tgnc-checklist-under-trump/">
            Lambda Legal Guidance
          </a>
          )
        </p>
        <br />
        <p>
          It's not clear how this will affect trans people whose initial passport
          lists the gender they identify with. Eg., I had a passport whose sex
          marker listed an F, then changed it to an M. If I renew my current
          passport, which has an M on it, my new passport will have an F on it,
          because the State Department has on record that I changed my gender
          marker. HOWEVER, if for example a trans woman has a passport with an F
          on it, and has never previously had a passport with an M, I'd think it
          possible that the State Dept would renew her passport and return it
          with an F on it...however, we have very little information about what's
          happening in these cases.
        </p>
        <br />

        <div className="alert-box">
          <p>
            <strong>⚠️ Reports of Document Seizure:</strong> There have been
            reports since early 2026 that some passport applications with gender
            marker discrepancies have been held indefinitely by the State
            Department. If you are currently holding a valid passport with a
            gender marker that does not match your birth sex,{" "}
            <strong>
              think very carefully before submitting it for renewal
            </strong>
            , as you may be without a passport for an extended period. Advocacy
            groups have advised postponing renewals when possible.
          </p>
        </div>

        <br />
        <p>
          If there is a discrepancy anywhere in your application materials or the
          State Department's records, they may contact you to clarify which sex
          marker should be used.&nbsp;
        </p>
      </div>

      <div className="content-section">
        <h2>Existing Passports &amp; Validity</h2>
        <p>
          <strong>
            Passports with existing X gender markers or changed gender markers
            remain valid until expiration
          </strong>
          , per the State Department. They have not been invalidated. However,
          the State Dept. cautions those with a sex marker other than assigned at
          birth to contact Customs and Border Protection if you have questions
          about returning to the United States with your travel document.
        </p>
        <br />
        <p>
          This is not good news, and we should especially be concerned about the
          language of invalidation. What concerns me most is the line, "Please
          refer to U.S. Customs and Border Protection if you have questions about
          returning to the United States with your travel document," because it
          seems to imply that US Customs could deny entry to US citizens on the
          basis of a sex marker that does not match assigned sex at birth. It's
          not actually clear what this means practically, and some level of
          discretion is probably left up to the individual Customs agent&mdash;we
          don't really know, but there is a clear implication that reentry into
          the US is not absolutely guaranteed, a major red flag.&nbsp;
        </p>
        <br />
        <p>
          <strong>However</strong>, a CBP spokesperson has stated that the gender
          marker on a traveler's document "is not criteria for an applicant's
          admission into the U.S." This provides some reassurance, but confusion
          around implementation of these regulations could still lead to
          harassment or delays at the border.
        </p>
      </div>

      <div className="content-section">
        <h2>International Travel Considerations</h2>

        <h3>Airline &amp; Flight Manifests</h3>
        <p>
          As of October 14, 2025, CBP's Advance Passenger Information System
          (APIS) only accepts "M" or "F" in the sex field for all international
          travel to and from the United States. This means:
        </p>
        <ul>
          <li>
            Airlines <strong>must</strong> report either M or F for every
            passenger on international flights, regardless of what's on your
            passport
          </li>
          <li>
            If your passport has an X marker, the airline will override it with M
            or F when submitting your data to CBP
          </li>
          <li>
            Each airline has a different approach to how they handle
            this&mdash;it's necessary to call the airline before booking to ask
            how they plan to handle it
          </li>
          <li>
            You will <strong>not</strong> be penalized by CBP for the mismatch
            between your passport marker and what the airline submitted, but
            confusion could lead to additional scrutiny
          </li>
        </ul>
        <br />

        <h3>TSA Screening (Domestic &amp; International)</h3>
        <p>There is some good news on the TSA front:</p>
        <ul>
          <li>
            TSA has been deploying <strong>gender-neutral AIT scanners</strong>{" "}
            that don't require operators to select "male" or "female"
            settings&mdash;reducing false alarms for trans travelers
          </li>
          <li>
            <strong>Gender is no longer checked</strong> when validating your ID
            at the document checker podium&mdash;the focus is on matching your
            name to your boarding pass
          </li>
          <li>
            TSA PreCheck still accepts an X gender marker on applications
          </li>
          <li>
            If you do get a pat-down, it will be conducted by an officer matching
            your gender <em>presentation</em>, not necessarily what's on your ID
          </li>
        </ul>
        <br />

        <h3>X Gender Markers Internationally</h3>
        <p>
          <strong>Many destinations only recognize M and F gender markers.</strong>{" "}
          If you're traveling with an X marker passport, be aware:
        </p>
        <ul>
          <li>
            <strong>Countries that generally accept X markers:</strong>{" "}
            Argentina, Australia, Canada, Denmark, Germany, Iceland, India,
            Ireland, Malta, Nepal, Netherlands, New Zealand, and others
          </li>
          <li>
            <strong>Countries that may reject or cause issues:</strong> Russia,
            Saudi Arabia, UAE (including Dubai transit), United Kingdom (requires
            M or F)
          </li>
          <li>
            Even in countries that accept X markers, discrepancies between your
            passport and other travel documents can cause delays
          </li>
          <li>
            Consider the overall safety situation for LGBTQ+ travelers in your
            destination country, regardless of technical marker acceptance
          </li>
        </ul>
      </div>

      <div className="content-section hidden">
        <div className="alert-box">
          <p>
            <strong>⚠️ SUSPENDED:</strong> The following section describes the
            Orr v. Trump attestation form process, which allowed gender marker
            changes on passports. This process is{" "}
            <strong>currently blocked</strong> due to the Supreme Court's
            November 6, 2025 stay. It is preserved here in case the legal
            situation changes.
          </p>
        </div>
        <h2>How to Request a Sex Marker Change</h2>
        <p>
          You are eligible to receive a passport with your sex marker of choice
          (M, F, or X) if you are a class member under the Orr v. Trump ruling.
          "Class members," in short refers to trans people, the beneficiaries of
          the lawsuit leveraged by several petitioners against Trump in
          opposition to{" "}
          <a href="https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/">
            {" "}
            the executive order
          </a>{" "}
          that limited the ability to change gender markers on passports.
        </p>

        <p>
          In order to get a gender marker changed if you are renewing a
          passport, you MUST submit your application with the attestation form{" "}
          <a href="https://travel.state.gov/content/dam/passports/forms-fees/Attestation%20Form.pdf">
            here
          </a>
          . If you are applying for a passport for the first time and all of
          your documentation lines up with the gender marker you are requesting
          AND you are requesting an M or F gender marker, it is likely not
          necessary to submit this attestation. If you are applying for a
          first-time passport and requesting an X or a gender marker other than
          the one on your supporting documents, you DO need to submit the
          attestation form.
        </p>

        <p>
          On some level, much of this process operates on discretion, meaning
          there are cases where some State Department employees could
          arbitrarily approve without proper documentation or deny with proper
          documentation: I've heard of BOTH of these happening, but would not
          count on arbitrary approval. I consider arbitrary denial is more
          likely, though I am often wrong.
        </p>

        <p>
          The reality of this scenario is that the rules change often. It is
          entirely possible based on recent developments that an application
          submitted today could be inadmissible by the time it reaches the state
          department. Additionally, submitting this information to the federal
          government means that you are{" "}
          <strong>
            directly giving the federal government a signed attestation that you
            are trans
          </strong>
          . Note also that an X gender marker is not admissible for all
          countries, and there are existing cases of REAL IDs and passports with
          an X gender marker being deemed inadmissible for travel by the TSA. At
          the time of this writing, I would not advise folks request an X gender
          marker unless this is the ONLY condition under which you are willing
          to get a passport. If you can plausibly use the gender marker on your
          most recent passport, I do not recommend requesting a change.
        </p>
      </div>

      <div className="content-section hidden">
        <div className="alert-box">
          <p>
            <strong>⚠️ SUSPENDED:</strong> This process is currently blocked by
            the Supreme Court's November 6, 2025 stay of the Orr v. Trump
            injunction.
          </p>
        </div>
        <h2>Gender Marker Process</h2>
        <p>
          <strong>Important:</strong> You must submit a completed "Attestation
          of Orr v. Trump Class Membership" form with your passport application.
          This form identifies you as a class member (aka, you are attesting
          that you are trans) and indicates which sex marker you want. However,
          the process differs slightly based upon what gender marker you want,
          as indicated below:
        </p>
        <div className="info-cards">
          <div className="info-card">
            <h4>M - Male</h4>
            <p>Check "M" on both the attestation and application form</p>
          </div>
          <div className="info-card">
            <h4>F - Female</h4>
            <p>Check "F" on both the attestation and application form</p>
          </div>
          <div className="info-card">
            <h4>X - Unspecified</h4>
            <p>
              Check "X" on attestation, but do NOT check "M" or "F" on
              application
            </p>
          </div>
        </div>
      </div>
      <div className="content-section hidden">
        <h2>Which Form Do I Need?</h2>
        <ul>
          <li>
            <strong>Form DS-11:</strong> First-time passport applicants or if
            you cannot renew by mail
          </li>
          <li>
            <strong>Form DS-82:</strong> Renewing an adult passport by mail (if
            eligible)
          </li>
          <li>
            <strong>Form DS-5504:</strong> Correcting an error on a passport
            issued within the last year at no charge
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Application Process</h2>
        <p>
          Under current policy, you are required to apply with your sex assigned
          at birth. The attestation form process from Orr v. Trump is currently
          suspended.
        </p>
        <ol>
          <li>
            <strong>Download Forms:</strong> Get the appropriate passport
            application form (DS-11, DS-82, or DS-5504). You are required to
            apply with your assigned sex at birth.
            <li>
              If you're getting a first-time passport, check{" "}
              <Link to="/New">here</Link> for more details.
            </li>
            <li>
              If you're renewing your passport AND your current passport is MORE
              than a year old, check <Link to="/Renew">here</Link> for more
              details.
            </li>
            <li className="hidden">
              If you're renewing and your current passport is LESS than a year
              old, check{" "}
              <a href="https://eforms.state.gov/Forms/ds5504_pdf.PDF">here</a>{" "}
              for more details. There is no charge from the Department of State
              if you are correcting a passport that is under a year old, but you
              may have to pay an appointment fee of $30 if you are submitting
              the form in person. I don't have a full explainer for this option
              yet.
            </li>
          </li>
          <li>
            <strong>Complete Application:</strong> Fill out your passport
            application form with your sex assigned at birth
          </li>
          <li>
            <strong>Gather Documents:</strong> Collect required citizenship
            evidence, ID, and passport photo
          </li>
          <li>
            <strong>Submit:</strong> Send your application
          </li>
          <li>
            <strong>Pay Fees:</strong> Include applicable passport fees
          </li>
        </ol>
      </div>

      <div className="content-section">
        <h2>Important Notes</h2>
        <div className="alert-box">
          <p>
            <strong>Assigned Birth Sex Required:</strong> If you submit an
            application with discrepancies between various gender markers, the
            State Department will contact you regarding which gender should be
            put on the passport per their regulations, and issuance of the
            passport could be significantly delayed. There are reports of
            applications being held indefinitely.
          </p>
          <p className="hidden">
            <strong>Technical Limitations:</strong> Due to current technical
            limitations, you cannot use the State Department's online form
            filler tool. You must download and complete PDF forms manually.
          </p>
          <p>
            <strong>International Travel:</strong> Many destinations only
            recognize male and female sex markers. The CBP Advance Passenger
            Information System (APIS) now only accepts M or F for international
            flights. Airlines will override X markers when submitting your data.
            Check destination requirements before traveling.
          </p>
          <p>
            <strong>Domestic Travel:</strong> TSA is deploying gender-neutral
            scanners and no longer checks gender at the ID verification podium.
            Your name matching your boarding pass is what matters most. TSA
            PreCheck still accepts X as a gender marker option.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Practical Safety Tips</h2>
        <ul>
          <li>
            <strong>Don't renew early if possible:</strong> If you currently
            hold a valid passport with your preferred gender marker, hold onto it
            as long as possible. A renewed passport will revert to birth sex.
          </li>
          <li>
            <strong>Contact your airline:</strong> If traveling internationally
            with an X marker passport, call the airline ahead of time to ask how
            they handle APIS submissions for X markers.
          </li>
          <li>
            <strong>Arrive early:</strong> Allow extra time at the airport,
            especially for international flights, in case of additional
            screening or questions.
          </li>
          <li>
            <strong>Carry documentation:</strong> Bring a printout of the State
            Department's webpage confirming that existing passports remain valid.
          </li>
          <li>
            <strong>Know your rights:</strong> CBP has stated that gender marker
            is "not criteria for admission" into the U.S. Keep the{" "}
            <a
              href="https://www.aclu.org/know-your-rights/what-do-i-do-if-im-stopped-by-the-police-at-the-airport"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACLU Know Your Rights
            </a>{" "}
            resource handy.
          </li>
          <li>
            <strong>Legal support contacts:</strong> Save contact info for{" "}
            <a
              href="https://lambdalegal.org/helpdesk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lambda Legal's Help Desk
            </a>{" "}
            and the{" "}
            <a
              href="https://www.aclu.org/cases/orr-v-trump"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACLU
            </a>{" "}
            in case you encounter issues at the border.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Need More Help?</h2>
        <div className="help-links">
          <Link to="/change" className="help-button">
            General Passport Changes Guide
          </Link>
          <Link to="/fees" className="help-button">
            Check Fees
          </Link>
          <Link to="/appointments" className="help-button">
            Find Passport Acceptance Facility
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h2>Official Resources</h2>
        <ul>
          <li>
            <a
              href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official State Department Sex Marker Information
            </a>
          </li>
          <li>
            <a
              href="https://www.aclu.org/cases/orr-v-trump"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACLU — Orr v. Trump Case Page (ongoing litigation)
            </a>
          </li>
          <li>
            <a
              href="https://transequality.org/know-your-rights/passports"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Center for Transgender Equality — Passport Guidance
            </a>
          </li>
          <li>
            <a
              href="https://lambdalegal.org/tgnc-checklist-under-trump/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lambda Legal — TGNC Checklist Under Trump
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/dam/passports/forms/ds-11.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Form DS-11 (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/dam/passports/forms/ds-82.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Form DS-82 (PDF)
            </a>
          </li>
          <li>
            <a
              href="https://travel.state.gov/content/dam/passports/forms/ds-5504.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Form DS-5504 (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GenderMarker;

import { Link } from "react-router-dom";
import "./GenderMarker.css";

function KnowYourRights() {
  return (
    <div className="page-container">
      <h1>Know Your Rights</h1>

      <div className="content-section">
        <h2>About This Page</h2>
        <div className="alert-box">
          <p>
            <strong className="datestamp">
              THIS INFORMATION IS ACCURATE AS OF MARCH 2026
            </strong>
            <br />
            This page covers ongoing ID-related laws and executive actions that
            affect trans and nonbinary people in the United States. Laws change
            frequently — check back for updates and always verify with a legal
            resource before making decisions.
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Recent Updates — March 2026</h2>
        <p>
          This section covers significant new developments not yet reflected
          elsewhere on the site. Items are labeled with their source.
        </p>

        <div className="update-box">
          <p>
            <strong>Kansas SB 244 — Driver's Licenses Immediately Invalidated
            (Feb 26, 2026)</strong>
          </p>
          <p>
            Kansas passed a law that immediately invalidated state-issued
            driver's licenses, ID cards, and birth certificates for any holder
            whose gender marker does not match their sex assigned at birth —
            with no grace period. Roughly 1,700–1,800 licenses were invalidated
            overnight. The law also bans trans people from using bathrooms in
            public buildings that align with their gender identity, and creates
            a private right of action allowing anyone to sue a person they
            suspect of violating the bathroom restriction for $1,000 in
            damages. The ACLU filed suit immediately; a temporary restraining
            order was denied as of March 10, 2026. Litigation is ongoing.
          </p>
          <p>
            <strong>Travel relevance:</strong> Kansas residents with affected
            licenses need a new, compliant license for domestic air travel
            under REAL ID. Driving with an invalidated license risks fines and
            jail time.
          </p>
          <p className="update-source">
            Sources:{" "}
            <a href="https://www.aclukansas.org/publications/sb244faq/" target="_blank" rel="noopener noreferrer">ACLU of Kansas</a>
            {", "}
            <a href="https://www.hrw.org/news/2026/03/03/us-state-revokes-gender-affirming-identification" target="_blank" rel="noopener noreferrer">Human Rights Watch</a>
            {", "}
            <a href="https://www.upi.com/Top_News/US/2026/03/13/kansas-law-invalidates-drivers-license-trans-residents/4051773407666/" target="_blank" rel="noopener noreferrer">UPI</a>
          </p>
        </div>

        <div className="update-box">
          <p>
            <strong>States Banning Gender Marker Changes on Driver's
            Licenses — as of Feb 2026</strong>
          </p>
          <p>
            As of February 2026, the following states do not allow people to
            update the gender marker on their driver's license:{" "}
            <strong>Florida, Indiana, Kansas, Tennessee, and Texas.</strong>
          </p>
          <p>
            The following states do not allow gender marker updates on birth
            certificates:{" "}
            <strong>
              Florida, Idaho, Indiana, Iowa, Kansas, Montana, Oklahoma,
              Tennessee, and Texas.
            </strong>
          </p>
          <p>
            Kansas goes further than all other states by retroactively
            invalidating licenses already issued — the other states only
            prohibit future changes.
          </p>
          <p className="update-source">
            Source:{" "}
            <a href="https://www.hrw.org/news/2026/03/03/us-state-revokes-gender-affirming-identification" target="_blank" rel="noopener noreferrer">Human Rights Watch, March 2026</a>
          </p>
        </div>

        <div className="update-box">
          <p>
            <strong>Scale of State Legislation — 711 Bills as of Feb 2026</strong>
          </p>
          <p>
            As of February 2026, 711 bills targeting trans and nonbinary people
            are under consideration across 41 states, with an additional 110 at
            the federal level. These cover gender-affirming care bans, ID
            document restrictions, bathroom bans, sports bans, and education
            censorship.
          </p>
          <p className="update-source">
            Source:{" "}
            <a href="https://theconversation.com/kansas-revoked-transgender-peoples-ids-overnight-researchers-anticipate-cascading-health-and-social-consequences-277052" target="_blank" rel="noopener noreferrer">The Conversation, Feb 2026</a>
          </p>
        </div>

        <div className="update-box">
          <p>
            <strong>Global Entry — Sex Marker Also Cannot Be Changed</strong>
          </p>
          <p>
            Global Entry cards carry a sex designation. Under Executive Order
            14168, this also cannot be changed. If you're a frequent
            international traveler considering Global Entry, be aware that your
            card will reflect birth sex. Wait to apply until you have a passport
            in your current name, as the name on your Global Entry application
            must match your passport.
          </p>
          <p className="update-source">
            Source:{" "}
            <a href="https://transequality.org/documents/know-your-rights-passports" target="_blank" rel="noopener noreferrer">Advocates for Trans Equality</a>
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>How to Stay Informed</h2>
        <p>
          It's incredibly difficult to understand the landscape of what's
          happening politically in the US with regards to trans rights issues.
          Here's how I work through these concepts and try to keep myself
          informed:
        </p>

        <h3>Wikipedia</h3>
        <p>
          Wikipedia isn't infallible, but it's a relatively good benchmark and,
          more importantly, uses common language that comes up in regulatory
          settings to describe trans rights issues. Knowing the language at play
          is incredibly important for understanding what's going on. My two
          favorite Wikis for this topic are:
        </p>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Persecution_of_transgender_people_under_the_second_Trump_administration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Persecution of transgender people under the second Trump
              administration
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/2020s_anti-LGBTQ_movement_in_the_United_States"
              target="_blank"
              rel="noopener noreferrer"
            >
              2020s anti-LGBTQ movement in the United States
            </a>
          </li>
        </ul>
        <p>
          It's incredibly important to know which technical terms or laws may
          be relevant, and these are great starting points for educating
          yourself on that. I also think there are a few other pages that can
          usefully inform where the US anti-trans movement may be going:
        </p>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Anti-transgender_movement_in_the_United_Kingdom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anti-transgender Movement in the United Kingdom
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Persecution_of_transgender_people_in_Nazi_Germany"
              target="_blank"
              rel="noopener noreferrer"
            >
              Persecution of transgender people in Nazi Germany
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Female_impersonation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Female Impersonation
            </a>{" "}
            — The US section covers the politicization of transness in the US
            as an explicit tool of anti-Blackness.
          </li>
        </ul>

        <h3>The State Department's Sex Marker Page</h3>
        <p>
          <a
            href="https://travel.state.gov/content/travel/en/passports/passport-help/sex-marker.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            travel.state.gov — Sex Marker Information
          </a>{" "}
          — This will always have the most updated official info on how
          gender/sex markers will be treated on federal identity documents.
        </p>

        <h3>Gender Marker Laws by State</h3>
        <p>
          <a
            href="https://www.lgbtmap.org/equality-maps/transgender_id_laws"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movement Advancement Project — Gender Marker Laws by State
          </a>{" "}
          — Run by the Movement Advancement Project; remains pretty up to date.
        </p>
      </div>

      <div className="content-section">
        <h2>Federal ID & Document Laws</h2>

        <h3>REAL ID Act</h3>
        <p>
          The REAL ID Act sets minimum standards for state-issued driver's
          licenses and ID cards used for federal purposes (boarding domestic
          flights, entering federal buildings, etc.). As of May 7, 2025, a
          REAL ID-compliant card is required for domestic air travel.
        </p>
        <ul>
          <li>
            <strong>Gender markers on REAL IDs</strong> are determined by
            individual states — there is no federal mandate requiring birth sex
            on state IDs. Many states still allow self-attestation for gender
            marker changes.
          </li>
          <li>
            <strong>X gender markers</strong> are available on REAL ID-compliant
            cards in a number of states. However, TSA has flagged some X-marker
            IDs in the past — check current TSA guidance before travel.
          </li>
          <li>
            If your state ID gender marker differs from your passport, this is
            generally not an issue for domestic travel — TSA focuses on name
            matching your boarding pass.
          </li>
        </ul>

        <h3>Social Security Records</h3>
        <p>
          As of early 2025, the Social Security Administration (SSA) has
          suspended the ability to change gender markers in Social Security
          records online or by mail. This is an ongoing area of litigation.
        </p>
        <ul>
          <li>
            The SSA currently requires sex to reflect birth sex in its records,
            in line with Executive Order 14168.
          </li>
          <li>
            A mismatch between your SSA record and employer records can
            sometimes trigger an earnings discrepancy flag — if this happens,
            contact the SSA directly.
          </li>
          <li>
            <strong>Name changes</strong> on Social Security cards are still
            processed normally with a court order or amended birth certificate.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Executive Orders Affecting ID Documents</h2>
        <p>
          Several executive orders signed in January 2025 have had downstream
          effects on federal ID documents. Here's a summary:
        </p>
        <ul>
          <li>
            <strong>Executive Order 14168</strong> ("Defending Women from Gender
            Ideology Extremism") directed all federal agencies to define sex as
            binary and determined at birth. This has affected passport gender
            markers, SSA records, and other federal documents.{" "}
            <a
              href="https://www.whitehouse.gov/presidential-actions/2025/01/defending-women-from-gender-ideology-extremism-and-restoring-biological-truth-to-the-federal-government/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the order
            </a>
            .
          </li>
          <li>
            <strong>State IDs are not directly affected</strong> by these
            federal executive orders — states retain authority over their own
            ID systems. However, some states have moved to align with federal
            policy voluntarily.
          </li>
          <li>
            <strong>Federal employee IDs and clearances</strong> may be subject
            to additional scrutiny under these orders. If you are a federal
            employee, consult with an attorney or union rep.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>State-Level ID Laws</h2>
        <p>
          State laws on gender marker changes vary significantly. Some states
          make it easy; others have introduced restrictions or outright bans on
          changing gender markers on state IDs.
        </p>
        <div className="alert-box">
          <p>
            <strong>⚠️ This area of law is changing rapidly.</strong> As of
            February 2026, 711 bills are under consideration across 41 states.
            Always check your state's current DMV policy before applying.
          </p>
        </div>
        <ul>
          <li>
            <strong>States banning gender marker changes on driver's
            licenses (as of Feb 2026):</strong>{" "}
            Florida, Indiana, Kansas, Tennessee, Texas. Kansas uniquely
            retroactively invalidated existing licenses with no grace period.
          </li>
          <li>
            <strong>States banning gender marker changes on birth
            certificates (as of Feb 2026):</strong>{" "}
            Florida, Idaho, Indiana, Iowa, Kansas, Montana, Oklahoma,
            Tennessee, Texas.
          </li>
          <li>
            <strong>States with self-attestation</strong> (no court order
            required): California, Colorado, New York, Washington, and others
            — check your state DMV for current policy.
          </li>
          <li>
            <strong>States requiring a court order or physician
            certification:</strong> varies widely; some require surgery
            documentation, increasingly challenged in court.
          </li>
        </ul>
        <p>
          For a live state-by-state map, see:{" "}
          <a
            href="https://www.lgbtmap.org/equality-maps/transgender_id_laws"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movement Advancement Project — Gender Marker Laws by State
          </a>
          .
        </p>
      </div>

      <div className="content-section">
        <h2>Name Changes</h2>
        <p>
          Name change law is primarily state-level and has been less directly
          affected by federal executive orders than gender markers. However,
          some states have added procedural hurdles.
        </p>
        <ul>
          <li>
            <strong>Court-ordered name changes</strong> are recognized
            federally and by all states for updating most documents (SSA,
            passport, driver's license, birth certificate).
          </li>
          <li>
            <strong>Some states</strong> have introduced publication
            requirements or additional waiting periods for name change
            petitions — contact a local legal aid organization if you're
            having trouble.
          </li>
          <li>
            <strong>Passport name changes</strong> are still processed
            normally. See our{" "}
            <Link to="/change">Change/Correct Passport</Link> page for
            details.
          </li>
          <li>
            <strong>Birth certificate name and gender marker changes</strong>{" "}
            are handled state-by-state and are also subject to rapidly
            changing laws.
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Practical Travel Tips</h2>
        <p>
          These are actionable tips for navigating travel with mismatched or
          complicated ID documents. Each tip is labeled with its source.
        </p>

        <div className="tip-box">
          <p>
            <strong>Match your ticket to the ID you'll present at the airport.</strong>
          </p>
          <p>
            The name and sex you enter when booking a flight should match the
            ID you'll present at the security checkpoint — not necessarily your
            passport. If you have a state ID with a different marker than your
            passport, decide which document you'll use before booking. It's
            possible you'll use one sex designation for domestic flights and
            another for international.
          </p>
          <p className="update-source">
            Source:{" "}
            <a href="https://transequality.org/documents/know-your-rights-passports" target="_blank" rel="noopener noreferrer">Advocates for Trans Equality</a>
          </p>
        </div>

        <div className="tip-box">
          <p>
            <strong>Carry documentation that links mismatched IDs.</strong>
          </p>
          <p>
            There is no unified "legal sex" — it's common for trans people to
            have documents with different gender markers. If you must present
            multiple documents with different sex designations at the same time,
            carry a court-ordered name/gender change document or a letter from
            a therapist or medical provider explaining your trans status and
            linking the documents to you.
          </p>
          <p className="update-source">
            Sources:{" "}
            <a href="https://transequality.org/documents/know-your-rights-passports" target="_blank" rel="noopener noreferrer">Advocates for Trans Equality</a>
            {", "}
            <a href="https://www.gladlaw.org/issues/identity-document-updates-for-transgender-people/" target="_blank" rel="noopener noreferrer">GLAD Law</a>
          </p>
        </div>

        <div className="tip-box">
          <p>
            <strong>Don't apply for a new passport if your current photo
            still works.</strong>
          </p>
          <p>
            The State Department considers a significant change in appearance
            (such as major facial surgery) a reason to apply for a new
            passport. However, if you can still be identified from your current
            passport photo, do not apply for a renewal — any renewal will
            revert your marker to birth sex.
          </p>
          <p className="update-source">
            Source:{" "}
            <a href="https://transequality.org/documents/know-your-rights-passports" target="_blank" rel="noopener noreferrer">Advocates for Trans Equality</a>
          </p>
        </div>

        <div className="tip-box">
          <p>
            <strong>Trans parents: use the child's birth certificate when
            applying for a child's passport.</strong>
          </p>
          <p>
            If you are a trans parent applying for a passport for your child,
            use the child's birth certificate as proof of citizenship rather
            than submitting your own passport. This avoids triggering a review
            of your own passport record by the State Department.
          </p>
          <p className="update-source">
            Source:{" "}
            <a href="https://lambdalegal.org/tgnc-checklist-under-trump/" target="_blank" rel="noopener noreferrer">Lambda Legal</a>
          </p>
        </div>

        <div className="tip-box">
          <p>
            <strong>CBP advises carrying certified proof of name changes
            when crossing borders.</strong>
          </p>
          <p>
            U.S. Customs and Border Protection advises that travelers carry
            certified proof of their name progression — such as court documents
            showing a legal name change — when crossing international borders,
            in case your name differs between documents.
          </p>
          <p className="update-source">
            Source:{" "}
            <a href="https://www.gladlaw.org/issues/identity-document-updates-for-transgender-people/" target="_blank" rel="noopener noreferrer">GLAD Law (citing CBP guidance)</a>
          </p>
        </div>

        <div className="tip-box">
          <p>
            <strong>TSA PreCheck can reduce screening friction — but
            consider timing.</strong>
          </p>
          <p>
            TSA PreCheck generally allows you to bypass full-body scanners,
            which reduces the chance of a gender-related false alarm. TSA
            PreCheck still allows self-attestation of gender marker. However,
            your PreCheck application name and date of birth must match your
            reservation — the gender on file doesn't need to match if your
            KTN, name, and DOB do. If you're also considering Global Entry for
            international travel, note that Global Entry sex designations
            cannot be changed under EO 14168, so think carefully about timing.
          </p>
          <p className="update-source">
            Sources:{" "}
            <a href="https://www.tsa.gov/travel/tsa-cares/gender-diversity/transgendernon-binarygender-nonconforming" target="_blank" rel="noopener noreferrer">TSA</a>
            {", "}
            <a href="https://transequality.org/documents/know-your-rights-passports" target="_blank" rel="noopener noreferrer">Advocates for Trans Equality</a>
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Your Rights at the Border & Airport</h2>
        <ul>
          <li>
            CBP has stated that a gender marker on a passport is{" "}
            <strong>"not criteria for admission"</strong> into the U.S.
          </li>
          <li>
            TSA no longer checks gender at the ID verification podium —
            name-to-boarding-pass matching is the focus.
          </li>
          <li>
            You have the right to request a pat-down officer of your preferred
            gender for screening.
          </li>
          <li>
            You are not required to disclose your trans status to border or
            airport agents. You do have to answer questions accurately about
            citizenship, purpose of travel, and items being carried.
          </li>
          <li>
            If detained or questioned at the border, you have the right to
            remain silent beyond providing ID. You may request to contact an
            attorney.
          </li>
        </ul>
        <p>
          Resource:{" "}
          <a
            href="https://www.aclu.org/know-your-rights/what-do-i-do-if-im-stopped-by-the-police-at-the-airport"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACLU — Know Your Rights at the Airport
          </a>
        </p>
      </div>

      <div className="content-section">
        <h2>Ongoing Litigation to Watch</h2>
        <ul>
          <li>
            <strong>Orr v. Trump</strong> — ACLU challenge to EO 14168's
            passport gender marker policy. The Supreme Court stayed the
            injunction in November 2025; lower court litigation continues.{" "}
            <a
              href="https://www.aclu.org/cases/orr-v-trump"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACLU case page
            </a>
          </li>
          <li>
            <strong>Multiple state-level cases</strong> challenging laws that
            restrict gender marker changes on driver's licenses and birth
            certificates are working their way through federal courts.
          </li>
          <li>
            <strong>SSA gender marker cases</strong> — several organizations
            are challenging the SSA's suspension of gender marker changes.
            No final rulings as of March 2026.
          </li>
          <li>
            <strong>Doe v. State of Kansas</strong> — ACLU challenge to
            Kansas SB 244, the law that immediately invalidated trans
            residents' driver's licenses. Filed February 27, 2026. A request
            for a temporary restraining order was denied March 10, 2026;
            litigation continues.{" "}
            <a
              href="https://www.aclu.org/cases/doe-v-state-of-kansas"
              target="_blank"
              rel="noopener noreferrer"
            >
              ACLU case page
            </a>
          </li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Legal Help & Resources</h2>
        <div className="help-links">
          <a
            href="https://lambdalegal.org/helpdesk/"
            target="_blank"
            rel="noopener noreferrer"
            className="help-button"
          >
            Lambda Legal Help Desk
          </a>
          <a
            href="https://transequality.org/know-your-rights"
            target="_blank"
            rel="noopener noreferrer"
            className="help-button"
          >
            NCTE Know Your Rights
          </a>
          <a
            href="https://www.aclu.org/cases/orr-v-trump"
            target="_blank"
            rel="noopener noreferrer"
            className="help-button"
          >
            ACLU Trans Rights
          </a>
        </div>
      </div>

      <div className="content-section">
        <h2>Related Pages</h2>
        <div className="help-links">
          <Link to="/gender-marker" className="help-button">
            Passport Gender Marker Info
          </Link>
          <Link to="/change" className="help-button">
            Change/Correct Passport
          </Link>
          <Link to="/visa" className="help-button">
            Visa Information
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KnowYourRights;

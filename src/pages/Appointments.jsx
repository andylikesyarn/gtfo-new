import { useState } from "react";
import gftoImage from "../assets/GTFO!.png";
import "../Home.css";
import schedulerImage from "../assets/scheduler.png";
import locationImage from "../assets/location.png";
import sampleHoursImage from "../assets/sample-hours.png";
import selectDateImage from "../assets/select-date.png";
import serviceTypeImage from "../assets/service-type.png";
import selectTimeImage from "../assets/select-time.png";

function Appointments() {
  return (
    <div className="appointments-page">
      <div className="header-image">
        <img src={gftoImage} alt="GFTO" className="gfto-logo" />
      </div>
      <h1>Passport Appointments</h1>

      <div className="change-cards-container">
        <div className="card">
          <div className="card-content">
            <h3>Where to Apply for Your Passport</h3>
            <p>
              You can apply for a U.S. passport at several types of locations:
            </p>
            <ul>
              <li>
                <strong>Post Offices:</strong> Most USPS locations accept
                passport applications
              </li>
              <li>
                <strong>Passport Agencies:</strong> Regional agencies for
                expedited service
              </li>
              <li>
                <strong>Passport Acceptance Facilities:</strong> Libraries,
                courthouses, and government offices
              </li>
              <li>
                <strong>Clerks of Court:</strong> County and municipal court
                offices
              </li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="appointment-hours">
              <h3>Do You Need an Appointment?</h3>
              <p>
                <strong>For Most Applications:</strong> Most passport acceptance
                facilities have walk-in hours, though wait times may vary. You
                can check walk-in hours at post office acceptance facilities
                through lookup{" "}
                <a href="https://tools.usps.com/rcas.htm">here</a>. I'll use
                Tallahassee as an example throughout this page, but the same
                concepts apply to virtually anywhere in the US. When you look up
                a zip code, you'll see a list of acceptance facilities that
                looks like this:{" "}
              </p>
              <img src={sampleHoursImage}></img>
              <p>
                If the walk-in hours listed don't work for you, or if you don't
                see office hours listed for your location, you'll need to make
                an appointment. To do this, you'll have to look at the calendar
                tool and check which dates are available.
              </p>
              <img src={selectDateImage}></img>
              <p>
                To see what times are available for any given date with
                openings, you'll need to click on that date individually, close
                out of the calendar, and then check the available times below.
                These will look something like this:
              </p>
              <img src={selectTimeImage}></img>
              <p>
                If a date appears free on the calendar but no dates show up,
                this is typically because you're scheduling an appointmet for
                more than one person and there are no consecutive appoinments
                available. Try updating your initial appointment search to only
                1 person and check whether times appear for the same date.
              </p>

              <p>
                If there are few dates, or no dates, available in the time span
                during which you want to apply, go back to the location selector
                and try another office. I've found that more rural offices
                typically have more availability. Eg., for the Tallahassee
                example, the Tallahassee metro population is around 400,000
                people, ALL of whom tend to apply at the lone passport-accepting
                USPS office in Tallahassee. However, Quincy is about 30 min away
                and has under 10,000 residents, but has similar passport hours.
                This ultimately means it's typically easier for
                Tallahassee-based applicants to pick a time of their liking if
                they're willing to drive to Quincy.
              </p>
              <p>
                There are other application options, but the post office tends
                to be easiest because the State Department requires applicants
                to pay with a money order. At other application sites, you'll
                need to come with a money order made out to the department of
                state...but at USPS passport acceptance facilities, you can buy
                the money order and get help filling it out on-site. For this
                reason, it tends to be much more logistically simple to apply at
                USPS locations, BUT other options may be available. If you live
                near a university, check whether it has a passport acceptance
                facility. For example, Tallahassee has two universities with
                passport acceptance facilities: Florida A&M University has a
                great online{" "}
                <a href="https://www.famu.edu/students/international-education-and-development/passport-services.php">
                  Passport Services scheduler
                </a>{" "}
                and the
                <a href="https://international.fsu.edu/Passports.aspx">
                  FSU International Programs office
                </a>{" "}
                also accepts passports, though you have to call to make the
                appointment. These kinds of options commonly exist within
                universities, though as these examples indicate, the quality of
                online schedulers and scope of appointment availability vary
                widely. These do typically require you to bring a money order,
                but this can be worthwhile depending on appointment availability
                and your personal preference (eg., it may be more comfortable to
                apply on your own college campus than USPS if you don't want to
                deal with any government office).
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>How to Schedule an Appointment</h3>
            <p>
              <strong>Online:</strong> Use the official State Department
              appointment system at{" "}
              <a
                href="https://passportappointment.travel.state.gov/"
                target="_blank"
                rel="noopener noreferrer"
              >
                passportappointment.travel.state.gov
              </a>
            </p>
            <p>
              <strong>By Phone:</strong> Call the National Passport Information
              Center at <strong>1-877-487-2778</strong> or{" "}
              <strong>1-888-874-7793</strong> (TDD/TTY)
            </p>
            <p>
              <strong>Local Facilities:</strong> Contact your local post office
              or acceptance facility directly to check their appointment
              policies.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>What to Bring to Your Appointment</h3>
            <ul>
              <li>
                Completed passport application form (DS-11 for new applicants,
                DS-82 for renewals)
              </li>
              <li>
                Proof of U.S. citizenship (birth certificate, previous passport,
                etc.)
              </li>
              <li>
                Photo identification (driver's license, military ID, etc.)
              </li>
              <li>Passport photo (2" x 2")</li>
              <li>
                Payment for fees (check, money order, or credit/debit card -
                varies by location)
              </li>
              <li>Any additional documents for name changes or corrections</li>
            </ul>
            <p>
              <em>
                Note: Bring original documents and photocopies. Originals will
                be returned to you.
              </em>
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3>Find Passport Acceptance Facilities Near You</h3>
            <p>
              Use the official USPS scheduling tool to find locations that
              accept passport applications in your area. You can search by ZIP
              code, city, or state to find the most convenient location with
              current hours and contact information.:
            </p>
            <br></br>
            <p>
              <a
                href="https://tools.usps.com/rcas.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="route-button"
              >
                Find Locations Near You
              </a>
            </p>
            <p>
              <br></br>
              The USPS site sometimes goes down, so if you just want to check
              nearby facilities, try the official State Department facility
              search. You can't schedule here, but there are fewer steps in the
              schedule lookup.<br></br>
              <a
                href="https://iafdb.travel.state.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="route-button"
              >
                Check nearby facilities quickly here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;

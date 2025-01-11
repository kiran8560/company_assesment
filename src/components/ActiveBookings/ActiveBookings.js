import React from "react";
import "./ActiveBookings.css"; // Ensure this path is correct

const ActiveBookings = () => {
  const bookings = [
    {
      userName: "Mr. Suresh Gaikwad",
      status: "Appointment Confirmed",
      date: "03 Nov'22",
      day: "Wednesday",
      time: "09:30-10:30AM",
      type: "Home Sample Collection",
      tests: "03 Lab Tests",
    },
    {
      userName: "Ms. Anjali Sharma",
      status: "Appointment Confirmed",
      date: "04 Nov'22",
      day: "Thursday",
      time: "10:00-11:00AM",
      type: "Clinic Visit",
      tests: "02 Lab Tests",
    },
    {
      userName: "Mr. Raj Patel",
      status: "Appointment Confirmed",
      date: "05 Nov'22",
      day: "Friday",
      time: "11:00-12:00PM",
      type: "Home Sample Collection",
      tests: "04 Lab Tests",
    },
  ];

  return (
    <div>
      <div className="booking-header">
        <h2>Your Active Bookings</h2>
        <a href="#" className="view-all">
          View All
        </a>
      </div>
      <div className="booking-slider">
        {bookings.map((booking, index) => (
          <div key={index} className="booking-card">
            <div className="booking-info">
              <div>
                <div className="user-info">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_3311_7295)">
                      <rect width="14" height="14" rx="7" fill="#E2EDFF" />
                      <path
                        d="M8.31348 7.22656C8.12411 7.7246 8.09457 8.26924 8.22894 8.78485C8.36598 9.29747 8.45461 9.28301 9.21772 9.52596C8.95685 10.214 7.89201 10.9626 7.18484 10.9739C6.54807 10.9843 4.76725 10.1715 4.44824 9.59668C4.80654 9.56336 5.88176 9.39804 6.08416 8.88511C6.23677 8.39726 6.21679 7.87176 6.02759 7.39691L8.31348 7.22656Z"
                        fill="#EAD8B9"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.29656 13.9991C9.76317 13.996 11.7228 13.4755 12.0041 13.142C12.326 12.7602 11.1477 10.6167 10.8038 10.1609C10.8038 10.1609 10.4688 9.62379 8.61221 9.31641C8.44689 9.80671 7.87864 10.1427 7.1435 10.1559C6.42061 10.1685 5.69772 9.83909 5.51197 9.35633C3.70759 9.63919 3.1428 10.1622 2.98565 10.5252C2.91304 10.6918 2.00472 12.3092 2.00001 12.9437C1.99466 13.6864 5.26054 14.0013 7.29656 13.9991Z"
                        fill="#BCE0FF"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7.29253 5.80469C7.33339 5.80689 7.76398 5.83454 7.88404 6.09164C8.00976 6.36225 7.78252 6.86607 7.19824 7.10745C7.32005 6.68461 7.35216 6.24098 7.29253 5.805V5.80469Z"
                        fill="#EAD8B9"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5.16601 5.78125C5.12516 5.78345 4.69457 5.8108 4.5745 6.06821C4.44878 6.33851 4.67697 6.84264 5.2603 7.08371C5.1386 6.66084 5.10648 6.21723 5.16601 5.78125Z"
                        fill="#EAD8B9"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M9.14605 5.78125C9.18691 5.78345 9.6175 5.8108 9.73756 6.06821C9.86328 6.33851 9.6351 6.84264 9.05176 7.08371C9.17348 6.66085 9.2056 6.21723 9.14605 5.78125Z"
                        fill="#EAD8B9"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5.06855 6.14693C5.05629 6.90124 5.08112 7.66844 5.5686 8.24644C5.98413 8.68072 6.54424 8.94792 7.14323 8.99762C7.73512 8.96051 8.29009 8.69731 8.69335 8.26248C9.16919 7.687 9.23615 6.89402 9.2176 6.14725C9.17077 4.8954 8.29262 3.29688 7.14323 3.29688C5.99385 3.29688 5.11066 4.88911 5.06855 6.14693Z"
                        fill="#EAD8B9"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6.32672 2.11746C6.92613 1.93541 7.56999 1.96571 8.14965 2.20326C8.46443 2.32462 8.75096 2.50926 8.99153 2.74578C9.2321 2.98229 9.42158 3.26565 9.54827 3.57832C9.90971 4.59287 9.43764 5.72937 9.18808 5.72686C8.96525 5.72497 9.06236 4.8154 8.45105 4.46181C8.03712 4.22263 7.81303 4.53284 7.06814 4.31566C6.49235 4.1472 6.37669 3.93065 6.04291 4.02211C5.73332 4.10666 5.58875 4.38764 5.45705 4.62777C5.29123 4.99295 5.16673 5.37552 5.08587 5.76835C4.90955 5.79727 4.19263 4.63939 4.54748 3.57832C4.90012 2.52291 6.06019 2.19164 6.32672 2.11746Z"
                        fill="#2D2D2D"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M6.26756 6.35543C6.39375 6.35543 6.49605 6.25313 6.49605 6.12693C6.49605 6.00074 6.39375 5.89844 6.26756 5.89844C6.14136 5.89844 6.03906 6.00074 6.03906 6.12693C6.03906 6.25313 6.14136 6.35543 6.26756 6.35543Z"
                        fill="#2D2D2D"
                      />
                      <path
                        d="M8.02146 6.35543C8.14766 6.35543 8.24996 6.25313 8.24996 6.12693C8.24996 6.00074 8.14766 5.89844 8.02146 5.89844C7.89527 5.89844 7.79297 6.00074 7.79297 6.12693C7.79297 6.25313 7.89527 6.35543 8.02146 6.35543Z"
                        fill="#2D2D2D"
                      />
                      <path
                        d="M7.7399 7.75391C7.17857 8.13766 6.92462 8.02075 6.58203 7.75988"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.82812 5.36537C6.11167 5.25924 6.423 5.25336 6.71036 5.34871"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.58105 5.36537C7.8646 5.25924 8.17593 5.25336 8.46328 5.34871"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.9082 6.8125C6.93769 6.8521 6.97602 6.88427 7.02014 6.90642C7.06426 6.92858 7.11293 6.94011 7.1623 6.94011C7.21167 6.94011 7.26036 6.92858 7.30448 6.90642C7.3486 6.88427 7.38693 6.8521 7.41642 6.8125"
                        stroke="#2D2D2D"
                        strokeWidth="0.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3311_7295">
                        <rect width="14" height="14" rx="7" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="user-name">{booking.userName}</span>
                </div>
                <div className="status">
                  <span className="status-icon">✔</span>
                  <span className="status-text">{booking.status}</span>
                </div>
              </div>
              <div className="arrow">➔</div>
            </div>
            <div className="booking-details">
              <div className="date">
                <strong>{booking.date}</strong>
                <span>{booking.day}</span>
              </div>
              <div className="time">
                <strong>{booking.time}</strong>
                <span>{booking.type}</span>
              </div>
              <div className="tests">
                <div>
                  <strong>{booking.tests.split(" ")[0]}</strong>
                  <span>
                    {booking.tests.split(" ")[1]} {booking.tests.split(" ")[2]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveBookings;
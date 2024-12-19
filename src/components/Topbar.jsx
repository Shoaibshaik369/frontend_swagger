import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaBed } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import "./Topbar.css";

const Topbar = () => {
  // State for bubble visibility
  const [showBubble, setShowBubble] = useState(false);

  // Toggle bubble visibility
  const toggleBubble = () => {
    setShowBubble((prev) => !prev);
  };

  return (
    <div className="topbar">
      {/* Left section */}
      <div className="rn">
        <h2 className="dd">
          <FaBars className="fb" />
          Vishwaraj Hospital{" "}
          <a href="/" className="home-link">
            <FaHome className="hi" />
          </a>
        </h2>
      </div>

      {/* Right section */}
      <div className="ht">
        <span className="bb">
          <input type="text" placeholder="Search By Patient Name" />
        </span>
        <img
          alt="United States"
          src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          className="ic"
        />
        <a href="/notifications" className="notification-link">
          <FaRegBell className="ic" />
        </a>
        <FaBed className="ic" />
        <FaWhatsapp className="ic" />
        <a href="/calender" className="calendar-link">
          <SlCalender className="ic" />
        </a>
        <div className="icon-with-bubble">
          <IoMdCheckboxOutline className="ic" onClick={toggleBubble} />
          {showBubble && (
            <div className="bubble">
              <p>. Today you 0 Pending Tasks</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;

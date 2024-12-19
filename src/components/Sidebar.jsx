import React, { useState, useEffect } from "react";
import {
  IoDesktopOutline,
  IoCashOutline,
  IoCalendarOutline,
  IoMedkitOutline,
  IoFlaskOutline,
  IoImagesOutline,
  IoWaterOutline,
  IoCarSportOutline,
  IoBarChartOutline,
  IoShareOutline,
  IoSettings,
} from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaHospital, FaBookDead, FaUserAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Sidebar state
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const location = window.location.pathname; // Get the current URL path

  const menuItems = [
    { icon: <IoBarChartOutline />, text: "Dashboard", link: "/" },
    { icon: <IoCashOutline />, text: "Billing", link: "/billing" },
    { icon: <IoCalendarOutline />, text: "Appointment", link: "/appointment" },
    { icon: <IoMedkitOutline />, text: "OPD - Out Patient", link: "/opd" },
    { icon: <FaHospital />, text: "IPD - In Patient", link: "/ipd" },
    { icon: <IoFlaskOutline />, text: "Pharmacy", link: "/pharmacy" },
    { icon: <IoImagesOutline />, text: "Pathology", link: "/pathology" },
    { icon: <IoImagesOutline />, text: "Radiology", link: "/radiology" },
    { icon: <IoWaterOutline />, text: "Blood Bank", link: "/blood-bank" },
    { icon: <IoCarSportOutline />, text: "Ambulance", link: "/ambulance" },
    { icon: <IoDesktopOutline />, text: "Front Office", link: "/front-office" },
    {
      icon: <FaBookDead />,
      text: "Birth & Death Record",
      dropdown: [
        { text: "Birth Record", link: "/b&drecords/birth-record" },
        { text: "Death Record", link: "/b&drecords/death-record" },
      ],
    },
    { icon: <FaUserAlt />, text: "Human Resource", link: "/human-resource" },
    { icon: <IoCalendarOutline />, text: "Duty Roster", link: "/duty-roster" },
    {
      icon: <IoCashOutline />,
      text: "Finance",
      dropdown: [
        { text: "Income", link: "/finance/income" },
        { text: "Expenses", link: "/finance/expenses" },
      ],
    },
    { icon: <IoShareOutline />, text: "Referral", link: "/referral" },
    {
      icon: <IoSettings />,
      text: "Set up",
      dropdown: [
        { text: "Patient", link: "/setup/patient" },
        {
          text: "Settings",
          dropdown: [
            { text: "General Settings", link: "/setup/settings/general" },
            { text: "Attendance Settings", link: "/setup/settings/attendance" },
            { text: "Notification Settings", link: "/setup/settings/notification" },
            { text: "System Notification Settings", link: "/setup/settings/system-notification" },
            { text: "SMS Settings", link: "/setup/settings/sms" },
            { text: "Email Settings", link: "/setup/settings/email" },
            { text: "Payment Methods", link: "/setup/settings/payment-methods" },
            { text: "Front CMS Settings", link: "/setup/settings/front-cms" },
            { text: "Prefix Settings", link: "/setup/settings/prefix" },
            { text: "Roles & Permissions", link: "/setup/settings/roles-permissions" },
            { text: "Backup / Restore", link: "/setup/settings/backup-restore" },
            { text: "Languages", link: "/setup/settings/languages" },
            { text: "Users", link: "/setup/settings/users" },
            { text: "Captcha Settings", link: "/setup/settings/captcha" },
            { text: "Modules", link: "/setup/settings/modules" },
            { text: "System Update", link: "/setup/settings/system-update" },
          ],
        },
      ],
    },
    { icon: <MdMessage />, text: "TPA Management", link: "/tpamanagement" },
  ];

  useEffect(() => {
    const activeItem = document.querySelector(
      `.menu-item[href="${location}"], .dropdown-item[href="${location}"]`
    );
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [location]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleSubDropdown = (index) => {
    setActiveSubDropdown(activeSubDropdown === index ? null : index);
  };

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="logo">
        <img
          src="https://hospital.gtechxchange.com/uploads/hospital_content/logo/1.png?1732256459"
          alt="Logo"
        />
      </div>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? "<<" : ">>"}
      </div>

      {menuItems.map((item, index) => (
        <div key={index}>
          <a
            href={item.link || "#"}
            onClick={
              item.dropdown
                ? (e) => {
                    e.preventDefault();
                    toggleDropdown(index);
                  }
                : null
            }
            className={`menu-item ${location === item.link ? "active" : ""}`}
          >
            <span className="icon">{item.icon}</span>
            {isExpanded && item.text}
            {item.dropdown && isExpanded && (
              <span className="dropdown-icon">
                {activeDropdown === index ? "▲" : "▼"}
              </span>
            )}
          </a>

          {item.dropdown && activeDropdown === index && isExpanded && (
            <div className="dropdown">
              {item.dropdown.map((subItem, subIndex) =>
                subItem.dropdown ? (
                  <div key={subIndex}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubDropdown(subIndex);
                      }}
                      className="dropdown-item"
                    >
                      {subItem.text}
                      <span className="dropdown-icon">
                        {activeSubDropdown === subIndex ? "▲" : "▼"}
                      </span>
                    </a>
                    {activeSubDropdown === subIndex && (
                      <div className="sub-dropdown">
                        {subItem.dropdown.map((nestedItem, nestedIndex) => (
                          <a
                            key={nestedIndex}
                            href={nestedItem.link}
                            className={`sub-dropdown-item ${
                              location === nestedItem.link ? "active" : ""
                            }`}
                          >
                            {nestedItem.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={subIndex}
                    href={subItem.link}
                    className={`dropdown-item ${
                      location === subItem.link ? "active" : ""
                    }`}
                  >
                    {subItem.text}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

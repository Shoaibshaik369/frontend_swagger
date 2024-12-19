import React from "react";
import './Sms_Settings.css';



const SmsSettings = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4">SMS Setting</h1>
        <div className="border-b mb-4">
          <ul className="flex space-x-4">
            <li className="border-b-2 border-blue-500 pb-2">
              <a href="#" className="text-blue-500">
                Clickatell SMS Gateway
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Twilio SMS Gateway
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                MSG91
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Text Local
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                SMS Country
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Bulk SMS
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                MobiReach
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Nexmo
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                AfricasTalking
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Custom SMS Gateway
              </a>
            </li>
          </ul>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Clickatell Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Clickatell Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Clickatell Api Key<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Status
            </label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option>Disabled</option>
              <option>Enabled</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <img
                src="https://hospital.gtechxchange.com/backend/images/clickatell.png"
                alt="Clickatell logo"
                className="inline-block"
              />
              <a
                href="https://www.clickatell.com"
                className="text-blue-500 ml-2"
              >
                https://www.clickatell.com
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              <i className="fas fa-save mr-2"></i>Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmsSettings;
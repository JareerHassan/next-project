import React from 'react';
import { FaHome, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 mt-20 shadow-lg py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Address */}
        <div className="flex flex-col items-center text-center gap-3">
          <FaHome className="text-orange-500 text-5xl" />
          <h4 className="text-lg font-semibold text-gray-800">Address</h4>
          <p className="text-gray-400 leading-relaxed">
           220 Petersham town, Wardell<br />
         street, Australia PA 6550.
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center gap-3">
          <FaPhoneAlt className="text-orange-500 text-5xl" />
          <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
          <p className="text-gray-400 leading-relaxed">
         Phone: (04) 491 570 110<br />
         Fax: +04 642 021 332
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center text-center gap-3">
          <FaEnvelope className="text-orange-500 text-5xl" />
          <h4 className="text-lg font-semibold text-gray-800">Email</h4>
          <p className="text-gray-400 leading-relaxed">
support@zytheme.com <br />
Twitter: @zytheme
          </p>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t pt-5">
        &copy; {new Date().getFullYear()} All rights reserved | Your Company Name
      </div>
    </footer>
  );
};

export default Footer;

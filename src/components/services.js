import React from 'react';
import { FaHardHat, FaTools, FaDraftingCompass, FaTruckMoving } from 'react-icons/fa'; // Updated icons

const Services = () => {
  return (
    <>
      <div className="text-center mt-14">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="text-gray-400 text-1xl mt-8">
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan <br />
          ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
        </p>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-16 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl text-[orange] mb-4 flex justify-center">
            <FaHardHat />
          </div>
          <h2 className="text-2xl mb-2">Safety Equipment</h2>
          <p className="text-gray-400 ">
            We ensure full safety standards with certified gear and professional handling.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl text-[orange] mb-4 flex justify-center">
            <FaTools />
          </div>
          <h2 className="text-2xl mb-2">Renovation</h2>
          <p className="text-gray-400">
         Cobuild impresses you with fully responsiveness and highly customization.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl text-[orange] mb-4 flex justify-center">
            <FaDraftingCompass />
          </div>
          <h2 className="text-2xl mb-2">Architecture</h2>
          <p className="text-gray-400">
        We ensure full safety standards with certified gear and professional handling.
           </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
          <div className="text-5xl text-[orange] mb-4 flex justify-center">
            <FaTruckMoving />
          </div>
          <h2 className="text-2xl mb-2">Construction</h2>
          <p className="text-gray-400">
            We ensure full safety standards with certified gear and professional handling.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;

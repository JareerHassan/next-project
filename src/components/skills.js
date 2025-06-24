import React, { useEffect, useState } from 'react';

const skillsData = [
  { name: 'Buildings', percent: 90 },
  { name: 'Architecture', percent: 80 },
  { name: 'Constructions', percent: 70 },
  { name: 'Planning', percent: 60 },
];

const Skills = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skills Section */}
      <div className="px-6 py-25 bg-white flex flex-col md:flex-row items-center justify-center ">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl mb-4">
            We are expert in this field <br /> since almost 20 years.
          </h1>
          <p className="text-gray-500">
            Proin gravida nibh vel velit auctor aliquet aenean sollicitudin,
            <br />
            lorem quis bibendum auctor, nisi elit cuat ipsum, nec sagittis
            <br />
            sem nibh id elit duis sed odio sit nibh vulputate cursus a sit
            <br />
            amet mauris morbi accumsan.
          </p>
        </div>

        {/* Right Content - Skills */}
        <div className="md:w-1/2 w-full flex flex-col items-center gap-5">
          {skillsData.map((skill, index) => {
            const fillWidth = Math.min((scrollPercent / 100) * skill.percent, skill.percent);
            return (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-lg font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold ">
                    {Math.floor(fillWidth)}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 bg-orange-400 transition-all duration-300 ease-in-out"
                    style={{ width: `${fillWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="w-full h-52 bg-orange-500 flex flex-col items-center justify-center text-center mt-[-20px]">
        <h1 className="text-2xl md:text-3xl text-white font-semibold">
          An innovative company working with the latest technologies
        </h1>

        <button className="mt-6 px-6 py-3 bg-white text-orange-600 font-semibold text-md rounded-full hover:bg-orange-600 hover:text-white transition duration-300">
          GET A QUOTE
        </button>
      </div>
    </>
  );
};

export default Skills;

import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/free-photo/medium-shot-engineer-architect-looking-clipboard_23-2148233777.jpg?ga=GA1.1.263742761.1727317733&semt=ais_hybrid&w=740"
          alt="construction"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Over Image */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center  ">
        <h1 className="text-white text-5xl md:text-8xl font-arial mb-4">
          We’re Building Your Future
        </h1>
        <p className="text-white text-lg md:text-2xl">
          Take a step towards the future of construction with Cobuild
        </p>

<button className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold text-md rounded-full hover:bg-orange-600 transition duration-300">
  GET A QUOTE
</button>
      </div>
    </div>
  );
};

export default Home;

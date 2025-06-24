import React from 'react';

const Ourclient = () => {
  return (
    <>
      <div className="mt-16 px-4">
        <h1 className="text-center text-3xl font-semibold">Our Clients Say</h1>
        <p className="text-center text-lg text-gray-500 mt-3">
          Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat<br className="hidden sm:block" />
          pariature occaecat cupidatat proident culpa.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-16 px-4">
        {/* Client 1 */}
        <div className="max-w-md text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://landing.zytheme.com/cobuild/assets/images/testimonials/1.jpg"
              alt="Client 1"
            />
            <p className="text-gray-500 text-base">
              “It’s just brilliant. I will recommend Cobuild to everyone I know! I’m really glad these guys got Cobuild out there.”
            </p>
          </div>
          <p className="text-lg font-bold mt-4 lg:ms-30">Gene Stevens</p>
        </div>

        {/* Client 2 */}
        <div className="max-w-md text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src="https://landing.zytheme.com/cobuild/assets/images/testimonials/4.jpg"
              alt="Client 2"
            />
            <p className="text-gray-500 text-base">
              “We are so excited to launch our new company. By using Cobuild it has great features. I think you are all about to make me happy.”
            </p>
          </div>
          <p className="text-lg font-bold mt-4 lg:ms-30">Gene Stevens</p>
        </div>
      </div>
    </>
  );
};

export default Ourclient;

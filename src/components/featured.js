import React, { useState } from 'react';

const images = [
  'https://img.freepik.com/free-photo/workers-examining-work_1122-970.jpg?ga=GA1.1.263742761.1727317733&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/working-with-blueprint_1098-14292.jpg?ga=GA1.1.263742761.1727317733&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept_640221-172.jpg?ga=GA1.1.263742761.1727317733&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?ga=GA1.1.263742761.1727317733&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/thinking-sketch_1098-14336.jpg?ga=GA1.1.263742761.1727317733&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-298.jpg?ga=GA1.1.263742761.1727317733&semt=ais_hybrid&w=740'
];

const Featured = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="text-center mt-18">
        <h1 className="text-5xl font-bold">Featured Work</h1>
        <p className="text-gray-400 text-xl mt-8">
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan <br />
          ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 px-10">
          {images.map((img, index) => (
            <div className="image-container" key={index} onClick={() => setSelectedImg(img)}>
              <img src={img} alt={`featured-${index}`} className="featured-img" />
              <div className="overlay">
                <span className="plus-icon">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="fullscreen" />
          <span className="close">&times;</span>
        </div>
      )}
    </>
  );
};

export default Featured;

import React from "react";
import "../css/Recognitions.css";

// Images
import img1 from "../assets/solutions/tadsprotect/car.avif";
import img2 from "../assets/solutions/tadsprotect/car.avif";
import img3 from "../assets/solutions/tadsprotect/car.avif";
import img4 from "../assets/solutions/tadsprotect/car.avif";
import img6 from "../assets/solutions/tadsprotect/car.avif";
import img9 from "../assets/solutions/tadsprotect/car.avif";

const partnersImages = [img1, img2, img3, img4, img9, img6];

export default function Recognitions() {
  return (
    <>
      <section className="recognitions-section partners-section">
        <div className="recognitions-container">
 

          <div className="recognitions-marquee-col">
            <div className="recognitions-marquee-track">
              {partnersImages.map((img, index) => (
                <div key={`param-${index}`} className="recognition-item">
                  <img
                    src={img}
                    alt={`Partner ${index + 1}`}
                    className="recognition-img"
                  />
                </div>
              ))}
              {partnersImages.map((img, index) => (
                <div key={`dup-${index}`} className="recognition-item">
                  <img
                    src={img}
                    alt={`Partner Duplicate ${index + 1}`}
                    className="recognition-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
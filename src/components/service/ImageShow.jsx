import React from "react";
function ImageShow({ image = "" }) {
  return (
    <>
      <div className="image-card">
        {image ? (
          <img src={image} alt="Uploaded Clinic Image" loading="lazy" />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </>
  );
}
export default ImageShow;

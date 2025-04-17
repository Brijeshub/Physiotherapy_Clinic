import React from "react";
import ImageShow from "./ImageShow"; //Import ImageShow

const ImageGallery = ({ images, handleDelete }) => {
  return (
    <div className="image-gallery">
      {images.length > 0 ? (
        images.map((image, index) => (
          <div
            key={index}
            className="image-wrapper mt-14 p-3 grid grid-cols-2 gap-6"
          >
            <ImageShow image={image} />
            <button
              onClick={() => handleDelete(image)}
              className="bg-red-500 h-10 rounded-md shadow-md shadow-zinc-700 hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No images uploaded yet.</p>
      )}
    </div>
  );
};

export default ImageGallery;

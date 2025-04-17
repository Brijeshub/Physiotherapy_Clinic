import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig"; // Firebase Config
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const ImgGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImagesFromFirestore();
  }, []); // Runs only once when component mounts

  const fetchImagesFromFirestore = async () => {
    try {
      const clientDocRef = doc(db, "clients", "nd3Xt6VDPKZgvOs8SQZBmtvM45i2"); // 🔹 Static Client ID
      const docSnap = await getDoc(clientDocRef);
      if (docSnap.exists() && docSnap.data().images?.length > 0) {
        setImages(docSnap.data().images);
      } else {
        setImages([]);
        console.log("No images found!");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Debugging: Ensure images update properly
  useEffect(() => {
    console.log("Updated Images:", images);
  }, [images]);

  return (
    <div className="">
      <h2 className="font-semibold text-2xl text-center bg-zinc-600 h-20 pt-3">
        Gallery
      </h2>
      <Link
        to="/upload-image"
        className="bg-green-400 p-3 shadow-lg shadow-slate-500"
      >
        ← Back to Upload
      </Link>
      {loading ? (
        <div class="d-flex justify-content-center mt-10">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : images.length > 0 ? (
        <div className="mt-14 p-3 grid grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="image-card">
              <img src={image} alt={`Uploaded ${index}`} loading="lazy" />
            </div>
          ))}
        </div>
      ) : (
        <p>No images found</p>
      )}
    </div>
  );
};

export default ImgGallery;

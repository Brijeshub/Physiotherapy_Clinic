import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebaseConfig";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import ImageGallery from "./ImageGallery";

const ImageUpload = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);

// verify right user auth.....................
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchClientData(currentUser.uid);
      } else {
        setUser(null);
        setIsClient(false);
        setImages([]);
      }
    });
    return () => unsubscribe();
  }, []);
// ...End..................................

// Fatch client data........................................
  const fetchClientData = async (uid) => {
    try {
      const clientDocRef = doc(db, "clients", uid);
      const docSnap = await getDoc(clientDocRef);
      if (docSnap.exists()) {
        setIsClient(true);
        setImages(docSnap.data().images || []);
      } else {
        setIsClient(false);
        setImages([]);
      }
    } catch (error) {
      console.error("Error fetching client data:", error);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
// End.................................................


  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!user || !user.uid || !isClient || !image) {
      alert(" Error: Please login, ensure authorization, and select an image.");
      return;
    }

    setLoading(true);

    try {
      const base64Image = await convertToBase64(image);
      const clientDocRef = doc(db, "clients", user.uid);

      await updateDoc(clientDocRef, {
        images: arrayUnion(base64Image),
      });

      setImages((prev) => [...prev, base64Image]);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image.");
    }

    setLoading(false);
  };

  const handleDelete = async (image) => {
    if (!user || !user.uid) {
      alert(" User not logged in! Please login first.");
      return;
    }

    try {
      const clientDocRef = doc(db, "clients", user.uid);
      await updateDoc(clientDocRef, {
        images: arrayRemove(image),
      });
      setImages((prev) => prev.filter((img) => img !== image));
      alert(" Image deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
      alert("Failed to delete image.");
    }
  };

  return (
    <div className="">
      <h3 className="font-semibold text-2xl text-center bg-green-600 h-20 pt-5">
        Upload Images
      </h3>
      {user ? (
        isClient ? (
          <>
            <input type="file" onChange={handleImageChange} />
            <button
              onClick={handleUpload}
              disabled={loading}
              className="bg-green-500 p-3 my-3 mx-40 rounded-md shadow-md shadow-zinc-700 hover:bg-green-600"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </>
        ) : (
          <p>You are not authorized to upload images.</p>
        )
      ) : (
        <p>Please login to upload images.</p>
      )}
      {/* Image Gallery */}
      <ImageGallery images={images} handleDelete={handleDelete} />,
    </div>
  );
};

export default ImageUpload;

import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { auth } from "../../firebaseConfig";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewLogin from "./ReviewLogin";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState(null);

  // Firebase Auth Listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Fetch Reviews from Firestore
  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setReviews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  // Submit Review to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment || rating === 0)
      return alert("Please enter a comment and rating");
    if (!user) return alert("You need to log in to submit a review");

    await addDoc(collection(db, "reviews"), {
      email: user.email,
      comment,
      rating,
      timestamp: new Date(),
    });

    setComment("");
    setRating(0);
  };

  // Slider Settings for Auto Scroll
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-800 shadow-lg rounded-lg">
      {/* Login/Logout Section */}
      {user ? (
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-700">
            Welcome, {user.email}
          </h2>
          <ReviewLogin onLogin={setUser} />
        </div>
      ) : (
        <div className="flex justify-center">
          <ReviewLogin onLogin={setUser} />
        </div>
      )}

      {/*Review Form (Only If User is Logged In) */}
      {user && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <div className="flex items-center space-x-2">
            <label className="text-gray-700">Rating:</label>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`cursor-pointer text-xl ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </form>
      )}

      {/*Reviews with Auto-Slider */}
      <h2 className="text-lg font-bold mt-6 text-center text-zinc-200">
        Reviews
      </h2>
      {reviews.length > 0 ? (
        <Slider {...sliderSettings} className="mt-4">
          {reviews.map((review) => (
            <div key={review.id} className="p-6 bg-transparent text-center">
              <p className="font-semibold text-gray-200">{review.email}</p>
              <p className="text-gray-100">{review.comment}</p>
              <p className="text-yellow-500 text-lg">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500 mt-4">No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewSection;

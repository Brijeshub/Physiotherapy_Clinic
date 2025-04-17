import React, { useState } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const ReviewLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Modal state

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      onLogin(auth.currentUser);
      setIsOpen(false); // Close modal after login
    } catch (error) {
      console.error("Auth Error:", error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    onLogin(null);
  };

  return (
    <div className="flex flex-col items-center">
      {/*  Open Login Form */}
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Login for Review
      </button>

      {/*  Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {isSignUp ? "Sign Up" : "Login"}
            </h2>
            <form onSubmit={handleAuth} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            {/*  Toggle Between Login & Signup */}
            <p 
              onClick={() => setIsSignUp(!isSignUp)} 
              className="text-blue-500 text-center mt-3 cursor-pointer hover:underline"
            >
              {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </p>

            {/*  Close Modal Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-gray-600 hover:text-black transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/*  Logout Button */}
      <button 
        onClick={handleLogout} 
        className="mt-4 text-red-500 hover:text-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default ReviewLogin;

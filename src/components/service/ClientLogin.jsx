// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth, db } from "../../firebaseConfig";
// import {
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { doc, setDoc, getDoc } from "firebase/firestore";
// import "../../App.css";

// const ClientLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [clientData, setClientData] = useState(null);
//   const [message, setMessage] = useState("");
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   //............Monitor Authentication State...........................
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         console.log(" User logged in:", currentUser.email);

//         const clientInfo = await fetchClientData(currentUser.uid);
//         if (clientInfo) {
//           setMessage("Login successful!");
//         }
//       } else {
//         setUser(null);
//         setClientData(null);
//         console.log(" No user logged in!");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   //............Handle Login............................
//   const handleLogin = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("Successfully logged in:", userCredential.user.email);
//     } catch (error) {
//       console.error("Login Error:", error);
//       setMessage("Login Failed: " + error.message);
//     }
//   };

//   //..............Handle Logout..................................
//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setClientData(null);
//       console.log("User logged out successfully");
//     } catch (error) {
//       console.error("Logout Error:", error);
//     }
//   };

//   //...........Fetch Client Data from Firestore...................
//   const fetchClientData = async (uid) => {
//     try {
//       const docRef = doc(db, "clients", uid);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         setClientData(docSnap.data());
//         return docSnap.data();
//       } else {
//         console.log("No client data found, creating new client document...");
//         const newClientData = {
//           name: "Default Name",
//           clinicName: "Default Clinic",
//           location: "Default Location",
//           contact: "0000000000",
//         };
//         await setDoc(docRef, newClientData);
//         setClientData(newClientData);
//         return newClientData;
//       }
//     } catch (error) {
//       console.error("Error fetching client data:", error);
//       setMessage("Error fetching data. Please try again.");
//       return null;
//     }
//   };

//   return (
//     <div className="login-container">
//       {!user ? (
//         <div className="login-box">
//           <h2>Admin Login</h2>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//           {message && <p className="message">{message}</p>}
//         </div>
//       ) : (
//         <div className="client-dashboard">
//           <h2>Welcome, {clientData?.name || "Client"}</h2>
//           <p>
//             <strong>Clinic Name:</strong> {clientData?.clinicName || "N/A"}
//           </p>
//           <p>
//             <strong>Location:</strong> {clientData?.location || "N/A"}
//           </p>
//           <p>
//             <strong>Contact:</strong> {clientData?.contact || "N/A"}
//           </p>
//           <button onClick={() => navigate("/upload-image")}>
//             Upload Image
//           </button>
//           <button onClick={handleLogout} className="logout-btn">
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClientLogin;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import "../../App.css";

const ClientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientData, setClientData] = useState(null);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // <-- New loading state
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const clientInfo = await fetchClientData(currentUser.uid);
        if (clientInfo) {
          setMessage("Login successful!");
        }
      } else {
        setUser(null);
        setClientData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setLoading(true); // Show loader
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Successfully logged in:", userCredential.user.email);
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("Login Failed: " + error.message);
    }
    setLoading(false); // Hide loader
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setClientData(null);
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const fetchClientData = async (uid) => {
    try {
      const docRef = doc(db, "clients", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setClientData(docSnap.data());
        return docSnap.data();
      } else {
        const newClientData = {
          name: "Default Name",
          clinicName: "Default Clinic",
          location: "Default Location",
          contact: "0000000000",
          images: [], // <-- Add this if you use image upload later
        };
        await setDoc(docRef, newClientData);
        setClientData(newClientData);
        return newClientData;
      }
    } catch (error) {
      console.error("Error fetching client data:", error);
      setMessage("Error fetching data. Please try again.");
      return null;
    }
  };

  return (
    <div className="login-container">
      {!user ? (
        <div className="login-box">
          <h2>Admin Login</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          {loading && (
            <div className="loader"></div> // Optional: loader animation div
          )}
          {message && <p className="message">{message}</p>}
        </div>
      ) : (
        <div className="client-dashboard">
          <h2>Welcome, {clientData?.name || "Client"}</h2>
          <p>
            <strong>Clinic Name:</strong> {clientData?.clinicName || "N/A"}
          </p>
          <p>
            <strong>Location:</strong> {clientData?.location || "N/A"}
          </p>
          <p>
            <strong>Contact:</strong> {clientData?.contact || "N/A"}
          </p>
          <button onClick={() => navigate("/upload-image")}>
            Upload Image
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientLogin;

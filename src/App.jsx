import React from "react";
import Header from "./components/header/Header";
import Home from "./components/HomePage/Home";
import Service from "./components/service/ClientLogin.jsx";
import ClientLogin from "./components/service/ClientLogin.jsx";
import ImageUploading from "./components/service/ImageUploading.jsx";
import ImageShow from "./components/service/ImageShow.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Head,
  Neck,
  Shoulder,
  Back,
  Wrist,
  Hip,
  Foot,
  Ankle,
  Knee,
  Elbow,
  Hand,
} from "./components/HomePage/body_part/Parts";
import ImgGallery from "./components/HomePage/ImgGallery.jsx";
import ClintDetails from "./components/doctors/ClintDetails.jsx";
import Footer from "./components/footer/Footer.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/client-login", //  Client login page route
      element: <ClientLogin />,
    },
    {
      path: "/upload-image", //  Image uploading page route
      element: <ImageUploading />,
    },
    {
      path: "/imgUploding", //  Image uploading page route
      element: <ImgGallery />,
    },
    {
      path: "/clintDetails",
      element: <ClintDetails />,
    },
    {
      path: "/head",
      element: (
        <div>
          <Header />
          <Head />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/neck",
      element: (
        <div>
          <Header />
          <Neck />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/shoulder",
      element: (
        <div>
          <Header />
          <Shoulder />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/back",
      element: (
        <div>
          <Header />
          <Back />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/wrist",
      element: (
        <div>
          <Header />
          <Wrist />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/hip",
      element: (
        <div>
          <Header />
          <Hip />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/foot",
      element: (
        <div>
          <Header />
          <Foot />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/hand",
      element: (
        <div>
          <Header />
          <Hand />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/elbow",
      element: (
        <div>
          <Header />
          <Elbow />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/knee",
      element: (
        <div>
          <Header />
          <Knee />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/ankle",
      element: (
        <div>
          <Header />
          <Ankle />
          <Footer/>
        </div>
      ),
    },
    {
      path: "/service",
      element: <Service />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true, // ✅ Add this flag
    },
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import React from "react";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <MDBFooter className="bg-secondary bg-gray-800 text-gray-200 text-center text-md-start">
        <MDBContainer className="p-5">
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-4">
              <MDBRow className="flex mb-4">
                <MDBCol className="flex justify-start   w-1/2">
                  <ul className="list-unstyled ">
                    <li className="m-5">
                      <a href="#!">
                        <FaInstagram className="size-10 rounded-xl  hover:bg-gray-900 p-1" />
                      </a>
                    </li>
                    <li className="m-5">
                      <a href="https://www.facebook.com/anuj.kumae.581">
                        <FaFacebook className="size-10 rounded-full hover:bg-gray-900 p-1" />
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol
                  className="flex 
                justify-end w-1/2"
                >
                  <ul className="list-unstyled mb-0">
                    <li className="m-5">
                      <a href="#!">
                        <FaTelegram className="size-10 rounded-full hover:bg-gray-900 p-1" />
                      </a>
                    </li>
                    <li className="m-5">
                      <a href="#!">
                        <MdEmail className="size-10 rounded-md hover:bg-gray-900 p-1" />
                      </a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-2 mb-md-0">
              <ul className="list-unstyled mb-1">
                <li>
                  <a
                    href="https://www.google.com/maps/@26.848692,80.9425127,10z?authuser=0&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
                    className="text-white"
                  >
                    Find location
                  </a>
                </li>
                {/* <li>
                  <NavLink to="/service" className="text-white">
                    Services
                  </NavLink>
                </li> */}
                <li>
                  <a href="#!" className="text-white">
                    OrthoHealth
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Therapy
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;

import React, { useState } from "react";
import Service from "../service/ClientLogin";
import logo from "../../assets/anuj.jpg";
import { MdHealthAndSafety, MdWhatsapp } from "react-icons/md";

import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function Header() {
  const Doctors = [
    {
      name: "Dr Anuj Saini",
      description: "Get a better understanding of your Health",
      href: "/clintDetails",
      icon: MdHealthAndSafety,
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className=" bg-green-500 h-22 shadow-sm">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        >
          {/* ...Logo...................................... */}
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company Logo</span>
              <img alt="" src={logo} className="size-16 rounded-full" />
            </NavLink>
            <MdWhatsapp className="size-10 mt-2 ml-5 cursor-pointer" />
            <div className="mt-3 ml-2">+91 7800965593</div>
          </div>
          {/* ....................................................... */}

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
            >
              <span className="sr-only">Open main menu Icon</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* ....Big screen nevbar,............................ */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Locations
            </a>
        
            <NavLink
              to="/ImgUploding"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Images
            </NavLink>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact
            </a>
          </PopoverGroup>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to="/Service"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
          {/* .......................................................... */}
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel
            className="mt-10 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100
       px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company Logo</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-800"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-7 flow-root">
              <div className="-my-6 divide-y divide-gray-600/10">
                <div className="space-y-2 py-6">

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                  >
                    Locations
                  </a>
                  <NavLink
                    to="/UserProfile"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                  >
                    Services
                  </NavLink>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                  >
                    Therapy
                  </a>
                  <div className="py-1">
                    <NavLink
                      to="/ImgUploding"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                    >
                      Images
                    </NavLink>
                  </div>

                  <div className="py-1">
                    <NavLink
                      to="/Service"
                      className="-mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-green-500"
                    >
                      Admin
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
export default Header;

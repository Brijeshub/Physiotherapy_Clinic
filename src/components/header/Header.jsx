import React, { useState } from "react";
import Service from "../service/ClientLogin";
import logo from "../../assets/anuj.jpg";
import { MdHealthAndSafety, MdWhatsapp } from "react-icons/md";
// import UserProfile from "../doctors/UserProfile";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
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
            {/* <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                Doctors
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {Doctors.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <NavLink
                          to="/ClintDetails"
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </NavLink>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover> */}

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Locations
            </a>
            {/* <NavLink
              to="/UserProfile"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              User-Profile
            </NavLink> */}
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
                  {/* <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300">
                      Doctors
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...Doctors].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure> */}

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
                  {/* <NavLink
                    to="/UserProfile"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300"
                  >
                    User-Profile
                  </NavLink> */}
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

import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

import { useContext, useState } from "react";
import { DummyAuthCtx } from "../store_/dummyAuthContext";
export default function MainNavigation() {
  const { isLogged } = useContext(DummyAuthCtx);
  const [nav, setNav] = useState(false);
  // const isLogged = false;
  const handleClick = () => {
    setNav(!nav);

    console.log(nav);
  };

  return (
    <header className=" bg-primary-light ">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <NavLink className="block text-teal-600" to="/my-assetify">
          <span className="sr-only">Home</span>
          <img className="h-8" src={Logo}></img>
        </NavLink>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <MainNavElement to="/my-assetify/assets">
                {" "}
                العقارات{" "}
              </MainNavElement>
              <MainNavElement to="/my-assetify/about"> حول </MainNavElement>
              <MainNavElement to="programs">
                برامج الجنسية لدى اسيستفاي
              </MainNavElement>
              <MainNavElement to="/my-assetify/sale"> البيع </MainNavElement>
              <MainNavElement to="/my-assetify/more"> المزيد </MainNavElement>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {isLogged ? (
                <NavLink
                  className="text-s block rounded-md border border-primary-dark px-5 py-1.5  font-bold text-primary-dark transition hover:bg-primary-dark   hover:text-primary-light  "
                  to="/my-assetify/logout"
                >
                  تسجيل الخروج
                </NavLink>
              ) : (
                <NavLink
                  className="block rounded-md border border-primary-dark px-5 py-1.5 text-xs font-bold  text-primary-dark transition hover:bg-primary-dark hover:text-primary-light   md:text-sm  "
                  to="/my-assetify/login"
                >
                  سجل الدخول
                </NavLink>
              )}

              <NavLink
                className="text-s hidden rounded-md bg-primary-dark px-5 py-1.5  font-bold text-secondary-accent transition hover:text-teal-600/75 sm:block"
                to="/my-assetify/start"
              >
                ابدأ
              </NavLink>
            </div>

            <button
              onClick={handleClick}
              id="hamburger-menu"
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <ul
              className={
                !nav
                  ? "hidden"
                  : "fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-between bg-primary-light py-24 "
              }
            >
              <li onClick={handleClick} className="text-4xl">
                &times;
              </li>
              <MainNavElement onClick={handleClick} to="/my-assetify/assets">
                {" "}
                العقارات{" "}
              </MainNavElement>
              <MainNavElement onClick={handleClick} to="/my-assetify/about">
                {" "}
                حول{" "}
              </MainNavElement>
              <MainNavElement onClick={handleClick} to="/my-assetify/programs">
                برامج الجنسية لدى اسيستفاي
              </MainNavElement>
              <MainNavElement onClick={handleClick} to="/my-assetify/sale">
                {" "}
                البيع{" "}
              </MainNavElement>
              <MainNavElement onClick={handleClick} to="/my-assetify/more">
                {" "}
                المزيد{" "}
              </MainNavElement>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

function MainNavElement({ to, children, onClick }) {
  return (
    <li
      onClick={onClick}
      className="text-xl text-primary-dark  transition hover:text-primary-darker"
    >
      <NavLink
        className={({ isActive }) => (isActive ? "  font-bold" : "")}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

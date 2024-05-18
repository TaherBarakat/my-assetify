import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
export default function MainNavigation() {
  return (
    <header className=" bg-primary-light ">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <NavLink className="block text-teal-600" to="/">
          <span className="sr-only">Home</span>
          <img className="h-8" src={Logo}></img>
        </NavLink>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <MainNavElement to="/assets"> العقارات </MainNavElement>
              <MainNavElement to="/about"> حول </MainNavElement>
              <MainNavElement to="/programs">
                برامج الجنسية لدى اسيستفاي
              </MainNavElement>
              <MainNavElement to="sale"> البيع </MainNavElement>
              <MainNavElement to="/more"> المزيد </MainNavElement>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <NavLink
                className="text-s block rounded-md border border-primary-dark px-5 py-1.5  font-bold text-primary-dark transition hover:bg-primary-dark   hover:text-primary-light  "
                to="/login"
              >
                سجل الدخول
              </NavLink>

              <NavLink
                className="text-s hidden rounded-md bg-primary-dark px-5 py-1.5  font-bold text-secondary-accent transition hover:text-teal-600/75 sm:block"
                to="/start"
              >
                ابدأ
              </NavLink>
            </div>

            <button
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
          </div>
        </div>
      </div>
    </header>
  );
}

function MainNavElement({ to, children }) {
  return (
    <li className="text-xl text-primary-dark  transition hover:text-primary-darker">
      <NavLink
        className={({ isActive }) => (isActive ? "  font-bold" : "")}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

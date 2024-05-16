import Logo from "../assets/logo.svg";
export default function Header() {
  return (
    <header className=" bg-primary-light ">
      <div className="mx-auto flex h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <img className="h-8" src={Logo}></img>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-xl text-primary-dark  transition hover:text-primary-darker"
                  href="#"
                >
                  {" "}
                  العقارات{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-xl  text-primary-dark transition hover:text-primary-darker"
                  href="#"
                >
                  {" "}
                  حول{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-xl text-primary-dark  transition hover:text-primary-darker"
                  href="#"
                >
                  {" "}
                  برامج الجنسية لدى اسيستفاي{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-xl  text-primary-dark transition hover:text-primary-darker"
                  href="#"
                >
                  {" "}
                  البيع{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-xl  text-primary-dark transition hover:text-primary-darker"
                  href="#"
                >
                  {" "}
                  المزيد{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="text-s block rounded-md border border-primary-dark px-5 py-1.5  font-bold text-primary-dark transition hover:bg-primary-dark   hover:text-primary-light  "
                href="#"
              >
                سجل الدخول
              </a>

              <a
                className="text-s hidden rounded-md bg-primary-dark px-5 py-1.5  font-bold text-secondary-accent transition hover:text-teal-600/75 sm:block"
                href="#"
              >
                ابدأ
              </a>
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

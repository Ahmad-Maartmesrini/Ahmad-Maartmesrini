import "./header.css";

const Header = () => {
  function showSidbar():
    | import("react").MouseEventHandler<HTMLAnchorElement>
    | undefined {
    const sidbar = document.querySelector(".sidbar") as HTMLElement;
    if (sidbar) sidbar.style.display = "flex";
    return;
  }

  function hideSidebar():
    | import("react").MouseEventHandler<HTMLAnchorElement>
    | undefined {
    const sidbar = document.querySelector(".sidbar") as HTMLElement;
    if (sidbar) sidbar.style.display = "none";
    return;
  }

  return (
    <div className="">
      <nav>
        <ul className="sidbar">
          <li>
            <a onClick={hideSidebar} className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </a>
          </li>
          <li>
            <a onClick={hideSidebar} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={hideSidebar} href="#projects">
              Work
            </a>
          </li>
          <li>
            <a onClick={hideSidebar} href="#card">
              Let's Talk
            </a>
          </li>
        </ul>
        <ul>
          <li className="logo">
            <a href="https://ahmadmaartmesrini.vercel.app">AM</a>
          </li>
          <li className="hideOnMobile">
            <a href="#home">Home</a>
          </li>
          <li className="hideOnMobile">
            <a href="#projects">Portfolio</a>
          </li>
          <li className="hideOnMobile">
            <a href="#card">Let's Talk</a>
          </li>
          <li>
            <a className="mnueIcon svg" onClick={showSidbar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

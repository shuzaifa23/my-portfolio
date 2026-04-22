import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">

        <div className="navbar-left">
           HUZAIFA
        </div>

        <div className="navbar-center">
          <a href="mailto:shuzaifasamee@gmail.com">
            shuzaifasamee@gmail.com
          </a>
        </div>

        <div className="navbar-right">
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT</a>
        </div>
      </div>

        <div className="landing-circle1"></div>
        <div className="landing-circle2"></div>
        <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;

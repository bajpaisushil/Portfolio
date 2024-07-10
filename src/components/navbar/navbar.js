

function Navbar(){
    return (
      <nav className="navbar bg-dark ">
      <input id="nav-toggle" type={"checkbox"} />
        <div className="logoTop"><a className="navlinkList" href="#homePage"> SB </a></div>
          <ul className="navbarLinks">
            <li><a className="navlinkList" href="#aboutPage"> About </a></li>
            <li><a className="navlinkList" href="#skillsPage"> Skills </a></li>
            <li><a className="navlinkList" href="#educationPage"> Education </a></li>
            <li><a className="navlinkList" href="#projectPage"> Projects </a></li>
            <li><a className="navlinkList" href="#achievementPage"> Achievements </a></li>
          </ul>
          <label htmlFor="nav-toggle" className="icon-burger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
    )
}

export default Navbar;
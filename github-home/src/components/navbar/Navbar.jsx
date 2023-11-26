import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import "./styles.scss";
import { HiMenu } from "react-icons/hi";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="navbar">
      <nav className="nav-links">
        <a className="nav-logo">
          <BsGithub className="github-icon" />
        </a>
        <a href="#" className="nav-link">
          Product <GoChevronDown />
        </a>
        <a href="#" className="nav-link">
          Solutions <GoChevronDown />
        </a>
        <a href="#" className="nav-link">
          Open Source <GoChevronDown />
        </a>
        <a href="#" className="nav-link">
          Pricing
        </a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search or jump to..." />
        <button className="sign-in-btn">Sign in</button>
        <button className="sign-up-btn">Sign up</button>
      </div>
      <span className="hamburger-menu" onClick={toggleMenu}>
        <HiMenu className="hamburger-menu" />
      </span>
    </header>
  );
};

export default Navbar;

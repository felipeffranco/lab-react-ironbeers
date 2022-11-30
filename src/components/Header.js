import React from "react";
import { NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
 
function Navbar() {
  return (
    <nav className="menu">
      <NavLink to="/">
        <button onClick={() => {
          console.log("Clicou!")
        }}>
          <HiHome />
        </button>
      </NavLink>
    </nav>
  );
}
 
export default Navbar;
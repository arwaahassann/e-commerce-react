import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${isActive ? "text-red-600" : "text-gray-500 hover:text-black"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-lg font-medium transition-colors ${isActive ? "text-red-600" : "text-gray-500 hover:text-black"}`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-gray-500"
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-red-600" : "text-gray-500"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;

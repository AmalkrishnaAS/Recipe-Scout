import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.freepnglogos.com/uploads/coffee-logo-png/vector-coffee-face-logo-download-food-drinks-24.png"
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top mx-3"
            />
            RecipeScout
          </a>
          
        </div>
      </nav>
    </div>
  );
}

import React from "react";
import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto bg-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <input
            className="py-2 px-3"
            placeholder="search"
            type="text"
            name=""
            id=""
          />
          <button className="btn btn-primary">search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

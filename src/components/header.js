/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import user from "../images/user.png";
import "./header.css";
import { Link } from "react-router-dom";

// import { Breakfast } from "./breakfast";
import { useNavigate } from "react-router-dom";
// import { Breakfast } from "./breakfast";
export const Header = () => {
    const navigate =useNavigate();

    return (
        <><div className="header">
            <Link to="/">
                <div className="logo">Food App</div>
            </Link>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item"  onClick={() => navigate("/breakfast")}>Breakfast </a></li>
                    <li><a class="dropdown-item"  onClick={() =>navigate("/breakfast")}>Lunch</a></li>
                    <li><a class="dropdown-item"  onClick={() => navigate("/breakfast")}>Dinner</a></li>
                    <li><a class="dropdown-item"  onClick={() => navigate("/breakfast")}>Beverages</a></li>
                </ul>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
        <div>
        {/* <Breakfast foodList={filterdItem}/> */}
        </div>
        </>
    )
}


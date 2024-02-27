import React from "react"
import Logo from "../assets/airbnb-logo.png"

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="AirBnB logo" className="header-logo" />
        </div>
    )
}

export default Header

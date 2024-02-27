import React from "react"
import PhotoGrid from "../assets/photo-grid.png"

function MainContent() {
    return (
        <div className="main-content">
            <img src={PhotoGrid} alt="photo grid" className="main-photo" />
            <div className="main-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}

export default MainContent
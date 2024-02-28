import React from "react"
import Star from "../assets/star.png"

function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <div className="card-image-text">
                    <p>SOLD OUT</p>
                </div>
            </div>
            <div className="card-text">
                <div className="card-text-top">
                    <img src={Star} alt="star" />
                    <span>5.0</span>
                    <p>(6) · USA</p>
                </div>
                <h2 className="card-text-mid">LIfe lessons with Katie Zaferes</h2>
                <h3 className="card-text-bot">
                    <span>From $136</span>
                    <p>/person</p>
                </h3>
            </div>
        </div>
    )
}

export default Card
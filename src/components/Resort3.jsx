import React from "react"
import logo10 from "../pictures/resort10.jpg"
import logo11 from "../pictures/resort11.jpg"
import logo6 from "../pictures/resort6.webp"

const Resort3 = () => {
  return (
    <div className="details-container">
      <h1 className="title">Dhola Ri Dhani</h1>

      <div className="image-gallery">
        <img src={logo10} alt="Dhola Ri Dhani 1" className="no-underline-img" />
        <img src={logo11} alt="Dhola Ri Dhani 2" className="no-underline-img" />
        <img src={logo6} alt="Dhola Ri Dhani 3" className="no-underline-img" />
      </div>

      <div className="details-content">
        <p>Enjoy traditional experience at Dhola Ri Dhani.</p>
        <h3>Price: ₹700 per adult</h3>
        <h4>⭐⭐⭐⭐ 404 Ratings</h4>
      </div>

      <div className="availability">
        <h2>Check Availability</h2>
        <input type="date" />
        <input type="number" placeholder="Guests" />
        <button className="check-btn">Check</button>
      </div>
    </div>
  )
}

export default Resort3

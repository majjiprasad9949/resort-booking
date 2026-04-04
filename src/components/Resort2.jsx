import React from "react"
import logo7 from '../pictures/resort7.webp'
import logo8 from '../pictures/resort8.jpg'
import logo9 from "../pictures/resort9.jpg"

const Resort2 = () => {
  return (
    <div className="details-container">
      <h1 className="title">Dream Valley Resort</h1>

      <div className="image-gallery">
        <img src={logo7} alt="Dream Valley Resort 1" className="no-underline-img" />
        <img src={logo8} alt="Dream Valley Resort 2" className="no-underline-img" />
        <img src={logo9} alt="Dream Valley Resort 3" className="no-underline-img" />
      </div>

      <div className="details-content">
        <p>Enjoy a peaceful day at Dream Valley Resort.</p>
        <h3>Price: ₹1399 per adult</h3>
        <h4>⭐⭐⭐⭐ 3795 Ratings</h4>
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

export default Resort2

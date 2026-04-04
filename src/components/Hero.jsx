import React from 'react'
import logo1 from '../pictures/resort.png'
import logo2 from '../pictures/resort1.webp'
import logo3 from '../pictures/resort2.webp'
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <div className='middle'>
        <h2>Hyderabad Resorts</h2>
        <p>
          Mount Opera Resort, Lahari Resort, Golconda Resort, Celebrity Holiday Retreat,
          Button Eyes Resort, Vivanta Resort, Leonia Holistic Resort, Pragati Resort,
          Ragala Resort, Songs of Earth Resort, Palm Exotica Resort and many more.
        </p>
        <p>
          Offering the right break away from the 9-5 monotonous life, the Hyderabad resorts
          have an unusual contrast of comfort and opulence, making the stay with your
          friends and family worth every penny. Not just a mere abode these places have
          more to unveil and create memories that will last forever.
        </p>
      </div>

      <div className='card-container'>
        <div className='card'>
          <div className='card-image'>
            <img src={logo1} alt="Leonia Resort" />
          </div>
          <div className='card-content'>
            <h5>⭐⭐⭐⭐ 94 Ratings</h5>
            <h2>Leonia Resort Hyderabad Day Out</h2>
            <p>₹ 1699.00 per adult</p>
            <button onClick={() => navigate("/resort")}>Book Now</button>
          </div>
        </div>

        <div className='card'>
          <div className='card-image'>
            <img src={logo2} alt="Dream Valley Resort" />
          </div>
          <div className='card-content'>
            <h5>⭐⭐⭐⭐ 3795 Ratings</h5>
            <h2>Dream Valley Resorts</h2>
            <p>₹ 1399.00 per adult</p>
            <button onClick={() => navigate("/resort2")}>Book Now</button>
          </div>
        </div>

        <div className='card'>
          <div className='card-image'>
            <img src={logo3} alt="Dhola Ri Dhani" />
          </div>
          <div className='card-content'>
            <h5>⭐⭐⭐⭐ 404 Ratings</h5>
            <h2>Dhola Ri Dhani Hyderabad Day Out</h2>
            <p>₹ 700.00 per adult</p>
            <button onClick={() => navigate("/resort3")}>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

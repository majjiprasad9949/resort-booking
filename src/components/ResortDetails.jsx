import React, { useState } from "react"
import logo4 from '../pictures/resort4.png'
import logo5 from "../pictures/resort5.webp"
import logo6 from "../pictures/resort6.webp"

const ResortDetails = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [guests, setGuests] = useState("")
  const [result, setResult] = useState(null)

  const handleCheckAvailability = () => {
    if (!selectedDate || !guests) {
      alert("Please select a date and enter number of guests")
      return
    }

    setResult({
      date: selectedDate,
      guests: guests,
      available: true
    })
  }

  return (
    <div className="details-container">
      <h1 className="title">Leonia Resort Hyderabad</h1>

      <div className="image-gallery">
        <img src={logo4} alt="Leonia Resort 1" className="no-underline-img" />
        <img src={logo5} alt="Leonia Resort 2" className="no-underline-img" />
        <img src={logo6} alt="Leonia Resort 3" className="no-underline-img" />
      </div>

      <div className="details-content">
        <p>
          Enjoy a relaxing day at Leonia Resort with luxurious pool access,
          delicious food, indoor & outdoor games, and a peaceful environment.
        </p>

        <h3>Price: ₹1699 per adult</h3>
        <h4>⭐⭐⭐⭐ 94 Ratings</h4>
      </div>

      <div className="availability">
        <h2>Check Availability</h2>

        <label>Select Date:</label>
        <input 
          type="date" 
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <label>Guests:</label>
        <input 
          type="number" 
          placeholder="Enter number of people"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />

        <button className="check-btn" onClick={handleCheckAvailability}>
          Check
        </button>

        {result && (
          <div style={{marginTop: '20px', padding: '15px', backgroundColor: '#e8f5e9', borderRadius: '5px'}}>
            <h3 style={{color: '#2e7d32'}}>✓ Available!</h3>
            <p><strong>Date:</strong> {result.date}</p>
            <p><strong>Guests:</strong> {result.guests} people</p>
            <p><strong>Total Price:</strong> ₹{1699 * result.guests}</p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>
              Book Now
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResortDetails
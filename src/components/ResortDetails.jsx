import React, { useState } from "react"
import logo4 from '../pictures/resort4.png'
import logo5 from "../pictures/resort5.webp"
import logo6 from "../pictures/resort6.webp"

const ResortDetails = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [guests, setGuests] = useState("")
  const [result, setResult] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")

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

  const amenities = [
    { icon: "🏊", name: "Swimming Pool", description: "Olympic-size pool" },
    { icon: "🍽️", name: "Restaurant", description: "Multi-cuisine dining" },
    { icon: "🎮", name: "Games", description: "Indoor & outdoor sports" },
    { icon: "📶", name: "Free WiFi", description: "High-speed internet" },
    { icon: "🧖", name: "Spa", description: "Relaxation services" },
    { icon: "🎭", name: "Entertainment", description: "Live shows & events" }
  ]

  const reviews = [
    { author: "Priya Sharma", rating: 5, text: "Amazing experience! Staff was very friendly and facilities were excellent." },
    { author: "Rahul Patel", rating: 4, text: "Great resort. Food quality was good but could be improved. Overall satisfying." },
    { author: "Sarah Khan", rating: 5, text: "Perfect for family. Kids loved the games and pool. Will definitely come back!" }
  ]

  const whatToBring = [
    { icon: "👕", text: "Swimming Costume" },
    { icon: "🧴", text: "Sunscreen Lotion" },
    { icon: "👟", text: "Comfortable Shoes" },
    { icon: "🕶️", text: "Sunglasses" },
    { icon: "🧢", text: "Cap or Hat" },
    { icon: "🎒", text: "Light Backpack" }
  ]

  return (
    <div>
      <div className="details-container">
        <h1>Leonia Resort Hyderabad</h1>

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
      </div>

      {/* Tabs */}
      <div className="details-tabs">
        <button 
          className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`tab-button ${activeTab === 'amenities' ? 'active' : ''}`}
          onClick={() => setActiveTab('amenities')}
        >
          Amenities
        </button>
        <button 
          className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="tab-content active">
          <div className="description-content">
            <h3>About Leonia Resort</h3>
            <p>
              Enjoy a relaxing day at Leonia Resort with luxurious pool access, delicious food, 
              indoor & outdoor games, and a peaceful environment. Experience the perfect getaway 
              from your busy schedule with all the amenities you need for a memorable day out.
            </p>

            <h3>What's Included</h3>
            <ul>
              <li>Entry to the resort for the entire day</li>
              <li>Access to all swimming pools and water facilities</li>
              <li>Complimentary lunch with vegetarian & non-vegetarian options</li>
              <li>Hi-tea with snacks in the afternoon</li>
              <li>Access to indoor and outdoor games</li>
              <li>Free WiFi throughout the resort</li>
              <li>Parking facilities</li>
            </ul>

            <h3>Best Time to Visit</h3>
            <p>
              October to March is the best time to visit Leonia Resort when the weather is pleasant. 
              Weekdays are less crowded, making it ideal for a peaceful getaway with your family.
            </p>

            {/* What to Bring Section */}
            <div className="info-section">
              <h3>What to Bring</h3>
              <div className="info-grid">
                {whatToBring.map((item, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon">{item.icon}</div>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes Section */}
            <div className="important-notes">
              <h3>⚠️ Important Information</h3>
              <ul>
                <li>Valid photo ID required at entry</li>
                <li>Children below 3 years are free</li>
                <li>Swimming costume is compulsory for pool access</li>
                <li>Outside food is not allowed</li>
                <li>Resort timings: 9:00 AM - 6:00 PM</li>
                <li>Last entry: 3:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Amenities Tab */}
      {activeTab === 'amenities' && (
        <div className="tab-content active">
          <div className="amenities-grid">
            {amenities.map((amenity, index) => (
              <div key={index} className="amenity-item">
                <div className="amenity-icon">{amenity.icon}</div>
                <h4>{amenity.name}</h4>
                <p>{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Tab */}
      {activeTab === 'reviews' && (
        <div className="tab-content active">
          <div className="reviews-section">
            {reviews.map((review, index) => (
              <div key={index} className="review-item">
                <div className="review-header">
                  <div>
                    <div className="review-author">{review.author}</div>
                    <div className="review-date">2 weeks ago</div>
                  </div>
                  <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking Section */}
      <div className="availability" style={{ maxWidth: '500px', margin: '40px auto' }}>
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
          <div className="availability-result">
            <h3>✓ Available!</h3>
            <p><strong>Date:</strong> {result.date}</p>
            <p><strong>Guests:</strong> {result.guests} people</p>
            <p><strong>Total Price:</strong> ₹{1699 * result.guests}</p>
            <button>Book Now</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResortDetails
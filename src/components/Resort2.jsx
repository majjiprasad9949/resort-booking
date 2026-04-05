import React, { useState } from "react"
import logo7 from '../pictures/resort7.webp'
import logo8 from '../pictures/resort8.jpg'
import logo9 from "../pictures/resort9.jpg"

const Resort2 = () => {
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
    { icon: "🏞️", name: "Scenic Valley", description: "Breathtaking views" },
    { icon: "🏊", name: "Swimming Pool", description: "Olympic-size pool" },
    { icon: "🎯", name: "Adventure Sports", description: "Rock climbing & zip-lining" },
    { icon: "🎪", name: "Entertainment", description: "Cultural shows & events" },
    { icon: "🍽️", name: "Gourmet Dining", description: "Multi-cuisine restaurant" },
    { icon: "📶", name: "Free WiFi", description: "High-speed internet" }
  ]

  const reviews = [
    { author: "Amit Kumar", rating: 5, text: "Fantastic resort with amazing views. Staff is very helpful and friendly." },
    { author: "Neha Singh", rating: 5, text: "Best adventure resort in Hyderabad. Worth every penny!" },
    { author: "Vikram Reddy", rating: 4, text: "Great experience overall. Food could be better but activities were fantastic." }
  ]

  return (
    <div>
      <div className="details-container">
        <h1>Dream Valley Resort</h1>

        <div className="image-gallery">
          <img src={logo7} alt="Dream Valley Resort 1" className="no-underline-img" />
          <img src={logo8} alt="Dream Valley Resort 2" className="no-underline-img" />
          <img src={logo9} alt="Dream Valley Resort 3" className="no-underline-img" />
        </div>

        <div className="details-content">
          <p>
            Enjoy a peaceful day at Dream Valley Resort with stunning views and world-class amenities.
            Perfect for adventure seekers and nature lovers.
          </p>
          <h3>Price: ₹1399 per adult</h3>
          <h4>⭐⭐⭐⭐ 3795 Ratings</h4>
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
            <h3>About Dream Valley Resort</h3>
            <p>
              Dream Valley Resort is nestled in nature's lap with breathtaking views and world-class amenities.
              Perfect for family outings, corporate events, and group picnics. Experience adventure and relaxation
              in one beautiful location.
            </p>

            <h3>What's Included</h3>
            <ul>
              <li>Resort entry and parking</li>
              <li>Unlimited pool access</li>
              <li>Lunch with beverages</li>
              <li>Access to all adventure activities</li>
              <li>Entertainment shows and events</li>
              <li>Free WiFi connectivity</li>
            </ul>

            <h3>Best Time to Visit</h3>
            <p>
              October to February is ideal for visiting Dream Valley Resort. The weather is pleasant and perfect
              for outdoor adventure activities. Book in advance for better rates.
            </p>

            {/* What to Bring Section */}
            <div className="info-section">
              <h3>What to Bring</h3>
              <div className="info-grid">
                <div className="info-item"><div className="info-icon">👕</div><p>Casual Clothes</p></div>
                <div className="info-item"><div className="info-icon">🧴</div><p>Sunscreen Lotion</p></div>
                <div className="info-item"><div className="info-icon">👟</div><p>Trekking Shoes</p></div>
                <div className="info-item"><div className="info-icon">💧</div><p>Water Bottle</p></div>
                <div className="info-item"><div className="info-icon">🕶️</div><p>Sunglasses</p></div>
                <div className="info-item"><div className="info-icon">📸</div><p>Camera</p></div>
              </div>
            </div>

            {/* Important Notes Section */}
            <div className="important-notes">
              <h3>⚠️ Important Information</h3>
              <ul>
                <li>Valid ID required at entry</li>
                <li>Children (3-12 years) get 50% discount</li>
                <li>Adventure activities have additional charges</li>
                <li>Proper footwear required for trek activities</li>
                <li>Resort timings: 8:00 AM - 7:00 PM</li>
                <li>Advance booking is recommended</li>
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
                    <div className="review-date">1 week ago</div>
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
            <p><strong>Total Price:</strong> ₹{1399 * result.guests}</p>
            <button>Book Now</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Resort2
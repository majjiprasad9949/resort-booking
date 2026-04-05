import React, { useState } from "react"
import logo10 from "../pictures/resort10.jpg"
import logo11 from "../pictures/resort11.jpg"
import logo6 from "../pictures/resort6.webp"

const Resort3 = () => {
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
    { icon: "🎭", name: "Cultural Shows", description: "Rajasthani folk dances" },
    { icon: "🍲", name: "Traditional Food", description: "Authentic Rajasthani cuisine" },
    { icon: "🏺", name: "Heritage Architecture", description: "Traditional havelis" },
    { icon: "🎨", name: "Craft Workshops", description: "Learn traditional crafts" },
    { icon: "🐪", name: "Camel Rides", description: "Experience desert rides" },
    { icon: "🎪", name: "Entertainment", description: "Traditional games & shows" }
  ]

  const reviews = [
    { author: "Aisha Patel", rating: 5, text: "Amazing cultural experience! The food was delicious and authentic." },
    { author: "Ravi Nair", rating: 5, text: "Perfect for experiencing Rajasthani culture. Family loved it!" },
    { author: "Deepa Verma", rating: 4, text: "Great place to learn about traditions. Worth visiting at least once." }
  ]

  return (
    <div>
      <div className="details-container">
        <h1>Dhola Ri Dhani</h1>

        <div className="image-gallery">
          <img src={logo10} alt="Dhola Ri Dhani 1" className="no-underline-img" />
          <img src={logo11} alt="Dhola Ri Dhani 2" className="no-underline-img" />
          <img src={logo6} alt="Dhola Ri Dhani 3" className="no-underline-img" />
        </div>

        <div className="details-content">
          <p>
            Experience the authentic charm and vibrant culture of Rajasthan at Dhola Ri Dhani.
            A perfect blend of history, culture, and entertainment.
          </p>
          <h3>Price: ₹700 per adult</h3>
          <h4>⭐⭐⭐⭐ 404 Ratings</h4>
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
            <h3>About Dhola Ri Dhani</h3>
            <p>
              Dhola Ri Dhani celebrates the rich heritage of Rajasthan with traditional décor,
              authentic cuisine, and cultural performances. Experience the vibrant culture and
              hospitality of Rajasthan in a unique setting.
            </p>

            <h3>What's Included</h3>
            <ul>
              <li>Entry to the resort</li>
              <li>Traditional Rajasthani dinner</li>
              <li>All cultural shows and performances</li>
              <li>Access to craft demonstration zones</li>
              <li>Photography opportunities</li>
              <li>Traditional welcome and hospitality</li>
            </ul>

            <h3>Best Time to Visit</h3>
            <p>
              The resort is open 4:00 PM to 11:00 PM daily. Evening visit is best to enjoy
              the cultural performances and traditional dinner. Weekends are more crowded.
              Weekdays offer a more peaceful experience.
            </p>

            {/* What to Bring Section */}
            <div className="info-section">
              <h3>What to Bring</h3>
              <div className="info-grid">
                <div className="info-item"><div className="info-icon">👗</div><p>Traditional Attire</p></div>
                <div className="info-item"><div className="info-icon">📷</div><p>Camera</p></div>
                <div className="info-item"><div className="info-icon">👟</div><p>Comfortable Shoes</p></div>
                <div className="info-item"><div className="info-icon">💧</div><p>Water Bottle</p></div>
                <div className="info-item"><div className="info-icon">🕶️</div><p>Sunglasses</p></div>
                <div className="info-item"><div className="info-icon">🧴</div><p>Sunscreen</p></div>
              </div>
            </div>

            {/* Important Notes Section */}
            <div className="important-notes">
              <h3>⚠️ Important Information</h3>
              <ul>
                <li>Valid ID required for entry</li>
                <li>Timings: 4:00 PM - 11:00 PM</li>
                <li>Children below 3 years are free</li>
                <li>Vegetarian and non-vegetarian food available</li>
                <li>Photography is encouraged</li>
                <li>Book online for better pricing</li>
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
                    <div className="review-date">3 days ago</div>
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
            <p><strong>Total Price:</strong> ₹{700 * result.guests}</p>
            <button>Book Now</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Resort3
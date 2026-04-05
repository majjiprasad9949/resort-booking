import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import logo1 from '../pictures/resort.png'
import logo2 from '../pictures/resort1.webp'
import logo3 from '../pictures/resort2.webp'

const Hero = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [priceFilter, setPriceFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [filteredResorts, setFilteredResorts] = useState(null)

  const allResorts = [
    {
      id: 1,
      name: "Leonia Resort Hyderabad Day Out",
      price: 1699,
      rating: 4.5,
      reviews: 94,
      image: logo1,
      route: "/resort",
      description: "Luxurious pool access with delicious food and games"
    },
    {
      id: 2,
      name: "Dream Valley Resorts",
      price: 1399,
      rating: 4.6,
      reviews: 3795,
      image: logo2,
      route: "/resort2",
      description: "Peaceful resort with adventure activities and scenic views"
    },
    {
      id: 3,
      name: "Dhola Ri Dhani Hyderabad Day Out",
      price: 700,
      rating: 4.7,
      reviews: 404,
      image: logo3,
      route: "/resort3",
      description: "Traditional Rajasthani experience with cultural performances"
    }
  ]

  const handleSearch = () => {
    let results = allResorts

    if (searchTerm.trim()) {
      results = results.filter(resort =>
        resort.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (priceFilter !== "all") {
      if (priceFilter === "budget") {
        results = results.filter(resort => resort.price <= 1000)
      } else if (priceFilter === "mid") {
        results = results.filter(resort => resort.price > 1000 && resort.price <= 1500)
      } else if (priceFilter === "premium") {
        results = results.filter(resort => resort.price > 1500)
      }
    }

    if (ratingFilter !== "all") {
      const minRating = parseFloat(ratingFilter)
      results = results.filter(resort => resort.rating >= minRating)
    }

    setFilteredResorts(results)
  }

  const handleReset = () => {
    setSearchTerm("")
    setPriceFilter("all")
    setRatingFilter("all")
    setFilteredResorts(null)
  }

  const displayedResorts = filteredResorts !== null ? filteredResorts : allResorts

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
          friends and family worth every penny.
        </p>
      </div>

      {/* Search Section */}
      <div className='search-section'>
        <h2>Find Your Perfect Resort</h2>
        <div className='search-container'>
          <div className='search-input-group'>
            <label>Search Resort Name</label>
            <input
              type="text"
              placeholder="e.g., Leonia, Dream Valley..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className='search-input-group'>
            <label>Price Range</label>
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="all">All Prices</option>
              <option value="budget">Budget (₹0 - ₹1000)</option>
              <option value="mid">Mid Range (₹1000 - ₹1500)</option>
              <option value="premium">Premium (₹1500+)</option>
            </select>
          </div>

          <div className='search-input-group'>
            <label>Minimum Rating</label>
            <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
              <option value="all">All Ratings</option>
              <option value="4.0">4.0★ and above</option>
              <option value="4.5">4.5★ and above</option>
              <option value="4.7">4.7★ and above</option>
            </select>
          </div>

          <div className='filter-button-group'>
            <button className='search-btn' onClick={handleSearch}>
              🔍 Search
            </button>
            <button className='reset-btn' onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

        {filteredResorts !== null && (
          <div className='filter-results'>
            Found <strong>{displayedResorts.length}</strong> resort(s)
          </div>
        )}
      </div>

      {/* Resort Cards */}
      {displayedResorts.length > 0 ? (
        <div className='card-container'>
          {displayedResorts.map((resort) => (
            <div key={resort.id} className='card'>
              <div className='card-image'>
                <img src={resort.image} alt={resort.name} />
              </div>
              <div className='card-content'>
                <h5>⭐ {resort.rating} ({resort.reviews} Ratings)</h5>
                <h2>{resort.name}</h2>
                <p style={{ fontSize: '14px', color: '#777', marginBottom: '8px' }}>
                  {resort.description}
                </p>
                <p>₹ {resort.price.toLocaleString()} per adult</p>
                <button onClick={() => navigate(resort.route)}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='no-results'>
          <h3>No Resorts Found</h3>
          <p>Try adjusting your filters</p>
        </div>
      )}
    </div>
  )
}

export default Hero
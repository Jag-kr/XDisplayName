import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFullName(`${firstName} ${lastName}`)
  }

  return (
    <div className="app-container">
      <h1>Full Name Display</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="name-form">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="input-field"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="input-field"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {fullName && (
          <div className="result-container">
            <p className="result-text">
              Your Full Name: <span className="name-display">{fullName}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

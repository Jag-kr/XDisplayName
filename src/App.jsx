import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName.trim() && lastName.trim()) {
      setSubmitted(true)
    }
  }

  const handleReset = () => {
    setFirstName('')
    setLastName('')
    setSubmitted(false)
  }

  return (
    <div className="app-container">
      <h1>Full Name Display</h1>
      
      <div className="form-container">
        {!submitted ? (
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

            <button
              type="submit"
              className="submit-button"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="result-container">
            <p className="result-text">Your name is: <span className="name-display">{firstName} {lastName}</span></p>
            <button
              type="button"
              className="reset-button"
              onClick={handleReset}
            >
              Submit Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

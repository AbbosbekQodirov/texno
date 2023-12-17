import React from 'react'
import "./Services.css"

function Services() {
  return (
    <div className="services">
      <div className="services_left">
        <ul>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
        </ul>
      </div>
      <div className="services_right">
        <form action="">
          <label htmlFor="login">Login:</label>
          <input id="login" type="text" placeholder='login...' />
          <label htmlFor="password">Password:</label>
          <input id="password" type="password" placeholder='password...' />
          <button>login</button>
        </form>
      </div>
    </div>
  );
}

export default Services
import React from 'react';
import '../App.css';

function About({ handleLogout }) {


  return (

    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}></button>
      </nav>
    </section>
  )
}
export default About;
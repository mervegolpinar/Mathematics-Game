import React from 'react'
import '../css/start.css';
import { Link } from 'react-router-dom';

export const Start = () => {

  return (
    <div className='start'>
      <h1>Mathematics Game </h1>
      <h2>Total Score: {localStorage.getItem("TotalScore") != null ? localStorage.getItem("TotalScore"): 0 }</h2>
      <h2>Total Questions: {localStorage.getItem("TotalQuestion") != null ? localStorage.getItem("TotalQuestion"): 0 }</h2>
      <h2>Correct Answers: {localStorage.getItem("TotalAnswer") != null ? localStorage.getItem("TotalAnswer"): 0 }</h2>

      <Link to='/game'
        style={{
          color: 'white', border: '3px solid #FFFFFF', left: '45%', position: 'absolute', borderRadius: '100%', padding: '20px',
          textDecoration: 'none', fontSize: '64px'
        }}
        
      >
        Start
      </Link>

    </div>
  )
}

export default Start;
import React from 'react'

const Activity = () => {
  return (
    <>
    <div className="container flex main-activity-box">
        <div className="activity-left">
        <div className="activity-heading">
            <h2>Log in to see your recent</h2>
            <h2>activity</h2>
        </div>
        <div className="activity-para">
        <p>View past trips, tailored suggestions, support resources, and more.</p>
        </div>
        <div className="activity-btn flex">
            <a href='#' className='act-btn'>Log in to your account</a>
            <a href="#">Don’t have an Uber account? Sign up</a>
        </div>
        </div>
        <div className="activity-right">
            <img src="Airport-Fall.webp" alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Activity

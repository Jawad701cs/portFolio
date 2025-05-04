import React from 'react'
import '../Styles/Logo.css';
function Logo() {
    return (
        <div className='containers' >
            <div id='name'>
                <b>Jawad Yaqoob</b>
            </div>
            <div id='skill'>
              <i> Full Stack Web Developer | ML Enthusiast</i>
            </div>
            <div>
                <img src="/Gallery/favicon.jpg" alt="image" style={{ width: "300px", aspectRatio: "auto" }} />
            </div>
        </div>
    )
}

export default Logo

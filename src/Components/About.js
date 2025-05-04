import React from 'react';
import '../Styles/About.css'; // Make sure this matches your folder structure

function About() {
  return (
    <div className="about-container">
      <h1><u>About Me</u></h1>
      <div className='summary'>
        <h3>Executive Summary</h3>
        <div >
          As a prospective Full Stack Developer with expertise in both web development and machine learning, I bring a strong
          combination of academic knowledge and practical experience to contribute effectively to your team. My background in
          Computer Science fundamentals, along with hands-on experience in Open Source contributions, has equipped me with a
          solid foundation in software engineering. I have worked in both team environments and individually as a freelancer,
          gaining valuable learning experiences that have strengthened my ability to tackle complex challenges across web development and
          machine learning domains.
        </div>
      </div>
      <h3>Education</h3>
      <div className="education-entry">
        <div style={{ display: "flex" }}> <div ><strong>University of Engineering and Technology, Lahore </strong> </div>  <div style={{ marginLeft: "45%" }}> <i> 2021-2025</i></div></div>
        Bachelor of Science in Computer Sciences

      </div>
      <div className="education-entry">
        <div style={{ display: "flex" }}> <div> <strong>Punjab Group of Colleges, Hafizabad</strong></div> <div style={{ marginLeft: "55%" }}> <i>2019-2021</i></div></div>
        FSc Pre-Engineering (Intermediate)
      </div>
    </div>
  );
}

export default About;

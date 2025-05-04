import React from 'react';
import '../Styles/Skills.css'; // Adjust the path based on your folder structure
import {} from 'react-icons/fa'
function Skills() {
  return (
    <div className="skills-container">
      <h1><u>Skills</u></h1>
      <div>
        <h2>Technical Skills</h2>

        <div className="skill-section">
          <b>Languages :</b>
          <ul>
            <li>JavaScript</li>
            <li>C++</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C#</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skill-section">
          <b>Frameworks</b>
          <ul>
            <li>React Js</li>
            <li>Express Js</li>
            <li>.Net</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="skill-section">
          <b>Databases</b>
          <ul>
            <li>MongoDB</li>
            <li>SQL Server</li>
          </ul>
        </div>

        <div className="skill-section">
          <b>Designing Tools</b>
          <ul>
            <li>Figma</li>
            <li>Canva</li>
          </ul>
        </div>

        <div className="skill-section">
          <b>University Core Courses</b>
          <ul>
            <li>Programming Fundamentals</li>
            <li>Object Oriented Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Database Systems</li>
            <li>Data Analysis and Algorithm</li>
            <li>Operating Systems</li>
            <li>Computer Organization and Assembly Language</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

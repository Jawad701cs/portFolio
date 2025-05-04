import React from 'react';
import '../Styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1> <u>Projects</u></h1>

      <h2>Semester Projects</h2>
      <div>
        <div className="project-details">
          <h3>Digital Bazaar</h3>
          <div>Object Oriented Programming, Java, Using Array, Abstraction, Encapsulation, Inheritance, Polymorphism</div>
        </div>
        <div className="project-details">
          <h3>Contact Management System</h3>
          <div>Data Structure and Algorithm, C++ Language Using Array</div>
        </div>
        <div className="project-details">
          <h3>Mess Management System</h3>
          <div>C# Language using Forms, SQL Server</div>
        </div>
        <div className="project-details">
          <h3>Online Banking System</h3>
          <div>HTML, CSS, BootStrap, JavaScript, PHP</div>
        </div>
        <div className="project-details">
          <h3>Auto Correct Tool of Spelling</h3>
          <div>Python</div>
        </div>
        <div className="project-details">
          <h3>Enterprise LMS App</h3>
          <div>C# .Net, WPF Application, SQL Server</div>
        </div>
      </div>

      <h2>Final Year Project</h2>
      <div className="project-details">
        <h3>White Lesions Identification System</h3>
        <div>
          Our Final Year Project was a brilliant and impactful idea designed to assist ophthalmologists in diagnosing retinal diseases. Through this project, our team significantly sharpened their technical skills. The core objective of our system was to enable doctors to simply upload a retinal image, after which our deep learning model would predict the presence of disease and generate precise segmentation masks highlighting the affected areas. We trained our models using the PyTorch library and deployed them via a Flask API integrated into a MERN stack application. The evaluation metrics of our models were outstanding, reflecting the accuracy and reliability of our system.
        </div>
        <div className="video-wrapper">
          <video src="/Gallery/FYP.mp4" alt="FYP Demo Video" autoPlay controls></video>
        </div>
      </div>

      <h2>MERN Stack Projects</h2>
      <div>
        <div className="project-details">
          <h3>Text Formatter</h3>
          <div>
            This is a web app made in React js. In this app, a user can perform many tasks such as making all text uppercase, lowercase, normal case, removing whitespaces, and counting characters, words, and sentences. After performing tasks, the user can copy the formatted text. This is a basic text formatting app that helps a user by performing almost 12 functions. I deployed this app on Vercel. Here is the link to this project:
            <a href="https://text-formatter-black.vercel.app/" target='_blank' rel="noopener noreferrer"><b> Text Formatter</b></a>
          </div>
        </div>
        <div className="project-details">
          <h3>Chat Application</h3>
          <div>
            This web application features a React-based frontend and an Express.js (Node.js) backend. It allows users to start chatting instantly—no sign-up or account creation required. A user simply enters a Room ID (a secure identifier to share with the person they want to chat with) and their Name, which is used to label their messages during the conversation. The app supports text messaging, voice communication, and image sharing. It's designed for temporary, real-time communication with no data stored or backed up—once you leave the room or disconnect, the chat is gone.
          </div>
          <div className="video-wrapper">
            <video src="/Gallery/Chat.mp4"  controls autoPlay></video>
          </div>
        </div>
        <div className="project-details">
          <h3>Video Player</h3>
          <div>
            This project is inspired by VLC player. All VLC shortcuts are added. This is deployed on Vercel. Here is the link:
            <a href="https://video-player-alpha-three.vercel.app/" target='_blank' rel="noopener noreferrer"><b> JVideoPlayer</b></a>
          </div>
        </div>
        <div className="project-details">
          <h3>Online Clinic</h3>
          <div>
            I made this project for my friend. It is an online appointment platform where users can book appointments.
          </div>
        </div>
        <div className="project-details">
          <h3>Blog Posting</h3>
          <div>
            This is a blog posting app where users create an account and then post their views. This project is under development, and in the future, I will add many options like YouTube. Here is the demo video:
          </div>
          <div className="video-wrapper">
            <video src="/Gallery/Posting.mp4"   controls autoPlay></video>
          </div>
        </div>
        <div className="project-details">
          <h3>JConverter</h3>
          <div>
            In this web app, I use the browser synthesis API to convert text to speech and speech to text. This app supports thirteen languages, and when you speak, it automatically converts your speech into text displayed in a textarea. You can also listen to your typed text in all accents of world languages. Afterward, you can copy the text. This is also a deployed app:
            <a href="https://j-converter.vercel.app/" target='_blank' rel="noopener noreferrer"><b> JConverter</b></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

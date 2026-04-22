import "./styles/Work.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
      {/* ONLY ONE work-flex */}
      <div className="work-flex">

        {/* PROJECT 1 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>01</h3>
              <div>
                <h4>AI Code Vulnerability Detection System
               
            </h4>
                <p>AI / Security</p>
              </div>
            </div>
               Developed an AI-powered system to detect software vulnerabilities using static analysis machine learning, and deep learning
               Implemented TF-IDF, SGD Classifier, and LSTM models for accurate code security analysis.
               Designed an ensemble-based architecture to reduce false positives and improve detection accuracy.
               Built a security dashboard displaying risk scores, severity levels, and recommended fixes.
               Validated system performance using MSR and SARD datasets.   
            <h4>Tools and features</h4>
            <p>Python, ML, Deep Learning, Flask</p>
            <p>
              Detects software vulnerabilities using ML & DL models.
            </p>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>02</h3>
              <div>
                <h4>AI Accident Detection & Alert System
                  
                </h4>
                <p>AI / Computer Vision</p>
              </div>
            </div>
                  Developed a real-time accident detection system using YOLO and OpenCV.
                  Built a Flask web application for live and recorded video analysis.
                  Integrated Telegram API to send instant alert notifications.
                  Designed the system to work without IoT devices or manual monitoring.



            <h4>Tools and features</h4>
            <p>Python, OpenCV, YOLO, Flask</p>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>03</h3>
              <div>
                <h4>Women Safety System
                  

                </h4>
                <p>IoT / Python</p>
              </div>
            </div>
                Built a terminal-based SOS alert system using Python.
                Implemented automatic logging of time and location details.
                Designed to work offline without internet or mobile applications.
                This project focuses on providing a quick and accessible way to trigger
                emergency alerts through a simple terminal interface. It ensures that 
                critical information like time and location is captured instantly for safety tracking.



            
            <h4>Tools and features</h4>
            <p>Python, IoT Concepts</p>
          </div>
        </div>
        

        {/* PROJECT 4 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>04</h3>
              <div>
                <h4>Portfolio Website</h4>
                <p>Frontend / Web</p>
              </div>
            </div>
            A dynamic portfolio website built with React, TypeScript, and GSAP, featuring smooth scroll animations, 
            3D elements, and a responsive UI to present projects and technical skills effectively
            A modern and interactive personal portfolio website built using React and TypeScript to showcase projects, skills, and experience.
            The site features smooth animations, responsive design, and an engaging user interface to create a professional online presence.
            Designed with performance and usability in mind, it highlights real-world projects and provides an intuitive way for recruiters and visitors to explore my work.


            <h4>Tools and features</h4>
            <p>React, TypeScript, GSAP</p>
          </div>
        </div>

      </div>
    </div>
  </div>
);
};


export default Work;
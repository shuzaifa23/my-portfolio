import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>Reva University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed Master of Computer Applications (MCA) with a focus on software development, backend systems,
              and artificial intelligence. Actively built real-world projects to strengthen practical skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Self-Learning Projects</h4>
                <h5>Personal Development</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built real-world projects in web development and AI, including code vulnerability detection,
              accident detection, women safety systems, and an interactive portfolio.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certificates</h4>
                <h5>Personal Development</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Microsoft Certified: Azure AI Fundamentals with strong interest in AI and cloud technologies.
              Code to Cloud: DevOps and Deployment Bootcamp – MeVi Technologies.
              Build Your Portfolio Website with AngularJS – Coursera project network.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern & API Integration</h4>
                <h5>mimo</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Skilled in Java, Python, backend development, and problem-solving with a strong interest
              in generative AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

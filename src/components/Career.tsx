import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Operations Support</h4>
                <h5>Valvangi Cooperative Credit Union Bank</h5>
              </div>
              <h3>EXPERIENCE</h3>
            </div>
            <p>
              Assisted in cashier operations, handling daily cash transactions efficiently and accurately. Ensured compliance with banking procedures, documentation standards, and internal controls while delivering rigorous customer service support.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PGDM (Marketing & Analytics)</h4>
                <h5>ISBR Business School, Bangalore</h5>
              </div>
              <h3>2025–2027</h3>
            </div>
            <p>
              Pursuing a Post Graduate Diploma in Management with a major in Marketing and a minor in Business Analytics, focusing on strategic thinking, market research, and data-driven solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Commerce</h4>
                <h5>Vels University</h5>
              </div>
              <h3>2022–2025</h3>
            </div>
            <p>
              Developed a strong foundation in commerce, accounting, and business principles, enhancing attention to detail and accountability in financial and operational contexts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

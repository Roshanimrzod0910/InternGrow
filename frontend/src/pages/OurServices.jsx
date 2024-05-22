import React from "react";

const OurServices = () => {
  return (
    <div>
      <section id="services-offered" style={{ backgroundColor: "#f5f5f5", padding: "2rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>Services Offered</h2>
        <ul style={{ listStyle: "none", paddingLeft: "0", marginBottom: "0" }}>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Online Classes and Webinars</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Mentorship Guidance Sessions</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Customized 10-Day Courses in Various Domains (e.g., Flutter, Full Stack, AI)</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Freelancing Opportunities and Projects</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Tech Trends Updates and Resources</li>
        </ul>
      </section>

      <section id="benefits" style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", marginTop: "2rem" }}>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>Benefits for Mentors and Mentees</h2>
        <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "1rem" }}>For Mentors:</h3>
        <ul style={{ listStyle: "none", paddingLeft: "0", marginBottom: "0" }}>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Opportunity to Share Expertise and Knowledge</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Earn Additional Income Through Mentorship</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Networking and Collaboration Opportunities</li>
        </ul>
        <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "1rem", marginTop: "2rem" }}>For Mentees:</h3>
        <ul style={{ listStyle: "none", paddingLeft: "0", marginBottom: "0" }}>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Access to High-Quality Learning Resources</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Personalized Mentorship and Guidance</li>
          <li style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}>Practical Experience Through Freelancing Projects</li>
        </ul>
      </section>

      <section id="pricing" style={{ backgroundColor: "#f5f5f5", padding: "2rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", marginTop: "2rem" }}>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>Pricing</h2>
        <p style={{ fontSize: "1.1rem" }}>Contact us for customized pricing based on your specific requirements.</p>
      </section>

      <section id="how-it-works" style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", marginTop: "2rem" }}>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>How Our Platform Works</h2>
        <ol style={{ paddingLeft: "2rem", marginBottom: "0" }}>
          <li style={{ fontSize: "1.1rem" }}>Sign up and create your profile.</li>
          <li style={{ fontSize: "1.1rem" }}>Browse available mentors and services.</li>
          <li style={{ fontSize: "1.1rem" }}>Book sessions or courses according to your needs.</li>
          <li style={{ fontSize: "1.1rem" }}>Engage with mentors and participate in learning activities.</li>
          <li style={{ fontSize: "1.1rem" }}>Explore freelancing opportunities and projects.</li>
        </ol>
      </section>

      <section id="faqs" style={{ backgroundColor: "#f5f5f5", padding: "2rem", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", marginTop: "2rem" }}>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "1rem" }}>FAQs</h2>
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Q: How do I become a mentor?</h3>
          <p style={{ fontSize: "1.1rem" }}>A: Please contact our team for mentorship opportunities and requirements.</p>
        </div>
        <div>
          <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "0.5rem" }}>Q: Are there any prerequisites for joining as a mentee?</h3>
          <p style={{ fontSize: "1.1rem" }}>A: No, our platform welcomes mentees of all levels of expertise and backgrounds.</p>
        </div>
        {/* Add more FAQs here */}
      </section>
    </div>
  );
};

export default OurServices;
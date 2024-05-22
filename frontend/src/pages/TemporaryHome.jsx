import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
/* Import Font Awesome styles */
import '@fortawesome/fontawesome-free/css/all.css';

import { Link } from 'react-router-dom';






const TemporaryHome = () => {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);
  const [menteesReviewCount, setMenteesReviewCount] = useState(0);
  const [totalMinutesMentored, setTotalMinutesMentored] = useState(0);
  const [satisfiedMenteesCount, setSatisfiedMenteesCount] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  

  
  const [showSubItems1, setShowSubItems1] = useState(false);
  const [showSubItems2, setShowSubItems2] = useState(false);
  const [showSubItems3, setShowSubItems3] = useState(false);
  const [showSubItems4, setShowSubItems4] = useState(false);
  const [showSubItems5, setShowSubItems5] = useState(false);


  
   // Function to update scroll position
   const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);
    
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the translateY value based on the scroll position
  const translateY = scrollPosition * 0.5; // Adjust the multiplier to control the speed of the animation




  useEffect(() => {
    // Function to increment the menteesReviewCount rapidly
    const incrementMenteesReviewCount = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 4.8) {
          setMenteesReviewCount(prevCount => prevCount + 0.1);
          count += 0.1;
        } else {
          clearInterval(interval);
        }
      }, 50); // Update every 50 milliseconds
    };

    // Function to increment the totalMinutesMentored rapidly
    const incrementTotalMinutesMentored = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 100000000) {
          setTotalMinutesMentored(prevCount => prevCount + 10000);
          count += 10000;
        } else {
          clearInterval(interval);
        }
      }, 50); // Update every 50 milliseconds
    };

    // Function to increment the satisfiedMenteesCount rapidly
    const incrementSatisfiedMenteesCount = () => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < 20000) {
          setSatisfiedMenteesCount(prevCount => prevCount + 100);
          count += 100;
        } else {
          clearInterval(interval);
        }
      }, 50); // Update every 50 milliseconds
    };

    // Call increment functions
    incrementMenteesReviewCount();
    incrementTotalMinutesMentored();
    incrementSatisfiedMenteesCount();
  }, []);

  return (
    <>
      <main style={{ backgroundColor: "#ffffff" }}>
  <div className="video-container" style={{ position: "relative" }}>
    <video autoPlay muted loop style={{ width: "100%", height: "100%" }}>
      <source src="/videos/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="heading-container" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
  <h2 style={{ color: "#ffffff", fontSize: "50px", animation: "fadein 3s" }}>
    <b><center>Welcome to InternGrow</center></b>
  </h2>
  <h1
    style={{ color: "#ffffff", fontSize: "15px", animation: "fadein 3s" }}
    className="mentorship h4"
  >
    <center>Find your ideal guru-shishya and journey toward your dreams together</center></h1>
</div>

  {/* Your content */}








  <div
            className="button-container"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              zIndex: 1, // Ensure the button appears above the video
            }}
          >
            <button
              className="btn btn-primary"
              style={{
                background: "linear-gradient(to right, #ff8a00, #da1b60)",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                color: "#ffffff",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                outline: "none",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <i className="bx bx-search"></i>&nbsp; Find Your Mentor &nbsp;
              <i className="bx bx-right-arrow-alt"></i>
            </button>
            </div>
            </div>

        <div className="text-center skill">
          <a className="btn btn-light  mx-2">Frontend</a>
          <a className="btn btn-light mx-2 ">Backend</a>
          <a className="btn btn-light mx-2 ">Full Stack</a>
          <a className="btn btn-light mx-2 ">Dev ops</a>
          <a className="btn btn-light mx-2 ">Cloud Engineer</a>
          <a className="btn btn-light mx-2 ">Datascience</a>
        </div>

        <div className="text-center skill">
          <a className="btn btn-light  mx-2 mb-4">Data Analyst</a>
          <a className="btn btn-light mx-2 mb-4 ">Product Manager</a>
          <a className="btn btn-light mx-2 mb-4 ">UI/UX Designer</a>
          <a className="btn btn-light mx-2 mb-4 ">Marketing</a>
        </div>

        <div className="slider">
          <div className="d-flex align-items-start pb-5">
            {/* Your circle-shaped mentor cards */}
            {mentorData.map((mentor, index) => (
              <div
                key={index}
                className="mentor-card"
                style={{
                  width: "300px",
                  height: "200px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  margin: "0 10px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  transform: isHovered ? "scale(1.1)" : "scale(1)",
                  backgroundColor: "#ffffff"
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="mentor-image" style={{
    overflow: 'hidden', // Ensure the image doesn't overflow its container
    height: '200px', // Set a fixed height for the container
    position: 'relative' // Positioning to handle the animation
}}>
    <img
        src={mentor.imageUrl}
        alt={mentor.name}
        style={{
            width: '100%', // Make sure the image fills the container horizontally
            position: 'absolute', // Position the image absolutely within its container
            bottom: isHovered ? '10px' : '0', // Adjust vertical position based on hover state
            transition: 'bottom 0.3s ease', // Smooth transition for animation
            transform: 'translateY(0)' // Initial transform to handle animation
        }}
    />
</div>

                <div
                  className="mentor-info"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    color: "#fff",
                    textAlign: "center",
                    padding: "10px",
                    boxSizing: "border-box",
                    transform: isHovered ? "translateY(0)" : "translateY(100%)",
                    transition: "transform 0.3s ease"
                  }}
                >
                  <h3>{mentor.name}</h3>
                  <p>{mentor.shortInfo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display counting numbers */}
        <div className="counters" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <div className="counter" style={{ textAlign: "center", marginRight: "20px", color: "#000000" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>{menteesReviewCount.toFixed(1)}</h2>
            <p>Mentees Reviewed</p>
          </div>
          <div className="counter" style={{ textAlign: "center", marginRight: "20px", color: "#000000" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>{totalMinutesMentored.toLocaleString()}</h2>
            <p>Total Minutes Mentored</p>
          </div>
          <div className="counter" style={{ textAlign: "center", color: "#000000" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>{satisfiedMenteesCount}</h2>
            <p>Satisfied Mentees</p>
          </div>
        </div>

        {/* Section with single-line paragraph and company logos */}
        <div className="company-logos">
          <p style={{ color: "#000000", textAlign: "center", margin: "20px 0" }}>
          Make career progress with mentors that have worked at companies like
          </p>
          <div className="logo-container" style={{ display: "flex", justifyContent: "center" }}>
            {/* Add company logos here */}
            <img src="/images/amazon.png" alt="Company 1" style={{ width: "80px", height: "70px", margin: "0 10px" }} />
            <img src="/images/amdocs.jpg" alt="Company 2" style={{ width: "80px", height: "70px", margin: "0 10px"  }} />
            <img src="/images/google.png" alt="Company 3" style={{ width: "80px", height: "70px", margin: "0 10px"  }} />
            <img src="/images/kirabiz.jpg" alt="Company 3" style={{width: "80px", height: "70px", margin: "0 10px"  }} />
            <img src="/images/hubspot.png" alt="Company 3" style={{ width: "80px", height: "70px", margin: "0 10px"  }} />
            <img src="/images/microsoft.png" alt="Company 3" style={{ width: "80px", height: "70px", margin: "0 10px" }} />
            <img src="/images/IBM.jpg" alt="Company 3" style={{ width: "80px", height: "70px", margin: "0 10px" }} />
            <img src="/images/apple1.png" alt="Company 3" style={{ width: "80px", height: "60px", margin: "0 10px" }} />
            <img src="/images/L&T.png" alt="Company 3" style={{ width: "60px", height: "60px", margin: "0 10px" }} />
            {/* Add more logos as needed */}
          </div>
        </div>
        

        
        {/* New section */}
        <div style={{ height: "50px" }}></div> {/* Add space between sections */}
<div className="new-section" style={{ backgroundImage: 'linear-gradient(to bottom right, #ffffff, #cccccc)', boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)", padding: "50px 0", transition: "background-image 0.5s" }}>
  <h4 style={{ color: "#000000", textAlign: "center", marginBottom: "20px", fontFamily: "Arial, sans-serif", fontSize: "36px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px", backgroundImage: 'linear-gradient(to right, #000000,#f9a825)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Growth-Oriented</h4>
  <h1 style={{ color: "#000000", textAlign: "center", marginBottom: "30px", fontFamily: "Arial, sans-serif", fontSize: "24px", fontStyle: "italic", backgroundImage: 'linear-gradient(to right, #ffffff, #f9a825)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Guidance Services</h1>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="sub-section" style={{ backgroundColor: "transparent", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.5s", transform: "rotate(0deg)", transition: "transform 0.5s" }}>
          <h4 style={{ color: "#000000", marginBottom: "10px", fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "bold", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Mentor Section</h4>
          <p style={{ color: "#000000", fontFamily: "Arial, sans-serif", fontSize: "16px", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Discover unparalleled mentorship on our platform, empowering mentors to guide mentees seamlessly. Our curated space facilitates invaluable knowledge exchange, enhancing mentees' skills. Engage through webinars, sessions, and interactive channels, fostering deep connections. Join us as a mentor, shaping aspiring professionals' futures.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="sub-section" style={{ backgroundColor: "transparent", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.5s", transform: "rotate(0deg)", transition: "transform 0.5s" }}>
          <h4 style={{ color: "#000000", marginBottom: "10px", fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "bold", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Mentees Section</h4>
          <p style={{ color: "#000000", fontFamily: "Arial, sans-serif", fontSize: "16px", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Experience tailored mentorship designed to connect you with mentors in your domain. We facilitate sessions, webinars, and freelancing opportunities, empowering you with the latest industry insights. Boost your knowledge and skills with personalized guidance from experts, ensuring your success in the competitive landscape. Join us as a mentee and unlock the pathway to professional growth and achievement.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="sub-section" style={{ backgroundColor: "transparent", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.5s", transform: "rotate(0deg)", transition: "transform 0.5s" }}>
          <h4 style={{ color: "#000000", marginBottom: "10px", fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "bold", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Tech Trends </h4>
          <p style={{ color: "#000000", fontFamily: "Arial, sans-serif", fontSize: "16px", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Stay ahead with our platform's latest technology resources, curated for both mentors and mentees. Whether you're a seasoned professional or just starting out, access cutting-edge tools, websites, and insights to stay at the forefront of your field. We bridge the gap for mentors unfamiliar with the latest technology, equipping them with the knowledge to guide mentees effectively. Empower your journey with the most up-to-date resources and mentorship opportunities.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="sub-section" style={{ backgroundColor: "transparent", padding: "20px", borderRadius: "10px", textAlign: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.5s", transform: "rotate(0deg)", transition: "transform 0.5s" }}>
          <h4 style={{ color: "#000000", marginBottom: "10px", fontFamily: "Arial, sans-serif", fontSize: "20px", fontWeight: "bold", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Freelancing</h4>
          <p style={{ color: "#000000", fontFamily: "Arial, sans-serif", fontSize: "16px", backgroundImage: 'linear-gradient(to right, #ffffff, #2196f3)', WebkitBackgroundClip: 'text', backgroundClip: 'text', transition: "background-image 0.5s" }}>Unlock exciting freelance opportunities with our platform, offering mentees the chance to collaborate with industry leaders and apply their newfound knowledge in real-world projects. As mentees receive training and guidance from our mentors, they gain the skills and confidence needed to thrive in freelance endeavors. Empower your journey with practical experience, networking opportunities, and ongoing support, ensuring your success as you embark on your freelancing career.</p>
        </div>
      </div>
    </div>
  </div>
</div>


       {/* Your existing content */}

      {/* Horizontal line */}
      <hr style={{ width: "80%", margin: "40px auto", borderTop: "10px solid #000000" }} />

{/* Three rectangle attractive cards */}
<main style={{ backgroundImage: 'linear-gradient(to bottom right, #ffffff, #cccccc)', boxShadow: "0 2px 2px rgba(0, 0, 0, 0.1)", padding: "50px 0", transition: "background-image 0.5s"  }}>
  {/* Existing content */}
  {/* New section */}
  <div className="new-section" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", padding: "50px 20px", animation: "fadein 2s", transition: "transform 0.5s", transform: "rotate(0deg)" }}>
    {/* Left column with form */}
    <div className="left-column" style={{ maxWidth: "700px", animation: "fadein 2s", transition: "transform 0.5s", transform: "rotate(0deg)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)" }}>
      <h2 style={{ marginBottom: "20px", color: "#000000", textAlign: "center" }}>Let's Talk</h2>
      <p style={{ marginBottom: "20px", color: "#000000", textAlign: "center" }}>"Discover the synergy between our mentors and mentees. Contact us to uncover professional success!"</p>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="First Name*" style={{ borderRadius: "20px", padding: "10px", marginBottom: "15px" }} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Last Name*" style={{ borderRadius: "20px", padding: "10px", marginBottom: "15px" }} />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email Address*" style={{ borderRadius: "20px", padding: "10px", marginBottom: "15px" }} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Phone Number*" style={{ borderRadius: "20px", padding: "10px", marginBottom: "15px" }} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Company" style={{ borderRadius: "20px", padding: "10px", marginBottom: "15px" }} />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="3" placeholder="Your Message" style={{ borderRadius: "20px", padding: "10px", marginBottom: "15px" }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ borderRadius: "20px", padding: "10px 20px", textAlign: "center" }}>Submit</button>
      </form>
      <p style={{ marginTop: "20px", color: "#4caf50", textAlign: "center" }}>Protected by reCAPTCHA</p>
    </div>
    {/* Right column with images, heading, paragraph, and button */}
    <div className="right-column" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", animation: "fadein 2s", transition: "transform 0.5s", transform: "rotate(0deg)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)" }}>
      <img src="/images/image1.jpg" alt="Image 1" style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "10px" }} />
      <img src="/images/image2.jpg" alt="Image 2" style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "10px" }} />
      <img src="/images/image3.jpg" alt="Image 3" style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "10px" }} />
      <h4 style={{ color: "#2196f3", marginBottom: "10px" }}>Heading</h4>
      <p style={{ marginBottom: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor auctor risus placerat, sit amet ultrices quam lobortis.</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  </div>
  {/* Existing content */}
</main>




</main>
    </>
  );
};

// Sample mentor data
const mentorData = [
  {
    name: "Mentor 1",
    imageUrl: "/images/mentor.jpg",
    shortInfo: "Short information about Mentor 1"
  },
  {
    name: "Mentor 2",
    imageUrl: "/images/mentor2.jpg",
    shortInfo: "Short information about Mentor 2"
  },
  {
    name: "Mentor 1",
    imageUrl: "/images/mentor3.jpg",
    shortInfo: "Short information about Mentor 1"
  },
  {
    name: "Mentor 2",
    imageUrl: "/images/mentor4.jpg",
    shortInfo: "Short information about Mentor 2"
  },
 
  // Add more mentors as needed
];






export default TemporaryHome;

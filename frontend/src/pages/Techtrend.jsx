import React from "react";

const Techtrend = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, background: "linear-gradient(235deg,#060c21, black, whitesmoke)" }}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Latest Tech</title>
      <header style={{ background: "#060c21", color: "#fff", textAlign: "center", padding: "20px 0" }}>
        <h1 style={{ marginBottom: "20px" }}>
          <a href="#" style={{ textDecoration: "none", listStyle: "none", color: "#fff" }} id="latestTechLink">
            Latest Technology
          </a>
        </h1>
        <input type="text" style={{ padding: "10px", width: "300px", border: "1px solid #ccc", borderRadius: "5px" }} id="searchInput" placeholder="Search technology..." />
      </header>
      <main style={{ padding: "50px", display: "flex", flexWrap: "wrap", justifyContent: "space-around", overflow: "hidden" }} id="techContainer">
        {/* Technology cards will be dynamically added here */}
      </main>
      <style>{`
        .card {
          width: calc(33.33% - 40px);
          margin: 20px;
          padding: 50px;
          background: linear-gradient(235deg, blue, whitesmoke);
          border-radius: 20px;
          box-shadow: 2px solid yellow;
          text-align: center;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
          background: linear-gradient(375deg, blue, whitesmoke);
          color: white;
        }

        .description {
          color: black;
          font-size: 18px;
          z-index: 0;
          margin-bottom: 10px;
        }

        .card:hover .description {
          top: 100%;
          z-index: 1;
        }

        .pdf-link {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          text-decoration: none;
          color: #333;
          background-color: whitesmoke;
          padding: 5px 5px;
          border-radius: 20px;
          transition: background-color 0.3s ease;
        }

        .pdf-link:hover {
          background-color: #ccc;
          color: #fff;
        }

        .know-more {
          cursor: pointer;
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
          z-index: 0;
        }

        .know-more:hover {
          color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Techtrend;

// Sample technology data with descriptions and PDF URLs
const technologies = [
  { name: "Qauantum Computing", 
  description: "A computer can run more accurate and realistic prototyping and testing.", 
  pdfUrl: "https://quantumai.google" 
},
  { name: "Magento  Framework", 
  description: "It's an open-source ecommerce software platform created using PHP.", 
  pdfUrl: "data_development.pdf" 
},
{ name: "Snowflake", 
  description: "Used for Data storage,  processing and analytic  solution that are faster,easier to use. ", 
  pdfUrl: "data_development.pdf" 
},
{ name: "Azure Cosmos DB", 
description: "Azure CosmosDB for PostgreSQL provides a scalable distributed RDB and securely managed on Azure.", 
pdfUrl: "data_development.pdf" 
},

{ name: "React JS", 
description: "It is free open-source frontend Javascript library for building UI based on Components", 
pdfUrl: "data_development.pdf" 
},

{ name: "Docker", 
description: "It's a software that allows you to build, test, and deploy application quikly using containers.  ", 
pdfUrl: "data_development.pdf" 
},

{ name: "React Native", 
description: " A JavaScript Framework for Building native mobile application.", 
pdfUrl: "data_development.pdf" 
},

{ name: "Ionic", 
description: "A JavaScript Framework for building hybrid mobile application.", 
pdfUrl: "data_development.pdf" 
},

{ name: "MERN-Stack Development", 
description: "MERN is an acronym for MongoDB, ExpressJs,ReactJS, NodeJS.", 
pdfUrl: "data_development.pdf" 
},

{ name: "Flutter Development", 
description: "Is an open-source SDK from Google that allows developers to build application for mobile", 
pdfUrl: "data_development.pdf" 
},

{ name: "Figma", 
description: "Figma Design is for people to create, share, and test design for websites and mobile apps.  ", 
pdfUrl: "data_development.pdf" 
},
{ name: "Neuromorphic Computing", 
description: "It's a method that mimics the human brain's structure and function.", 
pdfUrl: "data_development.pdf" 
},

{ name: "Artificial Intelligence", 
description: "A computer that can learn, reason, and act in ways that would typically require human intelligence.", 
pdfUrl: "data_development.pdf" 
},

{ name: "Red Hat", 
description: "Is a Software company that assembels open source components for linux and related programs.", 
pdfUrl: "data_development.pdf" 
},
{ name: "AWS", 
description: "Amazon Web Services, provide Free Cloud Computing Services.", 
pdfUrl: "data_development.pdf" 
},
{ name: "JavaScript ", 
description: "Library: jQuery, Vue.js, React, Angular, Meteor.", 
pdfUrl: "data_development.pdf" 
},
{ name: "Pyhton ", 
description: "It's used for developing websites and software, task automation, data analysis & visulization. ", 
pdfUrl: "data_development.pdf" 
},
{ name: "Java ", 
description: "Java is high level, object-oriented programming language.", 
pdfUrl: "data_development.pdf" 
},
{ name: "Swift", 
description: "It's a powerful programming language for all Apple Developers.", 
pdfUrl: "data_development.pdf" 
},
{ name: "Ruby", 
description: "It's a object-orientend programming language and similar to  Perl & Smaltalk language.", 
pdfUrl: "data_development.pdf" 
},
{ name: "C#", 
description: "C Sharp is a object-orientend programming language created by Microsoft.", 
pdfUrl: "data_development.pdf" 
},
{ name: "Go-lang", 
description: "An open-source Programming language that Google developed.", 
pdfUrl: "data_development.pdf" 
},
{ name: "SQL", 
description: "Structured Query Language is a language used to store and process data in relational database.", 
pdfUrl: "" 
},
  
];



// Function to display technology cards
function displayTechCards(techArray) {
  const techContainer = document.getElementById('techContainer');
  techContainer.innerHTML = '';
  techArray.forEach(tech => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <h2>${tech.name}</h2>
          <div class="description">${tech.description}</div>
          <div class="pdf-content" style="display: none;">
              <a href="${tech.pdfUrl}" class="pdf-link" download>Download PDF</a>
          </div>
          <div class="know-more">Know More</div>
      `;
      techContainer.appendChild(card);
  });
}

// Display all technologies initially
displayTechCards(technologies);

// Add event listeners for "Know More" button and description hover
document.querySelectorAll('.know-more').forEach((knowMoreBtn, index) => {
  knowMoreBtn.addEventListener('click', () => {
      const description = knowMoreBtn.parentElement.querySelector('.description');
      const pdfContent = knowMoreBtn.parentElement.querySelector('.pdf-content');
      if (description.classList.contains('expanded')) {
          description.classList.remove('expanded');
          pdfContent.style.display = 'none';
          knowMoreBtn.textContent = 'Know More';
      } else {
          description.classList.add('expanded');
          pdfContent.style.display = 'block';
          knowMoreBtn.textContent = 'Hide PDF';
      }
  });
});

document.querySelectorAll('.description').forEach(description => {
  description.addEventListener('mouseleave', () => {
      const pdfContent = description.parentElement.querySelector('.pdf-content');
      if (pdfContent.style.display === 'block') {
          pdfContent.style.display = 'none';
          const knowMoreBtn = description.parentElement.querySelector('.know-more');
          knowMoreBtn.textContent = 'Know More';
      }
  });
});
// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
  const searchQuery = this.value.toLowerCase();
  const filteredTech = technologies.filter(tech => tech.name.toLowerCase().includes(searchQuery));
  displayTechCards(filteredTech);
});
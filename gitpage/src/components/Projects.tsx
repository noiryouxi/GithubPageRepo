import React from 'react';

const Projects: React.FC = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <div>
        <h3>Project 1: Portfolio Website</h3>
        <p>
          A personal portfolio website built with React, Next.js, and TypeScript to showcase my skills 
          and projects.
        </p>
        <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <div>
        <h3>Project 2: E-commerce App</h3>
        <p>
          An e-commerce platform built using React and Node.js. Users can browse products, add them 
          to the cart, and make payments using Stripe API.
        </p>
        <a href="https://ecommerceapp.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <div>
        <h3>Project 3: Blogging Platform</h3>
        <p>
          A blogging platform built with React and Firebase. Users can create, edit, and delete posts, 
          and leave comments on each other's blogs.
        </p>
        <a href="https://bloggingplatform.com" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </section>
  );
};

export default Projects;
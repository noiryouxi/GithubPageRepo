import React from 'react';

const Skills: React.FC = () => {
  return (
    <section>
      <h2>My Skills</h2>
      <ul>
        <li>
          <h3>JavaScript</h3>
          <p>Experienced in writing clean and efficient JavaScript code for web applications.</p>
        </li>
        <li>
          <h3>React</h3>
          <p>Building scalable and maintainable web apps using React.js and hooks.</p>
        </li>
        <li>
          <h3>HTML & CSS</h3>
          <p>Proficient in creating responsive layouts using HTML5 and CSS3 with Flexbox and Grid.</p>
        </li>
        <li>
          <h3>TypeScript</h3>
          <p>Type-safe JavaScript using TypeScript for better tooling and error detection.</p>
        </li>
        <li>
          <h3>Node.js</h3>
          <p>Back-end development experience using Node.js and Express for building REST APIs.</p>
        </li>
        <li>
          <h3>Git</h3>
          <p>Version control with Git, GitHub, and GitLab for collaborative development.</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
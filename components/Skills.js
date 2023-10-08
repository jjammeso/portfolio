const Skills = () => {
    return (
      <div className="skills-container" id="skills">
        <div className="Soft-skills">
        <h2>Skills</h2>
          <h3>Soft Skills</h3>
              <div>
              <ul>
                <li className="list-items">Listening or negotiation</li>
                <li className="list-items">Problem-Solving</li>
                <li className="list-items">Adaptability</li>
                <li className="list-items">critical thinking or artistic aptitude</li>
                <li className="list-items">Teamplayer</li>
                <li className="list-items">Time Management</li>
              </ul>
              </div>
        </div>
        <br/>
        <h3>Hard Skills</h3>
        <div className="grid-skills">
          <div className="skill-card html">
            <i className="fa-brands fa-html5 html-icon"></i>
            <p>HTML</p>
          </div>
          <div className="skill-card css">
            <i className="fa-brands fa-css3-alt css-icon"></i>
            <p>CSS</p>
          </div>
          <div className="skill-card js">
            <i className="fa-brands fa-js-square js-icon"></i>
            <p>JavaScript</p>
          </div>
          <div className="skill-card react">
            <i className="fa-brands fa-react react-icon"></i>
            <p>React</p>
          </div>
          <div className="skill-card node">
            <i className="fa-brands fa-node-js node-icon"></i>
            <p>Node</p>
          </div>
          <div className="skill-card python">
            <i className="fa-brands fa-python python-icon"></i>
            <p>Python</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;
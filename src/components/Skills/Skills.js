import React from "react";
import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (<div className="skills">
      <div className="container inner-skills">
        <h1>LOOK AT WHAT I CAN DO</h1>
        <div className="row justify-content-center">
          <div className="col-lg-6 list">
            <h4>
              Languages
            </h4>
            <ul className="list-group">
              <li className="list-group-item">
                Javascript</li>
              <li className="list-group-item">
                HTML</li>
              <li className="list-group-item">
                CSS</li>
            </ul>
          </div>
          <div className="col-lg-6 list">
            <h4>
              FrameWorks
            </h4>
            <ul>
              <li className="list-group-item">
                Bootstrap</li>
              <li className="list-group-item">
                Node Js</li>
              <li className="list-group-item">
                Mocha</li>
              <li className="list-group-item">
                Redux</li>
              <li className="list-group-item">
                React</li>
              <li className="list-group-item">
                Chai</li>
            </ul>
          </div>
        </div>
        <a className="a" href="https://github.com/NoufouTheAfterMath">
          <h3 className="project">Click here to see my project</h3>
        </a>
      </div>
    </div>)
  }
}

export default Skills;

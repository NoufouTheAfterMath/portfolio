import React from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (<div className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 img">
            <img className="img-thumbnail" src={this.props.data.img}/>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="txt">
              <h3 className="title">{this.props.data.title}</h3>
              <p className="h3text">{this.props.data.text}</p>
              <p className="h3text1">{this.props.data.text1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default About;

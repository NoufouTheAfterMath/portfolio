import React from "react";
import "./Footer.css";
import fontawesome from "fontawesome";

class Footer extends React.Component {
  render() {
    return(<div className="footer">
      <h3 className="cnt">Contact Me: </h3>
      <div className="row">
        <div className="col-lg-6 icon"><fontawesome className="fa fa-google fa-2x"/> <a href="https://gmail.com">aftermathggh@gmail.com</a></div>
        <div className="col-lg-6 icon"><fontawesome className="fa fa-github fa-2x" /> <a href="https://github.com/NoufouTheAfterMath">NoufouTheAfterMath</a></div>
    </div>
  </div>)
  }
}

export default Footer;

import React from "react";
import Project from "./Project";

const settings = {
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  arrows: false
};

let portflioLinks = [
  {
    imgUrl: "https://www.imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg",
    name: "df",
    url: "https://www.imagejournal.org/wp-content/uploads/bb-plugin/cache/23466317216_b99485ba14_o-panorama.jpg"
  }
]

class ProjectConatainer extends React.Component {
  constructor() {
    super()
    this.state;
  }
    render() {
      return (
        <Project data={this.props.portflioLinks}/>
      )
    }
  }

export default ProjectConatainer;

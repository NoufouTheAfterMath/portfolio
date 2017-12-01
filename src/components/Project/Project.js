import React from "react";
import "./Project.css";
import Slider from "react-slick"

let Project = (props) => (<div>
  <ProjectSlider settings={props.settings} data={props.portflioLinks} />
</div>)

let ProjectSlider = (props) => (
  <div>
  <Slider {...props.settings}>
  {
    props.data.map((item, index) => (<div key={item.name + index}>
      <div className="row justify-content-center">
        <a href={item.url}>
          <img src={item.imgUrl} className="img-fluid tofit rounded mx-auto d-block px-5"/>
        </a>
      </div>
      <div className="text-container mt-5">
        <p>
          <a href={item.url}>
            <b>{item.name}</b>
          </a>
        </p>
      </div>
    </div>))
  }
</Slider>
</div>
)


export default Project;

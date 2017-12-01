import React from "react";
import Head from "./components/Head";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Project from "./components/Project";
import "./index.css";

let  about = {
  img: "https://i.imgur.com/K6HczHF.jpg",
  text: "I am Noufou Sawadogo, a student of Vschool-Ghana, and am a web designer and developer. I love programming and I feel it is another way I can make technology improve around the world. That is why I will love to join you and your team to make the beauty of technology happen.",
  text1: "If you wish to contact me, send me an email on aftermathggh@gmail.com"
}


class App extends React.Component {
  render() {
    return (<div>
      <Head/>
      <About data={about}/>
      <Skills/>
      <Footer />
    </div>)
  }
}

export default App;

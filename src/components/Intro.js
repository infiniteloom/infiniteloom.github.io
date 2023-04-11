
import React from "react";
import $ from 'jquery';

export default function Intro() {
  return (
    <section id="intro">
      
      <div className="hero-image-background">
      
      <div className="hero-image-wrapper">
        
         {/* <div className="hero-image-wrapper" style={{backgroundImage: `url('./rock-garden.jpeg')`}}> */}
           {/* <img
            className="hero-image"
            alt="hero"
            src="./iruka_maria_replenished_in_flight--iso-web.png"
          />  */}
        </div>
      </div>

    </section>
  );
}

class App extends React.Component {
    componentDidMount() {
            
      $(document).ready(function(){
        $(".hero-image-wrapper").ripples({
          resolution: 200,
          perturbance: .004,
      });
    });
  }
}
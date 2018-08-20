import React, { Component } from 'react';
import { Parallax } from 'react-materialize';

class Splash extends Component {

  render() {
    return (
      <div className="splash">
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Go Race Info</h2>
            <p className="grey-text text-darken-3 lighten-3">Get the most up to date on racing events around you.</p>
          </div>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
      </div>
    );
  }
}

export default Splash;

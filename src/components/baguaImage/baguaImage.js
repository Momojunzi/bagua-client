import React from 'react';
import './baguaImage.css';
import posed from 'react-pose';

const BaguaImage = (props) => {

  let imageDivStyle={
    minHeight: "10vh",
    fontSize: "120%"
  }
  const imgStyle = {
    fontSize: "120%",
    width: "100%",
    maxWidth: "80%"
  }
  const hLinkStyle = {
    textDecoration: "none",
    color: "black"
  }
  // let config = {
  //   draggable: 'x',
  //   dragBounds: {left: -100, right: 100},
  //   start: {rotate: `${props.state.rotStart}deg`},
  //   end: {rotate: `${props.state.rotEnd}deg`}
  // }
  // const RotatingDiv = posed.div(config)

  return (
      // <RotatingDiv
      //   className="col-10 col-md-5 baguaImage"
      //   style={imageDivStyle}
      //   pose={props.state.rotating ? 'start' : 'end'}>
      //   <img className="img-fluid"
      //   style={imgStyle}
      //   src={"https://upload.wikimedia.org/wikipedia/commons/2/2e/Bagua-name-later.svg"}
      //   alt="bagua"/>
      // </RotatingDiv>
      <div
        id="rotDiv"
        className="col-10 col-md-5 baguaImage"
        style={imageDivStyle}>
        <img className="img-fluid"
          style={imgStyle}
          src={"https://upload.wikimedia.org/wikipedia/commons/2/2e/Bagua-name-later.svg"}
          alt="bagua"/>
      </div>
  )
}

export default BaguaImage;

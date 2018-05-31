import React, {Component} from 'react';
import './appTitle.css';
import Radium, {StyleRoot} from 'radium';

class AppTitle extends Component {

  render(){
    const links = [
      {name:"history", address:"/history"},
      {name:"video", address:"/video"},
      {name: "contact", address:"/contact"}
    ];
    const titleStyle = {
      fontSize:'120%',
      maxWidth: "98%",
      padding: "2vh 2vw 2vh",
      marginBottom: "10vh",
      color: "black",
      width: "100vw",
      height: "10vh",
      borderRadius: "0",
      fontFamily: "'Cabin', sans-serif",
      '@media (max-width: 767px) and (orientation: landscape)': {
        paddingBottom: '20vh'
      }
    };

    const tDivStyle = {
      '@media (max-width: 767px) and (orientation: landscape)': {
        marginLeft: '14%'
      },
      '@media (min-width: 768px)': {
        marginLeft: '2vw'
      }

    }

    const homeLink = {
      textDecoration: "none",
      color: "#e34",
      fonstSize:'120%',
      '@media (max-width: 370px)':{
        fontSize: '100%'
      }

    }
    const linkStyle = {
      textDecoration: 'none',
      fontFamily: "'Raleway', sans-serif"
    }
    const linkDivStyle = {
      paddingTop: "2vh",
      '@media (max-width: 767) and (orientation: landscape)': {
        marginBottom: '20vh'
      }
    }
    const bgStyle = {
      fontSize:"200%"
    }
    const linksList = links.map((link)=>{
        return (<a href={link.address} className="linkStyle" key={link.name}>
                <p className="tileLink">{link.name}</p>
              </a>)
    });
    return (

      <div className="container-fluid" style={titleStyle}>
        <div className="row justify-content-between">
          <div className="row col-10 offset-1 col-md-2 offset-md-0" style={tDivStyle}>
            <a href="/" style={homeLink}><h2 style={bgStyle}>Baguazhang</h2></a>
          </div>
          <div className="row col-10 offset-1 col-md-6 offset-md-0 justify-content-around" style={linkDivStyle}>{linksList}</div>
        </div>
      </div>

    )
  }
}

AppTitle = Radium(AppTitle)
export default AppTitle;

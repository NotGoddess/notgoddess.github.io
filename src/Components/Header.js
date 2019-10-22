import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var tagline = this.props.data.tagline;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var state= this.props.data.address.state;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} title={network.title}><i className={network.className}></i><span className="sr-only">{network.title}</span></a></li>
      })
    }

    return (
      <header id="home" className="dark">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h2>{state} based <span>{occupation}</span> {description}.</h2>
            <hr />
            <h3>{tagline}</h3>
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"><span className="sr-only">Next</span></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} title={network.title}><i className={network.className}></i><span className="sr-only">{network.title}</span></a></li>
      })
    }

    return (
      <footer className="dark">

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

           <p className="copyright">
            &copy; Copyright 2019 Sara Jacobson
           </p>

           <ul className="credits">
              <li>Inspired by <a href="http://www.timbakerdev.com/">Tim Baker</a></li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
              <li>Header Image by <a href="https://pixabay.com/users/FelixMittermeier-4397258/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2183637">Felix Mittermeier</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2183637">Pixabay</a></li>
           </ul>

        </div>
       <p className="scrollup"><a className="smoothscroll" href="#home"><i className="icon-up-circle"><span className="sr-only">Back To Top</span></i></a></p>
     </div>
  </footer>
    );
  }
}

export default Footer;

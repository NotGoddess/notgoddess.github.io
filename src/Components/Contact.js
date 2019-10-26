import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact" className="dark">

         <div className="row section-head">

            <div className="twelve columns header-col">

               <h2><span>{message}</span></h2>

            </div>
         </div>

         <div className="row">
            <div className="six columns">

              <div className="widget widget_contact">

                <h3>Address and Phone</h3>
                  <p className="address">
                     {name}<br />
                     {street} <br />
                     {city}, {state} {zip}<br />
                     {phone}<br />
                     {email}
                   </p>
             </div>
           </div>

            <aside className="six columns footer-widgets">
            <h3>Latest tweets by <a href="https://twitter.com/notgoddess">@NotGoddess</a></h3>
               <div className="widget widget_tweets">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="notgoddess"

                    theme="dark"
                    noFooter="1"
                    noHeader="1"
                    transparent="1"
                    options={{height: 400}}
                  />
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;

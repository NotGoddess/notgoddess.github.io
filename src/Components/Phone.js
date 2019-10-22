import React, { Component } from 'react';

class Phone extends Component {
  render() {

    if(this.props.data.phone){

      var phone= this.props.data.phone;
      return 'fred';
    }
    return ('mabel');
  }
}

export default Phone;

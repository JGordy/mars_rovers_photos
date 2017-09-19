import React, { Component } from 'react';

export default class GetImageButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button" style={{backgroundImage: "url(../images/strange_bullseyes.png)", paddingBottom: "20px"}}>
        <button type="submit" style={{border: "none", backgroundColor: "#fff", borderRadius: "5px"}}>Get Rover Images</button>
      </div>
    )
  }
}

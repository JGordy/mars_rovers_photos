import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let pStyle = {
      color: "slategray",
      fontSize: "14px",
      fontStyle: "italic"
    }
    let imageData = this.props.images;
    console.log(imageData.length);
    let roverImage = this.props.images.map((image) => {
      if (imageData !== []) {
        return <div key={image.id} className="singleImage"
                  style={{margin: "20px", backgroundColor: "#fff", borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px", flex: "1 1 25%", padding: "0px", height: "350px"}}>
                <img src={image.img_src} style={{width: "100%", height: "85%"}}/>
                <div className="aside" style={{height: "50px", backgroundColor: "#fff", borderBottomRightRadius: "10px", borderBottomLeftRadius: "10px"}}>
                  <p style={{fontSize: "14px", marginBottom: "0px", color: "indianred", fontStyle: "italic"}}>Launched: {image.rover.launch_date} <span style={{marginLeft: "25px"}}>Landed: {image.rover.landing_date}</span></p>
                  <p style={pStyle}>Earth date: {image.earth_date}</p>
                </div>
              </div>
      } else {
        return <h1 style={{marginTop: "150px"}} className="no_data">No pictures found on this date.</h1>
      }

    })
    return (
      <div className="imageContainer d-flex flex-wrap" style={{paddingTop: "10px", margin: "0px auto", width: "85%"}}>
        {roverImage}
      </div>
    )
  }
}

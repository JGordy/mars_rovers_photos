import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let pStyle = {
      color: "slategray"
    }
    let imageData = this.props.images;
    console.log(imageData.length);
    let roverImage = this.props.images.map((image) => {
      if (imageData.length !== []) {
        return <div key={image.id} className="singleImage"
                  style={{margin: "20px", backgroundColor: "#fff", boxShadow: "2px 2px 2px gray", borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px", flex: "1 1 25%", padding: "3px"}}>
                <img src={image.img_src} style={{width: "100%"}}/>
                <div className="aside" style={{height: "60px", backgroundColor: "#fff"}}>
                  <p style={{fontSize: "18px", marginBottom: "0px", color: "indianred", fontStyle: "italic"}}>{image.rover.name}</p> <p style={pStyle}>Earth date: {image.earth_date}</p>
                </div>
              </div>
      } else {
        return (<h1 className="no_data">No pictures found on this date.</h1>);
      }

    })
    return (
      <div className="imageContainer d-flex flex-wrap" style={{paddingTop: "100px", margin: "0px auto", width: "85%"}}>
        {roverImage}
      </div>
    )
  }
}

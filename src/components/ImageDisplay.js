import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let pStyle = {
      color: "steelblue"
    }
    console.log(this.props.images);
    let roverImage = this.props.images.map((image) => {
      return <div key={image.id} className="singleImage" style={{margin: "5px auto", backgroundColor: "#fff", boxShadow: "2px 2px 2px gray", borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px"}}>
              <img src={image.img_src} style={{width: "300px", margin: "4px"}}/>
              <div className="aside" style={{height: "75px", backgroundColor: "#fff"}}>
                <p style={{fontSize: "24px", marginBottom: "0px"}}>{image.rover.name}</p> <p style={pStyle}>Earth date: {image.earth_date}</p>
              </div>
            </div>
    })
    return (
      <div className="imageContainer d-flex flex-wrap" style={{paddingTop: "100px", margin: "0px auto", width: "85%"}}>
        {roverImage}
      </div>
    )
  }
}

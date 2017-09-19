import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.images);
    let roverImage = this.props.images.map((image) => {
      return <div key={image.id} className="singleImage" style={{margin: "0px auto"}}>
              <img src={image.img_src} style={{width: "450px", margin: "10px"}}/>
            </div>
    })
    return (
      <div className="imageContainer d-flex flex-wrap" >
        {roverImage}
      </div>
    )
  }
}

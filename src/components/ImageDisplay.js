import React, { Component } from 'react';

export default class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.images);
    let roverImage = this.props.images.map((image) => {
      return <div key={image.id} className="singleImage">
              <img src={image.img_src}/>
            </div>
    })
    return (
      <div className="imageContainer">
        {roverImage}
      </div>
    )
  }
}

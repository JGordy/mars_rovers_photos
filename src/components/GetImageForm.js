import React, { Component } from 'react';

import ImageDisplay from './ImageDisplay';
import GetImageButton from './GetImageButton';

const API_KEY = "oN9Ew3iedAkuVhQbsgl7GL78wg0fUQZseofFO6aK";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "",
      message: "Search for some awesome Mars rover pics above"
    }
    this.fetchRoverImage = this.fetchRoverImage.bind(this);
    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
  }

  handleRover(event) {
    this.setState({rover: event.target.value})
  };

  handleSol(event) {
    this.setState({sol: event.target.value})
  };

  handleCamera(event) {
    this.setState({camera: event.target.value})
  };

  fetchRoverImage = (event) => {
    event.preventDefault();
    this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data.photos);
      this.setState({images: data.photos, message: rove});
      if(this.state.images.length === 0) {
        this.setState({message: "There are no martian photos for this date. Try searching again"})
      }
    }).catch(error => {
      console.log(error);
      this.setState({message: "Whoops! Error fetching images."})
    })
  }

  render() {
    let labelStyle = {
      marginRight: "10px",
      fontSize: "24px"
    }
    return (
      <div className="imageForm">
        <form onSubmit={this.fetchRoverImage} style={{width: "100%", color: "white", height: "85px", paddingTop: "20px", display: "flex", justifyContent: "space-around", alignItems: "baseline", position: "fixed", boxShadow: "0px 4px 4px maroon"}}>
          <div className="selectRover">
            <label style={labelStyle} htmlFor="rover">Rover</label>
            <select onChange={this.handleRover} id="rover" value={this.state.value}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirit</option>
            </select>
          </div>
          <div className="selectCamera">
            <label style={labelStyle} htmlFor="camera">Camera Type</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
          </div>
          <div className="selectSol">
            <label style={labelStyle} htmlFor="sol">Martian Sol: 1000-2000</label>
            <input type="number" style={{borderRadius: "5px", backgroundColor: "#fff"}} onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
          </div>
          <GetImageButton fetchRoverImage={this.fetchRoverImage} />
        </form>
        <h1 style={{paddingTop: "100px"}}>{this.state.message}</h1>
        <ImageDisplay images={this.state.images}/>
      </div>
    )
  }
}

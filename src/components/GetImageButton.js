import React, { Component } from 'react';

export default class GetImageButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="button">
        <form onSubmit={this.props.fetchRoverImage}>
          <button type="submit">Get Rover Images</button>
        </form>
      </div>
    )
  }
}

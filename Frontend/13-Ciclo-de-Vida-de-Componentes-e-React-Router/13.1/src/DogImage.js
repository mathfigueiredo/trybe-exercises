import React from 'react';

class DogImage extends React.Component {
  constructor() {
    super();
    this.fetchDogImage = this.fetchDogImage.bind(this);

    this.state = { img: '' };
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  async fetchDogImage() {
    this.setState({ img: '' });
    const response = await (await fetch('https://dog.ceo/api/breeds/image/random')).json();

    this.setState({ img: response.message });
  }

  render() {
    return (
      <div>
        {this.state.img ? <img src={this.state.img} alt="dog" /> : 'Loading...'}
        <button type="button" onClick={this.fetchDogImage}>
          Fetch new
        </button>
      </div>
    );
  }
}

export default DogImage;

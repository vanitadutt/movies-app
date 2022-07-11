import React, { Component } from "react";


export class Banner extends Component {
  render() {
    return (
      
        <div className="card banner-card">
          <img src="https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg" className="card-img-top banner-img" alt="..." />

          <h5 className="card-title banner-title">Inception</h5>
          <p className="card-text banner-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      
    );
  }
}

export default Banner;

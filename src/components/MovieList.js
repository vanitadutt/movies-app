import React, { Component } from "react";
import axios from "axios";

export class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      hover: "",
      movies :[],
      currPage : 1,
      parr : [1]
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=01b4a8ada71d60f0407b90966fbb0169&language=en-US&page=${this.state.currPage}`
    );
    // console.log(res.data);
    let movieDataFromApi = res.data;
    this.setState({
      movies :[...movieDataFromApi.results] //.results bcz page will change everytime. result array is present in data object
    })
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=01b4a8ada71d60f0407b90966fbb0169&language=en-US&page=${this.state.currPage}`
    );
    let movieDataFromApi = res.data;
    this.setState({
      movies :[...movieDataFromApi.results] //.results bcz page will change everytime. result array is present in data object
    })
  }

  IncrementChange = () => {
    this.setState({
      currPage : this.state.currPage+1
    },this.changeMovies)
    
  }

  render() {
    // let movieData = movies.results;
    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>

        <div className="movies-list">
          {this.state.movies.map((movieElem) => {
            return (
              <div
                className="card movie-card"
                onMouseEnter={() => {
                  this.setState({ hover: movieElem.id });
                }}
                onMouseLeave={() => {
                  this.setState({ hover: "" });
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                  className="card-img-top movie-img"
                  alt="..."
                  style={{ height: "40vh", width: "20vw" }}
                />

                <h5 className="card-title movie-title">
                  {movieElem.original_title}
                </h5>

                {this.state.hover === movieElem.id && (
                  <a
                    href="www.google.com"
                    className="btn btn-primary movies-button"
                  >
                    Add to Favourites
                  </a>
                )}
              </div>
              
            );
          })}
          <button onClick={this.IncrementChange}>Inc</button>
        </div>
        


        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="www">
                  Previous
                </a>
              </li>
              
              {this.state.parr.map((value)=>{
                return (
                  <li class="page-item">
                  <a class="page-link" href="www">
                    {value}
                  </a>
                </li>
                );
              })}
              
              <li class="page-item">
                <a class="page-link" href="www">
                  Next
                </a>
              </li>
            </ul>
          </nav>

        </div>
        
      </>
    );
  }
}

export default MovieList;

import React from "react";
import axios from "axios";
import Movie from "../component/Movie"; // 받은 데이터를 활용하는 js파일
import "./Home.css";

class Home extends React.Component {

  state= {
    isLoading : true,
    movies : []
  }

  getMovies = async () => {
    // axios가 api를 요청할때까지 시간이 소요되므로 async await 키워드로 javascript에게 axios가 데이터를 받아오는 동안 좀만 기달려달라고 말하는거
    const { data : { data : { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    //{ data : { data : { movies } } }
    // 받아온 데이터 구조는 data 안에 data 안에 movies 
    // axios로 api를 받아온 json 데이터의 변수명이 movies일때, movies.data.data.movies로 확인 가능하지만,
    // { data: { data: { movies } } } 로도 같은 결과를 확인할 수 있다. <- 이 방법이 더 보기에 좋다.
    console.log(movies);

    // 받아온 데이터를 state 의 movies배열에 넣기
    // movies: movies 라고 해도 됨, 하지만 state의 이름과 변수명이 같을 경우 하나만 써도 된다.
    // movies 데이터를 다 받앙오면 isLoading을 false로 바꿔서 로딩을 끝낸다.
    this.setState( { movies, isLoading: false } );
    console.log(this.state.movies);
  }

  componentDidMount(){
    this.getMovies();
  }

  

  render() {
    const {isLoading, movies} = this.state;

    return(
      <section className="container">
        { isLoading 
          ? ( <div className="loader"><p className="txt">Loading</p></div> )
          : (
            <div className="contWrap">
              <div className="movies">
                {
                  movies.map( movie => {
                    console.log(movie);
                    return(
                      <Movie 
                      key = {movie.id}
                      id = {movie.id}
                      year = {movie.year}
                      title = {movie.title}
                      summary = {movie.summary}
                      poster = {movie.medium_cover_image}
                      genres = {movie.genres}
                      />
                    );
                  } )
                }
              </div>
            </div>
            )
        }
      </section>
    );
  }

}

export default Home;

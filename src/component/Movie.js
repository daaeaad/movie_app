import React from "react";
import propTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

// 이 파일에서는 state가 없기 때문에 class 컴포넌트를 사용하지 않고, function 컴포넌트를 사용한다.
function Movie( {id, year, title, summary, poster, genres} ) {
    return (
        <div className="movie_item">
            <div className="inner">
                <div className="img_frame"><img src={ poster } alt={ title } title={ title } /></div>
                <div className="txt_box">
                    <h4 className="txt title big bold">
                        <Link to="/detail">{ title }</Link>
                    </h4>
                    <span className="txt year small">{ year }</span>
                    <ul className="lst_genres">
                        { 
                        genres.map( (genres, idx) => {
                            return <li key={idx} className="txt genres small">{genres}</li>;
                        } )
                        }
                    </ul>
                    <p className="txt summary small color_grey">{ summary.slice(0, 200) } ...</p>
                </div>
            </div>
        </div>
    );
}

// Movie 컴포넌트가 받아올 인자를 정의한다.
Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}


export default Movie;
import './style.css';
import React from 'react';

const FilmInfo = (props) => {
    if (props.response === null) {
        return (
            <div >
                <h1 className="ui inverted center aligned icon header">
                    <i className="massive film icon"></i>
                    Search for a Movie
                </h1>
            </div>
        );
    }
    else
        if (props.response === "True") {
            return (
                <div className="ui inverted segment">
                    <div className="ui two column very relaxed grid">
                        <div className="left column, content-style">
                            <img className="ui middle aligned medium rounded image" src={props.poster} alt={props.title} />
                        </div>

                        <div className="column">
                            <h1>{props.title}({props.year})</h1>
                            <br />
                            {props.plot}
                            <h3>Casts :</h3>{props.actors}
                            <h3>Release Date :</h3>{props.release_date}
                            <h3>BoxOffice Collection :</h3>{props.boxoffice}

                            <h3>Director :</h3>{props.director}


                            <h3>Country :</h3>{props.country}


                            <h3>Genre :</h3>{props.genre}

                            <h3>imdb Rating :</h3>
                            {props.imdbRating}
                            <h3>Production :</h3>
                            {props.production}
                            <h3>Language :</h3>
                            {props.language}

                        </div>
                    </div>

                    <div className="ui inverted segment">
                        <div className="movie_card">
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={props.poster} />
                                    <h1>{props.title}</h1>
                                    <h4>{props.year}, {props.director}</h4>
                                    <span className="minutes">{props.release_date}</span>
                                    <p className="type">{props.genre}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">{props.plot}
                                    </p>
                                </div>
                                <div className="movie_social">
                                    <ul>
                                        <li><i className="material-icons">share</i></li>
                                        <li><i className="material-icons"></i></li>
                                        <li><i className="material-icons">chat_bubble</i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back ave_back"></div>
                        </div>
                    </div>
                </div>


            );
        }
        else {
            return (
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h1>Oops!</h1>
                        </div>
                        <h2 className="font-style"> Movie not found</h2>
                        <p>The movie you are looking for might have been wrong spelled or is temporarily unavailable.</p>
                        
                    </div>
                </div>
            );
        }
};



export default FilmInfo;
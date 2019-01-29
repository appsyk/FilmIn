import './style.css';
import React from 'react';

const FilmInfo = (props) => {
    if (props.response === null) {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Search</h1>
                    </div>
                    <h2 className="font-style">Search for a movie</h2>
                </div>
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

                        <div className="column" style={{ marginLeft: '80px' }}>
                            <h1>{props.title}({props.year})</h1>
                            <br />
                            {props.plot}
                            <h3>Casts :</h3>{props.actors}
                            
                            <h3>Release Date :</h3>{props.release_date}
                            
                            <h3>BoxOffice Collection :</h3>{props.boxoffice}

                            <h3>Director :</h3>{props.director}

                            <h3>Country :</h3>{props.country}

                            <h3>Genre :</h3>{props.genre}

                            <h3>imdb Rating :</h3>{props.imdbRating}
                            
                            <h3>Production :</h3>{props.production}

                            <h3>Language :</h3>{props.language}
                            
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
                        <h2 className="font-style">This Movie {props.title} not found</h2>
                        <p>The movie you are looking for might have been wrong spelled or is temporarily unavailable.</p>
                        
                    </div>
                </div>
            );
        }
};



export default FilmInfo;
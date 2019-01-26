import './style.css';
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import FilmInfo from './FilmInfo';
import Helper from './Helper';

class App extends React.Component{
    state = {
        title: null,
        poster: null,
        actors: null,
        country: null,
        director: null,
        release_date: null,
        year: null,
        genre: null,
        response: null,
        plot: null,
        boxoffice: null,
        imdbRating: null,
        production: null,
        language: null
    };

    onSearchSubmit = async (term) => {
        const response = await axios.get(`https://www.omdbapi.com/?t=${term}&apikey=aabca0d`,{
            params: {query: term },
        //     headers: {
        //         Authorization:apikey=fd574310cecaa419aa9e790f5d669f66
        //         'Client-Id '
        //     }
        });
            this.setState({
                title: response.data.Title,
                poster: response.data.Poster,
                actors: response.data.Actors,
                year: response.data.Year,
                director: response.data.Director,
                genre: response.data.Genre,
                country: response.data.Country,
                release_date: response.data.Released,
                response: response.data.Response,
                plot: response.data.Plot,
                boxoffice: response.data.BoxOffice,
                production: response.data.Production,
                imdbRating: response.data.imdbRating,
                language: response.data.Language
            });
    }

    render(){
        //console.log(response.data.Response);
        return(
            <div className="ui center center fluid container, search-style">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <FilmInfo
                    poster={this.state.poster}
                    actors={this.state.actors}
                    title={this.state.title}
                    year={this.state.year}
                    director={this.state.director}
                    genre={this.state.genre}
                    country={this.state.country}
                    release_date={this.state.release_date}
                    response = {this.state.response}
                    plot={this.state.plot}
                    boxoffice={this.state.boxoffice}
                    production={this.state.production}
                    imdbRating={this.state.imdbRating}
                    language={this.state.language}
                />
                <Helper />
            </div>
        );
    }
}

export default App;
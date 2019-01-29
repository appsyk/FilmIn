import './style.css';
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    renderHelper() {
        return (
            <div className="ui secondary menu">
                <form className="" onSubmit={this.onFormSubmit} >
                    <div className="ui left aligned category search" >
                        <div className="ui icon input">
                            <a href="SearchBar.js">
                                <h1 style={{ color: '#9CE9A4', fontSize: '35px', textAlign: 'left', marginLeft: '60px', marginTop: '30px' }}>FilmIn</h1>
                            </a>
                            <input
                                className="prompt"
                                type="text"
                                value={this.state.term}
                                onChange={e => this.setState({ term: e.target.value })}
                                placeholder="search for a movie..."
                                style={{ fontSize: '25px', width: '500px', height: '60px', marginLeft:'600px', marginTop: '20px' }}
                            />
                            <i className="big search icon" style={{ marginTop: '11px' }}></i>
                        </div>
                        <div className="results"></div>
                    </div>
                </form>

            </div >
        );
    }

    render() {
        return <div>{this.renderHelper()}</div>;
    }
}

export default SearchBar;
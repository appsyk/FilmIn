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
                    {/* <a className=" inverted item">
                        <i className="huge heartbeat icon"></i>
                        <h1 className="font-style">FilmIn</h1>
                    </a> */}
                    <div className="ui left aligned category search" >
                        <div className="ui icon input" style={{ marginLeft: 'px' }} >
                            <div className="ui icon input">
                                <input
                                    className="prompt"
                                    type="text"
                                    value={this.state.term}
                                    onChange={e => this.setState({ term: e.target.value })}
                                    placeholder="Search For a Movie..."
                                    style={{ width: '800px', height: '80px' }}
                                />
                                <i className="search icon"></i>
                            </div>
                            <div className="results"></div>
                        </div>
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
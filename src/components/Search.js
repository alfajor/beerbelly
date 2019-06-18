import React, {Component} from 'react';
import axios from 'axios';
import Results from './Results';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  fetchSome = () => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${this.state.query}`)
      .then(({data}) => {
        this.setState({results: data})
      })
  }

  fetchAll = () => {
    axios.get(`https://api.openbrewerydb.org/breweries/search?query=${this.state.query}`)
      .then(({data}) => {
        this.setState({results: data})
      })
  }

  clearResults = () => {
    this.setState({
      results: []
    })
  }

  manageInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if(this.state.query && this.state.query.length > 1) {
        if(this.state.query.length % 2 === 0) {
          this.fetchSome()
          this.fetchAll()
        }
      } else if(!this.state.query) {
          this.clearResults()
      }
    })
  }

  render() {
    return (
      <div className="search-wrapper">
        <h2>Search by city, state or name</h2>
        <form className="search-form">
          <input placeholder="Search breweries by city, state or name" ref={input => this.search = input} onChange={this.manageInputChange} />
        </form>

        <div className="results-grid">
          <Results results={this.state.results}/>
        </div>
      </div>
    );
  }

}

export default Search;

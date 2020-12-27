import React from 'react';
import { fechEndpoint } from './api';
import Results from './results';
import styled from 'styled-components';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      results: [],
      sorted: false
    }    
    this.sortResults = this.sortResults.bind(this)
  }

  fetchAll = () => {
    const fullResultsUrl = `https://api.openbrewerydb.org/breweries/search?query=${this.state.query}`;
    const sort = `&sort=city`

    const sortedURL = this.state.sorted === true ? fullResultsUrl + sort : fullResultsUrl;

    fechEndpoint(sortedURL)
     .then(data => { 
       return this.state.results = data
     })
  }

  sortResults = (e) => {
    e.preventDefault()
    this.setState({
      sorted: true
    })
    this.manageInputChange()
  }

  clearResults = () => {
    this.setState({
      results: [],
      sorted: false
    })
  }

  manageInputChange = () => {
    this.setState({
      query: this.search.value,
      visible: true
    }, () => {
      this.state.query && this.state.query.length > 1 ? this.fetchAll() : this.clearResults();
    })
  }

  render() {
    return (
      <SearchWrapper>
        <h2>Find breweries, brew pubs, and bottleshops</h2>
       
        <form>
          <input placeholder="Search breweries" ref={input => this.search = input} onChange={this.manageInputChange} onKeyDown={this.manageInputChange} />
        </form>

        <a href="#" onClick={this.sortResults}>Limit by city</a>

        <ResultsGrid>
          <Results results={this.state.results}/>
        </ResultsGrid>
      </SearchWrapper>
    );
  }
}

const SearchWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
  }

  input {
    padding: 10px 25px;
    width: 25%;
    border: 0px;
    border-radius: 3px;
    margin-bottom: 20px;
  }

  a {
    padding-bottom: 25px;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #fff;
  transition: 0.4s ease;

  ul > li {
    list-style: none;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 667px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Search;

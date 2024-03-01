import { useState } from 'react';
import Results from './results';
import styled from 'styled-components';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const fetchData = async (url) => {
    const data = await fetch(url);
    const res = await data.json();

    return res;
  }

  const searchHandler = async (e) => {
      setSearchQuery(e.target.value);
      const query = await fetchData(`https://api.openbrewerydb.org/v1/breweries/search?query={${searchQuery}}`)

      setSearchResults(query)
  }

  // TODO: filtering - type, city, state, name, postal

  return (
    <SearchWrapper>
      <h2>Find breweries, brew pubs, and bottleshops</h2>
       
      <SearchForm>
        <input placeholder="Search breweries" onChange={searchHandler} onKeyDown={searchHandler} />
      </SearchForm>

      <ResultsGrid>
        <Results results={searchResults}/>
      </ResultsGrid>
    </SearchWrapper>
  );

}

const SearchWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;

  input {
    padding: 10px 25px;
    width: 25%;
    border: 0px;
    border-radius: 3px;
    margin-bottom: 20px;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-self: center;
  transition: 0.4s ease;

  @media screen and (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 667px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;


export default Search;

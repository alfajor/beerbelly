import React from 'react';

const Results = (props) => {
  const options = props.results.map(r => (
      <ul className="results-list">
        <li key={r.id}>
          <strong>{r.name} - {r.brewery_type}</strong>
        </li>
        <li>{r.street}</li>
        <li>{r.city}, {r.state}</li>
        <li><a href={r.website_url} target="_blank" rel="noopener noreferrer">{r.website_url}</a></li>
      </ul>
  ))
  return options
}

export default Results;

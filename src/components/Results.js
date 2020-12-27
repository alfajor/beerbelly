import React from 'react';

const Results = (props) => {
  return ( 
        props.results.map(result => {  
          return(
            <>
            <ul>
              <li key={result.id}>
                <strong>{result.name} - {result.brewery_type}</strong>
              </li>
              <li>{result.street}</li>
              <li>{result.city}, {result.state}</li>
              <li><a href={result.website_url} target="_blank" rel="noopener noreferrer">{result.website_url}</a></li>
            </ul>
          </>
        );
      })
  );
}

export default Results;

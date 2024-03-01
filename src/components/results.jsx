import styled from 'styled-components';

const Results = ({results}) => {
  return ( 
        results.map(result => {  
          return(
            <>
              <ResultsText key={result.id}>
                <p>{result.name} - {result.brewery_type}</p>
                <p>{result.street}</p>
                <p>{result.city}, {result.state}</p>
                <p><a href={result.website_url} target="_blank" rel="noopener noreferrer">{result.website_url}</a></p>
              </ResultsText>
            </>
        );
      })
  );
}

const ResultsText = styled.div`
  padding: 10px 25px;
`;

export default Results;

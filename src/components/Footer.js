import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} <a href="http://computernoises.com" target="_blank" rel="noopener noreferrer">bv</a></p>
      <p>&nbsp; &#124; &nbsp;</p>
      <p>API credit: <a href="https://api.openbrewerydb.org/" target="_blank" rel="noopener noreferrer">https://api.openbrewerydb.org/</a></p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-flow: row;
  justify-content: center;   
  
  p {
    font-size: 12px;
  }
`;

export default Footer;

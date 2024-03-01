import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>API credit: <a href="https://api.openbrewerydb.org/" target="_blank" rel="noopener noreferrer">https://api.openbrewerydb.org/</a></p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-flow: row;
  justify-content: center;   
  margin-top: 50px;
  
  p {
    font-size: 12px;
  }
`;

export default Footer;

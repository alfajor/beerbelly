import styled from 'styled-components';
import logo from '../images/beermug.png';

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <h1>Beer Belly - Brewery Directory</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  img {
    animation: spinningLogo 5s ease-in-out;
    height: 40vmin;
    pointer-events: none;
  }

  @keyframes spinningLogo {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
`;

export default Header;

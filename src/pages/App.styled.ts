import styled from "styled-components";
import logo from '../images/logo.svg';
import burger from '../images/burger.svg';

export const CommonContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 744px) {
    width: 632px;
  }
  
  @media (max-width: 390px) {
    width: 342px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  background-color: #F9F6FF;
  padding: 38px 0;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 744px) {
    flex-direction: column;
    align-items: center;
    gap: 64px;
  }
`;

export const AppLogo = styled.div`
  background-image: url(${ logo });
  width: 148px;
  height: 24px;
`;

export const NavigationBlock = styled.div<{isHeader?: boolean}>`
  display: flex;
  gap: 56px;
  
  @media (max-width: 390px) {
    display: ${(props) => props.isHeader ? 'none' : 'flex'};
    align-items: center;
    flex-direction: ${props => !props.isHeader ? 'column' : 'row'};
  }
`;

export const HeaderBurger = styled.div`
  display: none;
  width: 32px;
  height: 32px;
  background-image: url(${burger});
  background-size: cover;
  background-repeat: no-repeat;
  
  @media (max-width: 390px) {
    display: block;
  }
`

export const NavigationItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryBlack};
  font-weight: 400;
  font-size: 24px;
`;

export const MainWrapper = styled.main`
   min-height: calc(100vh - 124px);
`;

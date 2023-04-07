import styled from "styled-components";
import logo from './images/logo.svg';

export const CommonContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 391px) and (max-width: 744px) {
    max-width: 632px;
  }

  @media (max-width: 390px) {
    max-width: 342px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
  position: relative;
  z-index: 10;
`;

export const FooterContainer = styled.div`
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
  
  @media (min-width: 320px) and (max-width: 544px) {
    display: ${(props) => props.isHeader ? 'none' : 'flex'};
    align-items: center;
    flex-direction: ${props => !props.isHeader ? 'column' : 'row'};
  }
`;

export const NavigationItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryBlack};
  font-weight: 400;
  font-size: 24px;
  position: relative;
  nmz-index: 10;
  cursor: pointer;
`;

export const MainWrapper = styled.main`
   min-height: calc(100vh - 124px);
`;

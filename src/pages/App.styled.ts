import styled from "styled-components";
import logo from '../images/logo.svg'

export const CommonContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 38px;
`;


export const AppLogo = styled.div`
  background-image: url(${ logo });
  width: 148px;
  height: 24px;
`;

export const NavigationBlock = styled.div`
  display: flex;
  gap: 56px;
`;

export const NavigationItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryBlack};
  font-weight: 400;
  font-size: 24px;
`;

export const MainWrapper = styled.main`
   min-height: calc(100vh - 124px);
`;

import styled from "styled-components";
import logo from "../images/logo.svg";
import humburger from "../images/humburger.svg";

export const CommonContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media (min-width: 744px) {
    width: 744px;
  }
  @media (max-width: 390px) {
    width: 390px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
  @media (max-width: 744px) {
    width: 632px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 56px 0px;
  }
  @media (max-width: 390px) {
    width: 338px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 28px 40px 24px;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 38px;
  background-color: #f9f6ff;
  @media (max-width: 744px) {
    height: 176px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
    margin: 0;
  }
  @media (max-width: 390px) {
    height: 288px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px;
  }
`;

export const AppLogo = styled.div`
  background-image: url(${logo});
  width: 148px;
  height: 24px;
`;

export const NavigationBlock = styled.div`
  display: flex;
  gap: 56px;
  @media (max-width: 744px) {
    display: flex;
    gap: 56px;
  }
  @media (max-width: 390px) {
    display: none;
  }
`;

export const NavigationBlockFooter = styled.div`
  display: flex;
  gap: 56px;
  @media (max-width: 744px) {
    display: flex;
    justify-content: space-between;
    gap: 32px;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const NavigationItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryBlack};
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 390px) {
    height: 32px;
  }
`;

export const NavigationItemFooter = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primaryBlack};
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 744px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 390px) {
    height: 32px;
  }
`;

export const HumburgerMenu = styled.div`
  display: none;
  @media (max-width: 390px) {
    background-image: url(${humburger});
    display: block;
    width: 24px;
    height: 18px;
  }
`;

export const MainWrapper = styled.main`
  min-height: calc(100vh - 124px);
`;

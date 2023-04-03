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
  background-image: url(${logo});
  width: 148px;
  height: 24px;
`;

export const NavigationBlock = styled.div<{ isHeader?: boolean }>`
  display: flex;
  gap: 56px;

  @media (max-width: 390px) {
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
  z-index: 10;
`;


export const HeaderBurger = styled.div<{ isOpen: boolean }>`
  display: none;
  width: 1.5rem;
  height: 1.5rem;
  position: fixed;
  top: 25px;
  right: 28px;

  div {
    width: 1.5rem;
    height: 0.1rem;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    background-color: ${({isOpen}) => isOpen ? '#000000' : '#333'};

    &:nth-child(1) {
      transform: ${({isOpen}) => isOpen ? 'rotate(47deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({isOpen}) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({isOpen}) => isOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({isOpen}) => isOpen ? 'rotate(-47deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 390px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`

export const BurgerNavigation = styled.div<{isOpen: boolean}>`
  display: none;
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #E5E5E5;
    position: fixed;
    transform: ${({isOpen}) => isOpen ? 'translateX(100%)' : 'translateY(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 380px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

export const MainWrapper = styled.main`
  min-height: calc(100vh - 124px);
`;

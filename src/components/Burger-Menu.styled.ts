import styled from "styled-components";
import logo from "../images/logo.svg";

export const BurgerWrapper = styled.div`
  display: none;

  @media (min-width: 320px) and (max-width: 544px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const Burger = styled.div<{isOpen: boolean}>`
  height: 3px;
  width: 100%;
  background-color: ${props => !props.isOpen ? '#000' : '#FDFDFD'};
  border-radius: 25%;
  position: relative;
  transition: 0.3s;
  z-index: 12;
  margin-top: 10px;
  
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: ${props => props.isOpen ? '0px' : '-10px'};
    left: 0px;
    height: 3px;
    width: 100%;
    transition: 0.3s;
    background-color: #000;
    border-radius: 25%;
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
    z-index: 12;
  }
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
    top: ${props => props.isOpen ? '0px' : '10px'};
    left: 0px;
    height: 3px;
    transition: 0.3s;
    width: 100%;
    background-color: #000;
    border-radius: 25%;
    z-index: 12;
  }
`;

export const MenuOverlay = styled.div<{isOpened: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: #FDFDFD;
  display: ${props => props.isOpened ? 'block' : 'none'};
  z-index: 11;
`;

export const BurgerAppLogo = styled.div`
  background-image: url(${ logo });
  width: 148px;
  height: 24px;
  position: absolute;
  top: 22px;
  left: 24px;
`;

export const BurgerNavigation = styled.div`
  position: relative;
  z-index: 12;
  margin: 88px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BurgerNavigationItem = styled.a`
  position: relative;
  z-index: 12;
  text-decoration: none;
  width: 100%;
  border-bottom: 1px solid #00000020;
  text-align: center;
  padding-bottom: 40px;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  color: #212121;
  font-size: 24px;
  
  &:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
    padding-top: 40px;
  }
`;

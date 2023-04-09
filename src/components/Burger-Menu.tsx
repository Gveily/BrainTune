import {
  Burger,
  BurgerAppLogo,
  BurgerNavigation,
  BurgerNavigationItem,
  BurgerWrapper,
  MenuOverlay
} from "./Burger-Menu.styled";
import { useState } from "react";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  }

  const handleNavigateToPricing = () => {
    window.location.href = '#early-bird-offer';
    setIsOpen(false);
  }

  return (
    <BurgerWrapper>
      <Burger isOpen={isOpen} onClick={handleClick}/>
      <MenuOverlay isOpened={isOpen}>
        <BurgerAppLogo/>

        <BurgerNavigation>
          <BurgerNavigationItem onClick={handleNavigateToPricing} target='_blank'>
            Pricing
          </BurgerNavigationItem>
          <BurgerNavigationItem href='mailto:gorskiipavel@gmail.com' target='_blank'>
            Contact
          </BurgerNavigationItem>
        </BurgerNavigation>
      </MenuOverlay>
    </BurgerWrapper>
  )
}
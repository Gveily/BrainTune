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

  return (
    <BurgerWrapper>
      <Burger isOpen={isOpen} onClick={handleClick}/>
      <MenuOverlay isOpened={isOpen}>
        <BurgerAppLogo/>

        <BurgerNavigation>
          <BurgerNavigationItem href='https://google.com/' target='_blank'>
            Pricing
          </BurgerNavigationItem>
          <BurgerNavigationItem href='https://google.com/' target='_blank'>
            Contact
          </BurgerNavigationItem>
        </BurgerNavigation>
      </MenuOverlay>
    </BurgerWrapper>
  )
}
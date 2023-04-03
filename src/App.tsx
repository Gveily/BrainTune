import {FC, useState} from "react";
import {
  AppLogo, BurgerNavigation,
  CommonContainer, FooterContainer, FooterWrapper, HeaderBurger,
  HeaderWrapper,
  MainWrapper,
  NavigationBlock,
  NavigationItem
} from "./App.styled";
import {Caption, StartTrainingButton, StartTrainingWrapper} from "./pages/Home/home.styled";

interface AppProps {
  children: string | JSX.Element | JSX.Element[];
}

const App: FC<AppProps> = ({children}) => {
  const isMobile = window.innerWidth < 391;
  const StartTrainingMobile = () => {
    return (
      <StartTrainingWrapper>
        <StartTrainingButton>
          Start training
        </StartTrainingButton>
        <Caption>
          🎵 no music instrument or training needed
        </Caption>
      </StartTrainingWrapper>
    )
  }



  const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
      <HeaderBurger isOpen={isOpen} onClick={() => setIsOpen(prevState => !prevState)}>
        <div/>
        <div/>
        <div/>
      </HeaderBurger>
      <RightNav isOpen={isOpen}/>
      </>
    )
  }

  const RightNav = ({isOpen}) => {
    return (
      <>
      <BurgerNavigation isOpen={isOpen}>
      <NavigationItem href='https://google.com/' target='_blank'>
        Pricing
      </NavigationItem>
    <NavigationItem href='https://google.com/' target='_blank'>
      Contact
    </NavigationItem>
      </BurgerNavigation>
      </>
    )
  }

  const Header = () => {
    return (
      <CommonContainer>
        <HeaderWrapper>
          <AppLogo/>
          <NavigationBlock isHeader>
            <NavigationItem href='https://google.com/' target='_blank'>
              Pricing
            </NavigationItem>
            <NavigationItem href='https://google.com/' target='_blank'>
              Contact
            </NavigationItem>
          </NavigationBlock>
          <Burger/>
        </HeaderWrapper>
      </CommonContainer>
    )
  }



  const Footer = () => {
    return (
      <FooterContainer>
        <CommonContainer>
          <FooterWrapper>
            <AppLogo/>
            <NavigationBlock>
              <NavigationItem href='https://google.com/' target='_blank'>
                Privacy
              </NavigationItem>
              <NavigationItem href='https://google.com/' target='_blank'>
                Refunds
              </NavigationItem>
              <NavigationItem href='https://google.com/' target='_blank'>
                Support
              </NavigationItem>
            </NavigationBlock>
          </FooterWrapper>
        </CommonContainer>
      </FooterContainer>
    )
  }

  return <>
    <Header/>
    <MainWrapper>
      {children}
    </MainWrapper>
    {isMobile && <StartTrainingMobile/>}
    <Footer/>
  </>
}

export default App;

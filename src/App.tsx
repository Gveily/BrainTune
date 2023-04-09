import { FC } from "react";
import {
  AppLogo,
  CommonContainer, FooterContainer, FooterWrapper,
  HeaderWrapper,
  MainWrapper,
  NavigationBlock,
  NavigationItem
} from "./App.styled";
import { Caption, StartTrainingButton, StartTrainingWrapper } from "./pages/Home/home.styled";
import { BurgerMenu } from "./components/Burger-Menu";

interface AppProps {
  children: string | JSX.Element | JSX.Element[];
}


const App: FC<AppProps> = ({ children }) => {
  const isMobile = window.innerWidth < 391;
  const StartTrainingMobile = () => {
    return (
      <StartTrainingWrapper>
        <StartTrainingButton onClick={ () => window.open('https://braintune.typeform.com/get-started') }>
          Start training
        </StartTrainingButton>
        <Caption>
          🎵 no music instrument or training needed
        </Caption>
      </StartTrainingWrapper>
    )
  }

  const Header = () => {
    return (
      <CommonContainer>
        <HeaderWrapper>
          <AppLogo/>
          <NavigationBlock isHeader>
            <NavigationItem target='_blank' onClick={ () => window.location.href = '#early-bird-offer' }>
              Pricing
            </NavigationItem>
            <NavigationItem target='_blank' href='mailto:gorskiipavel@gmail.com'>
              Contact
            </NavigationItem>
          </NavigationBlock>
          <BurgerMenu/>
        </HeaderWrapper>
      </CommonContainer>
    )
  }

  const Footer = () => {
    return (
      <FooterContainer id='early-bird-offer'>
        <CommonContainer>
          <FooterWrapper>
            <AppLogo/>
            <NavigationBlock>
              <NavigationItem href='' target='_blank'>
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
      { children }
    </MainWrapper>
    { isMobile && <StartTrainingMobile/> }
    <Footer/>
  </>
}

export default App;

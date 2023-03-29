import { FC } from "react";
import {
  AppLogo,
  CommonContainer, FooterWrapper,
  HeaderWrapper,
  MainWrapper,
  NavigationBlock,
  NavigationItem
} from "./pages/App.styled";

interface AppProps {
  children: string | JSX.Element | JSX.Element[];
}

const App: FC<AppProps> = ({ children }) => {
  const Header = () => {
    return (
      <CommonContainer>
        <HeaderWrapper>
          <AppLogo />
          <NavigationBlock>
            <NavigationItem href='https://google.com/' target='_blank'>
              Pricing
            </NavigationItem>
            <NavigationItem href='https://google.com/' target='_blank'>
              Contact
            </NavigationItem>
          </NavigationBlock>
        </HeaderWrapper>
      </CommonContainer>
    )
  }

  const Footer = () => {
    return <CommonContainer>
        <FooterWrapper>
            <AppLogo />
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
  }

  return <>
    <Header/>
    <MainWrapper>
      { children }
    </MainWrapper>
    <Footer/>
  </>
}

export default App;

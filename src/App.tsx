import { FC } from "react";
import {
  AppLogo,
  CommonContainer,
  FooterWrapper,
  HeaderWrapper,
  HumburgerMenu,
  MainWrapper,
  NavigationBlock,
  NavigationBlockFooter,
  NavigationItem,
  NavigationItemFooter,
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
            <NavigationItem href="https://google.com/" target="_blank">
              Pricing
            </NavigationItem>
            <NavigationItem href="https://google.com/" target="_blank">
              Contact
            </NavigationItem>
          </NavigationBlock>
          <HumburgerMenu />
        </HeaderWrapper>
      </CommonContainer>
    );
  };

  const Footer = () => {
    return (
      <CommonContainer>
        <FooterWrapper>
          <AppLogo />
          <NavigationBlockFooter>
            <NavigationItemFooter href="https://google.com/" target="_blank">
              Privacy
            </NavigationItemFooter>
            <NavigationItemFooter href="https://google.com/" target="_blank">
              Refunds
            </NavigationItemFooter>
            <NavigationItemFooter href="https://google.com/" target="_blank">
              Support
            </NavigationItemFooter>
          </NavigationBlockFooter>
        </FooterWrapper>
      </CommonContainer>
    );
  };

  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </>
  );
};

export default App;

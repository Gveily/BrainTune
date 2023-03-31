import styled from "styled-components";
import homebg from "../../images/home-bg.svg";
import checked from "../../images/checked-icon.svg";
import frame from "../../images/frame.svg";
import framemobile from "../../images/frame-mobile.svg";


export const HomeScreenContainer = styled.div`
  position: relative;
  z-index: 2;
`;

export const HomeBackground = styled.div`
  position: absolute;
  width: 662px;
  height: 627px;
  top: -140px;
  right: -140px;
  background-image: url(${homebg});
  background-repeat: no-repeat;
  background-size: cover;
  display: none;
  z-index: 1;

  @media (min-width: 744px) {
    display: block;
  }

  @media (max-width: 744px) {
    right: 0;
  }
`;

export const HomeHeading = styled.h1`
  font-size: 80px;
  font-weight: 600;
  margin-top: 106px;
  color: ${(props) => props.theme.colors.primaryBlack};
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 744px) {
    font-size: 48px;
  }

  @media (max-width: 390px) {
    font-size: 32px;
  }
`;

export const HomeHeadingItalic = styled.span`
  font-style: italic;
  color: ${(props) => props.theme.colors.primaryViolet};
`;

export const StartTrainingWrapper = styled.div<{ isHomeScreen?: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 20px;

  @media (max-width: 390px) {
    display: ${(props) => (props.isHomeScreen ? "none" : "flex")};
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    background-color: #fff;
    padding: 17px 0;
    z-index: 999;
  }
`;

export const StartTrainingButton = styled.button`
  text-align: center;
  background-color: ${(props) => props.theme.colors.primaryViolet};
  border: none;
  padding: 16px 110px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.buttonTextWhite};
  cursor: pointer;
  position: relative;
  z-index: 2;

  @media (max-width: 390px) {
    font-size: 18px;
    padding: 12px 120px;
  }
`;

export const Caption = styled.div`
  position: relative;
  z-index: 2;
  color: ${(props) => props.theme.colors.defaultBlack};
  font-size: 20px;

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 121px;

  @media (max-width: 744px) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 390px) {
    margin-top: 64px;
  }
`;

export const Card = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 24px;
  padding: 16px 56px;

  @media (max-width: 390px) {
    padding: 16px 30px 16px 72px;
  }

  @media (max-width: 744px) {
    padding: 16px 30px 16px 64px;
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${checked});
  width: 32px;
  height: 32px;

  @media (max-width: 390px) {
    left: 24px;
  }

  @media (max-width: 744px) {
    left: 16px;
  }
`;

export const CardTitle = styled.h3``;

export const CardDescription = styled.div`
  font-size: 20px;

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export const ImproveYourBrainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 744px) {
    gap: 44px;
  }
  @media (max-width: 390px) {
    gap: 64px;
  }
`;

export const ImproveYourBrainDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 150px;
  @media (max-width: 744px) {
    margin-top: 100px;
  }
  @media (max-width: 390px) {
    margin-top: 64px;
    gap: 16px;
  }
`;

export const ImproveTitle = styled.h2`
  font-size: 64px;
  text-align: center;
  color: ${(props) => props.theme.colors.shadeOfGrey};
  @media (max-width: 744px) {
    font-size: 36px;
  }
  @media (max-width: 390px) {
    font-size: 24px;
  }
`;

export const TitleSpan = styled.span`
  font-size: 64px;
  font-weight: 800;
  font-style: italic;
  @media (max-width: 744px) {
    font-size: 36px;
  }
  @media (max-width: 390px) {
    font-size: 24px;
  }
`;

export const ImproveSubtitle = styled.h5`
  text-align: center;
  font-size: 32px;
  font-family: 'SF Pro Display';
  font-weight: 400;
  line-height: 48px;
  color: ${(props) => props.theme.colors.shadeOfGrey};
  @media (max-width: 744px) {
    font-size: 24px;
    line-height: 36px;
  }
  @media (max-width: 390px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SubtitleSpan = styled.span`
  font-size: 32px;
  font-style: italic;
  font-weight: 600;
  @media (max-width: 744px) {
    font-size: 24px;
  }
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;


export const HowMusicalTraining = styled.div`
  background-image: url(${frame});
  width: 1000px;
  height: 549px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 744px) {
    width: 632px;
    height: 352px;
  }
  
  @media (max-width: 620px) {
    width: 440px;
    height: 260px;
  }
  
  @media (max-width: 390px) {
    background-image: url(${framemobile});
    width: 342px;
    height: 198px;
  }
`;

export const FoundersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 94px;
  margin-top: 150px;
  
  @media (max-width: 745px) {
    display: none;
  }
`;
export const FounderItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`;
export const FounderDescription = styled.div`
  font-style: italic;
`;
export const FounderPhoto = styled.div<{ photoUrl: string }>`
  width: 72px;
  height: 72px;
  background-image: url(${(props) => props.photoUrl});
  margin-top: 24px;
`;
export const FounderName = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  margin-top: 8px;
`;

export const FounderJob = styled.div`
  margin-top: 8px;
`;
export const FounderPosition = styled.div`
  width: 75%;
  text-align: center;
  margin-top: 8px;
`;

export const FounderSeparator = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -35px;
  width: 1px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.primaryBlack};
  opacity: 0.3;
`;

export const CarouselWrapper = styled.div`
  display: none;
  
  @media (max-width: 744px) {
    display: block
  }
`;
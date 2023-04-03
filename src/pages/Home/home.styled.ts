import styled from "styled-components";
import homebg from "../../images/home-bg.svg";
import checked from "../../images/checked-icon.svg";
import frame from "../../images/frame.svg";
import framemobile from "../../images/frame-mobile.svg";
import brain from '../../images/brain.svg';
import brainMobile from '../../images/brain-mobile.svg';


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
  background-image: url(${ homebg });
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
  color: ${ (props) => props.theme.colors.primaryBlack };
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
  color: ${ (props) => props.theme.colors.primaryViolet };
`;

export const StartTrainingWrapper = styled.div<{ isHomeScreen?: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 20px;
  position: relative;
  z-index: 2;

  @media ( min-width: 320px) and (max-width: 744px) {
    transform: translateX(0px);
  }

  @media (max-width: 390px) {
    display: ${ (props) => (props.isHomeScreen ? "none" : "flex") };
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
  background-color: ${ (props) => props.theme.colors.primaryViolet };
  border: none;
  padding: 16px 110px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 500;
  color: ${ (props) => props.theme.colors.buttonTextWhite };
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
  color: ${ (props) => props.theme.colors.defaultBlack };
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
  background: ${ (props) => props.theme.colors.cardBackground };
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
  background-image: url(${ checked });
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
  color: ${ (props) => props.theme.colors.shadeOfGrey };
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
  color: ${ (props) => props.theme.colors.shadeOfGrey };
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
  background-image: url(${ frame });
  width: 1000px;
  height: 549px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 100px;

  @media (max-width: 744px) {
    width: 632px;
    height: 352px;
  }

  @media (max-width: 620px) {
    width: 440px;
    height: 260px;
  }

  @media (max-width: 390px) {
    background-image: url(${ framemobile });
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
  background-image: url(${ (props) => props.photoUrl });
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
  background-color: ${ (props) => props.theme.colors.primaryBlack };
  opacity: 0.3;

  @media (min-width: 320px) and (max-width: 744px) {
    display: none !important;
  }
`;

export const CarouselWrapper = styled.div`
  display: none;

  @media (min-width: 320px) and (max-width: 744px) {
    display: block;
  }
`;

export const WorkoutContainer = styled.div`
  background-color: ${ props => props.theme.colors.fullBodyBackground };
  border-radius: 50px;
  margin-top: 154px;
  padding: 64px 32px;

  @media (min-width: 320px) and (max-width: 390px) {
    background-color: #FDFDFD;
    padding: 0;
    margin-top: 96px;
  }
`;

export const WorkoutHeading = styled.h1`
  text-align: center;
  font-family: 'SF Pro Display';
  font-style: italic;
  font-weight: 800;
  font-size: 64px;
  color: ${ props => props.theme.colors.primaryBlack };

  @media (max-width: 744px) {
    font-size: 36px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
  }
`;

export const WorkoutSubheading = styled.h1`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;

  @media (max-width: 744px) {
    font-size: 36px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
    display: inline;
  }
`;

export const WorkoutDescription = styled.p`
  text-align: center;
  color: ${ props => props.theme.colors.primaryBlack };
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  margin-top: 32px;

  @media (max-width: 744px) {
    font-size: 24px;
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export const WorkoutBrainAndList = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 44px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (min-width: 320px) and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const WorkoutBrainImage = styled.div`
  background-image: url(${ brain });
  width: 350px;
  height: 306px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;


  @media (min-width: 320px) and (max-width: 390px) {
    background-image: url(${ brainMobile });
    width: 336px;
    height: 294px;
  }
`;

export const WorkoutList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 484px;
`;

export const WorkoutListItem = styled.div`
  margin-bottom: 28px;
  position: relative;
  word-break: break-word;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 320px) and (max-width: 390px) {
    margin-left: 40px;
  }
`;

export const WorkoutListItemNumber = styled.div<{ color: string }>`
  height: 44px;
  width: 44px;
  background-color: #fff;
  color: ${ props => props.color ?? '#000' };
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  font-family: 'SF Pro Display';
  position: absolute;
  left: -66px;
  top: -5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 320px) and (max-width: 390px) {
    top: -3px;
    left: -42px;
    width: 24px;
    height: 24px;
  }
`;

export const WorkoutListItemText = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #212121;

  @media (min-width: 320px) and (max-width: 390px) {
    font-size: 16px;
  }
`;

export const UsingMusicContainer = styled.div`
  border-radius: 50px;
  margin-top: 150px;

  @media (min-width: 320px) and (max-width: 390px) {
    background-color: #FDFDFD;
    padding: 0;
    margin-top: 96px;
  }
`;

export const UsingMusicHeading = styled.h1`
  text-align: center;
  font-family: 'SF Pro Display';
  font-style: italic;
  font-weight: 800;
  font-size: 64px;
  color: ${ props => props.theme.colors.primaryBlack };

  @media (max-width: 744px) {
    font-size: 36px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
  }
`;

export const UsingMusicSubheading = styled.h1`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;

  @media (max-width: 744px) {
    font-size: 36px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
    display: inline;
  }
`;

export const UsingMusicDescription = styled.p`
  text-align: center;
  color: ${ props => props.theme.colors.primaryBlack };
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  margin-top: 32px;

  @media (max-width: 744px) {
    font-size: 24px;
  }

  @media (max-width: 390px) {
    font-size: 16px;
  }
`;

export const UsingMusicItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 64px;
  
  @media (min-width: 320px) and (max-width: 564px) {
    justify-content: center;
    flex-direction: column;
  }
  
  @media (min-width: 320px) and (max-width: 979px) {
    gap: 16px;
  }
`;

export const UsingMusicItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 55px;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  gap: 32px;
  border-radius: 24px;

  @media (min-width: 565px) and (max-width: 979px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }
  
  @media (min-width: 320px) and (max-width: 564px) {
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }
`;

export const UsingMusicItemImage = styled.div<{ imagePath: string, tabletImagePath: string }>`
  width: 71px;
  height: 71px;
  background-image: url(${ props => props.imagePath });
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 565px) and (max-width: 979px) {
    background-image: url(${ props => props.tabletImagePath });
    width: 40px;
    height: 40px;
  }
`;

export const UsingMusicItemTextWrapper = styled.div`
  max-width: 265px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 565px) and (max-width: 979px) {
    align-items: center;
    max-width: 276px;
    text-align: center;
  }

  @media (min-width: 320px) and (max-width: 564px) {
    flex-direction: column;
    align-items: center;
    max-width: 308px;
  }
`;
export const UsingMusicItemHeading = styled.h4`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;

  @media (min-width: 565px) and (max-width: 979px) {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
  }

  @media (min-width: 320px) and (max-width: 564px) {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }
`;
export const UsingMusicItemDescription = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  @media (min-width: 565px) and (max-width: 979px) {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }

  @media (min-width: 320px) and (max-width: 564px) {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
`;

export const IsBraintuneContainer = styled.div`
  padding: 64px 32px;
  background-color: #F9F6FF;
  border-radius: 50px;
  margin-top: 154px;

  @media (min-width: 320px) and (max-width: 564px) {
    padding: 32px 24px;
    border-radius: 16px;
  }
`;

export const IsBraintuneHeading = styled.h1`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  color: ${props => props.theme.colors.primaryBlack};
  text-align: center;
  
  @media (min-width: 565px) and (max-width: 979px) {
    font-size: 36px;
  }
  
  @media (min-width: 320px) and (max-width: 564px) {
    font-size: 24px;
  }
`;

export const IsBraintuneSubheading = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: ${props => props.theme.colors.primaryBlack};
  margin-top: 64px;

  @media (min-width: 565px) and (max-width: 979px) {
    font-size: 24px;
  }

  @media (min-width: 320px) and (max-width: 564px) {
    font-size: 20px;
  }
`;

export const IsBraintuneParagraph = styled.p`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${props => props.theme.colors.primaryBlack};
  margin-top: 24px;

  @media (min-width: 565px) and (max-width: 979px) {
    font-size: 20px;
  }

  @media (min-width: 320px) and (max-width: 564px) {
    font-size: 16px;
  }
`;
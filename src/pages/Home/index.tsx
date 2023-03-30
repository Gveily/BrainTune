import { FC } from "react";
import { CommonContainer } from "../App.styled";
import {
  FollowingSection,
  FulfilledRequirements,
  HomeStartButton,
  HomeStartScreen,
  HomeSubtitle,
  HomeSubtitleDescription,
  HomeSubtitleInfo,
  HomeTitle,
  HomeTitleSpan,
  JackDawIcon,
  NoteLogo,
  RequirementsInfo,
  RequirementsList,
  RequirementsSubtitle,
  RequirementsTitle,
  RequirementsWrapper,
} from "./Home.styled";

const Home: FC = () => {
  const HomeScreen = () => {
    return (
      <CommonContainer>
        <HomeStartScreen>
          <FollowingSection>
            <HomeTitle>
              Keep your <HomeTitleSpan>mind young</HomeTitleSpan> and sharp
              through <HomeTitleSpan>music</HomeTitleSpan>
            </HomeTitle>
            <HomeSubtitleInfo>
              <HomeStartButton>Start training</HomeStartButton>
              <HomeSubtitle>
                <NoteLogo />
                <HomeSubtitleDescription>
                  no music instrument or training needed
                </HomeSubtitleDescription>
              </HomeSubtitle>
            </HomeSubtitleInfo>
          </FollowingSection>
          <FulfilledRequirements>
            <RequirementsList>
              <RequirementsWrapper>
                <JackDawIcon />
                <RequirementsInfo>
                  <RequirementsTitle>Research-based</RequirementsTitle>
                  <RequirementsSubtitle>
                    Backed by latest scientific findings
                  </RequirementsSubtitle>
                </RequirementsInfo>
              </RequirementsWrapper>
            </RequirementsList>
            <RequirementsList>
              <RequirementsWrapper>
                <JackDawIcon />
                <RequirementsInfo>
                  <RequirementsTitle>Personalized</RequirementsTitle>
                  <RequirementsSubtitle>
                    Adapts to your goals and progress
                  </RequirementsSubtitle>
                </RequirementsInfo>
              </RequirementsWrapper>
            </RequirementsList>
            <RequirementsList>
              <RequirementsWrapper>
                <JackDawIcon />
                <RequirementsInfo>
                  <RequirementsTitle>For every age</RequirementsTitle>
                  <RequirementsSubtitle>
                    It’s never too late to get into music
                  </RequirementsSubtitle>
                </RequirementsInfo>
              </RequirementsWrapper>
            </RequirementsList>
          </FulfilledRequirements>
        </HomeStartScreen>
      </CommonContainer>
    );
  };

  return (
    <>
      <HomeScreen />
    </>
  );
};

export default Home;

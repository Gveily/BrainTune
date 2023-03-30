import { FC } from "react";
import { CommonContainer } from "../App.styled";
import {
  Caption,
  Card,
  CardDescription,
  CardIcon,
  CardsContainer,
  CardTitle,
  HomeBackground,
  HomeHeading,
  HomeHeadingItalic,
  HomeScreenContainer,
  ImproveSubtitle,
  ImproveTitle,
  ImproveYourBrainDescription,
  ImproveYourBrainWrapper,
  StartTrainingButton,
  StartTrainingWrapper,
  SubtitleSpan,
  TitleSpan,
} from "./home.styled";

const Home: FC = () => {
  const ImproveYourBrain = () => {
    return (
      <ImproveYourBrainWrapper>
        <ImproveYourBrainDescription>
          <ImproveTitle>
            Improve your brain <br /> in <TitleSpan>a unique</TitleSpan> way
          </ImproveTitle>
          <ImproveSubtitle>
            We’ve partnered with experts in neurology and music education to
            design a cognitive training program that{" "}
            <SubtitleSpan>
              engages both hemispheres of the brain through the unique power of
              music.
            </SubtitleSpan>
          </ImproveSubtitle>
        </ImproveYourBrainDescription>
      </ImproveYourBrainWrapper>
    );
  };

  const StartScreen = () => {
    const cards = [
      {
        id: 1,
        label: "Research-based",
        description: "Backed by latest scientific findings",
      },
      {
        id: 2,
        label: "Personalized",
        description: "Adapts to your goals and progress",
      },
      {
        id: 3,
        label: "For every age",
        description: "It’s never too late to get into music",
      },
    ];

    return (
      <HomeScreenContainer>
        <HomeHeading>
          Keep your <HomeHeadingItalic>mind young</HomeHeadingItalic> and sharp
          through <HomeHeadingItalic>music</HomeHeadingItalic>
        </HomeHeading>
        <StartTrainingWrapper isHomeScreen>
          <StartTrainingButton>Start training</StartTrainingButton>
          <Caption>🎵 no music instrument or training needed</Caption>
        </StartTrainingWrapper>
        <HomeBackground />

        <CardsContainer>
          {cards.map((item) => {
            return (
              <Card key={item.id}>
                <CardIcon />
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            );
          })}
        </CardsContainer>
      </HomeScreenContainer>
    );
  };

  return (
    <CommonContainer
      style={{
        position: "relative",
      }}
    >
      <StartScreen />
      <ImproveYourBrain />
    </CommonContainer>
  );
};

export default Home;

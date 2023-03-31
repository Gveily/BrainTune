import { FC } from "react";
import { CommonContainer } from "../../App.styled";
import {
  Caption,
  Card,
  CardDescription,
  CardIcon,
  CardsContainer,
  CardTitle, CarouselWrapper,
  FounderDescription,
  FounderItem,
  FounderJob, FounderName,
  FounderPhoto,
  FounderPosition,
  FounderSeparator,
  FoundersWrapper,
  HomeBackground,
  HomeHeading,
  HomeHeadingItalic,
  HomeScreenContainer,
  HowMusicalTraining,
  ImproveSubtitle,
  ImproveTitle,
  ImproveYourBrainDescription,
  ImproveYourBrainWrapper,
  StartTrainingButton,
  StartTrainingWrapper,
  SubtitleSpan,
  TitleSpan,
} from "./home.styled";
import founder1 from '../../images/founder-1.svg';
import founder2 from '../../images/founder-2.svg';
import founder3 from '../../images/founder-3.svg';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

interface IFounder {
  id: number,
  name: string,
  position: string,
  job: string | null,
  description: string,
  photoUrl: string,
}

const Home: FC = () => {
  const ImproveYourBrain = () => {
    const founders: Array<IFounder> = [
      {
        id: 1,
        name: 'Oliver Sacks',
        position: 'Neurologist',
        job: 'Writer',
        description: '“There is little doubt that regular active participation in music, may stimulate development of many different areas of the brain."',
        photoUrl: founder1
      },
      {
        id: 2,
        name: 'William E. LaMonthe',
        position: 'C.E.O',
        job: 'Xerox Company',
        description: '“There is a practical reason for music education: it teaches people to think, to solve problems, to take risks, to be an entrepreneur and innovator.”',
        photoUrl: founder2
      },
      {
        id: 3,
        name: 'Sarah Wilson',
        position: 'Professor of Psychological Sciences',
        job: null,
        description: '“You’re not only exercising the music-related bits, you’re also exercising your memory, the language system, you’re exercising all these other networks.”',
        photoUrl: founder3
      },
    ];

    return (
      <ImproveYourBrainWrapper>
        <ImproveYourBrainDescription>
          <ImproveTitle>
            Improve your brain <br/> in <TitleSpan>a unique</TitleSpan> way
          </ImproveTitle>
          <ImproveSubtitle>
            We’ve partnered with experts in neurology and music education to
            design a cognitive training program that{ " " }
            <SubtitleSpan>
              engages both hemispheres of the brain through the unique power of
              music.
            </SubtitleSpan>
          </ImproveSubtitle>
        </ImproveYourBrainDescription>
        <HowMusicalTraining/>
        <FoundersWrapper>
          { founders.map((el, index) => {
            return (
              <FounderItem key={ el.id }>
                <FounderDescription>
                  { el.description }
                </FounderDescription>
                <FounderPhoto photoUrl={ el.photoUrl }/>
                <FounderName>
                  { el.name }
                </FounderName>
                <FounderPosition>{ el.position }</FounderPosition>
                <FounderJob>{ el.job }</FounderJob>
                <FounderSeparator style={ {
                  display: index === founders.length - 1 ? 'none' : 'block'
                } }/>
              </FounderItem>
            )
          }) }
        </FoundersWrapper>

        <CarouselWrapper>
          <Slider {...settings}>
            <div>123</div>
            <div>123</div>
            <div>123</div>
          </Slider>
        </CarouselWrapper>

        <StartTrainingWrapper isHomeScreen style={ {
          transform: 'translateX(-30px)'
        } }>
          <StartTrainingButton>Start training</StartTrainingButton>
          <Caption>🎵 no music instrument or training needed</Caption>
        </StartTrainingWrapper>
        <HomeBackground/>
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
        <HomeBackground/>

        <CardsContainer>
          { cards.map((item) => {
            return (
              <Card key={ item.id }>
                <CardIcon/>
                <CardTitle>{ item.label }</CardTitle>
                <CardDescription>{ item.description }</CardDescription>
              </Card>
            );
          }) }
        </CardsContainer>
      </HomeScreenContainer>
    );
  };

  return (
    <CommonContainer
      style={ {
        position: "relative",
      } }
    >
      <StartScreen/>
      <ImproveYourBrain/>
    </CommonContainer>
  );
  };

  export default Home;

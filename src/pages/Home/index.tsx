import {FC} from "react";
import {CommonContainer} from "../../App.styled";
import {
  Caption,
  Card,
  CardDescription,
  CardIcon,
  CardsContainer,
  CardTitle,
  CarouselWrapper,
  FounderDescription,
  FounderItem,
  FounderJob,
  FounderName,
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
  WorkoutBrainImage,
  WorkoutBrainAndList,
  WorkoutContainer,
  WorkoutDescription,
  WorkoutHeading,
  WorkoutList,
  WorkoutListItem,
  WorkoutListItemNumber,
  WorkoutListItemText,
  WorkoutSubheading,
  UsingMusicContainer,
  UsingMusicHeading,
  UsingMusicSubheading,
  UsingMusicDescription,
  UsingMusicItems,
  UsingMusicItem,
  UsingMusicItemImage,
  UsingMusicItemTextWrapper,
  UsingMusicItemHeading,
  UsingMusicItemDescription,
  IsBraintuneContainer,
  IsBraintuneHeading,
  IsBraintuneSubheading,
  IsBraintuneParagraph,
  TrainingPlanContainer,
  TrainingPlanHeading,
  TrainingPlanSubheading,
  TrainingPlanGoals,
  TrainingPlanList,
  TrainingPlanItem,
  TrainingPlanCheck,
  TrainingPlanText,
  TrainingPlanImage,
  PreorderContainer,
  PreorderHeading,
  PreorderSubheading,
  PreorderCard,
  PreorderCardDescription,
  PreorderCheckboxGroup,
  PreorderCardHeading,
  CheckboxLabel,
  PreorderPrice,
  PreorderMainPrice,
  PreorderDiscountPrice,
  PreorderButton,
  PreorderButtonContainer,
  PreorderGuaranties,
  GuardIcon, PreorderGuarantiesText, ContactText, ContactUsButton, PreorderField, PreorderCheckbox,
} from "./home.styled";
import founder1 from '../../images/founder-1.svg';
import founder2 from '../../images/founder-2.svg';
import founder3 from '../../images/founder-3.svg';
import cardBrain from '../../images/card-brain.svg';
import cardBulb from '../../images/card-bulb.svg';
import cardCreativity from '../../images/card-creativity.svg';
import cardHand from '../../images/card-hand.svg';
import cardPerson from '../../images/card-person.svg';
import cardEar from '../../images/card-ear.svg';
import cardBrain40 from '../../images/card-brain-40.svg';
import cardBulb40 from '../../images/card-bulb-40.svg';
import cardCreativity40 from '../../images/card-creativity-40.svg';
import cardHand40 from '../../images/card-hand-40.svg';
import cardPerson40 from '../../images/card-person-40.svg';
import cardEar40 from '../../images/card-ear-40.svg';
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Navigation, Pagination} from "swiper";

interface IFounder {
  id: number,
  name: string,
  position: string,
  job: string | null,
  description: string,
  photoUrl: string,
}

const Home: FC = () => {
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
          {cards.map((item) => {
            return (
              <Card key={item.id}>
                <CardIcon/>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            );
          })}
        </CardsContainer>
      </HomeScreenContainer>
    );
  };

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
            design a cognitive training program that{" "}
            <SubtitleSpan>
              engages both hemispheres of the brain through the unique power of
              music.
            </SubtitleSpan>
          </ImproveSubtitle>
        </ImproveYourBrainDescription>
        <HowMusicalTraining/>
        <FoundersWrapper>
          {founders.map((el, index) => {
            return (
              <FounderItem key={el.id}>
                <FounderDescription>
                  {el.description}
                </FounderDescription>
                <FounderPhoto photoUrl={el.photoUrl}/>
                <FounderName>
                  {el.name}
                </FounderName>
                <FounderPosition>{el.position}</FounderPosition>
                <FounderJob>{el.job}</FounderJob>
                <FounderSeparator style={{
                  display: index === founders.length - 1 ? 'none' : 'block'
                }}/>
              </FounderItem>
            )
          })}
        </FoundersWrapper>

        <CarouselWrapper>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            navigation
            centeredSlides
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            className='swiper'
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {founders.map((el, index) => {
              return (
                <SwiperSlide className='swiper-slider-item'>
                  <FounderItem key={el.id}>
                    <FounderDescription>
                      {el.description}
                    </FounderDescription>
                    <FounderPhoto photoUrl={el.photoUrl}/>
                    <FounderName>
                      {el.name}
                    </FounderName>
                    <FounderPosition>{el.position}</FounderPosition>
                    <FounderJob>{el.job}</FounderJob>
                    <FounderSeparator style={{
                      display: index === founders.length - 1 ? 'none' : 'block'
                    }}/>
                  </FounderItem>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </CarouselWrapper>

        <StartTrainingWrapper isHomeScreen className='transformX30'>
          <StartTrainingButton>Start training</StartTrainingButton>
          <Caption>🎵 no music instrument or training needed</Caption>
        </StartTrainingWrapper>
        <HomeBackground/>
      </ImproveYourBrainWrapper>
    );
  };

  const WorkoutForBrain = () => {
    const workoutList = [
      {
        id: 1,
        color: '#008DAB',
        text: 'Planning • Decision making • Logic • Speech'
      },
      {
        id: 2,
        color: '#38629D',
        text: 'Memory • Stress Tolerance • Emotional behavior and motivation'
      },
      {
        id: 3,
        color: '#B290FF',
        text: 'Auditory perception and processing'
      },
      {
        id: 4,
        color: '#008DAB',
        text: 'Touch Perception • Language Processing'
      },
      {
        id: 5,
        color: '#999999',
        text: 'Coordination between hemispheres, sensory and motor areas'
      },
      {
        id: 6,
        color: '#B290FF',
        text: 'Visual perception and processing'
      },
      {
        id: 7,
        color: '#B290FF',
        text: 'Motor learning and coordination'
      }
    ];

    return (
      <WorkoutContainer>
        <WorkoutHeading>
          <WorkoutSubheading>“Full body” workout</WorkoutSubheading>{' '}
          for your brain
        </WorkoutHeading>
        <WorkoutDescription>
          Actively engaging in music is like hitting the gym but for your brain. It stimulates virtually all areas of
          your brain at once, like no other activity.
        </WorkoutDescription>

        <WorkoutBrainAndList>
          <WorkoutBrainImage/>
          <WorkoutList>
            {
              workoutList.map((el) => {
                return (
                  <WorkoutListItem key={el.id}>
                    <WorkoutListItemNumber color={el.color}>
                      {el.id}
                    </WorkoutListItemNumber>
                    <WorkoutListItemText>{el.text}</WorkoutListItemText>
                  </WorkoutListItem>
                )
              })
            }
          </WorkoutList>
        </WorkoutBrainAndList>
      </WorkoutContainer>
    )
  };

  const UsingMusic = () => {
    const items = [
      {
        id: 1,
        imagePath: cardBrain,
        tabletImagePath: cardBrain40,
        title: 'Neural Plasticity',
        description: 'Become better at learning new skills and adapting to challenges.'
      },
      {
        id: 2,
        imagePath: cardBulb,
        tabletImagePath: cardBulb40,
        title: 'Cognitive Abilities',
        description: 'Boost your attention, memory, focus, and problem solving skills. '
      },
      {
        id: 3,
        imagePath: cardEar,
        tabletImagePath: cardEar40,
        title: 'Hearing',
        description: 'Mitigate auditory decline, improve your hearing and comprehension.'
      },
      {
        id: 4,
        imagePath: cardPerson,
        tabletImagePath: cardPerson40,
        title: 'Mental Well-Being',
        description: 'Enhance your mood, relieve stress and anxiety. Harness your emotions.'
      },
      {
        id: 5,
        imagePath: cardCreativity,
        tabletImagePath: cardCreativity40,
        title: 'Creativity and Motivation',
        description: 'Enhance your out-of-the box thinking and tap into your inspiration.'
      },
      {
        id: 6,
        imagePath: cardHand,
        tabletImagePath: cardHand40,
        title: 'Motor Skills',
        description: 'Better your dexterity and hand-eye coordination.'
      },
    ]

    return (
      <UsingMusicContainer>
        <UsingMusicHeading>
          <UsingMusicSubheading>Using Music For</UsingMusicSubheading>{' '}
          Non-Musical Goals
        </UsingMusicHeading>
        <UsingMusicDescription>
          BrainTune’s training program is expertly designed to engage key areas of your brain through active
          participation in music. This helps build new neural connections improving your abilities way beyond the
          musical domain.
        </UsingMusicDescription>
        <UsingMusicItems>
          {items.map(el => {
            return (
              <UsingMusicItem key={el.id}>
                <UsingMusicItemImage imagePath={el.imagePath} tabletImagePath={el.tabletImagePath}/>
                <UsingMusicItemTextWrapper>
                  <UsingMusicItemHeading>
                    {el.title}
                  </UsingMusicItemHeading>
                  <UsingMusicItemDescription>
                    {el.description}
                  </UsingMusicItemDescription>
                </UsingMusicItemTextWrapper>
              </UsingMusicItem>
            )
          })}
        </UsingMusicItems>
        <StartTrainingWrapper isHomeScreen>
          <StartTrainingButton>Choose your goals</StartTrainingButton>
          <Caption>🎵 no music instrument or training needed</Caption>
        </StartTrainingWrapper>
        <HomeBackground/>
      </UsingMusicContainer>
    )
  };

  const IsBraintuneForMe = () => {
    return (
      <IsBraintuneContainer>
        <IsBraintuneHeading>
          Is <i>BrainTune</i> for me?
        </IsBraintuneHeading>

        <IsBraintuneSubheading>
          What if I’m not ‘musical’ enough?
        </IsBraintuneSubheading>

        <IsBraintuneParagraph>
          If you’ve ever tapped your foot to a song, you’re good to go.
        </IsBraintuneParagraph>

        <IsBraintuneSubheading>No instrument? No problem!</IsBraintuneSubheading>

        <IsBraintuneParagraph>We have you covered with plenty of virtual instruments to jam with, as well as a range of
          clapping, vocal, and active listening activities to get into.</IsBraintuneParagraph>
      </IsBraintuneContainer>
    )
  }

  const PersonalTrainingPlan = () => {
    const items = [
      {
        id: 1,
        label: 'Personalized training plan for any age'
      },
      {
        id: 2,
        label: 'Adapts to your goals and progress '
      },
      {
        id: 3,
        label: 'Tailored to your music tastes'
      },
      {
        id: 4,
        label: 'Family plans with joint activities'
      }
    ]

    return (
      <TrainingPlanContainer>
        <TrainingPlanHeading>
          Your personal <i>brain training plan</i>
        </TrainingPlanHeading>

        <TrainingPlanSubheading>
          Expertly created training routines for every age, goals, and music skills.
        </TrainingPlanSubheading>

        <TrainingPlanGoals>
          <TrainingPlanList>
            {items.map(el => {
              return (
                <TrainingPlanItem key={el.id}>
                  <TrainingPlanCheck/>
                  <TrainingPlanText>
                    {el.label}
                  </TrainingPlanText>
                </TrainingPlanItem>
              )
            })}
          </TrainingPlanList>
          <TrainingPlanImage/>
        </TrainingPlanGoals>

        <StartTrainingWrapper isHomeScreen>
          <StartTrainingButton>Request your plan</StartTrainingButton>
          <Caption>🎵 no music instrument or training needed</Caption>
        </StartTrainingWrapper>
      </TrainingPlanContainer>
    )
  };

  const Preorder = () => {
    return (
      <PreorderContainer id={"early-bird-offer"}>
        <PreorderHeading>
          Early-bird offer: Get <i>80% off</i>
        </PreorderHeading>
        <PreorderSubheading>
          BrainTune will come out later this year, but you can preorder your membership now with
          {' '}<strong><i>full money back guarantee.</i></strong>
        </PreorderSubheading>
        <PreorderCard>
          <PreorderCardHeading>
            Lifetime
          </PreorderCardHeading>
          <PreorderCardDescription>
            Tired of juggling subscriptions? We feel you.
          </PreorderCardDescription>
          <PreorderCheckboxGroup>
            <PreorderField>
              <PreorderCheckbox/>
              <CheckboxLabel>Unlimited access</CheckboxLabel>
            </PreorderField>
            <PreorderField>
              <PreorderCheckbox/>
              <CheckboxLabel>Personal training plan</CheckboxLabel>
            </PreorderField>
          </PreorderCheckboxGroup>

          <PreorderPrice>
            <PreorderMainPrice>
              $<s>300</s>
            </PreorderMainPrice>
            {' '}
            <PreorderDiscountPrice>
              $60
            </PreorderDiscountPrice>
          </PreorderPrice>

          <PreorderButtonContainer>
            <PreorderButton>
              Preorder
            </PreorderButton>
          </PreorderButtonContainer>

          <PreorderGuaranties>
            <GuardIcon/>
            <PreorderGuarantiesText>
              Money Back Guarantee
            </PreorderGuarantiesText>
          </PreorderGuaranties>

        </PreorderCard>

        <ContactText>
          If you have any questions or would like to request a refund, don’t hesitate to get in touch.
        </ContactText>

        <ContactUsButton>
          Contact us
        </ContactUsButton>

      </PreorderContainer>
    )
  }

  return (
    <CommonContainer
      style={{
        position: "relative",
      }}
    >
      <StartScreen/>
      <ImproveYourBrain/>
      <WorkoutForBrain/>
      <UsingMusic/>
      <IsBraintuneForMe/>
      <PersonalTrainingPlan/>
      <Preorder/>
    </CommonContainer>
  );
};

export default Home;
import styled from "styled-components";
import note from "../../images/note.svg";
import jackdaw from "../../images/jackdaw.svg";
import wreath from "../../images/wreath.svg";

export const HomeStartScreen = styled.div`
  height: 748px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 219px;
  margin-top: 106px;
  /* height: 948px; */
  @media (max-width: 744px) {
    height: 696px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    margin-top: 60px;
  }
  @media (max-width: 390px) {
    height: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    margin-top: 36px;
  }
`;

export const FollowingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media (max-width: 744px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

export const HomeTitle = styled.div`
  width: 1000px;
  text-align: center;
  font-size: 80px;
  font-weight: 600;
  line-height: 95px;
  color: #212121;
  @media (max-width: 744px) {
    width: 632px;
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    line-height: 57px;
    color: #212121;
  }
  @media (max-width: 390px) {
    width: 342px;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
  }
`;

export const HomeTitleSpan = styled.span`
  font-size: 80px;
  font-weight: 800;
  font-style: italic;
  line-height: 95px;
  color: #5f3fe1;
  @media (max-width: 744px) {
    font-size: 48px;
    font-weight: 800;
    font-style: italic;
    line-height: 57px;
    color: #5f3fe1;
  }
  @media (max-width: 390px) {
    font-style: italic;
    font-size: 32px;
    font-weight: 800;
    line-height: 38px;
  }
`;

export const HomeSubtitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media (max-width: 744px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const HomeStartButton = styled.button`
  width: 353px;
  height: 61px;
  padding: 16px 32px;
  background-color: #5f3fe1;
  border: none;
  border-radius: 8px;
  color: #fdfdfd;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  @media (max-width: 744px) {
    width: 353px;
    height: 61px;
    padding: 16px 32px;
    background-color: #5f3fe1;
    border: none;
    border-radius: 8px;
    color: #fdfdfd;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
  }
`;

export const HomeSubtitle = styled.div`
  width: 353px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media (max-width: 744px) {
    width: 353px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;

export const HomeSubtitleDescription = styled.h5`
  width: 325px;
  height: 16px;
  font-size: 20px;
  line-height: 16px;
  font-weight: 400;
  color: #212121;
  margin: 0;
  text-align: center;
  white-space: nowrap;
  @media (max-width: 744px) {
    width: 325px;
    height: 16px;
    font-size: 20px;
    line-height: 16px;
    font-weight: 400;
    color: #212121;
    margin: 0;
    text-align: center;
    white-space: nowrap;
  }
`;

export const NoteLogo = styled.div`
  background-image: url(${note});
  width: 20px;
  height: 24px;
`;

export const FulfilledRequirements = styled.div`
  display: flex;
  text-align: center;
  @media (max-width: 744px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

export const RequirementsList = styled.div`
  @media (max-width: 744px) {
    width: 440px;
    height: 100px;
  }
  @media (max-width: 390px) {
    width: 342px;
    height: 88px;
  }
`;

export const RequirementsWrapper = styled.div`
  @media (max-width: 744px) {
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    border: none;
    border-radius: 24px;
    background-color: #f8f8f8;
  }
  @media (max-width: 390px) {
    padding: 16px 40px 16px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    border: none;
    border-radius: 24px;
    background-color: #f8f8f8;
  }
`;

export const JackDawIcon = styled.div`
  @media (max-width: 744px) {
    background-image: url(${jackdaw});
    width: 32px;
    height: 32px;
  }
`;

export const RequirementsInfo = styled.div`
  @media (max-width: 744px) {
    width: 360px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  @media (max-width: 390px) {
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

// export const WreathImage = styled.div`
//   background-image: url(${wreath});
//   width: 300px;
//   height: 100px;
//   @media (max-width: 744px) {
//     display: none;
//   }
//   @media (max-width: 390px) {
//     display: none;
//   }
// `;

export const RequirementsTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  color: #212121;
  @media (max-width: 744px) {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    color: #212121;
  }
  @media (max-width: 390px) {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #212121;
  }
`;

export const RequirementsSubtitle = styled.h3`
  margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: #212121;
  @media (max-width: 744px) {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 36px;
    color: #212121;
  }
  @media (max-width: 390px) {
    margin: 0;
    height: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #212121;
    white-space: nowrap;
  }
`;

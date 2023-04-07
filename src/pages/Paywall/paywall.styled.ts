import styled from "styled-components";
import paywallbg from "../../images/paywall-bg.svg"
import guard from "../../images/moneybackguarantee.svg";
import preorderchecked from "../../images/checked-card.svg";
import guardcard from "../../images/guaranteecard.svg";
import paywallarrow from "../../images/paywall-arrow.svg"
import paywalltablet from "../../images/paywall-tablet.svg"
import paywallmobile from "../../images/paywall-mobile.svg";

export const PaywallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 79px 0 118px;
  @media (max-width: 390px) {
    padding: 40px 0 118px;

  }
`

export const PaywallBillboard = styled.div`
  background-image: url(${paywallbg});
  width: 1000px;
  height: 451px;
  margin-bottom: 64px;

  @media (max-width: 935px) and (min-width: 391px) {
    background-image: url(${paywalltablet});
    max-width: 696px;
    height: 360px;
  }
  
  @media (max-width: 390px) {
    width: 390px;
    height: 360px;
    background-image: url(${paywallmobile});
  }
`

export const PaywallTitle = styled.div`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
`
export const PaywallTitleSpan = styled.span`
  font-style: italic;
  font-weight: 700;
`


export const PaywallInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 176px;
`

export const PaywallRate = styled.div`
  display: flex;
  align-items: center;
  gap: 176px;
  margin-top: 63px;
  position: relative;
  
  @media (max-width: 744px) and (min-width: 565px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin-bottom: 100px;
  }
  
  @media (max-width: 564px) and (min-width: 391px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin-bottom: 80px;
  }
  
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-bottom: 80px;
  }
`

export const PaywallRateArrow = styled.div`
  position: absolute;
  top: 350px;
  left: 270px;
  transform: rotate(-3deg);
  background-image: url(${paywallarrow});
  background-repeat: no-repeat;
  width: 314px;
  height: 215px;
  
  @media (max-width: 835px) {
    display: none;
  }
`

export const PaywallCard = styled.div`
  padding: 42px 16px 43px;
  background: #FDFDFD;
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaywallCardHeading = styled.h3`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
`;

export const PaywallCardDescription = styled.p`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 12px;
  text-align: center;
  line-height: 27px;
  
  @media (min-width: 545px) and (max-width: 979px) {
    width: 75%;
  }
`;

export const PaywallCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 33px;
  gap: 16px;
  align-self: flex-start;
`;

export const PaywallField = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const PaywallCheckbox = styled.div`
  background-image: url(${preorderchecked});
  width: 20px;
  height: 20px;
`

export const PaywallCheckboxLabel = styled.p`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

export const PaywallPrice = styled.div`
  margin-top: 34px;
  text-align: center;
`;

export const PaywallMainPrice = styled.span`
  opacity: 0.2;
  color: #000;
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  
  s {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
  }
`
export const PaywallDiscountPrice = styled.span`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
`;

export const PaywallButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
`;

export const PaywallButton = styled.button`
  padding: 16px 32px;
  background: #5F3FE1;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
  width: 139px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;


export const PaywallGuardIconCard = styled.div`
  width: 191px;
  height: 33px;
  background-image: url(${guardcard});
  margin-top: 33px;
`;



export const PaywallGuaranties = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;


export const PaywallGuardIcon = styled.div`
  width: 379px;
  height: 61px;
  background-image: url(${guard});
  background-repeat: no-repeat;
`;


export const PaywallGuarantiesSubtitle = styled.h5`
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
`
export const PaywallGuarantiesSpan = styled.span`
  font-style: italic;
  font-weight: 700;
`

export const PaywallContactText = styled.p`
  margin-top: 81px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: #212121;
  text-align: center;

  @media (min-width: 320px) and (max-width: 564px) {
    width: 100%;
    padding: 12px 0;
    margin-top: 32px;
    font-size: 16px;
  }
`;

export const PaywallContactUsButton = styled.button`
  border: 3px solid #5F3FE1;
  border-radius: 8px;
  color: #5F3FE1;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  width: 460px;
  padding: 18px 0;
  margin-top: 20px;
  background-color: #F8F8F8;;
  
  @media (min-width: 565px) and (max-width: 979px) {
    border: none;
    width: fit-content;
  }

  @media (min-width: 320px) and (max-width: 564px) {
    width: 100%;
    padding: 12px 0;
  }
`;





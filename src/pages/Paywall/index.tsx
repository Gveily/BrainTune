import {
  PaywallBillboard,
  PaywallGuaranties,
  PaywallGuarantiesSpan,
  PaywallGuarantiesSubtitle,
  PaywallGuardIcon,
  PaywallRate,
  PaywallInformation,
  PaywallTitle,
  PaywallTitleSpan,
  PaywallWrapper,
  PaywallContactText,
  PaywallContactUsButton,
  PaywallCheckboxGroup,
  PaywallCard,
  PaywallCardHeading,
  PaywallCardDescription,
  PaywallField,
  PaywallCheckbox,
  PaywallCheckboxLabel,
  PaywallPrice,
  PaywallMainPrice,
  PaywallDiscountPrice,
  PaywallButtonContainer,
  PaywallButton,
  PaywallGuardIconCard, PaywallRateArrow, PaywallSubtitle, PaywallDescription, PaywallGuarantiesDescription
} from "./paywall.styled";
import {CommonContainer} from "../../App.styled";
import { ContactUsButton } from "../Home/home.styled";
import { Link } from "react-router-dom";

const Paywall = () => {
  return (
    <CommonContainer>
      <PaywallWrapper>
        <PaywallBillboard/>
        <PaywallDescription>
          <PaywallTitle>BrainTune will be released later this year, but you can place your preorder now <br/>
            with {" "} <PaywallTitleSpan>80% discount and full money back guarantee.</PaywallTitleSpan>
          </PaywallTitle>
          <PaywallSubtitle>This is a time-limited offer.</PaywallSubtitle>
        </PaywallDescription>
        <PaywallInformation>

          <PaywallRate id='early-bird-offer'>
            <PaywallCard>
              <PaywallCardHeading>
                Lifetime
              </PaywallCardHeading>
              <PaywallCardDescription>
                You only pay once, no hidden costs or
                <br/>
                subscriptions.
              </PaywallCardDescription>
              <PaywallCheckboxGroup>
                <PaywallField>
                  <PaywallCheckbox/>
                  <PaywallCheckboxLabel>Unlimited access</PaywallCheckboxLabel>
                </PaywallField>
                <PaywallField>
                  <PaywallCheckbox/>
                  <PaywallCheckboxLabel>Personal training plan</PaywallCheckboxLabel>
                </PaywallField>
              </PaywallCheckboxGroup>

              <PaywallPrice>
                <PaywallMainPrice>
                  $<s>300</s>
                </PaywallMainPrice>
                {' '}
                <PaywallDiscountPrice>
                  $60
                </PaywallDiscountPrice>
              </PaywallPrice>

              <PaywallButtonContainer>
                <PaywallButton onClick={() => window.open('https://buy.stripe.com/fZe6rlcep2XzdnGbSb?prefilled_email={email}')}>
                  Buy now
                </PaywallButton>
              </PaywallButtonContainer>

              <PaywallGuardIconCard/>
            </PaywallCard>

            <PaywallRateArrow/>

            <PaywallGuaranties>
              <PaywallGuardIcon/>
              <PaywallGuarantiesDescription>
                <PaywallGuarantiesSubtitle>
                  <PaywallGuarantiesSpan>Get full refund</PaywallGuarantiesSpan> at any point from
                  <PaywallGuarantiesSubtitle>
                    the moment of pre-order and up to
                  </PaywallGuarantiesSubtitle>
                  <PaywallGuarantiesSubtitle>
                    30 days after account activation.
                  </PaywallGuarantiesSubtitle>
                </PaywallGuarantiesSubtitle>
              </PaywallGuarantiesDescription>
            </PaywallGuaranties>
          </PaywallRate>


        </PaywallInformation>

        <PaywallContactText>
          If you have any questions or would like to request a refund, don’t hesitate to get in touch.
        </PaywallContactText>

        <Link to='mailto:gorskiipavel@gmail.com'>
          <PaywallContactUsButton>
            Contact us
          </PaywallContactUsButton>
        </Link>

      </PaywallWrapper>
    </CommonContainer>

  )
}

export default Paywall;
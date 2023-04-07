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
  PaywallGuardIconCard, PaywallRateArrow
} from "./paywall.styled";
import {CommonContainer} from "../../App.styled";

const Paywall = () => {
  return (
    <CommonContainer>
      <PaywallWrapper>
        <PaywallBillboard/>
        <PaywallTitle>BrainTune will be released later this year, but you can place your preorder now <br/>
          with {" "} <PaywallTitleSpan>80% discount and full money back guarantee.</PaywallTitleSpan>
          <br/>
          <br/>
          This is a time-limited offer.
        </PaywallTitle>
        <PaywallInformation>

          <PaywallRate>
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
                <PaywallButton>
                  Buy now
                </PaywallButton>
              </PaywallButtonContainer>

              <PaywallGuardIconCard/>
            </PaywallCard>

            <PaywallRateArrow/>

            <PaywallGuaranties>
              <PaywallGuardIcon/>
              <PaywallGuarantiesSubtitle>
                <PaywallGuarantiesSpan>Get full refund</PaywallGuarantiesSpan> at any point from
                <br/>
                the moment of pre-order
                and up to
                <br/>
                30 days after account activation.
              </PaywallGuarantiesSubtitle>
            </PaywallGuaranties>
          </PaywallRate>


        </PaywallInformation>

        <PaywallContactText>
          If you have any questions or would like to request a refund, don’t hesitate to get in touch.
        </PaywallContactText>
        <PaywallContactUsButton>
          Contact us
        </PaywallContactUsButton>

      </PaywallWrapper>
    </CommonContainer>

  )
}

export default Paywall;
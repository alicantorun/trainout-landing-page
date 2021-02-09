import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Locate - Scan - Train</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Available 24/7</FeatureTitle>
          <FeatureText>
            Train spontaneously and whenever it fits into your schedule.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Hassle-free</FeatureTitle>
          <FeatureText>
            No need to carry your heavy equipment to your favorite outdoor
            training spot.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Fully equipped</FeatureTitle>
          <FeatureText>
            Big variety of high-quality training equipment from kettlebells to
            yoga mats.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Easy access</FeatureTitle>
          <FeatureText>Simple to use via mobile app.</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Limitless</FeatureTitle>
          <FeatureText>
            Break your standard workout routine and enjoy the freedom of
            movement outdoors.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Community</FeatureTitle>
          <FeatureText>
            Connect with like-minded people and train together.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

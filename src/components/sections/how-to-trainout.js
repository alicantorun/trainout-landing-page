import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

import HowToTrainoutSVG from "../../assets/trainout-how-to"
import LocateScanTrain from "../../assets/trainout-locate-scan-train"

import { Container, Section } from "../global"

const HowToTrainout = () => (
  <StyledSection id="how-to-trainout">
    <GetStartedContainer>
      <SectionTitle>HOW TO TRAINOUT</SectionTitle>
      <Subtitle>Effective outdoor training for all.</Subtitle>
      <FeaturesGrid>
        <FeatureItem>
          <LocateScanTrain />
        </FeatureItem>
        <FeatureItem>
          <HowToTrainoutSVG
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </FeatureItem>
        <FeatureItem>
          <Subtitle>
            Trainout app will be available soon for both App Store and Play
            Store. We're working on it, stay tuned!
          </Subtitle>
        </FeatureItem>
      </FeaturesGrid>
    </GetStartedContainer>
  </StyledSection>
)

export default HowToTrainout

const FeaturesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
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

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.trainout.color.secondary.lightGreen};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 24px;
  color: ${(props) => props.theme.trainout.color.text.lightGray};
  letter-spacing: 0px;
  margin-bottom: 32px;
  margin-top: 16px;
  text-align: center;
`

const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.trainout.color.background.darkBg};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

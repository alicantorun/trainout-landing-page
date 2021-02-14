import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"
import Video from "../common/video"

const VIDEO_URLS = {
  TIME_CHANGES: "https://www.youtube.com/embed/u97VaxZPcj8",
  SEASONAL_CHANGES: "https://www.youtube.com/embed/u1Y_2TmG3fk",
}

const VideoSection = () => (
  <Section id="what-is-trainout">
    <StyledContainer>
      <SectionTitle>WHAT IS TRAINOUT</SectionTitle>
      <Subtitle>Worlds first training equipment sharing system</Subtitle>
      <FeaturesGrid>
        <FeatureItem>
          <VideoWrapper>
            <Video videoSrcURL={VIDEO_URLS.SEASONAL_CHANGES} />
          </VideoWrapper>
          <FeatureTitle>Anytime</FeatureTitle>
          <FeatureText>Train day and night</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <VideoWrapper>
            <Video videoSrcURL={VIDEO_URLS.TIME_CHANGES} />
          </VideoWrapper>
          <FeatureTitle>Any condition</FeatureTitle>
          <FeatureText>Train in sunshine, rain and snow</FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default VideoSection

const StyledContainer = styled(Container)``

const VideoWrapper = styled.div`
  width: 100%;

  height: 300px;
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
  color: ${(props) => props.theme.trainout.color.secondary.darkGray};
  letter-spacing: 0px;
  margin-bottom: 32px;
  margin-top: 16px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 0px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: first baseline;
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

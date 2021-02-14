import React from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { Container, Section as _Section } from "../global"

import TrainoutVectoral from "../../assets/traoinout-vectoral"
import MaskRight from "../../assets/trainout-mask-right"
import MaskLeft from "../../assets/trainout-mask-left"

const Header = () => {
  const [email, setEmail] = React.useState("")
  const [msg, setMsg] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(email)

    const validateEmail = (email) => {
      const re = /\S+@\S+\.\S+/
      return re.test(email)
    }

    if (!validateEmail(email)) {
      setMsg("Please fill a valid email ...")
    } else if (!email) {
      setMsg("Please fill your email ...")
    } else {
      if (result.result === "success") {
        setMsg(result.msg)
      } else {
        setMsg(
          "Something went wrong, please try again later or contact support..."
        )
      }
    }

    setEmail("")
  }

  return (
    <Section id="hero">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Introducing</Subtitle>
            <h1>
              The Future of
              <br />
              Outdoor Training
            </h1>
            <h2>
              We're building a system to share training equipment outdoors.
              <br />
              Sign up to get early access.
            </h2>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderInput
                placeholder="Your email"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
              />
              <HeaderButton>Early access</HeaderButton>
            </HeaderForm>
            <ErrorMessage>{msg}</ErrorMessage>
          </HeaderTextGroup>
          <ImageWrapper>
            <TrainoutVectoral />
          </ImageWrapper>
        </Flex>
      </Container>
      <HeroMaskRight />
      <HeroMaskLeft />
    </Section>
  )
}

export default Header

const Section = styled(_Section)`
  background-color: ${(props) => props.theme.trainout.color.background.darkBg};
  padding: 160px 80px 160px 80px;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    padding: 16px 0px 16px 0px;
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeroMaskRight = styled(MaskRight)`
  z-index: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  overflow: visible;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    display: none;
  }
`

const HeroMaskLeft = styled(MaskLeft)`
  z-index: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: visible;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    display: none;
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.lg}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${(props) => props.theme.trainout.color.text.lightGray};
  }

  h2 {
    margin-bottom: 24px;
    color: ${(props) => props.theme.trainout.color.text.darkGray};
    ${(props) => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`
const ErrorMessage = styled.h2`
  z-index: 1000;
  position: absolute;
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 80px;
  margin-top: 80px;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  z-index: 1000;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const HeaderInput = styled.input`
  z-index: 1000;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.trainout.color.secondary.darkGreen};
  border-image: initial;
  border-radius: 40px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${(props) => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${(props) => props.theme.screen.lg}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  z-index: 1000;
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${(props) => props.theme.trainout.color.secondary.darkGreen};
  border-radius: 40px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${(props) => props.theme.screen.lg}) {
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  justify-self: end;
  align-self: center;

  @media (max-width: ${(props) => props.theme.screen.lg}) {
    justify-self: center;

    svg {
      max-width: 100%;
    }
  }
`

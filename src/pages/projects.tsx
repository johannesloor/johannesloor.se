import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, colors } from "../styles/variables";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import brushi from "../images/Brushi_logo.png";
import sgc from "../images/SGC.png";

const Project = styled.a`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f0f8ff /*#f5f5f5*/;
  :hover {
    text-decoration: none;
  }

  color: black;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
  }
`;

const Description = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column-reverse;
  }
`;

const DescriptionText = styled.div`
  width: 55%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
    padding-top: 1rem;
  }
`;

const DescriptionImage = styled.img`
  align-self: center;
  width: 40%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;

const PageTitle = styled.div`
  width: 100vw;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${colors.background};
`;

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <PageTitle>
        <h1>Projects</h1>
      </PageTitle>

      <Container>
        <Project href="https://johannesloor.github.io/Sonic-Gesture-Challenge/">
          <h3>Sonic Gesture Challenge</h3>
          <Description>
            <DescriptionText>
              <p>
                Sonic Gesture Challenge is a sound and gesture mapping game
                where the goal is to repeat a gesture after only hearing the
                sound it produces. In this project I designed and built the
                interface, helped with the sound-gesture comparison algorithm
                and designed one of the sounds used.
              </p>
              <p>
                This was a really fun project focusing on how to make sound
                designs for the web, using WebAudioXML by Hans Lindetorp, and
                exploring if it is feasible to use this framework for these
                kinds of ear-training apps.
              </p>
            </DescriptionText>
            <DescriptionImage src={sgc}></DescriptionImage>
          </Description>
        </Project>
        <Project>
          <h3>Brushi</h3>
          <Description>
            <DescriptionText>
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description
            </DescriptionText>
            <DescriptionImage src={brushi}></DescriptionImage>
          </Description>
          Contributors Links
        </Project>
        <Project>
          <h3>Brushi</h3>
          <Description>
            <DescriptionText>
              Description Description Description Description Description
              Description Description Description Description Description
              Description Description
            </DescriptionText>
            <DescriptionImage src={brushi}></DescriptionImage>
          </Description>
          Contributors Links
        </Project>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageTwo;

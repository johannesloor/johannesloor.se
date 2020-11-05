import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, dimensions } from "../styles/variables";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import PageTitle from "../components/PageTitle";
import Container from "../components/Container";
import meCap from "../images/meCap.jpg";
import meCat from "../images/meCat.jpg";
import github from "../images/GitHub.png";
import linkedin from "../images/LI.png";

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 60vw;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  @media (max-width: ${breakpoints.md + "px"}) {
    max-width: 100vw;
    padding: 0;
  }
`;

const DescriptionText = styled.div`
  font-size: ${dimensions.fontSize.regular + "pt"};
  max-width: 40rem;
  padding: 0 0.5rem;
  @media (max-width: ${breakpoints.md + "px"}) {
    font-size: ${dimensions.fontSize.small + "pt"};
  }
`;

const ProfilePic = styled.img`
  width: 30%;
  max-width: 25rem;
  height: 100%;

  border-radius: 10% 0;
`;

const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 1px solid white;
  border-radius: 10px 0;
  margin-top: 1rem;
`;

const ContactLink = styled.a`
  color: black;
  padding: 1rem;
  height: 7rem;
  width: 7rem;
  text-align: center;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: ${breakpoints.md + "px"}) {
    height: 5rem;
    width: 5rem;
  }
`;

const Logo = styled.img`
  height: 100%;
`;

const Mail = styled.div`
  font-size: 40pt;
  @media (max-width: ${breakpoints.md + "px"}) {
    font-size: 30pt;
  }
`;

const About = () => (
  <IndexLayout>
    <Page>
      <PageTitle currentPage="About" linkedPage="Projects" />
      <Container>
        <DescriptionWrapper>
          <Contact>
            <ContactLink href="mailto: johannes.loor@gmail.com">
              <Mail>✉️</Mail>
            </ContactLink>
          </Contact>
          <Contact>
            <ContactLink
              href="https://github.com/johannesloor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo src={github}></Logo>
            </ContactLink>
          </Contact>
          <Contact>
            <ContactLink
              href="https://www.linkedin.com/in/johannes-loor-80930a95/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Logo src={linkedin}></Logo>
            </ContactLink>
          </Contact>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionText>
            Coming soon Coming soon Coming sooadadn Coming soon Coming soon
            Coming soon adasdsa soon Coming soon Coming asd Coming soon Coming
            soon Com
          </DescriptionText>
          <ProfilePic src={meCap}></ProfilePic>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ProfilePic src={meCat}></ProfilePic>
          <DescriptionText>
            Coming soon Coming soon Coming soon Coming soon Coming soon Coming
            soon Coming soon Coming soon Coming soon Coming soon Coming soon
            Coming soon
          </DescriptionText>
        </DescriptionWrapper>
      </Container>
    </Page>
  </IndexLayout>
);

export default About;

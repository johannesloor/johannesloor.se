import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints, dimensions } from "../styles/variables";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import PageTitle from "../components/PageTitle";
import Container from "../components/Container";
import meCap from "../images/meCap.jpg";

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 60vw;
  align-items: center;
  padding: 2rem;
  margin: 1rem;
  @media (max-width: ${breakpoints.md + "px"}) {
    max-width: 100%;
  }
`;

const DescriptionText = styled.p`
  font-size: ${dimensions.fontSize.regular + "pt"};
`;
const ProfilePic = styled.img`
  width: 30%;
  max-width: 50vw;
  height: 100%;
  border-radius: 10% 0;
  /* @media (max-width: ${breakpoints.md + "px"}) {
    width: 35%;
  } */
`;

const About = () => (
  <IndexLayout>
    <Page>
      <PageTitle currentPage="About" linkedPage="Projects" />
      <Container>
        <DescriptionWrapper>
          <DescriptionText>
            Coming soon Coming soon Coming soon Coming soon Coming soon Coming
            soon Coming soon
          </DescriptionText>
          <ProfilePic src={meCap}></ProfilePic>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <ProfilePic src={meCap}></ProfilePic>
          <DescriptionText>Coming soon</DescriptionText>
        </DescriptionWrapper>
      </Container>
      <PageTitle>Contact</PageTitle>
    </Page>
  </IndexLayout>
);

export default About;

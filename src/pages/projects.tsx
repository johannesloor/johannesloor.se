import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../styles/variables";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import brushi from "../images/Brushi_logo.png";

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 0 1rem;
  border-radius: 10px;
  background-color: #f5f5f5;

  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
    margin: 0;
  }
`;

const Project = styled.div`
  padding: 1rem;
  border-bottom: solid #dcdcdc 1px;
`;

const Description = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column-reverse;
  }
`;

const DescriptionText = styled.div`
  width: 55%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;

const DescriptionImage = styled.img`
  align-self: center;
  width: 40%;
  @media (max-width: ${breakpoints.sm + "px"}) {
    width: 100%;
  }
`;

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Projects</h1>
        <Projects>
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
        </Projects>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageTwo;

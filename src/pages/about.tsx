import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { breakpoints, colors, dimensions } from "../styles/variables";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import PageTitle from "../components/PageTitle";
import Container from "../components/Container";

import github from "../images/GitHub.png";
import linkedin from "../images/LI.png";

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60vw;
  align-items: center;
  padding: 0 1rem 1rem;
  margin: 0 1rem 3.5rem;
  @media (max-width: ${breakpoints.md + "px"}) {
    width: 90vw;
    padding: 0;
  }
`;

type TextProps = {
  reversed?: boolean;
};

const DescriptionText = styled.div<TextProps>`
  font-size: ${dimensions.fontSize.regular + "pt"};
  max-width: 40rem;
  padding: ${(props) => (props.reversed ? "0 0 0 1rem" : "0 1rem 0 0")};
  @media (max-width: ${breakpoints.md + "px"}) {
    font-size: ${dimensions.fontSize.small + "pt"};
  }
  @media (max-width: ${breakpoints.xs + "px"}) {
    font-size: 10pt;
  }
`;

const ProfilePic = styled(Img)`
  width: 40%;
  border-radius: 10% 0;
  @media (min-width: ${breakpoints.xl + "px"}) {
    width: 25%;
  }
`;

const ContactWrapper = styled(DescriptionWrapper)`
  justify-content: space-evenly;
  @media (min-width: ${breakpoints.xl + "px"}) {
    padding: 0 10rem;
  }
`;

const Contact = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 10px 0;
  margin-top: 1rem;
  &:hover {
    background-color: ${colors.brand};
  }
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
    font-size: 27pt;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 1rem;
  padding: 0 1rem;
`;

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      meSun: file(relativePath: { eq: "meSun.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meApple: file(relativePath: { eq: "meApple.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meHoldingCat: file(relativePath: { eq: "meHoldingCat.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meGolf: file(relativePath: { eq: "meGolf.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <IndexLayout>
      <Page>
        <PageTitle currentPage="About" linkedPage="Projects" />
        <Container>
          <ContactInfo>
            <div>
              <h3>Contact</h3>
              (In Swedish or English)
            </div>
          </ContactInfo>
          <ContactWrapper>
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
          </ContactWrapper>

          <DescriptionWrapper>
            <DescriptionText>
              I'm a developer with a passion for usability and design. Being in
              close contact with the design team feels natural to me and I love
              exploring the design space together.
            </DescriptionText>
            <ProfilePic
              fluid={{
                ...data.meSun.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
            />
          </DescriptionWrapper>
          <DescriptionWrapper>
            <ProfilePic
              fluid={{
                ...data.meApple.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
            />
            <DescriptionText reversed>
              I am, what some would call, an Apple fanboy. My life is deeply
              integrated in the Apple ecosystem and Apple events are like
              christmas eve for me.
            </DescriptionText>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionText>
              In my free time I like to play golf or badminton, eat brunch,
              expand my smart home or just watch a movie. I also love music and
              have a background in musical theatre.
            </DescriptionText>
            <ProfilePic
              fluid={{
                ...data.meGolf.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
            />
          </DescriptionWrapper>
          <DescriptionWrapper>
            <ProfilePic
              fluid={{
                ...data.meHoldingCat.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
            />
            <DescriptionText reversed>
              I love cats and thankfully most of them seem to love me back. 😻
            </DescriptionText>
          </DescriptionWrapper>
          <ContactInfo>
            <div>
              <h4>Want to talk business or about Apple, music and cats?</h4>
              <h1>⬇</h1>
            </div>
          </ContactInfo>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default About;

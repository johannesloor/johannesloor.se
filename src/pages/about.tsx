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

type ReversedProp = {
  reversed?: boolean;
};

const DescriptionWrapper = styled.div<ReversedProp>`
  display: flex;
  justify-content: center;
  width: 60vw;
  max-width: 50rem;
  align-items: center;
  padding: 1rem;
  margin: 2rem 0;
  background-color: ${(props) => (props.reversed ? colors.brand : "#1982fc")};
  border-radius: ${(props) =>
    props.reversed ? "25px 25px 25px 0" : "30px 30px 0 30px"};
  color: ${(props) => (props.reversed ? "black" : "white")};
  @media (max-width: ${breakpoints.md + "px"}) {
    width: 97vw;
    margin: 1rem 0;
  }
`;

const DescriptionText = styled.div<ReversedProp>`
  font-size: ${dimensions.fontSize.regular + "pt"};
  max-width: 35rem;
  padding: ${(props) => (props.reversed ? "0 0 0 1rem" : "0 1rem 0 0")};
  @media (max-width: ${breakpoints.md + "px"}) {
    max-width: 70%;
    font-size: ${dimensions.fontSize.small + "pt"};
  }
  @media (max-width: ${breakpoints.xs + "px"}) {
    font-size: 10pt;
  }
`;

const ProfilePic = styled(Img)<ReversedProp>`
  width: 40%;
  border-radius: ${(props) => (props.reversed ? "25px 0;" : "0 25px")};
  @media (min-width: ${breakpoints.xl + "px"}) {
    width: 25%;
  }
`;

const ContactWrapper = styled(DescriptionWrapper)`
  background-color: transparent;
  justify-content: space-evenly;
  margin: 0;
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.xl + "px"}) {
    padding: 0;
  }
  @media (max-width: ${breakpoints.md + "px"}) {
    margin: 0;
    margin-bottom: 1rem;
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
  //margin-top: 1rem;
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
              close contact with a design team feels natural to me and I love
              exploring creative solutions together.
            </DescriptionText>
            <ProfilePic
              fluid={{
                ...data.meSun.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
            />
          </DescriptionWrapper>
          <DescriptionWrapper reversed>
            <ProfilePic
              fluid={{
                ...data.meApple.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
              reversed
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
          <DescriptionWrapper reversed>
            <ProfilePic
              fluid={{
                ...data.meHoldingCat.childImageSharp.fluid,
                aspectRatio: 3 / 4,
              }}
              reversed
            />
            <DescriptionText reversed>
              I love cats and thankfully most of them seem to love me back. 😻
            </DescriptionText>
          </DescriptionWrapper>
          <ContactInfo>
            <div>
              <h4>
                Want to talk business opportunities or about the latest iPhone?
              </h4>
              <h1>↓</h1>
            </div>
          </ContactInfo>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default About;

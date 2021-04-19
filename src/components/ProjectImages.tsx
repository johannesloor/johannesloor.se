import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import styled from "@emotion/styled";

interface ProjectImagesProps {
  pictureNr: number;
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled(Img)``;
const ProjectImages: React.FC<ProjectImagesProps> = ({ pictureNr }) => {
  const data = useStaticQuery(graphql`
    query {
      halfway: file(relativePath: { eq: "halfway.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      myWebsite: file(relativePath: { eq: "myWebsite.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Osqledaren: file(relativePath: { eq: "Osqledaren.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ofr: file(relativePath: { eq: "ofr.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sgc: file(relativePath: { eq: "SGC.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pepper: file(relativePath: { eq: "pepperposter.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      thesis: file(relativePath: { eq: "thesis.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      challengeMe: file(relativePath: { eq: "challengemeimage.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      evacuateMe: file(relativePath: { eq: "evacuateMe.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const images = [
    data.halfway.childImageSharp.fluid,
    data.myWebsite.childImageSharp.fluid,
    data.Osqledaren.childImageSharp.fluid,
    data.ofr.childImageSharp.fluid,
    data.sgc.childImageSharp.fluid,
    data.pepper.childImageSharp.fluid,
    data.thesis.childImageSharp.fluid,
    data.challengeMe.childImageSharp.fluid,
    data.evacuateMe.childImageSharp.fluid,
  ];

  return (
    <ImageContainer>
      <Image
        fluid={images[pictureNr]}
        style={{ width: images[pictureNr].aspectRatio > 1 ? "100%" : "65%" }}
      />
    </ImageContainer>
  );
};

export default ProjectImages;

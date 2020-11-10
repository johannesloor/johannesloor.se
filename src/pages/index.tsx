import * as React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import Card from "../components/Card";

import { breakpoints } from "../styles/variables";
import { widths } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  max-width: ${getEmSize(widths.lg)}em;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
  @media (max-width: ${breakpoints.xs + "px"}) {
    margin-top: 1rem;
  }
`;

const SloganWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  display: block;
  width: 55rem;

  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: left;
  font-style: italic;
  @media (max-width: ${breakpoints.xl + "px"}) {
    width: 75vw;
    margin-top: 2rem;
    min-height: 6rem;
  }

  @media (max-width: ${breakpoints.sm + "px"}) {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 20pt;
  }
`;

const VaryingWord = styled.span`
  display: inline;
  color: red;
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-self: center;
  flex-wrap: wrap;
  width: 90vw;
`;

const ProfilePic = styled(Img)`
  width: 15%;
  border-radius: 10% 0;
  @media (max-width: ${breakpoints.md + "px"}) {
    width: 25%;
  }
`;

let interests = ["Apple", "music", "smart home", "golf", "cat"];
let i = 0;
function getWord() {
  let word = interests[i];
  i += 1;
  if (i > interests.length - 1) {
    i = 0;
  }
  return word;
}

export default class IndexPage extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }
  wordErased = false;
  state = {
    changingWord: getWord(),
    nextWord: getWord(),
    wordBuilderIndex: 0,
    intervalID: 1,
    timerID: 1,
  };

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
    clearTimeout(this.state.timerID);
  }

  setIntervalState() {
    let intervalID = setInterval(() => this.handleWordChange(), 150);
    this.setState({ intervalID: intervalID });
  }

  startInterval() {
    clearInterval(this.state.intervalID);
    clearTimeout(this.state.timerID);
    let timerID = setTimeout(() => this.setIntervalState(), 1500);
    this.setState({ timerID: timerID });
  }

  handleWordChange() {
    if (!this.state.changingWord) {
      this.wordErased = true;
    }

    if (!this.wordErased) {
      this.setState({
        changingWord: this.state.changingWord.slice(0, -1),
      });
    } else if (this.state.changingWord != this.state.nextWord) {
      this.setState({
        changingWord:
          this.state.changingWord +
          this.state.nextWord[this.state.wordBuilderIndex],
        wordBuilderIndex: this.state.wordBuilderIndex + 1,
      });
    } else {
      this.setState({
        nextWord: getWord(),
        wordBuilderIndex: 0,
      });
      this.wordErased = false;
      this.startInterval();
    }
  }

  render() {
    return (
      <IndexLayout>
        <Page>
          <PicturesOfMe />
          <SloganWrapper>
            <Title>
              Developer, engineer and{" "}
              <VaryingWord>{this.state.changingWord}</VaryingWord> enthusiast
            </Title>
          </SloganWrapper>
          <CardWrapper>
            <Card url="/projects">Projects</Card>
            <Card url="/about">About me</Card>
          </CardWrapper>
        </Page>
      </IndexLayout>
    );
  }
}

const PicturesOfMe = () => {
  const data = useStaticQuery(graphql`
    query {
      meCap: file(relativePath: { eq: "meCap.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meSnow: file(relativePath: { eq: "meSnow.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meBirthday: file(relativePath: { eq: "meBirthday.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      meNature: file(relativePath: { eq: "meNature.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <PictureWrapper>
      <ProfilePic
        fluid={{
          ...data.meCap.childImageSharp.fluid,
          aspectRatio: 3 / 4,
        }}
      />
      <ProfilePic
        fluid={{
          ...data.meSnow.childImageSharp.fluid,
          aspectRatio: 3 / 4,
        }}
      />
      <ProfilePic
        fluid={{
          ...data.meBirthday.childImageSharp.fluid,
          aspectRatio: 3 / 4,
        }}
      />
      <ProfilePic
        fluid={{
          ...data.meNature.childImageSharp.fluid,
          aspectRatio: 3 / 4,
        }}
      />
    </PictureWrapper>
  );
};

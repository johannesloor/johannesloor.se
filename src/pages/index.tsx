import * as React from "react";
import styled from "@emotion/styled";
import Page from "../components/Page";
import IndexLayout from "../layouts";
import Card from "../components/Card";
import meCap from "../images/meCap.jpg";
import meSnow from "../images/meSnow.jpeg";
import meBirthday from "../images/meBirthday.jpg";
import meNature from "../images/meNature.jpeg";

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
    width: 70vw;
    margin-top: 2rem;
    min-height: 6rem;
  }
  @media (max-width: ${breakpoints.sm + "px"}) {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 20pt;
    width: 80vw;
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

const ProfilePic = styled.img`
  width: 15%;
  height: 100%;
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
          <PictureWrapper>
            <ProfilePic src={meCap}></ProfilePic>
            <ProfilePic src={meSnow}></ProfilePic>
            <ProfilePic src={meBirthday}></ProfilePic>
            <ProfilePic src={meNature}></ProfilePic>
          </PictureWrapper>
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

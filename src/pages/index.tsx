import * as React from "react";
import styled from "@emotion/styled";
import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import Card from "../components/Card";
import meCap from "../images/meCap.jpg";
import meCat from "../images/meCat.jpg";
import meBirthday from "../images/meBirthday.jpg";
import meSwim from "../images/meSwim.jpg";

import { breakpoints } from "../styles/variables";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  margin-top: 2rem;
  @media (max-width: ${breakpoints.sm + "px"}) {
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
  @media (max-width: ${breakpoints.xs + "px"}) {
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  display: block;
  width: 100%;
  padding-top: 1rem;
  text-align: center;
  font-style: italic;
  @media (max-width: ${breakpoints.sm + "px"}) {
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

const ProfilePic = styled.img`
  width: 15%;
  height: 100%;
  border-radius: 10% 0;
  @media (max-width: ${breakpoints.md + "px"}) {
    width: 25%;
  }
`;

let interests = ["Apple", "music", "smart home", "golf"];
let i = 0;
function getWord() {
  let word = interests[i];
  i += 1;
  if (i > interests.length - 1) {
    i = 0;
  }
  return word;
}

let wordErased = false;
export default class IndexPage extends React.Component {
  _isMounted = false;
  state = {
    changingWord: getWord(),
    nextWord: getWord(),
    wordBuilderIndex: 0,
    intervalID: 1,
    timerID: 1,
  };

  componentDidMount() {
    this._isMounted = true;
    this.startInterval();
  }

  componentWillUnmount() {
    this._isMounted = false;
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
      wordErased = true;
    }

    if (!wordErased) {
      this.setState({
        changingWord: this.state.changingWord.slice(0, -1),
      });
    } else if (wordErased && this.state.changingWord != this.state.nextWord) {
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
      wordErased = false;
      this.startInterval();
    }
  }

  render() {
    return (
      <IndexLayout>
        <Page>
          <PictureWrapper>
            <ProfilePic src={meCap}></ProfilePic>
            <ProfilePic src={meCat}></ProfilePic>
            <ProfilePic src={meBirthday}></ProfilePic>
            <ProfilePic src={meSwim}></ProfilePic>
          </PictureWrapper>
          <Title>
            Developer, engineer and{" "}
            <VaryingWord>{this.state.changingWord}</VaryingWord> enthusiast
          </Title>
          <CardWrapper>
            <Card url="/projects">Projects</Card>
            <Card url="/">About me</Card>
          </CardWrapper>
        </Page>
      </IndexLayout>
    );
  }
}

//export default IndexPage;

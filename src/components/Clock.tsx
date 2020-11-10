import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../styles/variables";
import { Link } from "gatsby";
import { Location } from "@reach/router";

const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  font-size: 6pt;
  color: black;
  height: 8rem;
  width: 8rem;
  @media (max-width: ${breakpoints.sm + "px"}) {
    font-size: 4pt;
    height: 5.5rem;
    width: 5.5rem;
  }
  border: 5px solid white;
  border-radius: 50%;
`;

const Dot = styled.div`
  background: white;
  justify-self: flex-start;
  height: 0.3rem;
  width: 0.3rem;
  left: 0;
  border-radius: 50%;
`;

type AngleProps = {
  angle?: number;
};

const HourWrapper = styled(ClockWrapper)<AngleProps>`
  flex-direction: row-reverse;
  position: absolute;
  justify-content: left;

  --deg: ${(props) => props.angle}deg;
  transform: rotate(var(--deg, 0));
`;

const MinuteWrapper = styled(HourWrapper)`
  flex-direction: row;
  background: transparent;
  --deg: ${(props) => props.angle}deg;
`;

const SecondWrapper = styled(MinuteWrapper)`
  opacity: 0;
  color: red;
  --deg: 90deg;
  &:active {
    opacity: 1;
  }
`;

const HourHand = styled.div`
  width: 50%;
  text-align: center;
  transform-origin: left center;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  animation: rotate 43200s infinite linear;
`;

const MinuteHand = styled(HourHand)`
  transform-origin: right center;
  animation: rotate 3600s infinite steps(60);
`;

const SecondHand = styled(MinuteHand)`
  transform-origin: right center;
  animation: rotate 60s infinite steps(60);
`;

const GoHomeLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: black;
  border: solid 1px transparent;
  height: 100%;
  padding: 1rem 1rem 0 1rem;
  border-radius: 20px 0;
  :link {
    text-decoration: none;
  }
  @media (max-width: ${breakpoints.sm + "px"}) {
    padding: 0.5rem;
  }
`;

const BackIcon = styled.div`
  font-size: 30pt;
  color: white;
  min-height: 4rem;
`;

class Clock extends React.Component {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  componentDidMount() {
    let date = new Date();
    let minuteAngle = date.getMinutes() * 6 + 90;
    let hourAngle = date.getHours() * 30 + date.getMinutes() / 2 - 90;
    this.setState({ minuteAngle: minuteAngle });
    this.setState({ hourAngle: hourAngle });
  }

  state = {
    minuteAngle: 0,
    hourAngle: 0,
  };

  render() {
    return (
      <GoHomeLink to="/">
        <ClockWrapper>
          <Dot></Dot>
          <HourWrapper angle={this.state.hourAngle}>
            <HourHand>LOOR</HourHand>
          </HourWrapper>
          <MinuteWrapper angle={this.state.minuteAngle}>
            <MinuteHand>JOHANNES</MinuteHand>
          </MinuteWrapper>
          <SecondWrapper>
            <SecondHand>MICHAEL</SecondHand>
          </SecondWrapper>
        </ClockWrapper>
        <BackIcon>
          <Location>
            {({ location }) => {
              return location.pathname != "/" ? "↩︎" : "";
            }}
          </Location>
        </BackIcon>
      </GoHomeLink>
    );
  }
}

export default Clock;

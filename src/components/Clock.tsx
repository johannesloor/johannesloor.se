import * as React from "react";
import styled from "@emotion/styled";
import { breakpoints } from "../styles/variables";
import { Link } from "gatsby";

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

const HourWrapper = styled(ClockWrapper)`
  flex-direction: row-reverse;
  position: absolute;
  justify-content: left;

  --deg: ${getHourAngle}deg;
  transform: rotate(var(--deg, 0));
`;

const MinuteWrapper = styled(HourWrapper)`
  flex-direction: row;
  background: transparent;
  --deg: ${getMinuteAngle}deg;
`;

const SecondWrapper = styled(MinuteWrapper)`
  opacity: 0;
  color: red;
  --deg: 90deg;
  &:hover {
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

//Sets the ClockWrapper
function SetClockWrapper() {
  let date = new Date();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let hourAngle = hours * 30 + minutes / 2 - 90;
  let minuteAngle = 90 + minutes * 6;
  let angles = [hourAngle, minuteAngle];
  return angles;
}
function getHourAngle() {
  let angles = SetClockWrapper();
  return angles[0];
}

function getMinuteAngle() {
  let angles = SetClockWrapper();
  return angles[1];
}
const Clock: React.FC = () => (
  <Link to="/">
    <ClockWrapper>
      <Dot></Dot>
      <HourWrapper>
        <HourHand>LOOR</HourHand>
      </HourWrapper>
      <MinuteWrapper>
        <MinuteHand>JOHANNES</MinuteHand>
      </MinuteWrapper>
      <SecondWrapper>
        <SecondHand>MICHAEL</SecondHand>
      </SecondWrapper>
    </ClockWrapper>
  </Link>
);

export default Clock;

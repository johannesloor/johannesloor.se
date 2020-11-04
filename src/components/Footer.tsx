import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/variables";
import { Link } from "gatsby";
import { Location } from "@reach/router";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  background-color: ${colors.background};
  padding-bottom: 1rem;
`;

const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid white;
  border-radius: 10px 0;
  margin-top: 1rem;
`;

const Mail = styled.a`
  color: black;
  padding: 1rem;
`;

const Pages = styled(Contact)`
  border: none;
`;

const PageLink = styled(Link)`
  color: black;
  border: 1px solid white;
  padding: 1rem;
  border-radius: 10px 0;
  margin: 0 0.5rem;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <Location>
      {({ location }) => {
        return location.pathname != "/" ? (
          <Pages>
            <PageLink to="/projects">Projects</PageLink>
            <PageLink to="/about">About Me</PageLink>
          </Pages>
        ) : (
          ""
        );
      }}
    </Location>

    <Contact>
      <Mail href="mailto: johannes.loor@gmail.com">
        johannes.loor@gmail.com
      </Mail>
    </Contact>
  </FooterWrapper>
);

export default Footer;

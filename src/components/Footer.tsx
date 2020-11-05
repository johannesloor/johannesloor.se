import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/variables";

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

const Footer: React.FC = () => (
  <FooterWrapper>
    <Contact>
      <Mail href="mailto: johannes.loor@gmail.com">
        ✉️ johannes.loor@gmail.com
      </Mail>
    </Contact>
  </FooterWrapper>
);

export default Footer;

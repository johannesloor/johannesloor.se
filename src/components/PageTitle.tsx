import * as React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/variables";

const Title = styled.h1`
  width: 100vw;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${colors.background};
`;

const PageTitle: React.FC = ({ children }) => <Title>{children}</Title>;

export default PageTitle;

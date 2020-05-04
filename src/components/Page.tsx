import * as React from "react";
import styled from "@emotion/styled";
import { dimensions, breakpoints } from "../styles/variables";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  @media (max-width: ${breakpoints.sm + "px"}) {
    padding: 5px;
  }
  width: 100%;
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;

import * as React from "react";
import { Link } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

const PageTwo = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Projects</h1>
        <Link to="/">Take me back home.</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default PageTwo;

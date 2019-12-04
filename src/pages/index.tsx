import * as React from "react";
import { Link } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import { heights } from "../styles/variables";

const IndexPage = () => (
  <IndexLayout fontSize={8} height={heights.headerBig}>
    <Page>
      <Container>
        <h1>Developer</h1>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;

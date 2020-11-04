import * as React from "react";

import Page from "../components/Page";
import IndexLayout from "../layouts";
import PageTitle from "../components/PageTitle";

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <PageTitle>404: Page not found.</PageTitle>
      <h3>Well this is awkward... Better click the clock.</h3>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;

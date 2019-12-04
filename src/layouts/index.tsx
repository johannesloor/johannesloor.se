import * as React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "modern-normalize";
import "../styles/normalize";

import Header from "../components/Header";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

interface HeaderProps {
  fontSize?: number;
  height?: number;
}
const IndexLayout: React.FC<HeaderProps> = ({ children, fontSize, height }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            { name: "keywords", content: data.site.siteMetadata.keywords }
          ]}
        />
        <Header fontSize={fontSize} height={height} />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;

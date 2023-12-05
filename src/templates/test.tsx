import React from "react";
import { graphql } from "gatsby";

export default function TestTemplate({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export const query = graphql`
  query TestQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

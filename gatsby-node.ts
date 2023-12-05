import { GatsbyNode } from "gatsby";
import path from "path";
const TestTemplate = path.resolve("src/templates/test.tsx");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  actions.createPage({
    path: "/test",
    matchPath: "/test/*",
    component: TestTemplate,
  });
};

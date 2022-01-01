import { RouterContext } from "next/dist/shared/lib/router-context";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, useGlobal } from "../src/components/Layout";
import { theme } from "../src/components/Layout/useGlobal";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
const actionWithPromise = () => {
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject());
};
const router = {
  pathname: "/",
  route: "/users/$user",
  query: { q: "query_param1" },
  asPath: "/test_pathname?q=query_param1#hash_param1",
  prefetch: actionWithPromise,
  push: actionWithPromise,
  replace: actionWithPromise,
};

export const decorators = [
  (Story) => {
    const global = useGlobal();
    return (
      <RouterContext.Provider value={router}>
        <GlobalStyle />
        <ThemeProvider theme={theme(global)}>
          <Story />
        </ThemeProvider>
      </RouterContext.Provider>
    );
  },
];

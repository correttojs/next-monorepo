import "../src/styles/globals.css";

import * as Router from "next/router";
import * as nextImage from "next/image";
import * as nexLink from "next/link";

Object.defineProperty(nexLink, "default", {
  configurable: true,
  value: ({ children }) => {
    return <>{children}</>;
  },
});

Object.defineProperty(Router, "useRouter", {
  configurable: true,
  value: () => {
    return {
      asPath: window.location.href,
      locale: "en",
    };
  },
});
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => (
    <div>
      <img {...props} />
    </div>
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

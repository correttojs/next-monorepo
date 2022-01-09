import { GlobalType } from "@/graphql/_airbn.types";
import { queryClient } from "@correttojs/next-utils/useReactQuery";
import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle } from "styled-components";

import { Contacts } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MQ_MOBILE } from "./MediaQueries";
import { GlobalContext } from "./useGlobal";

export const GlobalStyle = createGlobalStyle`
    html, body {
      overflow-x:hidden ;
    } 
    body {
        margin: 0;
        font-family: Raleway;
    }

    .ReactModal__Overlay{
      z-index:20;
    }
    @media ${MQ_MOBILE} {
      .ReactModal__Content{
        top:0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
      }
    }

    a,button{
      cursor:pointer;
    }
`;

export const withLayout = (Comp: any) => {
  const Body = (props: { global: GlobalType }) => {
    return (
      <>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalContext.Provider value={props.global}>
            <div className="flex flex-col items-center">
              <Header />
              <div
                className="fixed w-full bg-white md:hidden"
                css={`
                  top: 77px;
                  left: 0px;
                `}
              >
                <Contacts direction="row" />
              </div>
              <div
                css={`
                  margin-top: 85px;
                  @media ${MQ_MOBILE} {
                    margin-top: 120px;
                  }
                `}
              >
                <Comp {...props}></Comp>
              </div>
              <Footer />
            </div>
          </GlobalContext.Provider>
        </QueryClientProvider>
      </>
    );
  };
  Body.displayName = "Body";
  return Body;
};

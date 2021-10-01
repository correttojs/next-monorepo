import type { NextPage } from "next";
import React from "react";
import {
  ApartmentListDocument,
  ApartmentListQuery,
} from "../generated/codegen";
import { gqlRequest } from "@correttojs/next-utils/useReactQuery";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = await gqlRequest(
    ApartmentListDocument,
    {},
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? ""
  );
  return {
    props: data,
  };
};

const Home: NextPage<ApartmentListQuery> = ({ apartments }) => {
  return (
    <div>
      {apartments.map((apartment, k) => {
        return (
          <p key={k}>
            <Link href={`/${apartment.name?.toLowerCase()}`}>
              <a>{apartment.name}</a>
            </Link>
          </p>
        );
      })}
    </div>
  );
};

export default Home;

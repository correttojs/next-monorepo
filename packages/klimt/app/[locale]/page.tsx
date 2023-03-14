import { Hero } from "./_home/Hero/Hero";
import React from "react";
import { Map } from "@packages/ui/Map";
import { getAirbnbDetails } from "./_home/airbnb";
import { getPageProps } from "./[page]/getPageProps";
import { Gallery } from "./_home/Gallery/Gallery";
import { Contact } from "./_home/Contact/Contact";
import { ParamsTypes } from "./_layout/types";
import { Links } from "./_layout/generated/codegen";
import { Flex } from "@packages/ui/Flex/Flex";
import {
  MainAnchorSection,
  MainSection,
} from "@packages/ui/Sections/MainSection";

export default async function Page({ params }: ParamsTypes) {
  const { apartment } = await getPageProps({
    pageType: Links.Home,
    locale: params.locale,
  });

  const airbnb = await getAirbnbDetails("de", apartment?.airbnb ?? "");
  return (
    <Flex direction="column" gap="4">
      <div>
        <Hero
          headline={apartment?.headline ?? ""}
          subHeadline={apartment?.subHeadline ?? ""}
        />
      </div>
      <MainAnchorSection anchor="home">
        {airbnb?.pdp_listing_detail?.sectioned_description?.summary}
      </MainAnchorSection>
      <Gallery photos={airbnb?.pdp_listing_detail?.photos ?? []} />
      <MainAnchorSection anchor="contacts">
        <Contact apartment={apartment} />
      </MainAnchorSection>
      <MainAnchorSection anchor="contacts" className="h-map">
        <Map
          title={apartment?.name ?? ""}
          lat={apartment?.location?.latitude ?? 0}
          lng={apartment?.location?.longitude ?? 0}
          className="h-map"
        />
      </MainAnchorSection>
    </Flex>
  );
}

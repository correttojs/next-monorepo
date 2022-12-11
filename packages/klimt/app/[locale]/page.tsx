import { Hero } from "./_home/Hero/Hero";
import React from "react";
import { Map } from "@packages/ui/Map";
import { getAirbnbDetails } from "./_home/airbnb";
import { getPageProps } from "./_layout/getPageProps";
import { Gallery } from "./_home/Gallery/Gallery";
import { AnchorPointer } from "@packages/ui/AnchorPointer";
import { Contact } from "./_home/Contact/Contact";
import { ParamsTypes } from "./_layout/types";
import { Links } from "./_layout/generated/codegen";

export default async function Page({ params }: ParamsTypes) {
  const { apartment } = await getPageProps({
    pageType: Links.Home,
    locale: params.locale,
  });

  // const airbnb = await getAirbnbDetails("de", apartment?.airbnb ?? "");
  return (
    <>
      <Hero
        headline={apartment?.headline ?? ""}
        subHeadline={apartment?.subHeadline ?? ""}
      />
      <div className="main py-10">
        <AnchorPointer id="home" />
        {/* <section className="">
          {airbnb?.pdp_listing_detail?.sectioned_description?.summary}
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        </section> */}
      </div>
      {/* <Gallery photos={airbnb?.pdp_listing_detail?.photos ?? []} /> */}

      <Contact apartment={apartment} />
      <Map
        title={apartment?.name ?? ""}
        lat={apartment?.location?.latitude ?? 0}
        lng={apartment?.location?.longitude ?? 0}
        className="main h-map py-10"
      />
    </>
  );
}

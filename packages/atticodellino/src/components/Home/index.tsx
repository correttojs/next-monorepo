import { RecoPage } from "@/components/Recommendations/Reco";
import { pdp_listing_detail } from "@/graphql/_airbn.types";
import Head from "next/head";
import React from "react";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";

import { useTranslations } from "../../hooks/useTranslations/useTranslations";
import { Collapsible } from "../@UI/Collapsible";
import { Section } from "../@UI/Section";
import { H2, P } from "../@UI/Texts";
import { BookingCalendar } from "../FormBookCalendar";
import { useGlobal } from "../Layout";
import { Amenities } from "./Amenities";
import { BrandBackground } from "./BrandBackground";
import { Host } from "./Host";
import { Map } from "./Map";
import { Hero } from "./NewHero";
import { Reviews } from "./Reviews";
import { Summary } from "./Summary";

Modal.setAppElement("#__next");

export const Home: React.FC<pdp_listing_detail> = ({ pdp_listing_detail }) => {
  const translate = useTranslations();
  const { name } = useGlobal();

  const isCypress = typeof window !== "undefined" && (window as any).Cypress;

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px 300px 0px",
  });
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content={pdp_listing_detail.sectioned_description.summary}
        />
      </Head>

      <Hero photos={pdp_listing_detail.photos} />

      {/* <Section className="flex justify-end ">
        <CardHorizontal
          title={sponsor?.[0]?.location ?? ""}
          message={translate("ALSO", {
            c: sponsor?.[0]?.location,
          })}
          onClick={() =>
            (window.location.href =
              `/${sponsor?.[0]?.key?.toLowerCase()}`.replace("//", "/"))
          }
        >
          <Image
            src={`/images/promo-${sponsor?.[0]?.key?.toLowerCase()}.webp`}
            title={sponsor?.[0]?.location ?? ""}
            alt={sponsor?.[0]?.location ?? ""}
            width={128}
            height={128}
            className="object-cover w-32 h-32 "
          />
        </CardHorizontal>
      </Section> */}

      <Summary {...pdp_listing_detail} />
      <Section className="pb-0">
        <P>{pdp_listing_detail.sectioned_description.summary}</P>
      </Section>
      <div data-cy="lazy" ref={ref}>
        {(inView || isCypress) && (
          <>
            <Collapsible
              showReadMore={
                !!(
                  pdp_listing_detail.sectioned_description.space ??
                  pdp_listing_detail.sectioned_description.access ??
                  pdp_listing_detail.sectioned_description.notes
                )
              }
            >
              <Section>
                <H2>{translate("SPACE")}</H2>
                <P>{pdp_listing_detail.sectioned_description.space}</P>
              </Section>

              <Section>
                <H2>{translate("GUEST_ACCESS")}</H2>
                <P>{pdp_listing_detail.sectioned_description.access}</P>
              </Section>

              <Section>
                <H2>{translate("OTHER_THINGS")}</H2>
                <P>{pdp_listing_detail.sectioned_description.notes}</P>
              </Section>
            </Collapsible>

            <Amenities amenities={pdp_listing_detail.listing_amenities} />
            <BookingCalendar />

            <Map title={pdp_listing_detail.name} />

            <BrandBackground />
            <Host
              srcImage={pdp_listing_detail.primary_host.profile_pic_path}
              about={pdp_listing_detail.primary_host.about}
              reviews={
                pdp_listing_detail.primary_host.badges.find(
                  (r) => r.id === "reviews"
                )?.count ?? 0
              }
            />
            <Reviews
              sorted_reviews={pdp_listing_detail.sorted_reviews}
              review_details_interface={
                pdp_listing_detail.review_details_interface
              }
            />
            <Section>
              <H2>{translate("NEIGHBORHOOD")}</H2>
              <P>
                {pdp_listing_detail.sectioned_description.neighborhood_overview}
              </P>
            </Section>

            <Section>
              <H2>{translate("TRANSIT")}</H2>
              <P>{pdp_listing_detail.sectioned_description.transit}</P>
            </Section>

            <Section>
              <H2>{translate("HOUSE_RULES")}</H2>
              <P>{pdp_listing_detail.sectioned_description.house_rules}</P>
              <ul className="pt-2">
                {pdp_listing_detail.guest_controls.structured_house_rules.map(
                  (s, k) => (
                    <li className="font-bold" key={k}>
                      {s}
                    </li>
                  )
                )}
              </ul>
            </Section>

            <RecoPage />
          </>
        )}
      </div>
    </>
  );
};

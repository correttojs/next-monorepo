import { QueryResolvers } from "@/generated/resolvers-types";
import fetch from "node-fetch";
import queryString from "query-string";

import { GlobalType, Review, pdp_listing_detail } from "./_airbn.types";
import { ResolverContext } from "./resolvers";

const BASE_URL = process.env.AIRBNB_BASEURL;
const LOCALE = "it";
const KEY = process.env.AIRBNB_KEY;

export const priceResolver: QueryResolvers<ResolverContext>["price"] = async (
  _,
  { from, to, airBnb }
) => {
  // tslint:disable-next-line:max-line-length
  const url = `${BASE_URL}pdp_listing_booking_details?guests=2&listing_id=${airBnb}&_format=for_web_with_date&_interaction_type=dateChanged&_intents=p3_book_it&_parent_request_uuid=f567fc7f-3922-4c8a-8fc6-db8ee3f02d02&_p3_impression_id=p3_1505504996_%2BSBaBxbLCLhmc09Y&show_smart_promotion=0&check_in=${from}&check_out=${to}&number_of_adults=2&number_of_children=0&number_of_infants=0&key=${KEY}&currency=EUR&locale=${LOCALE}`;
  const response = await fetch(url).then((r) => r.json());
  const price = (response as any).pdp_listing_booking_details[0].price.total
    .amount;
  return Math.round(parseInt(price, 10) * 0.9 * 100) / 100;
};

export const reviewsResolver: QueryResolvers<ResolverContext>["reviews"] =
  async (_, { airBnb }) => {
    const res: { reviews: Review[] } = (await fetch(
      `${BASE_URL}reviews?key=${KEY}&currency=EUR&listing_id=${airBnb}&role=guest&_format=for_p3&_limit=15&_offset=7&_order=language_country`
    ).then((r) => r.json())) as any;
    return res.reviews.map((r) => ({
      comments: r.comments,
      date: r.localized_date,
      language: r.language,
      reviewer: r.reviewer.first_name,
      id: r.id,
    }));
  };

export const getDetails = async (
  locale: GlobalType["lang"],
  airBnb: string
): Promise<pdp_listing_detail> => {
  const url = queryString.stringifyUrl({
    url: `${BASE_URL}pdp_listing_details/${airBnb}`,
    query: {
      _format: "for_rooms_show",
      key: KEY,
      locale,
    },
  });
  const res: pdp_listing_detail = (await fetch(url).then((r) =>
    r.json()
  )) as any;

  return res;
};

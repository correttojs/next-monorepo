import { Review, pdp_listing_detail } from "./airbnb.types";

const BASE_URL = process.env.AIRBNB_BASEURL;
const LOCALE = "de";
const KEY = process.env.AIRBNB_KEY;

type PriceProps = { from: string; to: string; apartmentKey: string };
export const getAirbnbPrice = async ({
  from,
  to,
  apartmentKey,
}: PriceProps) => {
  const url = `${BASE_URL}pdp_listing_booking_details?guests=2&listing_id=${apartmentKey}&_format=for_web_with_date&_interaction_type=dateChanged&_intents=p3_book_it&_parent_request_uuid=f567fc7f-3922-4c8a-8fc6-db8ee3f02d02&_p3_impression_id=p3_1505504996_%2BSBaBxbLCLhmc09Y&show_smart_promotion=0&check_in=${from}&check_out=${to}&number_of_adults=2&number_of_children=0&number_of_infants=0&key=${KEY}&currency=EUR&locale=${LOCALE}`;
  const response = await fetch(url).then((r) => r.json());
  const price = (response as any).pdp_listing_booking_details[0].price.total
    .amount;
  return Math.round(parseInt(price, 10) * 0.9 * 100) / 100;
};

export const getAirbnbReviews = async (apartmentKey: string) => {
  const res: { reviews: Review[] } = (await fetch(
    `${BASE_URL}reviews?key=${KEY}&currency=EUR&listing_id=${apartmentKey}&role=guest&_format=for_p3&_limit=15&_offset=7&_order=language_country`
  ).then((r) => r.json())) as any;
  return res.reviews.map((r) => ({
    comments: r.comments,
    date: r.localized_date,
    language: r.language,
    reviewer: r.reviewer.first_name,
    id: r.id,
  }));
};

export const getAirbnbDetails = async (
  locale: "en" | "de",
  apartmentKey: string
): Promise<pdp_listing_detail> => {
  const url = new URL(`${BASE_URL}pdp_listing_details/${apartmentKey}`);

  url.searchParams.set("_format", "for_rooms_show");
  url.searchParams.set("key", KEY ?? "");
  url.searchParams.set("locale", locale);

  console.log("getAirbnbDetails", url.toString());
  try {
    const res: pdp_listing_detail = (await fetch(url.toString()).then((r) => {
      try {
        return r.json();
      } catch (e) {
        console.error(r.text());
        return {};
      }
    })) as any;
    return res;
  } catch (e) {
    console.error(e);
    return {} as any;
  }
};

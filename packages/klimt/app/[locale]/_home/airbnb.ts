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

  // try {
  //   const res: pdp_listing_detail = (await fetch(url.toString()).then((r) => {
  //     try {
  //       r.text().then((a) => console.log(a));
  //       return {}; //r.json();
  //     } catch (e) {
  //       return {};
  //     }
  //   })) as any;
  //   return res;
  // } catch (e) {
  //   console.error(e);
  //   return {} as any;
  // }

  return {
    pdp_listing_detail: {
      listing_amenities: [
        {
          category: null,
          icon: "icon-wifi",
          id: 4,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "WLAN",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "wireless_internet",
          tooltip: "In der gesamten Unterkunft verfügbar",
        },
        {
          category: null,
          icon: "icon-pool",
          id: 7,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "Pool",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "pool",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-meal",
          id: 8,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "Küche",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "kitchen",
          tooltip:
            "Ort, an dem Gäste ihre eigenen Mahlzeiten zubereiten können",
        },
        {
          category: null,
          icon: "icon-air-conditioning",
          id: 5,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "Klimaanlage",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "ac",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-parking",
          id: 9,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "Kostenloser Parkplatz auf dem Grundstück",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "free_parking",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-shampoo",
          id: 41,
          is_business_ready_feature: false,
          is_present: false,
          is_safety_feature: false,
          name: "Shampoo",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "shampoo",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-washer",
          id: 33,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "Waschmaschine",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "washer",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-hair-dryer",
          id: 45,
          is_business_ready_feature: true,
          is_present: false,
          is_safety_feature: false,
          name: "Föhn",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "hair-dryer",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-tv",
          id: 1,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "TV",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "tv",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-essentials",
          id: 40,
          is_business_ready_feature: false,
          is_present: false,
          is_safety_feature: false,
          name: "Grundausstattung",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "essentials",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-heating",
          id: 30,
          is_business_ready_feature: false,
          is_present: false,
          is_safety_feature: false,
          name: "Heizung",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "heating",
          tooltip: "",
        },
        {
          category: null,
          icon: null,
          id: 210,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "Außendusche",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "alfresco_shower",
          tooltip: "",
        },
        {
          category: null,
          icon: "icon-ok",
          id: 36,
          is_business_ready_feature: false,
          is_present: false,
          is_safety_feature: true,
          name: "Kohlenmonoxidmelder",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "carbon_monoxide_detector",
          tooltip:
            "Der/Die Gastgeber:in hat keinen Kohlenmonoxidmelder in der Immobilie gemeldet.",
        },
        {
          category: null,
          icon: "icon-ok",
          id: 35,
          is_business_ready_feature: false,
          is_present: false,
          is_safety_feature: true,
          name: "Rauchmelder",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "smoke_detector",
          tooltip:
            "Der/Die Gastgeber:in hat keinen Rauchmelder in der Immobilie gemeldet.",
        },
        {
          category: null,
          icon: "icon-private-room",
          id: 57,
          is_business_ready_feature: false,
          is_present: false,
          is_safety_feature: false,
          name: "Privater Eingang",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "private-entrance",
          tooltip: "",
        },
        {
          category: null,
          icon: null,
          id: 179,
          is_business_ready_feature: false,
          is_present: true,
          is_safety_feature: false,
          name: "Essbereich im Freien",
          select_list_view_photo: null,
          select_tile_view_photo: null,
          tag: "alfresco_dining",
          tooltip: "",
        },
      ],
      root_amenity_sections: [
        {
          id: "available_amenities",
          title: "Ausstattung",
          subtitle: "",
          amenity_ids: [4, 7, 8, 5],
          photos: null,
        },
        {
          id: "unavailable_safety_amenities",
          title: "Ausstattung",
          subtitle:
            "Der/Die Gastgeber:in hat keine Rauch- oder Kohlenmonoxidmelder in der Immobilie gemeldet.",
          amenity_ids: [35, 36],
          photos: null,
        },
      ],
      see_all_amenity_sections: [
        {
          id: "pdp_m2_5_bathroom",
          title: "Badezimmer",
          subtitle: "",
          amenity_ids: [210],
          photos: null,
        },
        {
          id: "pdp_m2_5_bedroom_laundry",
          title: "Schlafzimmer und Wäsche",
          subtitle: "",
          amenity_ids: [33],
          photos: null,
        },
        {
          id: "pdp_m2_5_entertainment",
          title: "Unterhaltung",
          subtitle: "",
          amenity_ids: [1],
          photos: null,
        },
        {
          id: "pdp_m2_5_heating_cooling",
          title: "Heizung und Klimaanlage",
          subtitle: "",
          amenity_ids: [5],
          photos: null,
        },
        {
          id: "pdp_m2_5_internet_office",
          title: "Internet und Büro",
          subtitle: "",
          amenity_ids: [4],
          photos: null,
        },
        {
          id: "pdp_m2_5_kitchen_dining",
          title: "Küche und Esszimmer",
          subtitle: "",
          amenity_ids: [8],
          photos: null,
        },
        {
          id: "pdp_m2_5_outdoor",
          title: "Außenbereiche",
          subtitle: "",
          amenity_ids: [179],
          photos: null,
        },
        {
          id: "pdp_m2_5_parking_facilities",
          title: "Parken und zusätzlicher Zugang",
          subtitle: "",
          amenity_ids: [7, 9],
          photos: null,
        },
        {
          id: "pdp_unavailable",
          title: "Nicht enthalten",
          subtitle: "",
          amenity_ids: [41, 45, 40, 30, 36, 35, 57],
          photos: null,
        },
      ],
      additional_house_rules: "",
      bathroom_label: "1 Badezimmer",
      bed_label: "1 Bett",
      bedroom_label: "1 Schlafzimmer",
      guest_label: "2 Gäste",
      highlights: [
        {
          type: "LISTING_ENTIRE_HOME_PROPERTY_TYPE",
          message: "Ferienunterkunft nur für dich allein.",
          headline: "Gesamte Unterkunft",
          position: "0",
          vote: null,
          icon: "accomodation_home",
          context: null,
        },
        {
          type: "LISTING_POPULAR_AMENITY",
          message:
            "Gäste suchen häufig nach diesem beliebten Ausstattungsmerkmal.",
          headline: "Pool",
          position: "1",
          vote: null,
          icon: "extras_star",
          context: null,
        },
      ],
      id: 52899991,
      listing_expectations: [],
      listing_rooms: [],
      name: "Klimts Wiege",
      p3_subject: "Klimts Wiege - Ferienunterkünfte zur Miete in Malcesine",
      p3_summary_address: "Malcesine, Venetien, Italien",
      p3_summary_title: "Klimts Wiege",
      person_capacity: 2,
      photos: [
        {
          caption: "",
          id: 1271077983,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=small",
          sort_order: 1,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?aki_policy=xx_large",
          picture_orientation: "PORTRAIT",
          aspect_ratio: 0.75,
        },
        {
          caption: "",
          id: 1271077458,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=small",
          sort_order: 2,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/0f324591-e96a-4dda-b1d2-09ffd76c7650.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271079596,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=small",
          sort_order: 3,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/e55c53eb-e15c-4b5b-991f-7d51c66f7966.jpeg?aki_policy=xx_large",
          picture_orientation: "PORTRAIT",
          aspect_ratio: 0.75,
        },
        {
          caption: "",
          id: 1271077456,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=small",
          sort_order: 4,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ed8244b2-e54f-486a-b934-22ae976db3dd.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271073388,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=small",
          sort_order: 5,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a38c22d5-8d4a-4645-8640-443586fd37cf.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271073392,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=small",
          sort_order: 6,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/fa9828e9-332c-4ffd-af4d-599607260e4d.jpeg?aki_policy=xx_large",
          picture_orientation: "PORTRAIT",
          aspect_ratio: 0.75,
        },
        {
          caption: "",
          id: 1271077444,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=small",
          sort_order: 7,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/af80b964-3a32-41c8-98e0-a8e918ca3e8a.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271077446,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=small",
          sort_order: 8,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ba123214-6fd5-4c88-b841-4ee169561697.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271077449,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=small",
          sort_order: 9,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ec1ce10e-0ce1-47fd-a5a8-58f367063dc1.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271077453,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=small",
          sort_order: 10,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5d5bdd63-3424-4a59-8f99-88a0104d49e6.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271077454,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=small",
          sort_order: 11,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/c8d38b2a-b887-4fcc-b6a7-706abe79ebe7.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271077455,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=small",
          sort_order: 12,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/5cdbd85e-23ea-44aa-a109-7a2f6c2673ab.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271077459,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=small",
          sort_order: 13,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/7c557ac1-a119-4454-bc0c-d168f30492ab.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.641337386018237,
        },
        {
          caption: "",
          id: 1271077475,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=small",
          sort_order: 14,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/3ea9ef3d-81d0-4d56-85a9-89a1762c9453.jpeg?aki_policy=xx_large",
          picture_orientation: "LANDSCAPE",
          aspect_ratio: 1.3333333333333333,
        },
        {
          caption: "",
          id: 1271079027,
          is_professional: false,
          large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=large",
          large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70",
          medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=medium",
          mini_square:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=mini_square",
          picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=large",
          scrim_color: "",
          small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=small",
          sort_order: 15,
          thumbnail:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=small",
          preview_encoded_png: "",
          x_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=x_large",
          x_large_cover:
            "https://a0.muscache.com/ac/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?interpolation=lanczos-none&size=x_large_cover&output-format=jpg&output-quality=70",
          x_medium:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=x_medium",
          x_small:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=x_small",
          xl_picture:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=x_large",
          xx_large:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/a19a2067-6d71-4cd0-9e87-6e7c2bf61b9c.jpeg?aki_policy=xx_large",
          picture_orientation: "PORTRAIT",
          aspect_ratio: 0.75,
        },
      ],
      primary_host: {
        about: "",
        badges: [
          {
            count: null,
            id: "identity-verified",
            image_path: null,
            image_size: null,
            label: "Identität verifiziert",
            link: null,
          },
        ],
        host_name: "Sara",
        id: 428271653,
        identity_verified: true,
        is_superhost: false,
        languages: ["English", "Deutsch", "Italiano", "Español"],
        languages_as_string: "English, Deutsch, Italiano, Español",
        location_long: null,
        member_since: "Oktober 2021",
        member_since_full_str: "Mitglied seit Oktober 2021",
        profile_path: "/users/show/428271653",
        profile_pic_path:
          "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3",
        response_rate_without_na: null,
        response_time_without_na: null,
        smart_name: "Sara",
        user_profile_info_i18n: null,
        has_inclusion_badge: false,
        profile_pic_path_large:
          "https://a0.muscache.com/defaults/user_pic-640x640.png?v=3",
        host_intro_tags: ["Verifiziert"],
      },
      review_highlight: null,
      room_and_property_type: "Gesamte Unterkunft: Ferienunterkunft",
      room_type_category: "entire_home",
      sectioned_description: {
        access: null,
        author_type: "human",
        description:
          "Prenditela con calma in questo spazio unico e rilassante.",
        detected_languages: null,
        house_rules: null,
        interaction: null,
        locale: "it",
        localized_language_name: "Italienisch",
        name: "Klimts Wiege",
        neighborhood_overview: null,
        notes: null,
        space: null,
        summary: "Prenditela con calma in questo spazio unico e rilassante.",
        transit: null,
      },
      star_rating: null,
      tier_id: 0,
      user: {
        id: 428271653,
        host_name: "Sara",
        profile_path: "/users/show/428271653",
        profile_pic_path:
          "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3",
      },
      book_it_url: "/payments/book?hosting_id=52899991",
      calendar_last_updated_at: null,
      guest_controls: {
        allows_children: false,
        allows_infants: false,
        allows_pets: false,
        allows_smoking: false,
        allows_events: false,
        id: 52899991,
        host_check_in_time_message: "",
        localized_structured_house_rules_with_tips: null,
        p3_structured_house_rules: [
          "Nicht geeignet für Kinder (2–12 Jahre)",
          "Rauchen verboten",
          "Keine Haustiere",
        ],
        structured_house_rules: [
          "Nicht geeignet für Kinder (2–12 Jahre)",
          "Rauchen verboten",
          "Keine Haustiere",
        ],
        structured_house_rules_with_tips: [
          {
            key: "are_children_allowed",
            long_term_text: "Eventuell nicht für Kinder geeignet (2–12 Jahre)",
            text: "Nicht geeignet für Kinder (2–12 Jahre)",
            tip: null,
            details: null,
            airmoji_key: "house_rules_no_kids",
          },
          {
            key: "is_smoking_allowed_as_host",
            long_term_text: null,
            text: "Rauchen verboten",
            tip: null,
            details: null,
            airmoji_key: "house_rules_no_smoking",
          },
          {
            key: "are_pets_allowed_as_host",
            long_term_text: null,
            text: "Keine Haustiere",
            tip: null,
            details: null,
            airmoji_key: "house_rules_no_pets",
          },
        ],
        allows_non_china_users: true,
      },
      localized_minimum_nights_description: null,
      min_nights: 5,
      native_currency: "EUR",
      collection_kicker: null,
      show_policy_details: true,
      has_we_work_location: false,
      is_business_travel_ready: false,
      additional_hosts: [],
      applicable_disaster: null,
      hometour_rooms: [],
      hometour_sections: [],
      alternate_sectioned_description_for_p3: null,
      initial_description_author_type: "human",
      localized_check_in_time_window: "Nach 15:00 Uhr",
      localized_check_out_time: "",
      localized_city: "Malcesine",
      localized_listing_expectations: [],
      localized_room_type: "Gesamte Unterkunft",
      city_guidebook: null,
      country_code: "IT",
      display_exact_location: null,
      host_guidebook: null,
      lat: 45.7389,
      lng: 10.79414,
      location_title: "Malcesine, Venetien, Italien",
      neighborhood_id: null,
      p3_event_data_logging: {
        accuracy_rating: null,
        amenities: [4, 7, 8, 5, 9, 41, 33, 45, 1, 40, 30, 210, 36, 35, 57, 179],
        bed_type: null,
        cancel_policy: null,
        checkin_rating: null,
        cleanliness_rating: null,
        communication_rating: null,
        description_language: "it",
        friend_count: null,
        guest_satisfaction_overall: null,
        hosting_id: 52899991,
        instant_book_possible: null,
        is_superhost: false,
        listing_lat: 45.7389,
        listing_lng: 10.79414,
        location_rating: null,
        page: "p3",
        person_capacity: 2,
        pdp_page_type: 1,
        picture_count: 0,
        price: null,
        response_rate_shown: null,
        response_time_shown: null,
        room_type: "Entire home/apt",
        saved_to_wishlist_count: null,
        home_tier: 1,
        time_since_last_calendar_update: null,
        utc_offset: 3600,
        value_rating: null,
        visible_review_count: 0,
        home_collection: null,
      },
      paid_growth_remarketing_listing_ids: null,
      commercial_host_info: null,
      flag_info: { id: null, redacted: null },
      license: null,
      p3_listing_flag_options: [],
      p3_review_flag_options: [],
      requires_license: true,
      should_hide_action_buttons: false,
      should_show_business_details: null,
      show_edit_mode: false,
      support_cleaner_living_wage: null,
      p3_display_review_summary: false,
      review_details_interface: {
        display_review_summary: false,
        host_other_property_review_count: 0,
        review_count: 0,
        review_score: null,
        review_summary: [],
        review_sorting_options: null,
        n_reviews_per_page: 7,
        review_tag_summary: null,
      },
      sorted_reviews: [],
      visible_review_count: 0,
      cover_photo_primary: null,
      host_interaction: null,
      host_quote: "",
      is_select_market: false,
      layout: null,
      nearby_airport_distance_descriptions: [],
      property_type_in_city: "",
      render_tier_id: 0,
      select_listing_tenets: [],
      other_property_types: [1, 2, 3, 35, 11],
      p3_neighborhood_breadcrumb_details: [
        {
          link_route: "/malcesine-italy/stays",
          link_text: "Malcesine",
          search_text: "Malcesine, Italien",
        },
        { link_route: "/s/homes", link_text: "Unterkünfte", search_text: "" },
        { link_route: "/", link_text: "Airbnb", search_text: "" },
      ],
      p3_seo_breadcrumb_details: [
        {
          link_route: "/malcesine-italy/stays",
          link_text: "Malcesine",
          search_text: "Malcesine, Italien",
        },
        { link_route: "/s/homes", link_text: "Unterkünfte", search_text: "" },
        { link_route: "/", link_text: "Airbnb", search_text: "" },
      ],
      p3_seo_property_search_url: "/malcesine-italy/stays",
      seo_features: {
        android_alternate_url:
          "android-app://com.airbnb.android/airbnb/rooms/52899991",
        android_deeplink: "airbnb://rooms/52899991",
        canonical_url: "https://www.airbnb.de/rooms/52899991",
        iphone_deeplink: "airbnb://rooms/52899991",
        meta_description:
          "11. Dez. 2022 - Gesamte Unterkunft für 100 €. Prenditela con calma in questo spazio unico e rilassante.",
        title:
          "Klimts Wiege - Ferienunterkünfte zur Miete in Malcesine, Venetien, Italien",
        breadcrumb_details: [
          {
            link_route: "/malcesine-italy/stays",
            link_text: "Malcesine",
            search_text: "Malcesine, Italien",
          },
          { link_route: "/s/homes", link_text: "Unterkünfte", search_text: "" },
          { link_route: "/", link_text: "Airbnb", search_text: "" },
        ],
        nearby_cities: [],
        neighborhood_breadcrumb_details: [
          {
            link_route: "/malcesine-italy/stays",
            link_text: "Malcesine",
            search_text: "Malcesine, Italien",
          },
          { link_route: "/s/homes", link_text: "Unterkünfte", search_text: "" },
          { link_route: "/", link_text: "Airbnb", search_text: "" },
        ],
        og_tags: {
          og_description:
            "Gesamte Unterkunft in Malcesine, Italien. Prenditela con calma in questo spazio unico e rilassante.",
          og_image:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?im_w=720",
          og_title:
            "Klimts Wiege - Ferienunterkünfte zur Miete in Malcesine, Venetien, Italien",
          og_type: "airbedandbreakfast:listing",
          og_url: "https://www.airbnb.de/rooms/52899991",
          og_image_height: null,
          og_image_width: null,
        },
        other_property_types: [
          {
            id: 1,
            option: "Wohnungen",
            url: "/s/Malcesine--Italien/homes?property_type_id[]=1",
          },
          {
            id: 2,
            option: "Häuser",
            url: "/s/Malcesine--Italien/homes?property_type_id[]=2",
          },
          {
            id: 3,
            option: "Bed & Breakfasts",
            url: "/s/Malcesine--Italien/homes?property_type_id[]=3",
          },
          {
            id: 35,
            option: "Lofts",
            url: "/s/Malcesine--Italien/homes?property_type_id[]=35",
          },
          {
            id: 11,
            option: "Villen",
            url: "/s/Malcesine--Italien/homes?property_type_id[]=11",
          },
        ],
        property_search_url: "/malcesine-italy/stays",
        rel_image_src:
          "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?im_w=720",
        twitter_tags: {
          twitter_card: "photo",
          twitter_description: null,
          twitter_image:
            "https://a0.muscache.com/im/pictures/miso/Hosting-52899991/original/ae5641b5-d803-4b61-9e2b-7d3a56e14392.jpeg?im_w=720",
          twitter_title: null,
          twitter_url: "https://www.airbnb.de/rooms/52899991",
        },
        index_in_search_engines: false,
      },
      share_links: [
        {
          channel_name: "facebook",
          url: "http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.airbnb.de%2Frooms%2F52899991%3Fs%3D4",
          raw_url: "https://www.airbnb.de/rooms/52899991?s=4",
          title: "Facebook",
          s: "4",
        },
        {
          channel_name: "twitter",
          url: "https://twitter.com/intent/tweet?source=tweetbutton&text=Das+gef%C3%A4llt+mir%21+%22Klimts+Wiege+-+Ferienunterk%C3%BCnfte+zur+Miete+in+Malcesine+%23Travel%22+%40airbnb&url=https%3A%2F%2Fwww.airbnb.de%2Frooms%2F52899991%3Fs%3D5&related=airbnb",
          raw_url: null,
          title: "Twitter",
          s: "5",
        },
        {
          channel_name: "email",
          url: "mailto:?to=&body=Schau%20dir%20dieses%20Inserat%20bei%20Airbnb%20an! https%3A%2F%2Fwww.airbnb.de%2Frooms%2F52899991%3Fs%3D1&subject=Schau%20dir%20dieses%20Inserat%20bei%20Airbnb%20an!",
          raw_url: null,
          title: "E-Mail",
          s: "23",
        },
        {
          channel_name: "messenger",
          url: "http://www.facebook.com/dialog/send?app_id=138566025676&link=https%3A%2F%2Fwww.airbnb.de%2Frooms%2F52899991%3Fs%3D25&redirect_uri=https%3A%2F%2Fwww.airbnb.de%2Frooms%2F52899991%3Fs%3D25",
          raw_url: "https://www.airbnb.de/rooms/52899991?s=25",
          title: "Messenger",
          s: "25",
        },
        {
          channel_name: "copy",
          url: "https://www.airbnb.de/rooms/52899991?s=51",
          raw_url: null,
          title: "",
          s: "51",
        },
        {
          channel_name: "embed",
          url: "https://www.airbnb.de/rooms/52899991?s=51",
          raw_url: null,
          title: "Einbetten",
          s: "51",
        },
      ],
      education_module: null,
      collection_promotion: null,
      reviews_order: "language_country",
      cover_photo_vertical: null,
      is_hotel: false,
      show_review_tag: false,
      accessibility_module: null,
      is_representative_inventory: false,
      highlights_impression_id: "1a627c29-f237-48a3-9175-fc255b8b31c7",
      point_of_interests: [],
      has_essentials_amenity: false,
      china_points_of_interest: null,
      reservation_status: null,
      visibility: "world",
      categorized_preview_amenities: [
        {
          category: "Standard",
          amenities: "WLAN, Küche, Klimaanlage, Waschmaschine, TV",
        },
        {
          category: "Weitere Highlights",
          amenities:
            "Pool, Kostenloser Parkplatz auf dem Grundstück, Außendusche, Essbereich im Freien",
        },
      ],
      section_erf_configs: {
        amenities: [
          {
            experiment: "p3_homes_guest_education",
            trebuchet: "p3_homes_guest_education_launch",
          },
        ],
        reviews: [
          {
            experiment: "p3_reviews_section_delivery_aa",
            trebuchet: "p3_reviews_section_delivery_aa",
          },
          {
            experiment: "p3_visualize_house_rules_web_v2",
            trebuchet: "p3_visualize_house_rules_web_v2",
          },
        ],
        location: [
          {
            experiment: "p3_location_section_delivery_aa",
            trebuchet: "p3_location_section_delivery_aa",
          },
        ],
      },
      china_points_of_interest_matcha: {},
      security_deposit_details: null,
      page_view_type: "DEFAULT",
      preview_tags: [],
      see_all_hometour_sections: [],
      summary_section: null,
      education_modules: {
        plus_education_module_v2: null,
        plus_education_module_v1: null,
      },
      enable_highlights_voting: false,
      amenity_section: null,
      host_info_module: null,
      hometour_module: null,
      hero_module: { cover_photo_cta_text: null, categorized_photos: [] },
      summary_module: null,
      new_user_education_module: {
        entire_home_education_message: null,
        guest_support_education_message: null,
      },
      panorama: null,
      house_rules_module: {
        structured_rules: [
          {
            key: "are_children_allowed",
            long_term_text: "Eventuell nicht für Kinder geeignet (2–12 Jahre)",
            text: "Nicht geeignet für Kinder (2–12 Jahre)",
            tip: null,
            details: null,
            airmoji_key: "house_rules_no_kids",
          },
          {
            key: "is_smoking_allowed_as_host",
            long_term_text: null,
            text: "Rauchen verboten",
            tip: null,
            details: null,
            airmoji_key: "house_rules_no_smoking",
          },
          {
            key: "are_pets_allowed_as_host",
            long_term_text: null,
            text: "Keine Haustiere",
            tip: null,
            details: null,
            airmoji_key: "house_rules_no_pets",
          },
        ],
        listing_expectations: [],
        additional_rules: "",
        localized_listing_expectations: [],
        localized_additional_rules: null,
        self_checkin_info: null,
        listing_expectations_with_icons: null,
        safety_disclosures: null,
      },
      reviews_module: {
        localized_overall_rating: null,
        appreciation_tags: null,
        review_header_highlight: null,
      },
      availability_module: { discount_phrase: null },
      ugc_translation: null,
      pdp_guest_education_response: null,
      sections: [],
      metadata: {
        default_wishlist_name: null,
        hotel_listing_type: null,
        short_property_type: null,
      },
      p3_impression_id: "1a627c29-f237-48a3-9175-fc255b8b31c7",
      error_status: null,
      debug_output: null,
    },
    metadata: {},
  } as any;
};

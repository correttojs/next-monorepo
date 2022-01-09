import { GetApartmentQuery } from "@/generated/graphql-graphcms";

export type AirBnbUser = {
  deleted: boolean;
  first_name: string;
  host_name: string;
  id: number;
  is_superhost: boolean;
  picture_url: string;
  profile_path: string;
  about: string;
  profile_pic_path: string;
  badges: [{ count: number; id: "reviews" }];
};

export type Review = {
  collection_tag: string;
  comments: string;
  created_at: string;
  id: number;
  language: string;
  localized_date: string;
  rating: number;
  response: string;
  reviewee: AirBnbUser;
  reviewer: AirBnbUser;
};

export type AmenitiesType = {
  category: null;
  icon: "icon-air-conditioning";
  id: 5;
  is_business_ready_feature: false;
  is_present: true;
  is_safety_feature: false;
  name: "Air conditioning";
  select_list_view_photo: null;
  select_tile_view_photo: null;
  tag: "ac";
  tooltip: "";
};

export type AmenitySectionType = {
  id: string;
  title: string;
  subtitle: string;
  amenity_ids: number[];
  photos: string;
};

export type Photo = {
  caption: string;
  id: number;
  is_professional: boolean;
  large: string;
  large_cover: string;
  medium: string;
  mini_square: string;
  picture: string;
  scrim_color: string;
  small: string;
  sort_order: 1;
  thumbnail: string;
  preview_encoded_png: string;
  x_large: string;
  x_large_cover: string;
  x_medium: string;
  x_small: string;
  xl_picture: string;
  xx_large: string;
  picture_orientation: "LANDSCAPE";
  aspect_ratio: number;
};

export type GlobalType = {
  apartment: string;
  lang: string;
  langs: string[];
} & GetApartmentQuery["apartment"];

export type pdp_listing_detail = {
  global: GlobalType;
  pdp_listing_detail: {
    listing_amenities: AmenitiesType[];
    root_amenity_sections: AmenitySectionType[];
    see_all_amenity_sections: AmenitySectionType[];
    additional_house_rules: string;
    bathroom_label: string;
    bed_label: string;
    bedroom_label: string;
    guest_label: string;
    highlights: any[];
    id: number;
    listing_expectations: any[];
    listing_rooms: [];
    name: string;

    person_capacity: number;
    photos: Photo[];
    primary_host: AirBnbUser;
    sectioned_description: {
      access: string;
      author_type: string;
      description: string;
      detected_languages: string;
      house_rules: string;
      interaction: string;
      locale: string;
      localized_language_name: string;
      name: string;
      neighborhood_overview: string;
      notes: string;
      space: string;
      summary: string;
      transit: string;
    };
    star_rating: 5.0;
    user: AirBnbUser;

    sorted_reviews: Review[];
    review_details_interface: {
      display_review_summary: boolean;
      host_other_property_review_count: number;
      review_count: number;
      review_score: number;
      review_summary: [
        {
          category: string;
          value: number;
          label: string;
          localized_rating: string;
          percentage: number;
        }
      ];
    };
    guest_controls: {
      structured_house_rules: string[];
    };
  };
  metadata: {};
};

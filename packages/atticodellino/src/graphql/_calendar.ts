import * as ical from "ical";
import fetch from "node-fetch";

import { ApartmentSecretDocument } from "../generated/graphql-takeshape-doc";
import { QueryResolvers } from "../generated/resolvers-types";
import { ResolverContext } from "./resolvers";
import { takeShapeRequest } from "./takeshape";

export const fetchIcal = async (icalUrl: string, summary: string) => {
  let data: any = await fetch(icalUrl).then((r) => r.text());
  data = ical.parseICS(data);

  return Object.keys(data)
    .filter((i) => data[i]?.start)
    .map((item) => {
      return {
        start: new Date(data[item].start).toISOString(),
        end: new Date(data[item].end).toISOString(),
        summary,
      };
    });
};

export const calendarResolver: QueryResolvers<ResolverContext>["calendar"] =
  async (_, { apartment }) => {
    const apartmentObj = await takeShapeRequest(ApartmentSecretDocument, {
      key: apartment,
    });

    const promises = [];
    if (apartmentObj?.getApartmentList?.items?.[0]?.airbnbIcal) {
      promises.push(
        fetchIcal(
          apartmentObj.getApartmentList.items?.[0]?.airbnbIcal,
          "AIRBNB"
        )
      );
    }
    if (apartmentObj?.getApartmentList?.items?.[0]?.bookingIcal) {
      promises.push(
        fetchIcal(
          apartmentObj.getApartmentList.items?.[0]?.bookingIcal,
          "BOOKING"
        )
      );
    }
    const result = await Promise.all(promises);
    return result.reduce((acc, curr) => [...acc, ...curr], []);
  };

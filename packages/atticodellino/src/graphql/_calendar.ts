import { ICalDocument } from "@/generated/graphql-graphcms";
import { graphCmsRequest } from "@/graphql/graphcms";
import * as ical from "ical";
import fetch from "node-fetch";

import { QueryResolvers } from "../generated/resolvers-types";
import { ResolverContext } from "./resolvers";

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
    const apartmentObj = await graphCmsRequest(ICalDocument, {
      key: apartment,
    });

    const promises = [];
    if (apartmentObj?.apartment?.airbnbIcal) {
      promises.push(fetchIcal(apartmentObj.apartment?.airbnbIcal, "AIRBNB"));
    }
    const result = await Promise.all(promises);
    return result.reduce((acc, curr) => [...acc, ...curr], []);
  };

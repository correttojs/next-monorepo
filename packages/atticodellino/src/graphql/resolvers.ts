import { Resolvers } from "@/generated/resolvers-types";
import { reco } from "@/graphql/_reco";

import { priceResolver, reviewsResolver } from "./_airbnb";
import { bookMutation } from "./_book";
import { calendarResolver } from "./_calendar";
import { faq } from "./_faq";
import {
  reservation,
  reservations,
  updateReservationStatus,
} from "./_reservations";
import { registerGuests, testFileUpload } from "./_reservationsRegister";
import { syncReservations } from "./_syncReservations";

export type ResolverContext = {
  session?: {
    user?: {
      name: string;
      password: string;
    };
  };
};

export const resolvers: Resolvers = {
  Mutation: {
    book: bookMutation,
    updateReservationStatus,
    registerGuests,
    testFileUpload,
  },
  Query: {
    price: priceResolver,
    reviews: reviewsResolver,
    calendar: calendarResolver,
    syncReservations,
    reservations,
    reservation,
    faq,
    reco,
  },
};

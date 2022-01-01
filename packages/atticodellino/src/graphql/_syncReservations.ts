import * as crypto from "crypto";

import { Reservation } from "@/components/Admin/reservations.generated";
import {
  CreateReservationDocument,
  GetTokenDocument,
  GuestStatus,
} from "@/generated/graphql-graphcms";
import { QueryResolvers } from "@/generated/resolvers-types";
import { AirBnbClient } from "airbnb-private-api";

import { reservations } from "./_reservations";
import { graphCmsRequest } from "./graphcms";
import { ResolverContext } from "./resolvers";

const getAirBnbReservations = async () => {
  const airbnb = new AirBnbClient({
    email: process.env.AIRBNB_EMAIL,
    password: process.env.AIRBNB_PASSWORD,
    session_store: null as any,
  });

  const token = await graphCmsRequest(GetTokenDocument);

  airbnb.session = token.tokens[0].token;
  airbnb.auth_token = airbnb.session.token;
  airbnb.authenticated = true;

  const res: any = await airbnb._get_reservations({
    _limit: 50,
    include_canceled: false,
    // start_date: "2020-01-01",
  } as any);

  const reservationDetails = await Promise.all(
    res.reservations
      .filter((r: any) => r.status !== "cancelled")
      .map((r: any) => airbnb._get_reservation_details(r.thread_id))
  );

  return reservationDetails.map((detail: any) => {
    const {
      check_in,
      check_out,
      guest_name,
      guest: { phone },
    } = detail.homes_booking_detail.reservation;
    const { listing_id_str: home } = detail.homes_booking_detail.listing;

    const hash = crypto
      .createHash("md5")
      .update(`${check_in}${check_out}${guest_name}`)
      .digest("hex");

    return {
      check_in,
      check_out,
      guest_name,
      phone,
      hash,
      home,
      reservationStatus: GuestStatus.New,
    };
  });
};

export const syncReservations: QueryResolvers<ResolverContext>["syncReservations"] =
  async (parent, args, context) => {
    if (context?.session?.user?.name !== "lino")
      throw new Error("Invalid session");
    const result = await getAirBnbReservations();

    const storedReservations: Reservation[] = await (reservations as any)(
      parent,
      args,
      context
    );

    const hashes = storedReservations.map((r) => r.hash);
    const toBeAdded = result.filter((r) => !hashes.includes(r.hash));
    console.log(toBeAdded);
    const added = await Promise.all(
      toBeAdded.map((r) =>
        graphCmsRequest(CreateReservationDocument, { input: r })
      )
    );

    return [
      ...added.map((r) => r.createReservation),
      ...storedReservations,
    ] as Reservation[];
  };

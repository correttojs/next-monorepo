import {
  ApartmentDocument,
  ApartmentQuery,
  GetLangsApartmentListDocument,
} from "@/generated/graphql-takeshape-doc";
import { GetStaticPaths } from "next";

import { takeShapeRequest } from ".";

export const getGlobalProps = async ({
  params,
  locale,
}: {
  params?: { apartment?: string };
  locale?: string;
}) => {
  if (!params?.apartment) {
    return null;
  }
  params.apartment = params.apartment?.toString().toUpperCase();

  const apartmentObj = await takeShapeRequest(ApartmentDocument, {
    key: params.apartment,
  });

  const currentApartment = apartmentObj?.getApartmentList?.items?.[0];
  return {
    props: {
      global: {
        ...params,
        lang: locale,
        ...(currentApartment as NonNullable<
          NonNullable<ApartmentQuery["getApartmentList"]>["items"]
        >[0]),
        langs: apartmentObj?.getLanguageList?.items?.map((l) => l?.code),
        apartments: apartmentObj?.ApartmentKeys?.items?.map((a) => a?.key),
      },
    },
  };
};

export const getGlobalPaths: GetStaticPaths = async ({ locales }) => {
  const data = await takeShapeRequest(GetLangsApartmentListDocument);

  return {
    paths: (locales ?? []).reduce(
      (acc, current) => {
        return [
          ...acc,
          ...(data?.getApartmentList?.items ?? []).map((a) => {
            return {
              params: {
                lang: current.toLowerCase() ?? "",
                apartment: a?.key?.toLowerCase() ?? "",
              },
              locale: current,
            };
          }),
        ];
      },
      [] as {
        params: {
          lang: string;
          apartment: string;
        };
      }[]
    ),
    fallback: false, // See the "fallback" section below
  };
};

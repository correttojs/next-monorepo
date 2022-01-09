import {
  AllSlugsDocument,
  GetApartmentDocument,
} from "@/generated/graphql-graphcms";
import { graphCmsRequest } from "@/graphql/graphcms";
import { GetStaticPaths } from "next";

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

  const apartmentObj = await graphCmsRequest(GetApartmentDocument, {
    key: params.apartment,
  });

  return {
    props: {
      global: {
        ...params,
        lang: locale,
        ...apartmentObj.apartment,
        langs: ["en", "it"],
        allSlugs: apartmentObj?.allSlugs.map((a) => a.slug),
      },
    },
  };
};

export const getGlobalPaths: GetStaticPaths = async ({ locales }) => {
  const data = await graphCmsRequest(AllSlugsDocument);

  return {
    paths: (locales ?? []).reduce(
      (acc, current) => {
        return [
          ...acc,
          ...(data?.apartments ?? []).map((a) => {
            return {
              params: {
                lang: current.toLowerCase() ?? "",
                apartment: a?.slug?.toLowerCase() ?? "",
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

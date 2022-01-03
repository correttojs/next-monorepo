import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Loading } from "../@UI/Loading";
import { Section } from "../@UI/Section";
import { H2 } from "@packages/ui/Typography";
import { FaqDocument } from "./faq.generated";
import { useGlobal } from "@/components/Layout/useGlobal";
import { TwInput } from "@/components/@UI/FieldInput";
import classNames from "classnames";
import { Button } from "@packages/ui/Button/Button";

export const FaqPage: React.FC = () => {
  const global = useGlobal();
  const ref = useRef<HTMLInputElement>(null);
  const [key, setKey] = useState("");
  const { data, isLoading, error } = useReactQuery(
    FaqDocument,
    {
      hash: key,
    },
    { enabled: !!key }
  );

  if (isLoading && !error) {
    return <Loading />;
  }

  if (!key || error) {
    return (
      <form className="p-4">
        <div className="m-2">
          {error && <p className="text-red-500">Wrong code</p>}
          <label className="block" htmlFor={"code"}>
            <span className="text-gray-700"> Enter code</span>
            <input ref={ref} className={TwInput} id="code" />
          </label>
        </div>
        <Button
          type="submit"
          className="m-2"
          onClick={(e) => {
            e.preventDefault();
            if (ref.current?.value) {
              setKey(ref.current.value);
            }
          }}
        >
          Submit
        </Button>
      </form>
    );
  }

  return (
    <>
      {(data?.faq ?? []).map((item, i) => (
        <div
          key={"faqs" + i}
          style={
            i % 2 === 1
              ? {
                  background: `linear-gradient(${global.colors.colors.lighter}, ${global.colors.colors.lighter}, #fff)`,
                }
              : {}
          }
        >
          <Section
            className={classNames([
              `m-4 py-10 md:flex flex-wrap justify-center`,
              i % 2 == 1 && `flex-row-reverse `,
            ])}
            style={{ marginTop: "-80px", paddingTop: "80px" }}
            id={"faq" + i}
          >
            <div
              css={classNames([
                `md:flex-1`,
                i % 2 == 1 ? `md:pl-4` : `md:pr-4`,
              ])}
            >
              <H2>{item?.title}</H2>
              <div
                css={`
                  min-width: 320px;
                `}
                dangerouslySetInnerHTML={{ __html: item?.content.html ?? "" }}
              />
            </div>
            {item?.media?.map((media, j) => (
              <>
                {media?.url && /video/.test(media.mimeType ?? "") && (
                  // eslint-disable-next-line jsx-a11y/media-has-caption
                  <video
                    css={`
                      width: 350px;
                      height: 400px;
                    `}
                    key={"fm" + i + j}
                    width="350"
                    height="400"
                    controls
                  >
                    <source src={media?.url} type={media?.mimeType ?? ""} />
                    Your browser does not support the video tag.
                  </video>
                )}
                {media?.url && /image/.test(media.mimeType ?? "") && (
                  <div className="p-4 ">
                    <Image
                      key={"fm" + i + j}
                      width="320"
                      height="240"
                      src={media.url}
                      alt=""
                    ></Image>
                  </div>
                )}
              </>
            ))}
          </Section>
        </div>
      ))}
    </>
  );
};

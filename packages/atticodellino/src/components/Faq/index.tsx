import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Loading } from "@packages/ui/Loading";
import { FaqDocument } from "./faq.generated";
import { useGlobal } from "@/components/Layout/useGlobal";
import { TwInput } from "@/components/@UI/FieldInput";
import { Button } from "@/components/Layout/Button";
import { SplitSections } from "@packages/ui/Sections";

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
            <input
              data-testid="enter-code"
              ref={ref}
              className={TwInput}
              id="code"
            />
          </label>
        </div>
        <Button
          type="submit"
          className="m-2"
          data-testid="submit-code"
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
      <SplitSections
        data-testid="faq-page"
        alternateBackground={"bg-gradient-to-b from-sky-200 to-white)"}
        sections={
          data?.faq?.map((section, k) => {
            if (!section) {
              return null;
            }
            return {
              title: section.title,
              content: section.content,
              Side: (
                <>
                  {section?.media?.map((media, j) => (
                    <>
                      {media?.url && /video/.test(media.mimeType ?? "") && (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <video
                          css={`
                            width: 350px;
                            height: 400px;
                          `}
                          key={"fm" + j}
                          width="350"
                          height="400"
                          controls
                        >
                          <source
                            src={media?.url}
                            type={media?.mimeType ?? ""}
                          />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      {media?.url && /image/.test(media.mimeType ?? "") && (
                        <div className="p-4 ">
                          <Image
                            key={"fm" + j}
                            width="320"
                            height="240"
                            src={media.url}
                            alt=""
                          ></Image>
                        </div>
                      )}
                    </>
                  ))}
                </>
              ),
            };
          }) ?? []
        }
      />
    </>
  );
};

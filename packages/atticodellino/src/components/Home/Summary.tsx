import { pdp_listing_detail } from "@/graphql/_airbn.types";
import React from "react";
import { FaBath, FaBed, FaFemale, FaPersonBooth } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import tw from "twin.macro";

import { Span } from "../@UI/Texts";

const Item: React.FC<{ Icon: IconType; label?: string }> = ({
  Icon,
  label,
}) => {
  return (
    <div css={tw`flex flex-row`}>
      <Icon />
      <Span css={tw`pl-2`}>{label}</Span>
    </div>
  );
};

export const Summary: React.FC<
  Partial<pdp_listing_detail["pdp_listing_detail"]>
> = ({ guest_label, bedroom_label, bed_label, bathroom_label }) => {
  return (
    <div
      css={tw`flex flex-col md:flex-row md:items-center justify-between pt-16 px-8 border-b-2`}
    >
      <Item Icon={FaFemale} label={guest_label} />
      <Item Icon={FaPersonBooth} label={bedroom_label} />
      {!/^0/.test(bed_label ?? "") && <Item Icon={FaBed} label={bed_label} />}
      <Item Icon={FaBath} label={bathroom_label} />
    </div>
  );
};

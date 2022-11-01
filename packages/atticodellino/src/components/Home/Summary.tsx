import { pdp_listing_detail } from "@/graphql/_airbn.types";
import React from "react";
import { FaBath, FaBed, FaFemale, FaPersonBooth } from "react-icons/fa";
import { IconType } from "react-icons/lib";

import { Span } from "@packages/ui/Typography";

const Item: React.FC<React.PropsWithChildren<{ Icon: IconType; label?: string }>> = ({
  Icon,
  label,
}) => {
  return (
    <div className="flex flex-row">
      <Icon />
      <Span className="pl-2">{label}</Span>
    </div>
  );
};

export const Summary: React.FC<React.PropsWithChildren<Partial<pdp_listing_detail["pdp_listing_detail"]>>> = ({ guest_label, bedroom_label, bed_label, bathroom_label }) => {
  return (
    <div className="flex flex-col justify-between border-b-2 px-8 pt-16 md:flex-row md:items-center">
      <Item Icon={FaFemale} label={guest_label} />
      <Item Icon={FaPersonBooth} label={bedroom_label} />
      {!/^0/.test(bed_label ?? "") && <Item Icon={FaBed} label={bed_label} />}
      <Item Icon={FaBath} label={bathroom_label} />
    </div>
  );
};

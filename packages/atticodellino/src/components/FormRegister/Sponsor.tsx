import React from "react";
import tw from "twin.macro";

import { Card } from "../@UI/Card";

export const Sponsor = () => {
  return (
    <div className="flex flex-col justify-around md:flex-row">
      <div className="p-4 ">
        <Card
          onClick={() => "https://www.atticodellino.com/garda"}
          title={"L'attico del Lino Garda"}
          img={"/images/promo-garda.webp"}
        />
      </div>
      {/* <div className="p-4 ">
        <Card
          onClick={() =>
            (window.location.href = "https://www.atticodellino.com")
          }
          title={"L'attico del Lino Verona"}
          img={"/images/promo-vr.webp"}
        />
      </div> */}
    </div>
  );
};

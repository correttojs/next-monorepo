type TwBaseColors =
  | "slate"
  | "red"
  | "rose"
  | "pink"
  | "fuchsia"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "sky"
  | "cyan"
  | "teal"
  | "emerald"
  | "green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "stone"
  | "neutral"
  | "zinc"
  | "gray";

type TwDark = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type TwColors = `${TwBaseColors}-${TwDark}` | "black" | "white";

export type TwBgColor = `bg-${TwColors}`;
export type TwBorderColor = `border-${TwColors}`;
export type TwTextColor = `text-${TwColors}`;

export type TwColorClass = TwBgColor | TwBorderColor | TwTextColor;

export type TwColorHoverClass = `hover:${TwColorClass}`;

type TwSpacing =
  | "0"
  | "px"
  | "0.5"
  | 1
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

type TwMarginBase = "x" | "y" | "l" | "r" | "t" | "b";

export type TwMargin = `m-${TwSpacing}` | `m${TwMarginBase}-${TwSpacing}`;

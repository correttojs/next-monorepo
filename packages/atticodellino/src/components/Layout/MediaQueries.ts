const BREAKPOINTS = {
  MOBILE: 768,
};

export const MQ_MOBILE = ` screen and (max-width: ${BREAKPOINTS.MOBILE}px) `;
export const MQ_NOT_MOBILE = ` screen and (min-width: ${
  BREAKPOINTS.MOBILE + 1
}px) `;

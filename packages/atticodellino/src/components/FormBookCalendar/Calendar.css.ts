import ReactCalendar from "react-calendar";
import styled from "styled-components";

import { MQ_MOBILE, MQ_NOT_MOBILE } from "../Layout";

export const Calendar = styled(ReactCalendar)`
  @media ${MQ_NOT_MOBILE} {
    min-width: 350px;
  }
  @media ${MQ_MOBILE} {
    width: unset !important;
  }

  .react-calendar__tile--now {
    background: #fff;
    border: solid 1px;
    &:hover {
    }
  }
  .react-calendar__tile--now:enabled:hover {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--active {
    background: #075985;
  }
  .react-calendar__tile--active:enabled:focus,
  .react-calendar__tile--active:enabled:hover {
    background: #0369a1;
  }
`;

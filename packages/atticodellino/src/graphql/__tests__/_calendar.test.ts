import fetch from "jest-fetch-mock";

import { calendarResolver, fetchIcal } from "../_calendar";
import * as graphcms from "../graphcms";

jest.mock("../graphcms");

const calendarMock = `BEGIN:VCALENDAR
PRODID;X-RICAL-TZSOURCE=TZINFO:-//Airbnb Inc//Hosting Calendar 0.8.8//EN
CALSCALE:GREGORIAN
VERSION:2.0
BEGIN:VEVENT
DTEND;VALUE=DATE:20210430
DTSTART;VALUE=DATE:20210128
UID:6fec1092d3fa-bdc539b62825e79828208151543c5dfe@airbnb.com
SUMMARY:Airbnb (Not available)
END:VEVENT
BEGIN:VEVENT
DTEND;VALUE=DATE:20220131
DTSTART;VALUE=DATE:20210729
UID:6fec1092d3fa-bbaf28e08fe4dce175501a85999001b8@airbnb.com
SUMMARY:Airbnb (Not available)
END:VEVENT
END:VCALENDAR`;

describe.skip("Calendar", () => {
  it("fetchIcal", async () => {
    fetch.mockResponseOnce(calendarMock);
    const data = await fetchIcal("https://url", "summary");

    expect(data.length).toEqual(2);
    expect(data[0].summary).toEqual("summary");
    expect(data[0].start).toBeDefined();
    expect(data[0].end).toBeDefined();
  });

  it("calendarResolver", async () => {
    fetch.mockResponse(calendarMock);
    const takeShapeRequestMock = jest.spyOn(graphcms, "graphCmsRequest");
    takeShapeRequestMock.mockImplementation(() => {
      return Promise.resolve({
        apartment: {
          airbnbIcal: "test",
        },
      });
    });
    const data = await (calendarResolver as any)(null as any, {
      apartment: "VR",
    });

    expect(data.length).toEqual(2);
    expect(data[0].summary).toEqual("AIRBNB");
    expect(data[0].start).toBeDefined();
    expect(data[0].end).toBeDefined();
  });
});

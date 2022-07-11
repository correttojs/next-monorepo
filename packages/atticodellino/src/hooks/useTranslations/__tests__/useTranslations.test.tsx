import { renderHook } from "@testing-library/react-hooks";
import * as MockRouter from "next/router";
import React from "react";

import { useTranslations } from "../useTranslations";

describe("useTranslations", () => {
  it("should translate to EN", () => {
    jest.spyOn(MockRouter, "useRouter").mockImplementation(
      () =>
        ({
          locale: "en",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(() => useTranslations(), {
      wrapper: Mock,
    });
    expect(result.current("SPACE")).toEqual("The space");
  });
  it("should translate to IT", () => {
    jest.spyOn(MockRouter, "useRouter").mockImplementation(
      () =>
        ({
          locale: "it",
        } as any)
    );
    const Mock = ({ children }: any) => <div>{children}</div>;
    const { result } = renderHook(() => useTranslations(), {
      wrapper: Mock,
    });
    expect(result.current("SPACE")).toEqual("Lo spazio");
  });
});

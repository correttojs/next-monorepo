import React from "react";
import classNames from "classnames";
import { H2, H3 } from "@packages/ui/Typography";
import { Flex } from "../Flex";

export const Card: React.FC<
  React.PropsWithChildren<{
    img: string;
    title: string;
    message?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }>
> = ({ img, onClick, title, message }) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      className={classNames([
        "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden",
        onClick && `cursor-pointer`,
      ])}
    >
      <img
        className="h-48 w-full object-cover"
        src={img}
        alt="Man looking at item at a store"
      />
      <div className="px-8">
        <H2 className="p-4">{title}</H2>
        {message && <p className="mt-2 text-gray-500">{message}</p>}
      </div>
    </div>
  );
};

export const CardHorizontal: React.FC<
  React.PropsWithChildren<{
    img?: string;
    title: string;
    message?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }>
> = ({ img, onClick, title, message, children }) => {
  return (
    <div
      role="presentation"
      onClick={onClick}
      data-cy="card"
      className={classNames([
        `max-w-2xl bg-white rounded-xl shadow-md overflow-hidden`,
        onClick && `cursor-pointer`,
      ])}
    >
      <Flex>
        <div className="shrink-0">
          {img && (
            <img alt="Card" className="h-32 w-32 object-cover" src={img} />
          )}
          {children}
        </div>
        <div className="p-4">
          {message && <p className="mt-2 text-gray-500">{message}</p>}
          <H3>{title}</H3>
        </div>
      </Flex>
    </div>
  );
};

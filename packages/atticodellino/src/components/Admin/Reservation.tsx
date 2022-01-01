import React from "react";
import { FaRegIdCard } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import Modal from "react-modal";
import styled from "styled-components";
import tw from "twin.macro";

import { ButtonInverted } from "../@UI/Buttons";
import { H3 } from "../@UI/Texts";
import { MQ_NOT_MOBILE } from "../Layout";
import { ReservationsQuery } from "./reservations.generated";

const DescStyle = styled.i`
  ${tw`text-red-900`}
`;

export const Reservation: React.FC<{
  reservation: NonNullable<ReservationsQuery["reservations"]>[0];
  onClose: (e: any) => void;
}> = ({ reservation, onClose }) => {
  if (!reservation) {
    return null;
  }
  return (
    <Modal
      isOpen={!!reservation}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      shouldCloseOnOverlayClick={false}
    >
      <div
        css={`
          width: calc(100vw * 0.9);
          @media ${MQ_NOT_MOBILE} {
            width: calc(100vw * 0.8);
          }
        `}
      >
        <H3 className="my-2">{reservation.guest_name}</H3>

        <div className="my-2">
          <p>
            <DescStyle>Apartment:</DescStyle> {reservation.home}
          </p>
          <p>
            <DescStyle>Check-in:</DescStyle> {reservation.check_in}
          </p>
          <p>
            <DescStyle>Check-out:</DescStyle> {reservation.check_out}
          </p>
          <p>
            <DescStyle>Phone:</DescStyle> {reservation.phone}
          </p>
          <p>
            <a
              className="underline"
              href={reservation.registrationUrl ?? ""}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <FaRegIdCard style={{ display: "inline" }} /> register
              </span>
            </a>
            {/* {" - "} */}
            {/* <a className="underline" href={reservation.faqUrl} target="_blank">
              <span>
                <MdHelpOutline style={{ display: "inline" }} /> faq
              </span>
            </a> */}
          </p>
        </div>
        <H3 className="mt-4 mb-2 text-red-900">Guests</H3>
        <div className="flex flex-col md:flex-row">
          {reservation?.guests?.map((guest, k) => {
            if (!guest) {
              return null;
            }
            return (
              <div key={`guest${k}`} css={[tw`my-2`, k > 0 && tw`md:ml-2`]}>
                <p>
                  <MdAccountCircle style={{ display: "inline" }} />{" "}
                  {guest.lastName} {guest.firstName}
                </p>
                <p>
                  <DescStyle>Document: </DescStyle>
                  {guest.docFile ? (
                    <a
                      className="underline"
                      href={guest.docFile}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {guest.documentType}
                    </a>
                  ) : (
                    guest.documentType
                  )}
                  : {guest.documentNumber}{" "}
                  {guest.documentPlace && `(${guest.documentPlace})`}
                </p>
                <p>
                  <DescStyle>Nationality: </DescStyle>
                  {guest.nationality}
                </p>
                <p>
                  <DescStyle>Birth: </DescStyle>
                  {guest.birthDate}
                  {guest.placeOfBirth && `(${guest.placeOfBirth})`}
                </p>
              </div>
            );
          })}
        </div>
        <ButtonInverted onClick={onClose} className="m-4">
          Ok
        </ButtonInverted>
      </div>
    </Modal>
  );
};

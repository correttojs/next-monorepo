import { signIn, useSession } from "next-auth/client";
import React, { useState } from "react";
import { IoLogInSharp } from "react-icons/io5";
import {
  MdDone,
  MdDoneAll,
  MdMoreVert,
  MdNewReleases,
  MdSync,
} from "react-icons/md";
import ModalReact from "react-modal";

import { Loading } from "@packages/ui/Loading";
import { Reservation } from "./Reservation";
import {
  ReservationStatus,
  ReservationsDocument,
  ReservationsQuery,
  SyncRegistrationsDocument,
  UpdateReservationStatusDocument,
  UpdateReservationStatusMutationVariables,
} from "./reservations.generated";
import { useSwrGql, useSwrMutate } from "@packages/utils/useSwrGql";
import { Button } from "@packages/ui/Button";

const Modal =
  ModalReact as any as React.JSXElementConstructor<ModalReact.Props>;

export const AdminComponent: React.FC<
  React.PropsWithChildren<unknown>
> = () => {
  const [session] = useSession();
  const [isPast, setIsPast] = useState(false);
  const { data, isValidating } = useSwrGql(
    ReservationsDocument,
    {
      isPast,
    },
    {
      enabled: !!session,
    }
  );

  const mutation = useSwrMutate(UpdateReservationStatusDocument);

  const handleStateUpdated = async (
    args: UpdateReservationStatusMutationVariables
  ) => {
    setIsSmsOpen(null);
    mutation.mutate(args);
  };

  const {
    mutate: sync,
    data: syncedData,
    error: syncError,
    isValidating: syncLoading,
  } = useSwrMutate(SyncRegistrationsDocument);

  const [isSmsOpen, setIsSmsOpen] = useState<{
    userId: string;
    hash: string;
  } | null>(null);

  const [reservationDetails, setReservationDetails] = useState<
    NonNullable<ReservationsQuery["reservations"]>[0] | null
  >(null);

  return (
    <>
      {syncError && <div>An Error occurred</div>}
      <Reservation
        reservation={reservationDetails}
        onClose={() => setReservationDetails(null)}
      />
      <Modal
        isOpen={!!isSmsOpen}
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
        <div className="p-4">
          <p>Send SMS?</p>
          <Button
            color="sky"
            onClick={() => {
              if (!isSmsOpen) {
                return;
              }
              handleStateUpdated({
                ...isSmsOpen,
                reservationStatus: ReservationStatus.LinkSent,
              });
            }}
            className="m-4"
          >
            Ok
          </Button>
          <Button
            color="inverted"
            onClick={() => setIsSmsOpen(null)}
            className="m-4"
          >
            Cancel
          </Button>
        </div>
      </Modal>
      {!session && (
        <div className="p-4">
          <Button
            data-cy="signin"
            onClick={() => signIn()}
            color="sky"
            Icon={<IoLogInSharp />}
          >
            Sign in
          </Button>
        </div>
      )}
      {isValidating && <Loading />}
      {session && (
        <div className="p-4">
          {syncLoading ? (
            <Loading />
          ) : (
            <Button
              className="m-2"
              color="sky"
              onClick={() => sync({})}
              Icon={<MdSync />}
            >
              Sync with Airbnb
            </Button>
          )}

          <nav className="flex flex-col sm:flex-row">
            <Button
              color={isPast ? "inverted" : "sky"}
              className="m-2"
              onClick={() => setIsPast(false)}
            >
              Upcoming
            </Button>

            <Button
              color={!isPast ? "inverted" : "sky"}
              className="m-2"
              onClick={() => setIsPast(true)}
            >
              Past
            </Button>
          </nav>

          {data && (
            <table>
              {(syncedData?.syncReservations ?? data?.reservations)?.map(
                (item, key) =>
                  !item ? null : (
                    <tbody className="border border-solid" key={`user${key}`}>
                      <tr>
                        <td
                          className="flex cursor-pointer items-center justify-between"
                          onClick={() => setReservationDetails(item)}
                          role="presentation"
                        >
                          <b className="underline ">{item.guest_name}</b>
                          <MdMoreVert />
                        </td>

                        <td>{item.check_in}</td>
                        <td>{item.home}</td>
                        <td>
                          <Button
                            size="S"
                            title={item.reservationStatus ?? ""}
                            style={{ float: "right" }}
                            type="button"
                            color="sky"
                            onClick={() => {
                              if (item.reservationStatus === "new") {
                                setIsSmsOpen({
                                  userId: item.id ?? "",
                                  hash: item.hash ?? "",
                                });
                              } else {
                                handleStateUpdated({
                                  userId: item.id ?? "",
                                  hash: item.hash ?? "",
                                  reservationStatus:
                                    item.reservationStatus === "link_sent"
                                      ? ReservationStatus.Registered
                                      : ReservationStatus.New,
                                });
                              }
                            }}
                          >
                            {
                              // eslint-disable-next-line no-nested-ternary
                              item.reservationStatus === "link_sent" ? (
                                <MdDone color="#fff" />
                              ) : item.reservationStatus === "new" ? (
                                <MdNewReleases color="#fff" />
                              ) : (
                                <MdDoneAll color="#fff" />
                              )
                            }
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  )
              )}
            </table>
          )}
        </div>
      )}
    </>
  );
};

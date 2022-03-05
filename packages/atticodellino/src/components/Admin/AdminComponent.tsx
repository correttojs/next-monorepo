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
import Modal from "react-modal";

import { Button } from "@/components/Layout/Button";
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

export const AdminComponent: React.FC = () => {
  const [session] = useSession();
  const [isPast, setIsPast] = useState(false);
  const { data, isLoading } = useSwrGql(
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
    isLoading: syncLoading,
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
            isInverted={true}
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
            Icon={<IoLogInSharp />}
          >
            Sign in
          </Button>
        </div>
      )}
      {isLoading && <Loading />}
      {session && (
        <div className="p-4">
          {syncLoading ? (
            <Loading />
          ) : (
            <Button className="m-2" onClick={() => sync({})} Icon={<MdSync />}>
              Sync with Airbnb
            </Button>
          )}

          <nav className="flex flex-col sm:flex-row">
            <Button
              isInverted={isPast}
              className="m-2"
              onClick={() => setIsPast(false)}
            >
              Upcoming
            </Button>

            <Button
              isInverted={!isPast}
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
                          className="flex justify-between items-center cursor-pointer"
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

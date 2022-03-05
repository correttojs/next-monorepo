import * as Types from '../../generated/graphql';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Asset = {
  __typename?: 'Asset';
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type BookInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type BookResponse = {
  __typename?: 'BookResponse';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Calendar = {
  __typename?: 'Calendar';
  end?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type Content = {
  __typename?: 'Content';
  html?: Maybe<Scalars['String']>;
};

export type Faq = {
  __typename?: 'Faq';
  content: Content;
  media?: Maybe<Array<Maybe<Asset>>>;
  title: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type Guest = {
  birthDate: Scalars['String'];
  documentNumber: Scalars['String'];
  documentPlace?: InputMaybe<Scalars['String']>;
  documentType: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth?: InputMaybe<Scalars['String']>;
};

export type GuestMail = {
  __typename?: 'GuestMail';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type GuestRegistration = {
  __typename?: 'GuestRegistration';
  birthDate: Scalars['String'];
  docFile?: Maybe<Scalars['String']>;
  documentNumber: Scalars['String'];
  documentPlace?: Maybe<Scalars['String']>;
  documentType: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
};

export type IGuest = {
  birthDate: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  book?: Maybe<BookResponse>;
  registerGuests?: Maybe<ReservationStatus>;
  testFileUpload?: Maybe<Scalars['String']>;
  updateReservationStatus?: Maybe<ReservationStatus>;
};


export type MutationBookArgs = {
  user?: InputMaybe<BookInput>;
};


export type MutationRegisterGuestsArgs = {
  file: Array<InputMaybe<Scalars['Upload']>>;
  user: UserInput;
};


export type MutationTestFileUploadArgs = {
  file?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateReservationStatusArgs = {
  hash: Scalars['String'];
  id: Scalars['ID'];
  reservationStatus: ReservationStatus;
};

export type Query = {
  __typename?: 'Query';
  calendar?: Maybe<Array<Maybe<Calendar>>>;
  faq?: Maybe<Array<Maybe<Faq>>>;
  price?: Maybe<Scalars['Float']>;
  reco?: Maybe<Array<Maybe<Reco>>>;
  reservation?: Maybe<Reservation>;
  reservations?: Maybe<Array<Maybe<Reservation>>>;
  reviews?: Maybe<Array<Maybe<ReviewType>>>;
  syncReservations?: Maybe<Array<Maybe<Reservation>>>;
};


export type QueryCalendarArgs = {
  apartment: Scalars['String'];
};


export type QueryFaqArgs = {
  hash: Scalars['String'];
};


export type QueryPriceArgs = {
  airBnb: Scalars['String'];
  from: Scalars['String'];
  to: Scalars['String'];
};


export type QueryReservationArgs = {
  hash: Scalars['String'];
};


export type QueryReservationsArgs = {
  isPast: Scalars['Boolean'];
};


export type QueryReviewsArgs = {
  airBnb: Scalars['String'];
};

export type Reco = {
  __typename?: 'Reco';
  description: Content;
  link?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type Reservation = {
  __typename?: 'Reservation';
  address?: Maybe<Scalars['String']>;
  airbnbLink?: Maybe<Scalars['String']>;
  check_in?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  displayHome?: Maybe<Scalars['String']>;
  faqUrl?: Maybe<Scalars['String']>;
  guest_name?: Maybe<Scalars['String']>;
  guests?: Maybe<Array<Maybe<GuestRegistration>>>;
  hash?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isExpired?: Maybe<Scalars['Boolean']>;
  mapLink?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  registrationUrl?: Maybe<Scalars['String']>;
  reservationStatus?: Maybe<ReservationStatus>;
};

export type ReservationShort = {
  __typename?: 'ReservationShort';
  check_in?: Maybe<Scalars['String']>;
  check_out?: Maybe<Scalars['String']>;
  guest_name?: Maybe<Scalars['String']>;
  home?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export enum ReservationStatus {
  LinkSent = 'link_sent',
  New = 'new',
  Registered = 'registered'
}

export type ReviewType = {
  __typename?: 'ReviewType';
  comments?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['String']>;
};

export type UserInput = {
  check_out: Scalars['String'];
  guests?: InputMaybe<Array<InputMaybe<Guest>>>;
  hash: Scalars['String'];
  home: Scalars['String'];
  phone: Scalars['String'];
};

export type ReservationsQueryVariables = Types.Exact<{
  isPast: Types.Scalars['Boolean'];
}>;


export type ReservationsQuery = { __typename?: 'Query', reservations?: Array<{ __typename?: 'Reservation', id?: string | null, guest_name?: string | null, check_out?: string | null, check_in?: string | null, hash?: string | null, phone?: string | null, home?: string | null, reservationStatus?: Types.ReservationStatus | null, registrationUrl?: string | null, faqUrl?: string | null, guests?: Array<{ __typename?: 'GuestRegistration', birthDate: string, documentNumber: string, documentType: string, documentPlace?: string | null, docFile?: string | null, firstName: string, lastName: string, nationality: string, placeOfBirth: string } | null> | null } | null> | null };

export type SyncRegistrationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SyncRegistrationsQuery = { __typename?: 'Query', syncReservations?: Array<{ __typename?: 'Reservation', id?: string | null, guest_name?: string | null, check_out?: string | null, check_in?: string | null, hash?: string | null, phone?: string | null, home?: string | null, reservationStatus?: Types.ReservationStatus | null, registrationUrl?: string | null, faqUrl?: string | null, guests?: Array<{ __typename?: 'GuestRegistration', birthDate: string, documentNumber: string, documentType: string, documentPlace?: string | null, docFile?: string | null, firstName: string, lastName: string, nationality: string, placeOfBirth: string } | null> | null } | null> | null };

export type ReservationRespFragment = { __typename?: 'Reservation', id?: string | null, guest_name?: string | null, check_out?: string | null, check_in?: string | null, hash?: string | null, phone?: string | null, home?: string | null, reservationStatus?: Types.ReservationStatus | null, registrationUrl?: string | null, faqUrl?: string | null, guests?: Array<{ __typename?: 'GuestRegistration', birthDate: string, documentNumber: string, documentType: string, documentPlace?: string | null, docFile?: string | null, firstName: string, lastName: string, nationality: string, placeOfBirth: string } | null> | null };

export type UpdateReservationStatusMutationVariables = Types.Exact<{
  userId: Types.Scalars['ID'];
  hash: Types.Scalars['String'];
  reservationStatus: Types.ReservationStatus;
}>;


export type UpdateReservationStatusMutation = { __typename?: 'Mutation', updateReservationStatus?: Types.ReservationStatus | null };

export const ReservationRespFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReservationResp"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"guest_name"}},{"kind":"Field","name":{"kind":"Name","value":"check_out"}},{"kind":"Field","name":{"kind":"Name","value":"check_in"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"home"}},{"kind":"Field","name":{"kind":"Name","value":"reservationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"registrationUrl"}},{"kind":"Field","name":{"kind":"Name","value":"faqUrl"}},{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"documentNumber"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"documentPlace"}},{"kind":"Field","name":{"kind":"Name","value":"docFile"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"}},{"kind":"Field","name":{"kind":"Name","value":"placeOfBirth"}}]}}]}}]} as unknown as DocumentNode<ReservationRespFragment, unknown>;
export const ReservationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Reservations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPast"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"isPast"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPast"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationResp"}}]}}]}},...ReservationRespFragmentDoc.definitions]} as unknown as DocumentNode<ReservationsQuery, ReservationsQueryVariables>;
export const SyncRegistrationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"syncRegistrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncReservations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReservationResp"}}]}}]}},...ReservationRespFragmentDoc.definitions]} as unknown as DocumentNode<SyncRegistrationsQuery, SyncRegistrationsQueryVariables>;
export const UpdateReservationStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateReservationStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hash"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reservationStatus"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReservationStatus"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateReservationStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hash"}}},{"kind":"Argument","name":{"kind":"Name","value":"reservationStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reservationStatus"}}}]}]}}]} as unknown as DocumentNode<UpdateReservationStatusMutation, UpdateReservationStatusMutationVariables>;
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

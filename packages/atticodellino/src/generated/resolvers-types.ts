import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Asset>;
  BookInput: BookInput;
  BookResponse: ResolverTypeWrapper<BookResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Calendar: ResolverTypeWrapper<Calendar>;
  Content: ResolverTypeWrapper<Content>;
  Faq: ResolverTypeWrapper<Faq>;
  File: ResolverTypeWrapper<File>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Guest: Guest;
  GuestMail: ResolverTypeWrapper<GuestMail>;
  GuestRegistration: ResolverTypeWrapper<GuestRegistration>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IGuest: never;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Reco: ResolverTypeWrapper<Reco>;
  Reservation: ResolverTypeWrapper<Reservation>;
  ReservationShort: ResolverTypeWrapper<ReservationShort>;
  ReservationStatus: ReservationStatus;
  ReviewType: ResolverTypeWrapper<ReviewType>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Asset;
  BookInput: BookInput;
  BookResponse: BookResponse;
  Boolean: Scalars['Boolean'];
  Calendar: Calendar;
  Content: Content;
  Faq: Faq;
  File: File;
  Float: Scalars['Float'];
  Guest: Guest;
  GuestMail: GuestMail;
  GuestRegistration: GuestRegistration;
  ID: Scalars['ID'];
  IGuest: never;
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  Reco: Reco;
  Reservation: Reservation;
  ReservationShort: ReservationShort;
  ReviewType: ReviewType;
  String: Scalars['String'];
  Upload: Scalars['Upload'];
  UserInput: UserInput;
};

export type AssetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Asset'] = ResolversParentTypes['Asset']> = {
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookResponse'] = ResolversParentTypes['BookResponse']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']> = {
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = {
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FaqResolvers<ContextType = any, ParentType extends ResolversParentTypes['Faq'] = ResolversParentTypes['Faq']> = {
  content?: Resolver<ResolversTypes['Content'], ParentType, ContextType>;
  media?: Resolver<Maybe<Array<Maybe<ResolversTypes['Asset']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuestMailResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuestMail'] = ResolversParentTypes['GuestMail']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GuestRegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['GuestRegistration'] = ResolversParentTypes['GuestRegistration']> = {
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  docFile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placeOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IGuestResolvers<ContextType = any, ParentType extends ResolversParentTypes['IGuest'] = ResolversParentTypes['IGuest']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  birthDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  documentType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placeOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  book?: Resolver<Maybe<ResolversTypes['BookResponse']>, ParentType, ContextType, Partial<MutationBookArgs>>;
  registerGuests?: Resolver<Maybe<ResolversTypes['ReservationStatus']>, ParentType, ContextType, RequireFields<MutationRegisterGuestsArgs, 'file' | 'user'>>;
  testFileUpload?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, Partial<MutationTestFileUploadArgs>>;
  updateReservationStatus?: Resolver<Maybe<ResolversTypes['ReservationStatus']>, ParentType, ContextType, RequireFields<MutationUpdateReservationStatusArgs, 'hash' | 'id' | 'reservationStatus'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  calendar?: Resolver<Maybe<Array<Maybe<ResolversTypes['Calendar']>>>, ParentType, ContextType, RequireFields<QueryCalendarArgs, 'apartment'>>;
  faq?: Resolver<Maybe<Array<Maybe<ResolversTypes['Faq']>>>, ParentType, ContextType, RequireFields<QueryFaqArgs, 'hash'>>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType, RequireFields<QueryPriceArgs, 'airBnb' | 'from' | 'to'>>;
  reco?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reco']>>>, ParentType, ContextType>;
  reservation?: Resolver<Maybe<ResolversTypes['Reservation']>, ParentType, ContextType, RequireFields<QueryReservationArgs, 'hash'>>;
  reservations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reservation']>>>, ParentType, ContextType, RequireFields<QueryReservationsArgs, 'isPast'>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReviewType']>>>, ParentType, ContextType, RequireFields<QueryReviewsArgs, 'airBnb'>>;
  syncReservations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reservation']>>>, ParentType, ContextType>;
};

export type RecoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reco'] = ResolversParentTypes['Reco']> = {
  description?: Resolver<ResolversTypes['Content'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airbnbLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_in?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_out?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayHome?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  faqUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guest_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guests?: Resolver<Maybe<Array<Maybe<ResolversTypes['GuestRegistration']>>>, ParentType, ContextType>;
  hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  home?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  isExpired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  mapLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registrationUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reservationStatus?: Resolver<Maybe<ResolversTypes['ReservationStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservationShortResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReservationShort'] = ResolversParentTypes['ReservationShort']> = {
  check_in?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  check_out?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  guest_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  home?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewType'] = ResolversParentTypes['ReviewType']> = {
  comments?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviewer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  BookResponse?: BookResponseResolvers<ContextType>;
  Calendar?: CalendarResolvers<ContextType>;
  Content?: ContentResolvers<ContextType>;
  Faq?: FaqResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  GuestMail?: GuestMailResolvers<ContextType>;
  GuestRegistration?: GuestRegistrationResolvers<ContextType>;
  IGuest?: IGuestResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reco?: RecoResolvers<ContextType>;
  Reservation?: ReservationResolvers<ContextType>;
  ReservationShort?: ReservationShortResolvers<ContextType>;
  ReviewType?: ReviewTypeResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};


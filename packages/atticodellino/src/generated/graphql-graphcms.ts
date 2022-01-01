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
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

export type Apartment = Node & {
  __typename?: 'Apartment';
  code?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Apartment>;
  enterCode?: Maybe<Scalars['String']>;
  /** List of Apartment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ApartmentCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ApartmentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ApartmentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ApartmentPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ApartmentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ApartmentUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ApartmentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ApartmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type ApartmentConnection = {
  __typename?: 'ApartmentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ApartmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ApartmentCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  enterCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ApartmentCreateManyInlineInput = {
  /** Connect multiple existing Apartment documents */
  connect?: InputMaybe<Array<ApartmentWhereUniqueInput>>;
  /** Create and connect multiple existing Apartment documents */
  create?: InputMaybe<Array<ApartmentCreateInput>>;
};

export type ApartmentCreateOneInlineInput = {
  /** Connect one existing Apartment document */
  connect?: InputMaybe<ApartmentWhereUniqueInput>;
  /** Create and connect one Apartment document */
  create?: InputMaybe<ApartmentCreateInput>;
};

/** An edge in a connection. */
export type ApartmentEdge = {
  __typename?: 'ApartmentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Apartment;
};

/** Identifies documents */
export type ApartmentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ApartmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ApartmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ApartmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  enterCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  enterCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  enterCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  enterCode_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  enterCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  enterCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  enterCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  enterCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  enterCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  enterCode_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ApartmentOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EnterCodeAsc = 'enterCode_ASC',
  EnterCodeDesc = 'enterCode_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ApartmentUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  enterCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ApartmentUpdateManyInlineInput = {
  /** Connect multiple existing Apartment documents */
  connect?: InputMaybe<Array<ApartmentConnectInput>>;
  /** Create and connect multiple Apartment documents */
  create?: InputMaybe<Array<ApartmentCreateInput>>;
  /** Delete multiple Apartment documents */
  delete?: InputMaybe<Array<ApartmentWhereUniqueInput>>;
  /** Disconnect multiple Apartment documents */
  disconnect?: InputMaybe<Array<ApartmentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Apartment documents */
  set?: InputMaybe<Array<ApartmentWhereUniqueInput>>;
  /** Update multiple Apartment documents */
  update?: InputMaybe<Array<ApartmentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Apartment documents */
  upsert?: InputMaybe<Array<ApartmentUpsertWithNestedWhereUniqueInput>>;
};

export type ApartmentUpdateManyInput = {
  code?: InputMaybe<Scalars['String']>;
  enterCode?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ApartmentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ApartmentUpdateManyInput;
  /** Document search */
  where: ApartmentWhereInput;
};

export type ApartmentUpdateOneInlineInput = {
  /** Connect existing Apartment document */
  connect?: InputMaybe<ApartmentWhereUniqueInput>;
  /** Create and connect one Apartment document */
  create?: InputMaybe<ApartmentCreateInput>;
  /** Delete currently connected Apartment document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Apartment document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Apartment document */
  update?: InputMaybe<ApartmentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Apartment document */
  upsert?: InputMaybe<ApartmentUpsertWithNestedWhereUniqueInput>;
};

export type ApartmentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ApartmentUpdateInput;
  /** Unique document search */
  where: ApartmentWhereUniqueInput;
};

export type ApartmentUpsertInput = {
  /** Create document if it didn't exist */
  create: ApartmentCreateInput;
  /** Update document if it exists */
  update: ApartmentUpdateInput;
};

export type ApartmentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ApartmentUpsertInput;
  /** Unique document search */
  where: ApartmentWhereUniqueInput;
};

/** Identifies documents */
export type ApartmentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ApartmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ApartmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ApartmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  enterCode?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  enterCode_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  enterCode_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  enterCode_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  enterCode_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  enterCode_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  enterCode_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  enterCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  enterCode_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  enterCode_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Apartment record uniquely */
export type ApartmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  mediaFaq: Array<Faq>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetMediaFaqArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mediaFaq?: InputMaybe<FaqCreateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mediaFaq_every?: InputMaybe<FaqWhereInput>;
  mediaFaq_none?: InputMaybe<FaqWhereInput>;
  mediaFaq_some?: InputMaybe<FaqWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mediaFaq?: InputMaybe<FaqUpdateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mediaFaq_every?: InputMaybe<FaqWhereInput>;
  mediaFaq_none?: InputMaybe<FaqWhereInput>;
  mediaFaq_some?: InputMaybe<FaqWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Faq = Node & {
  __typename?: 'Faq';
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Faq>;
  /** List of Faq versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Faq>;
  media: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FaqCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FaqDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type FaqLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type FaqMediaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type FaqPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FaqScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FaqUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type FaqConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FaqCreateInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FaqCreateLocalizationsInput>;
  media?: InputMaybe<AssetCreateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FaqCreateLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FaqCreateLocalizationInput = {
  /** Localization input */
  data: FaqCreateLocalizationDataInput;
  locale: Locale;
};

export type FaqCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
};

export type FaqCreateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Create and connect multiple existing Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Connect one existing Faq document */
  connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  media_every?: InputMaybe<AssetWhereInput>;
  media_none?: InputMaybe<AssetWhereInput>;
  media_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FaqOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FaqUpdateInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<FaqUpdateLocalizationsInput>;
  media?: InputMaybe<AssetUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateLocalizationInput = {
  data: FaqUpdateLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FaqUpsertLocalizationInput>>;
};

export type FaqUpdateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  connect?: InputMaybe<Array<FaqConnectInput>>;
  /** Create and connect multiple Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
  /** Delete multiple Faq documents */
  delete?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Disconnect multiple Faq documents */
  disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Faq documents */
  set?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq documents */
  update?: InputMaybe<Array<FaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Faq documents */
  upsert?: InputMaybe<Array<FaqUpsertWithNestedWhereUniqueInput>>;
};

export type FaqUpdateManyInput = {
  /** content input for default locale (en) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FaqUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateManyLocalizationInput = {
  data: FaqUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateManyLocalizationInput>>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FaqUpdateManyInput;
  /** Document search */
  where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
  /** Connect existing Faq document */
  connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
  /** Delete currently connected Faq document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Faq document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Faq document */
  update?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqUpdateInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertLocalizationInput = {
  create: FaqCreateLocalizationDataInput;
  locale: Locale;
  update: FaqUpdateLocalizationDataInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqUpsertInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  media_every?: InputMaybe<AssetWhereInput>;
  media_none?: InputMaybe<AssetWhereInput>;
  media_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Guest = Node & {
  __typename?: 'Guest';
  birthDate?: Maybe<Scalars['Date']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  docFile?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<Guest>;
  documentNumber?: Maybe<Scalars['String']>;
  documentPlace?: Maybe<Scalars['String']>;
  documentType?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  /** List of Guest versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  reservation?: Maybe<Reservation>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type GuestCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GuestDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type GuestHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type GuestPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GuestReservationArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type GuestScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GuestUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type GuestConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GuestWhereUniqueInput;
};

/** A connection to a list of items. */
export type GuestConnection = {
  __typename?: 'GuestConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GuestEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GuestCreateInput = {
  birthDate?: InputMaybe<Scalars['Date']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  docFile?: InputMaybe<Scalars['String']>;
  documentNumber?: InputMaybe<Scalars['String']>;
  documentPlace?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  reservation?: InputMaybe<ReservationCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GuestCreateManyInlineInput = {
  /** Connect multiple existing Guest documents */
  connect?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Create and connect multiple existing Guest documents */
  create?: InputMaybe<Array<GuestCreateInput>>;
};

export type GuestCreateOneInlineInput = {
  /** Connect one existing Guest document */
  connect?: InputMaybe<GuestWhereUniqueInput>;
  /** Create and connect one Guest document */
  create?: InputMaybe<GuestCreateInput>;
};

/** An edge in a connection. */
export type GuestEdge = {
  __typename?: 'GuestEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Guest;
};

/** Identifies documents */
export type GuestManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GuestWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  birthDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  birthDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  docFile?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  docFile_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  docFile_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  docFile_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  docFile_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  docFile_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  docFile_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  docFile_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  docFile_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  docFile_starts_with?: InputMaybe<Scalars['String']>;
  documentNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  documentNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentNumber_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  documentNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  documentNumber_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  documentNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentNumber_starts_with?: InputMaybe<Scalars['String']>;
  documentPlace?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  documentPlace_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentPlace_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentPlace_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  documentPlace_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentPlace_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentPlace_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  documentPlace_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  documentPlace_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentPlace_starts_with?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  documentType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  documentType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  documentType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  documentType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentType_starts_with?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nationality_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationality_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationality_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  nationality_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationality_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationality_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nationality_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nationality_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationality_starts_with?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  placeOfBirth_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeOfBirth_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeOfBirth_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  placeOfBirth_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeOfBirth_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeOfBirth_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  placeOfBirth_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  placeOfBirth_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeOfBirth_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reservation?: InputMaybe<ReservationWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum GuestOrderByInput {
  BirthDateAsc = 'birthDate_ASC',
  BirthDateDesc = 'birthDate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DocFileAsc = 'docFile_ASC',
  DocFileDesc = 'docFile_DESC',
  DocumentNumberAsc = 'documentNumber_ASC',
  DocumentNumberDesc = 'documentNumber_DESC',
  DocumentPlaceAsc = 'documentPlace_ASC',
  DocumentPlaceDesc = 'documentPlace_DESC',
  DocumentTypeAsc = 'documentType_ASC',
  DocumentTypeDesc = 'documentType_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  NationalityAsc = 'nationality_ASC',
  NationalityDesc = 'nationality_DESC',
  PlaceOfBirthAsc = 'placeOfBirth_ASC',
  PlaceOfBirthDesc = 'placeOfBirth_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Guest Status */
export enum GuestStatus {
  LinkSent = 'link_sent',
  New = 'new',
  Registered = 'registered'
}

export type GuestUpdateInput = {
  birthDate?: InputMaybe<Scalars['Date']>;
  docFile?: InputMaybe<Scalars['String']>;
  documentNumber?: InputMaybe<Scalars['String']>;
  documentPlace?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  reservation?: InputMaybe<ReservationUpdateOneInlineInput>;
};

export type GuestUpdateManyInlineInput = {
  /** Connect multiple existing Guest documents */
  connect?: InputMaybe<Array<GuestConnectInput>>;
  /** Create and connect multiple Guest documents */
  create?: InputMaybe<Array<GuestCreateInput>>;
  /** Delete multiple Guest documents */
  delete?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Disconnect multiple Guest documents */
  disconnect?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Guest documents */
  set?: InputMaybe<Array<GuestWhereUniqueInput>>;
  /** Update multiple Guest documents */
  update?: InputMaybe<Array<GuestUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Guest documents */
  upsert?: InputMaybe<Array<GuestUpsertWithNestedWhereUniqueInput>>;
};

export type GuestUpdateManyInput = {
  birthDate?: InputMaybe<Scalars['Date']>;
  docFile?: InputMaybe<Scalars['String']>;
  documentNumber?: InputMaybe<Scalars['String']>;
  documentPlace?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
};

export type GuestUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GuestUpdateManyInput;
  /** Document search */
  where: GuestWhereInput;
};

export type GuestUpdateOneInlineInput = {
  /** Connect existing Guest document */
  connect?: InputMaybe<GuestWhereUniqueInput>;
  /** Create and connect one Guest document */
  create?: InputMaybe<GuestCreateInput>;
  /** Delete currently connected Guest document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Guest document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Guest document */
  update?: InputMaybe<GuestUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Guest document */
  upsert?: InputMaybe<GuestUpsertWithNestedWhereUniqueInput>;
};

export type GuestUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GuestUpdateInput;
  /** Unique document search */
  where: GuestWhereUniqueInput;
};

export type GuestUpsertInput = {
  /** Create document if it didn't exist */
  create: GuestCreateInput;
  /** Update document if it exists */
  update: GuestUpdateInput;
};

export type GuestUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GuestUpsertInput;
  /** Unique document search */
  where: GuestWhereUniqueInput;
};

/** Identifies documents */
export type GuestWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GuestWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GuestWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  birthDate?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  birthDate_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  birthDate_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  birthDate_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  birthDate_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  birthDate_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  birthDate_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  birthDate_not_in?: InputMaybe<Array<Scalars['Date']>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  docFile?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  docFile_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  docFile_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  docFile_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  docFile_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  docFile_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  docFile_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  docFile_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  docFile_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  docFile_starts_with?: InputMaybe<Scalars['String']>;
  documentNumber?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  documentNumber_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentNumber_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentNumber_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  documentNumber_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentNumber_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentNumber_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  documentNumber_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  documentNumber_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentNumber_starts_with?: InputMaybe<Scalars['String']>;
  documentPlace?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  documentPlace_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentPlace_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentPlace_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  documentPlace_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentPlace_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentPlace_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  documentPlace_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  documentPlace_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentPlace_starts_with?: InputMaybe<Scalars['String']>;
  documentType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  documentType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  documentType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  documentType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  documentType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  documentType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  documentType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  documentType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  documentType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  documentType_starts_with?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  nationality_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  nationality_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  nationality_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  nationality_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  nationality_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  nationality_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  nationality_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  nationality_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  nationality_starts_with?: InputMaybe<Scalars['String']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  placeOfBirth_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  placeOfBirth_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  placeOfBirth_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  placeOfBirth_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  placeOfBirth_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  placeOfBirth_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  placeOfBirth_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  placeOfBirth_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  placeOfBirth_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reservation?: InputMaybe<ReservationWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Guest record uniquely */
export type GuestWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
  It = 'it'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one apartment */
  createApartment?: Maybe<Apartment>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one faq */
  createFaq?: Maybe<Faq>;
  /** Create one guest */
  createGuest?: Maybe<Guest>;
  /** Create one recommendation */
  createRecommendation?: Maybe<Recommendation>;
  /** Create one reservation */
  createReservation?: Maybe<Reservation>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one token */
  createToken?: Maybe<Token>;
  /** Delete one apartment from _all_ existing stages. Returns deleted document. */
  deleteApartment?: Maybe<Apartment>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one faq from _all_ existing stages. Returns deleted document. */
  deleteFaq?: Maybe<Faq>;
  /** Delete one guest from _all_ existing stages. Returns deleted document. */
  deleteGuest?: Maybe<Guest>;
  /**
   * Delete many Apartment documents
   * @deprecated Please use the new paginated many mutation (deleteManyApartmentsConnection)
   */
  deleteManyApartments: BatchPayload;
  /** Delete many Apartment documents, return deleted documents */
  deleteManyApartmentsConnection: ApartmentConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Faq documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
   */
  deleteManyFaqs: BatchPayload;
  /** Delete many Faq documents, return deleted documents */
  deleteManyFaqsConnection: FaqConnection;
  /**
   * Delete many Guest documents
   * @deprecated Please use the new paginated many mutation (deleteManyGuestsConnection)
   */
  deleteManyGuests: BatchPayload;
  /** Delete many Guest documents, return deleted documents */
  deleteManyGuestsConnection: GuestConnection;
  /**
   * Delete many Recommendation documents
   * @deprecated Please use the new paginated many mutation (deleteManyRecommendationsConnection)
   */
  deleteManyRecommendations: BatchPayload;
  /** Delete many Recommendation documents, return deleted documents */
  deleteManyRecommendationsConnection: RecommendationConnection;
  /**
   * Delete many Reservation documents
   * @deprecated Please use the new paginated many mutation (deleteManyReservationsConnection)
   */
  deleteManyReservations: BatchPayload;
  /** Delete many Reservation documents, return deleted documents */
  deleteManyReservationsConnection: ReservationConnection;
  /**
   * Delete many Token documents
   * @deprecated Please use the new paginated many mutation (deleteManyTokensConnection)
   */
  deleteManyTokens: BatchPayload;
  /** Delete many Token documents, return deleted documents */
  deleteManyTokensConnection: TokenConnection;
  /** Delete one recommendation from _all_ existing stages. Returns deleted document. */
  deleteRecommendation?: Maybe<Recommendation>;
  /** Delete one reservation from _all_ existing stages. Returns deleted document. */
  deleteReservation?: Maybe<Reservation>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one token from _all_ existing stages. Returns deleted document. */
  deleteToken?: Maybe<Token>;
  /** Publish one apartment */
  publishApartment?: Maybe<Apartment>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one faq */
  publishFaq?: Maybe<Faq>;
  /** Publish one guest */
  publishGuest?: Maybe<Guest>;
  /**
   * Publish many Apartment documents
   * @deprecated Please use the new paginated many mutation (publishManyApartmentsConnection)
   */
  publishManyApartments: BatchPayload;
  /** Publish many Apartment documents */
  publishManyApartmentsConnection: ApartmentConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Faq documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
   */
  publishManyFaqs: BatchPayload;
  /** Publish many Faq documents */
  publishManyFaqsConnection: FaqConnection;
  /**
   * Publish many Guest documents
   * @deprecated Please use the new paginated many mutation (publishManyGuestsConnection)
   */
  publishManyGuests: BatchPayload;
  /** Publish many Guest documents */
  publishManyGuestsConnection: GuestConnection;
  /**
   * Publish many Recommendation documents
   * @deprecated Please use the new paginated many mutation (publishManyRecommendationsConnection)
   */
  publishManyRecommendations: BatchPayload;
  /** Publish many Recommendation documents */
  publishManyRecommendationsConnection: RecommendationConnection;
  /**
   * Publish many Reservation documents
   * @deprecated Please use the new paginated many mutation (publishManyReservationsConnection)
   */
  publishManyReservations: BatchPayload;
  /** Publish many Reservation documents */
  publishManyReservationsConnection: ReservationConnection;
  /**
   * Publish many Token documents
   * @deprecated Please use the new paginated many mutation (publishManyTokensConnection)
   */
  publishManyTokens: BatchPayload;
  /** Publish many Token documents */
  publishManyTokensConnection: TokenConnection;
  /** Publish one recommendation */
  publishRecommendation?: Maybe<Recommendation>;
  /** Publish one reservation */
  publishReservation?: Maybe<Reservation>;
  /** Publish one token */
  publishToken?: Maybe<Token>;
  /** Schedule to publish one apartment */
  schedulePublishApartment?: Maybe<Apartment>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one faq */
  schedulePublishFaq?: Maybe<Faq>;
  /** Schedule to publish one guest */
  schedulePublishGuest?: Maybe<Guest>;
  /** Schedule to publish one recommendation */
  schedulePublishRecommendation?: Maybe<Recommendation>;
  /** Schedule to publish one reservation */
  schedulePublishReservation?: Maybe<Reservation>;
  /** Schedule to publish one token */
  schedulePublishToken?: Maybe<Token>;
  /** Unpublish one apartment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishApartment?: Maybe<Apartment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFaq?: Maybe<Faq>;
  /** Unpublish one guest from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGuest?: Maybe<Guest>;
  /** Unpublish one recommendation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRecommendation?: Maybe<Recommendation>;
  /** Unpublish one reservation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReservation?: Maybe<Reservation>;
  /** Unpublish one token from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishToken?: Maybe<Token>;
  /** Unpublish one apartment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishApartment?: Maybe<Apartment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFaq?: Maybe<Faq>;
  /** Unpublish one guest from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGuest?: Maybe<Guest>;
  /**
   * Unpublish many Apartment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyApartmentsConnection)
   */
  unpublishManyApartments: BatchPayload;
  /** Find many Apartment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyApartmentsConnection: ApartmentConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Faq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
   */
  unpublishManyFaqs: BatchPayload;
  /** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFaqsConnection: FaqConnection;
  /**
   * Unpublish many Guest documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGuestsConnection)
   */
  unpublishManyGuests: BatchPayload;
  /** Find many Guest documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGuestsConnection: GuestConnection;
  /**
   * Unpublish many Recommendation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRecommendationsConnection)
   */
  unpublishManyRecommendations: BatchPayload;
  /** Find many Recommendation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRecommendationsConnection: RecommendationConnection;
  /**
   * Unpublish many Reservation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReservationsConnection)
   */
  unpublishManyReservations: BatchPayload;
  /** Find many Reservation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReservationsConnection: ReservationConnection;
  /**
   * Unpublish many Token documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTokensConnection)
   */
  unpublishManyTokens: BatchPayload;
  /** Find many Token documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTokensConnection: TokenConnection;
  /** Unpublish one recommendation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRecommendation?: Maybe<Recommendation>;
  /** Unpublish one reservation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReservation?: Maybe<Reservation>;
  /** Unpublish one token from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishToken?: Maybe<Token>;
  /** Update one apartment */
  updateApartment?: Maybe<Apartment>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one faq */
  updateFaq?: Maybe<Faq>;
  /** Update one guest */
  updateGuest?: Maybe<Guest>;
  /**
   * Update many apartments
   * @deprecated Please use the new paginated many mutation (updateManyApartmentsConnection)
   */
  updateManyApartments: BatchPayload;
  /** Update many Apartment documents */
  updateManyApartmentsConnection: ApartmentConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many faqs
   * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
   */
  updateManyFaqs: BatchPayload;
  /** Update many Faq documents */
  updateManyFaqsConnection: FaqConnection;
  /**
   * Update many guests
   * @deprecated Please use the new paginated many mutation (updateManyGuestsConnection)
   */
  updateManyGuests: BatchPayload;
  /** Update many Guest documents */
  updateManyGuestsConnection: GuestConnection;
  /**
   * Update many recommendations
   * @deprecated Please use the new paginated many mutation (updateManyRecommendationsConnection)
   */
  updateManyRecommendations: BatchPayload;
  /** Update many Recommendation documents */
  updateManyRecommendationsConnection: RecommendationConnection;
  /**
   * Update many reservations
   * @deprecated Please use the new paginated many mutation (updateManyReservationsConnection)
   */
  updateManyReservations: BatchPayload;
  /** Update many Reservation documents */
  updateManyReservationsConnection: ReservationConnection;
  /**
   * Update many tokens
   * @deprecated Please use the new paginated many mutation (updateManyTokensConnection)
   */
  updateManyTokens: BatchPayload;
  /** Update many Token documents */
  updateManyTokensConnection: TokenConnection;
  /** Update one recommendation */
  updateRecommendation?: Maybe<Recommendation>;
  /** Update one reservation */
  updateReservation?: Maybe<Reservation>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one token */
  updateToken?: Maybe<Token>;
  /** Upsert one apartment */
  upsertApartment?: Maybe<Apartment>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one faq */
  upsertFaq?: Maybe<Faq>;
  /** Upsert one guest */
  upsertGuest?: Maybe<Guest>;
  /** Upsert one recommendation */
  upsertRecommendation?: Maybe<Recommendation>;
  /** Upsert one reservation */
  upsertReservation?: Maybe<Reservation>;
  /** Upsert one token */
  upsertToken?: Maybe<Token>;
};


export type MutationCreateApartmentArgs = {
  data: ApartmentCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateGuestArgs = {
  data: GuestCreateInput;
};


export type MutationCreateRecommendationArgs = {
  data: RecommendationCreateInput;
};


export type MutationCreateReservationArgs = {
  data: ReservationCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTokenArgs = {
  data: TokenCreateInput;
};


export type MutationDeleteApartmentArgs = {
  where: ApartmentWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type MutationDeleteManyApartmentsArgs = {
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationDeleteManyApartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyFaqsArgs = {
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationDeleteManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationDeleteManyGuestsArgs = {
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationDeleteManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationDeleteManyRecommendationsArgs = {
  where?: InputMaybe<RecommendationManyWhereInput>;
};


export type MutationDeleteManyRecommendationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecommendationManyWhereInput>;
};


export type MutationDeleteManyReservationsArgs = {
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationDeleteManyReservationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationDeleteManyTokensArgs = {
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationDeleteManyTokensConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationDeleteRecommendationArgs = {
  where: RecommendationWhereUniqueInput;
};


export type MutationDeleteReservationArgs = {
  where: ReservationWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationPublishApartmentArgs = {
  to?: Array<Stage>;
  where: ApartmentWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishFaqArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishGuestArgs = {
  to?: Array<Stage>;
  where: GuestWhereUniqueInput;
};


export type MutationPublishManyApartmentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationPublishManyApartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyFaqsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyGuestsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationPublishManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationPublishManyRecommendationsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<RecommendationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyRecommendationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<RecommendationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyReservationsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationPublishManyReservationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationPublishManyTokensArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationPublishManyTokensConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationPublishRecommendationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: RecommendationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishReservationArgs = {
  to?: Array<Stage>;
  where: ReservationWhereUniqueInput;
};


export type MutationPublishTokenArgs = {
  to?: Array<Stage>;
  where: TokenWhereUniqueInput;
};


export type MutationSchedulePublishApartmentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ApartmentWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishFaqArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishGuestArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: GuestWhereUniqueInput;
};


export type MutationSchedulePublishRecommendationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: RecommendationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishReservationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ReservationWhereUniqueInput;
};


export type MutationSchedulePublishTokenArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TokenWhereUniqueInput;
};


export type MutationScheduleUnpublishApartmentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ApartmentWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: FaqWhereUniqueInput;
};


export type MutationScheduleUnpublishGuestArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: GuestWhereUniqueInput;
};


export type MutationScheduleUnpublishRecommendationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: RecommendationWhereUniqueInput;
};


export type MutationScheduleUnpublishReservationArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ReservationWhereUniqueInput;
};


export type MutationScheduleUnpublishTokenArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TokenWhereUniqueInput;
};


export type MutationUnpublishApartmentArgs = {
  from?: Array<Stage>;
  where: ApartmentWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: FaqWhereUniqueInput;
};


export type MutationUnpublishGuestArgs = {
  from?: Array<Stage>;
  where: GuestWhereUniqueInput;
};


export type MutationUnpublishManyApartmentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationUnpublishManyApartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyFaqsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyGuestsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUnpublishManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUnpublishManyRecommendationsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RecommendationManyWhereInput>;
};


export type MutationUnpublishManyRecommendationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RecommendationManyWhereInput>;
};


export type MutationUnpublishManyReservationsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationUnpublishManyReservationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationUnpublishManyTokensArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationUnpublishManyTokensConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationUnpublishRecommendationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: RecommendationWhereUniqueInput;
};


export type MutationUnpublishReservationArgs = {
  from?: Array<Stage>;
  where: ReservationWhereUniqueInput;
};


export type MutationUnpublishTokenArgs = {
  from?: Array<Stage>;
  where: TokenWhereUniqueInput;
};


export type MutationUpdateApartmentArgs = {
  data: ApartmentUpdateInput;
  where: ApartmentWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateGuestArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpdateManyApartmentsArgs = {
  data: ApartmentUpdateManyInput;
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationUpdateManyApartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ApartmentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ApartmentManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyFaqsArgs = {
  data: FaqUpdateManyInput;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUpdateManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FaqUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUpdateManyGuestsArgs = {
  data: GuestUpdateManyInput;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUpdateManyGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: GuestUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestManyWhereInput>;
};


export type MutationUpdateManyRecommendationsArgs = {
  data: RecommendationUpdateManyInput;
  where?: InputMaybe<RecommendationManyWhereInput>;
};


export type MutationUpdateManyRecommendationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: RecommendationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RecommendationManyWhereInput>;
};


export type MutationUpdateManyReservationsArgs = {
  data: ReservationUpdateManyInput;
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationUpdateManyReservationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ReservationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReservationManyWhereInput>;
};


export type MutationUpdateManyTokensArgs = {
  data: TokenUpdateManyInput;
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationUpdateManyTokensConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TokenUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenManyWhereInput>;
};


export type MutationUpdateRecommendationArgs = {
  data: RecommendationUpdateInput;
  where: RecommendationWhereUniqueInput;
};


export type MutationUpdateReservationArgs = {
  data: ReservationUpdateInput;
  where: ReservationWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTokenArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationUpsertApartmentArgs = {
  upsert: ApartmentUpsertInput;
  where: ApartmentWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertFaqArgs = {
  upsert: FaqUpsertInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpsertGuestArgs = {
  upsert: GuestUpsertInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpsertRecommendationArgs = {
  upsert: RecommendationUpsertInput;
  where: RecommendationWhereUniqueInput;
};


export type MutationUpsertReservationArgs = {
  upsert: ReservationUpsertInput;
  where: ReservationWhereUniqueInput;
};


export type MutationUpsertTokenArgs = {
  upsert: TokenUpsertInput;
  where: TokenWhereUniqueInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single apartment */
  apartment?: Maybe<Apartment>;
  /** Retrieve document version */
  apartmentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple apartments */
  apartments: Array<Apartment>;
  /** Retrieve multiple apartments using the Relay connection interface */
  apartmentsConnection: ApartmentConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single faq */
  faq?: Maybe<Faq>;
  /** Retrieve document version */
  faqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqs */
  faqs: Array<Faq>;
  /** Retrieve multiple faqs using the Relay connection interface */
  faqsConnection: FaqConnection;
  /** Retrieve a single guest */
  guest?: Maybe<Guest>;
  /** Retrieve document version */
  guestVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple guests */
  guests: Array<Guest>;
  /** Retrieve multiple guests using the Relay connection interface */
  guestsConnection: GuestConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single recommendation */
  recommendation?: Maybe<Recommendation>;
  /** Retrieve document version */
  recommendationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple recommendations */
  recommendations: Array<Recommendation>;
  /** Retrieve multiple recommendations using the Relay connection interface */
  recommendationsConnection: RecommendationConnection;
  /** Retrieve a single reservation */
  reservation?: Maybe<Reservation>;
  /** Retrieve document version */
  reservationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reservations */
  reservations: Array<Reservation>;
  /** Retrieve multiple reservations using the Relay connection interface */
  reservationsConnection: ReservationConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single token */
  token?: Maybe<Token>;
  /** Retrieve document version */
  tokenVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tokens */
  tokens: Array<Token>;
  /** Retrieve multiple tokens using the Relay connection interface */
  tokensConnection: TokenConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryApartmentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ApartmentWhereUniqueInput;
};


export type QueryApartmentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryApartmentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ApartmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ApartmentWhereInput>;
};


export type QueryApartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ApartmentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ApartmentWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryFaqArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FaqWhereUniqueInput;
};


export type QueryFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFaqsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryGuestArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GuestWhereUniqueInput;
};


export type QueryGuestVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGuestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GuestOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryGuestsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GuestOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryRecommendationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: RecommendationWhereUniqueInput;
};


export type QueryRecommendationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RecommendationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<RecommendationWhereInput>;
};


export type QueryRecommendationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RecommendationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<RecommendationWhereInput>;
};


export type QueryReservationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReservationWhereUniqueInput;
};


export type QueryReservationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryReservationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReservationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ReservationWhereInput>;
};


export type QueryReservationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReservationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ReservationWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTokenArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TokenWhereUniqueInput;
};


export type QueryTokenVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTokensArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TokenOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryTokensConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TokenOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

export type Recommendation = Node & {
  __typename?: 'Recommendation';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Recommendation>;
  /** List of Recommendation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Recommendation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type RecommendationCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type RecommendationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type RecommendationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type RecommendationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type RecommendationLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type RecommendationPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type RecommendationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type RecommendationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type RecommendationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type RecommendationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type RecommendationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RecommendationWhereUniqueInput;
};

/** A connection to a list of items. */
export type RecommendationConnection = {
  __typename?: 'RecommendationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RecommendationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RecommendationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<RecommendationCreateLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecommendationCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RecommendationCreateLocalizationInput = {
  /** Localization input */
  data: RecommendationCreateLocalizationDataInput;
  locale: Locale;
};

export type RecommendationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<RecommendationCreateLocalizationInput>>;
};

export type RecommendationCreateManyInlineInput = {
  /** Connect multiple existing Recommendation documents */
  connect?: InputMaybe<Array<RecommendationWhereUniqueInput>>;
  /** Create and connect multiple existing Recommendation documents */
  create?: InputMaybe<Array<RecommendationCreateInput>>;
};

export type RecommendationCreateOneInlineInput = {
  /** Connect one existing Recommendation document */
  connect?: InputMaybe<RecommendationWhereUniqueInput>;
  /** Create and connect one Recommendation document */
  create?: InputMaybe<RecommendationCreateInput>;
};

/** An edge in a connection. */
export type RecommendationEdge = {
  __typename?: 'RecommendationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Recommendation;
};

/** Identifies documents */
export type RecommendationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RecommendationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RecommendationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RecommendationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RecommendationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RecommendationUpdateInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<RecommendationUpdateLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type RecommendationUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
};

export type RecommendationUpdateLocalizationInput = {
  data: RecommendationUpdateLocalizationDataInput;
  locale: Locale;
};

export type RecommendationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<RecommendationCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<RecommendationUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<RecommendationUpsertLocalizationInput>>;
};

export type RecommendationUpdateManyInlineInput = {
  /** Connect multiple existing Recommendation documents */
  connect?: InputMaybe<Array<RecommendationConnectInput>>;
  /** Create and connect multiple Recommendation documents */
  create?: InputMaybe<Array<RecommendationCreateInput>>;
  /** Delete multiple Recommendation documents */
  delete?: InputMaybe<Array<RecommendationWhereUniqueInput>>;
  /** Disconnect multiple Recommendation documents */
  disconnect?: InputMaybe<Array<RecommendationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Recommendation documents */
  set?: InputMaybe<Array<RecommendationWhereUniqueInput>>;
  /** Update multiple Recommendation documents */
  update?: InputMaybe<Array<RecommendationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Recommendation documents */
  upsert?: InputMaybe<Array<RecommendationUpsertWithNestedWhereUniqueInput>>;
};

export type RecommendationUpdateManyInput = {
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<RecommendationUpdateManyLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type RecommendationUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
};

export type RecommendationUpdateManyLocalizationInput = {
  data: RecommendationUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type RecommendationUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<RecommendationUpdateManyLocalizationInput>>;
};

export type RecommendationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RecommendationUpdateManyInput;
  /** Document search */
  where: RecommendationWhereInput;
};

export type RecommendationUpdateOneInlineInput = {
  /** Connect existing Recommendation document */
  connect?: InputMaybe<RecommendationWhereUniqueInput>;
  /** Create and connect one Recommendation document */
  create?: InputMaybe<RecommendationCreateInput>;
  /** Delete currently connected Recommendation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Recommendation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Recommendation document */
  update?: InputMaybe<RecommendationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Recommendation document */
  upsert?: InputMaybe<RecommendationUpsertWithNestedWhereUniqueInput>;
};

export type RecommendationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RecommendationUpdateInput;
  /** Unique document search */
  where: RecommendationWhereUniqueInput;
};

export type RecommendationUpsertInput = {
  /** Create document if it didn't exist */
  create: RecommendationCreateInput;
  /** Update document if it exists */
  update: RecommendationUpdateInput;
};

export type RecommendationUpsertLocalizationInput = {
  create: RecommendationCreateLocalizationDataInput;
  locale: Locale;
  update: RecommendationUpdateLocalizationDataInput;
};

export type RecommendationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RecommendationUpsertInput;
  /** Unique document search */
  where: RecommendationWhereUniqueInput;
};

/** Identifies documents */
export type RecommendationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RecommendationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RecommendationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RecommendationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Recommendation record uniquely */
export type RecommendationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Reservation = Node & {
  __typename?: 'Reservation';
  check_in?: Maybe<Scalars['Date']>;
  check_out?: Maybe<Scalars['Date']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Reservation>;
  guest_name?: Maybe<Scalars['String']>;
  guests: Array<Guest>;
  hash?: Maybe<Scalars['String']>;
  /** List of Reservation versions */
  history: Array<Version>;
  home?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  phone?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  reservationStatus?: Maybe<GuestStatus>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ReservationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ReservationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ReservationGuestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GuestOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestWhereInput>;
};


export type ReservationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ReservationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ReservationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ReservationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ReservationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReservationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReservationConnection = {
  __typename?: 'ReservationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReservationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReservationCreateInput = {
  check_in?: InputMaybe<Scalars['Date']>;
  check_out?: InputMaybe<Scalars['Date']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guest_name?: InputMaybe<Scalars['String']>;
  guests?: InputMaybe<GuestCreateManyInlineInput>;
  hash?: InputMaybe<Scalars['String']>;
  home?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  reservationStatus?: InputMaybe<GuestStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ReservationCreateManyInlineInput = {
  /** Connect multiple existing Reservation documents */
  connect?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  /** Create and connect multiple existing Reservation documents */
  create?: InputMaybe<Array<ReservationCreateInput>>;
};

export type ReservationCreateOneInlineInput = {
  /** Connect one existing Reservation document */
  connect?: InputMaybe<ReservationWhereUniqueInput>;
  /** Create and connect one Reservation document */
  create?: InputMaybe<ReservationCreateInput>;
};

/** An edge in a connection. */
export type ReservationEdge = {
  __typename?: 'ReservationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Reservation;
};

/** Identifies documents */
export type ReservationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReservationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReservationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReservationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  check_in?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_in_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_in_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_in_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_in_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_in_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_in_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  check_in_not_in?: InputMaybe<Array<Scalars['Date']>>;
  check_out?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_out_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_out_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_out_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_out_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_out_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_out_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  check_out_not_in?: InputMaybe<Array<Scalars['Date']>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  guest_name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  guest_name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  guest_name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  guest_name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  guest_name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  guest_name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  guest_name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  guest_name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  guest_name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  guest_name_starts_with?: InputMaybe<Scalars['String']>;
  guests_every?: InputMaybe<GuestWhereInput>;
  guests_none?: InputMaybe<GuestWhereInput>;
  guests_some?: InputMaybe<GuestWhereInput>;
  hash?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  hash_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: InputMaybe<Scalars['String']>;
  home?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  home_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  home_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  home_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  home_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  home_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  home_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  home_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  home_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  home_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reservationStatus?: InputMaybe<GuestStatus>;
  /** All values that are contained in given list. */
  reservationStatus_in?: InputMaybe<Array<GuestStatus>>;
  /** All values that are not equal to given value. */
  reservationStatus_not?: InputMaybe<GuestStatus>;
  /** All values that are not contained in given list. */
  reservationStatus_not_in?: InputMaybe<Array<GuestStatus>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReservationOrderByInput {
  CheckInAsc = 'check_in_ASC',
  CheckInDesc = 'check_in_DESC',
  CheckOutAsc = 'check_out_ASC',
  CheckOutDesc = 'check_out_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  GuestNameAsc = 'guest_name_ASC',
  GuestNameDesc = 'guest_name_DESC',
  HashAsc = 'hash_ASC',
  HashDesc = 'hash_DESC',
  HomeAsc = 'home_ASC',
  HomeDesc = 'home_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReservationStatusAsc = 'reservationStatus_ASC',
  ReservationStatusDesc = 'reservationStatus_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ReservationUpdateInput = {
  check_in?: InputMaybe<Scalars['Date']>;
  check_out?: InputMaybe<Scalars['Date']>;
  guest_name?: InputMaybe<Scalars['String']>;
  guests?: InputMaybe<GuestUpdateManyInlineInput>;
  hash?: InputMaybe<Scalars['String']>;
  home?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  reservationStatus?: InputMaybe<GuestStatus>;
};

export type ReservationUpdateManyInlineInput = {
  /** Connect multiple existing Reservation documents */
  connect?: InputMaybe<Array<ReservationConnectInput>>;
  /** Create and connect multiple Reservation documents */
  create?: InputMaybe<Array<ReservationCreateInput>>;
  /** Delete multiple Reservation documents */
  delete?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  /** Disconnect multiple Reservation documents */
  disconnect?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Reservation documents */
  set?: InputMaybe<Array<ReservationWhereUniqueInput>>;
  /** Update multiple Reservation documents */
  update?: InputMaybe<Array<ReservationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Reservation documents */
  upsert?: InputMaybe<Array<ReservationUpsertWithNestedWhereUniqueInput>>;
};

export type ReservationUpdateManyInput = {
  check_in?: InputMaybe<Scalars['Date']>;
  check_out?: InputMaybe<Scalars['Date']>;
  guest_name?: InputMaybe<Scalars['String']>;
  home?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  reservationStatus?: InputMaybe<GuestStatus>;
};

export type ReservationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReservationUpdateManyInput;
  /** Document search */
  where: ReservationWhereInput;
};

export type ReservationUpdateOneInlineInput = {
  /** Connect existing Reservation document */
  connect?: InputMaybe<ReservationWhereUniqueInput>;
  /** Create and connect one Reservation document */
  create?: InputMaybe<ReservationCreateInput>;
  /** Delete currently connected Reservation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Reservation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Reservation document */
  update?: InputMaybe<ReservationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Reservation document */
  upsert?: InputMaybe<ReservationUpsertWithNestedWhereUniqueInput>;
};

export type ReservationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReservationUpdateInput;
  /** Unique document search */
  where: ReservationWhereUniqueInput;
};

export type ReservationUpsertInput = {
  /** Create document if it didn't exist */
  create: ReservationCreateInput;
  /** Update document if it exists */
  update: ReservationUpdateInput;
};

export type ReservationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReservationUpsertInput;
  /** Unique document search */
  where: ReservationWhereUniqueInput;
};

/** Identifies documents */
export type ReservationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReservationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReservationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReservationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  check_in?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_in_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_in_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_in_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_in_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_in_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_in_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  check_in_not_in?: InputMaybe<Array<Scalars['Date']>>;
  check_out?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  check_out_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  check_out_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  check_out_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  check_out_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  check_out_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  check_out_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  check_out_not_in?: InputMaybe<Array<Scalars['Date']>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  guest_name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  guest_name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  guest_name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  guest_name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  guest_name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  guest_name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  guest_name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  guest_name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  guest_name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  guest_name_starts_with?: InputMaybe<Scalars['String']>;
  guests_every?: InputMaybe<GuestWhereInput>;
  guests_none?: InputMaybe<GuestWhereInput>;
  guests_some?: InputMaybe<GuestWhereInput>;
  hash?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  hash_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  hash_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  hash_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  hash_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  hash_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  hash_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  hash_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  hash_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  hash_starts_with?: InputMaybe<Scalars['String']>;
  home?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  home_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  home_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  home_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  home_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  home_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  home_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  home_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  home_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  home_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  reservationStatus?: InputMaybe<GuestStatus>;
  /** All values that are contained in given list. */
  reservationStatus_in?: InputMaybe<Array<GuestStatus>>;
  /** All values that are not equal to given value. */
  reservationStatus_not?: InputMaybe<GuestStatus>;
  /** All values that are not contained in given list. */
  reservationStatus_not_in?: InputMaybe<Array<GuestStatus>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Reservation record uniquely */
export type ReservationWhereUniqueInput = {
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Apartment | Asset | Faq | Guest | Recommendation | Reservation | Token;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Token = Node & {
  __typename?: 'Token';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Token>;
  /** List of Token versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  token?: Maybe<Scalars['Json']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TokenCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TokenDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TokenHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TokenPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TokenScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TokenUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TokenConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TokenWhereUniqueInput;
};

/** A connection to a list of items. */
export type TokenConnection = {
  __typename?: 'TokenConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TokenEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TokenCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  token?: InputMaybe<Scalars['Json']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TokenCreateManyInlineInput = {
  /** Connect multiple existing Token documents */
  connect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  /** Create and connect multiple existing Token documents */
  create?: InputMaybe<Array<TokenCreateInput>>;
};

export type TokenCreateOneInlineInput = {
  /** Connect one existing Token document */
  connect?: InputMaybe<TokenWhereUniqueInput>;
  /** Create and connect one Token document */
  create?: InputMaybe<TokenCreateInput>;
};

/** An edge in a connection. */
export type TokenEdge = {
  __typename?: 'TokenEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Token;
};

/** Identifies documents */
export type TokenManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TokenWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TokenWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TokenOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TokenUpdateInput = {
  token?: InputMaybe<Scalars['Json']>;
};

export type TokenUpdateManyInlineInput = {
  /** Connect multiple existing Token documents */
  connect?: InputMaybe<Array<TokenConnectInput>>;
  /** Create and connect multiple Token documents */
  create?: InputMaybe<Array<TokenCreateInput>>;
  /** Delete multiple Token documents */
  delete?: InputMaybe<Array<TokenWhereUniqueInput>>;
  /** Disconnect multiple Token documents */
  disconnect?: InputMaybe<Array<TokenWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Token documents */
  set?: InputMaybe<Array<TokenWhereUniqueInput>>;
  /** Update multiple Token documents */
  update?: InputMaybe<Array<TokenUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Token documents */
  upsert?: InputMaybe<Array<TokenUpsertWithNestedWhereUniqueInput>>;
};

export type TokenUpdateManyInput = {
  token?: InputMaybe<Scalars['Json']>;
};

export type TokenUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TokenUpdateManyInput;
  /** Document search */
  where: TokenWhereInput;
};

export type TokenUpdateOneInlineInput = {
  /** Connect existing Token document */
  connect?: InputMaybe<TokenWhereUniqueInput>;
  /** Create and connect one Token document */
  create?: InputMaybe<TokenCreateInput>;
  /** Delete currently connected Token document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Token document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Token document */
  update?: InputMaybe<TokenUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Token document */
  upsert?: InputMaybe<TokenUpsertWithNestedWhereUniqueInput>;
};

export type TokenUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TokenUpdateInput;
  /** Unique document search */
  where: TokenWhereUniqueInput;
};

export type TokenUpsertInput = {
  /** Create document if it didn't exist */
  create: TokenCreateInput;
  /** Update document if it exists */
  update: TokenUpdateInput;
};

export type TokenUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TokenUpsertInput;
  /** Unique document search */
  where: TokenWhereUniqueInput;
};

/** Identifies documents */
export type TokenWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TokenWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TokenWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TokenWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Token record uniquely */
export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetFaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFaqsQuery = { __typename?: 'Query', faqs: Array<{ __typename?: 'Faq', title?: string | null | undefined, content?: { __typename?: 'RichText', html: string } | null | undefined, media: Array<{ __typename?: 'Asset', url: string, mimeType?: string | null | undefined }> }>, apartments: Array<{ __typename?: 'Apartment', enterCode?: string | null | undefined }> };

export type GetRecoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecoQuery = { __typename?: 'Query', recommendations: Array<{ __typename?: 'Recommendation', title?: string | null | undefined, link?: string | null | undefined, description?: { __typename?: 'RichText', html: string } | null | undefined }> };

export type CreateReservationMutationVariables = Exact<{
  input: ReservationCreateInput;
}>;


export type CreateReservationMutation = { __typename?: 'Mutation', createReservation?: { __typename?: 'Reservation', id: string, guest_name?: string | null | undefined, check_out?: any | null | undefined, check_in?: any | null | undefined, hash?: string | null | undefined, phone?: string | null | undefined, home?: string | null | undefined, reservationStatus?: GuestStatus | null | undefined, guests: Array<{ __typename?: 'Guest', birthDate?: any | null | undefined, documentNumber?: string | null | undefined, documentPlace?: string | null | undefined, docFile?: string | null | undefined, documentType?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, nationality?: string | null | undefined, placeOfBirth?: string | null | undefined }> } | null | undefined };

export type GetReservationsQueryVariables = Exact<{
  input: Scalars['Date'];
}>;


export type GetReservationsQuery = { __typename?: 'Query', reservations: Array<{ __typename?: 'Reservation', id: string, guest_name?: string | null | undefined, check_out?: any | null | undefined, check_in?: any | null | undefined, hash?: string | null | undefined, phone?: string | null | undefined, home?: string | null | undefined, reservationStatus?: GuestStatus | null | undefined, guests: Array<{ __typename?: 'Guest', birthDate?: any | null | undefined, documentNumber?: string | null | undefined, documentPlace?: string | null | undefined, docFile?: string | null | undefined, documentType?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, nationality?: string | null | undefined, placeOfBirth?: string | null | undefined }> }>, apartments: Array<{ __typename?: 'Apartment', code?: string | null | undefined, name?: string | null | undefined, enterCode?: string | null | undefined }> };

export type ReservationFragment = { __typename?: 'Reservation', id: string, guest_name?: string | null | undefined, check_out?: any | null | undefined, check_in?: any | null | undefined, hash?: string | null | undefined, phone?: string | null | undefined, home?: string | null | undefined, reservationStatus?: GuestStatus | null | undefined, guests: Array<{ __typename?: 'Guest', birthDate?: any | null | undefined, documentNumber?: string | null | undefined, documentPlace?: string | null | undefined, docFile?: string | null | undefined, documentType?: string | null | undefined, firstName?: string | null | undefined, lastName?: string | null | undefined, nationality?: string | null | undefined, placeOfBirth?: string | null | undefined }> };

export type UpdateReservationMutationVariables = Exact<{
  input: ReservationWhereUniqueInput;
  data: ReservationUpdateInput;
}>;


export type UpdateReservationMutation = { __typename?: 'Mutation', updateReservation?: { __typename?: 'Reservation', reservationStatus?: GuestStatus | null | undefined, phone?: string | null | undefined } | null | undefined };

export type GetReservationQueryVariables = Exact<{
  input: Scalars['String'];
}>;


export type GetReservationQuery = { __typename?: 'Query', reservations: Array<{ __typename?: 'Reservation', guest_name?: string | null | undefined, check_out?: any | null | undefined, check_in?: any | null | undefined, home?: string | null | undefined, phone?: string | null | undefined, guests: Array<{ __typename?: 'Guest', firstName?: string | null | undefined, lastName?: string | null | undefined }> }> };

export type GetTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTokenQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'Token', token?: any | null | undefined }> };

export const ReservationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Reservation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Reservation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"guest_name"}},{"kind":"Field","name":{"kind":"Name","value":"check_out"}},{"kind":"Field","name":{"kind":"Name","value":"check_in"}},{"kind":"Field","name":{"kind":"Name","value":"hash"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"home"}},{"kind":"Field","name":{"kind":"Name","value":"reservationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthDate"}},{"kind":"Field","name":{"kind":"Name","value":"documentNumber"}},{"kind":"Field","name":{"kind":"Name","value":"documentPlace"}},{"kind":"Field","name":{"kind":"Name","value":"docFile"}},{"kind":"Field","name":{"kind":"Name","value":"documentType"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"nationality"}},{"kind":"Field","name":{"kind":"Name","value":"placeOfBirth"}}]}}]}}]} as unknown as DocumentNode<ReservationFragment, unknown>;
export const GetFaqsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFaqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"faqs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"apartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enterCode"}}]}}]}}]} as unknown as DocumentNode<GetFaqsQuery, GetFaqsQueryVariables>;
export const GetRecoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReco"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recommendations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}}]}}]} as unknown as DocumentNode<GetRecoQuery, GetRecoQueryVariables>;
export const CreateReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReservationCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Reservation"}}]}}]}},...ReservationFragmentDoc.definitions]} as unknown as DocumentNode<CreateReservationMutation, CreateReservationMutationVariables>;
export const GetReservationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReservations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"check_out_gt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"check_out_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Reservation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"apartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"enterCode"}}]}}]}},...ReservationFragmentDoc.definitions]} as unknown as DocumentNode<GetReservationsQuery, GetReservationsQueryVariables>;
export const UpdateReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReservationWhereUniqueInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReservationUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateReservation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservationStatus"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}}]}}]}}]} as unknown as DocumentNode<UpdateReservationMutation, UpdateReservationMutationVariables>;
export const GetReservationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReservation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reservations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hash"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"check_out_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"guest_name"}},{"kind":"Field","name":{"kind":"Name","value":"check_out"}},{"kind":"Field","name":{"kind":"Name","value":"check_in"}},{"kind":"Field","name":{"kind":"Name","value":"home"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"guests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetReservationQuery, GetReservationQueryVariables>;
export const GetTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<GetTokenQuery, GetTokenQueryVariables>;
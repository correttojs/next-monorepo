import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  count: Scalars["Int"];
};

export type Apartment = Node & {
  airbnb?: Maybe<Scalars["String"]>;
  color?: Maybe<Color>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Apartment>;
  /** List of Apartment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  location?: Maybe<Location>;
  media: Array<Asset>;
  name: Scalars["String"];
  pages: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  section: Array<Section>;
  slug: Scalars["String"];
  /** System stage field */
  stage: Stage;
  translations: Array<Translation>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ApartmentCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ApartmentDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type ApartmentHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type ApartmentMediaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<AssetWhereInput>;
};

export type ApartmentPagesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<PageWhereInput>;
};

export type ApartmentPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ApartmentSectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<SectionWhereInput>;
};

export type ApartmentTranslationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<TranslationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<TranslationWhereInput>;
};

export type ApartmentUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type ApartmentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: ApartmentWhereUniqueInput;
};

/** A connection to a list of items. */
export type ApartmentConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ApartmentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ApartmentCreateInput = {
  airbnb?: Maybe<Scalars["String"]>;
  color?: Maybe<ColorInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  location?: Maybe<LocationInput>;
  media?: Maybe<AssetCreateManyInlineInput>;
  name: Scalars["String"];
  pages?: Maybe<PageCreateManyInlineInput>;
  section?: Maybe<SectionCreateManyInlineInput>;
  slug: Scalars["String"];
  translations?: Maybe<TranslationCreateManyInlineInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ApartmentCreateManyInlineInput = {
  /** Connect multiple existing Apartment documents */
  connect?: Maybe<Array<ApartmentWhereUniqueInput>>;
  /** Create and connect multiple existing Apartment documents */
  create?: Maybe<Array<ApartmentCreateInput>>;
};

export type ApartmentCreateOneInlineInput = {
  /** Connect one existing Apartment document */
  connect?: Maybe<ApartmentWhereUniqueInput>;
  /** Create and connect one Apartment document */
  create?: Maybe<ApartmentCreateInput>;
};

/** An edge in a connection. */
export type ApartmentEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Apartment;
};

/** Identifies documents */
export type ApartmentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ApartmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  airbnb?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  airbnb_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  airbnb_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  airbnb_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  airbnb_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  airbnb_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  airbnb_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  airbnb_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  airbnb_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  airbnb_starts_with?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  media_every?: Maybe<AssetWhereInput>;
  media_none?: Maybe<AssetWhereInput>;
  media_some?: Maybe<AssetWhereInput>;
  name?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars["String"]>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  section_every?: Maybe<SectionWhereInput>;
  section_none?: Maybe<SectionWhereInput>;
  section_some?: Maybe<SectionWhereInput>;
  slug?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  translations_every?: Maybe<TranslationWhereInput>;
  translations_none?: Maybe<TranslationWhereInput>;
  translations_some?: Maybe<TranslationWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum ApartmentOrderByInput {
  AirbnbAsc = "airbnb_ASC",
  AirbnbDesc = "airbnb_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ApartmentUpdateInput = {
  airbnb?: Maybe<Scalars["String"]>;
  color?: Maybe<ColorInput>;
  location?: Maybe<LocationInput>;
  media?: Maybe<AssetUpdateManyInlineInput>;
  name?: Maybe<Scalars["String"]>;
  pages?: Maybe<PageUpdateManyInlineInput>;
  section?: Maybe<SectionUpdateManyInlineInput>;
  slug?: Maybe<Scalars["String"]>;
  translations?: Maybe<TranslationUpdateManyInlineInput>;
};

export type ApartmentUpdateManyInlineInput = {
  /** Connect multiple existing Apartment documents */
  connect?: Maybe<Array<ApartmentConnectInput>>;
  /** Create and connect multiple Apartment documents */
  create?: Maybe<Array<ApartmentCreateInput>>;
  /** Delete multiple Apartment documents */
  delete?: Maybe<Array<ApartmentWhereUniqueInput>>;
  /** Disconnect multiple Apartment documents */
  disconnect?: Maybe<Array<ApartmentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Apartment documents */
  set?: Maybe<Array<ApartmentWhereUniqueInput>>;
  /** Update multiple Apartment documents */
  update?: Maybe<Array<ApartmentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Apartment documents */
  upsert?: Maybe<Array<ApartmentUpsertWithNestedWhereUniqueInput>>;
};

export type ApartmentUpdateManyInput = {
  airbnb?: Maybe<Scalars["String"]>;
  color?: Maybe<ColorInput>;
  location?: Maybe<LocationInput>;
};

export type ApartmentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ApartmentUpdateManyInput;
  /** Document search */
  where: ApartmentWhereInput;
};

export type ApartmentUpdateOneInlineInput = {
  /** Connect existing Apartment document */
  connect?: Maybe<ApartmentWhereUniqueInput>;
  /** Create and connect one Apartment document */
  create?: Maybe<ApartmentCreateInput>;
  /** Delete currently connected Apartment document */
  delete?: Maybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Apartment document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Update single Apartment document */
  update?: Maybe<ApartmentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Apartment document */
  upsert?: Maybe<ApartmentUpsertWithNestedWhereUniqueInput>;
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
  AND?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<ApartmentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<ApartmentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  airbnb?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  airbnb_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  airbnb_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  airbnb_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  airbnb_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  airbnb_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  airbnb_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  airbnb_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  airbnb_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  airbnb_starts_with?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  media_every?: Maybe<AssetWhereInput>;
  media_none?: Maybe<AssetWhereInput>;
  media_some?: Maybe<AssetWhereInput>;
  name?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars["String"]>;
  pages_every?: Maybe<PageWhereInput>;
  pages_none?: Maybe<PageWhereInput>;
  pages_some?: Maybe<PageWhereInput>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  section_every?: Maybe<SectionWhereInput>;
  section_none?: Maybe<SectionWhereInput>;
  section_some?: Maybe<SectionWhereInput>;
  slug?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  slug_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  slug_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  slug_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  slug_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  slug_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  slug_starts_with?: Maybe<Scalars["String"]>;
  translations_every?: Maybe<TranslationWhereInput>;
  translations_none?: Maybe<TranslationWhereInput>;
  translations_some?: Maybe<TranslationWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Apartment record uniquely */
export type ApartmentWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
};

/** Asset system model */
export type Asset = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars["String"];
  /** The file handle */
  handle: Scalars["String"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  mediaApartment: Array<Apartment>;
  mediaSection: Array<Section>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** The file size */
  size?: Maybe<Scalars["Float"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"];
  /** The file width */
  width?: Maybe<Scalars["Float"]>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetMediaApartmentArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ApartmentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<ApartmentWhereInput>;
};

/** Asset system model */
export type AssetMediaSectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<SectionWhereInput>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>;
  mediaApartment?: Maybe<ApartmentCreateManyInlineInput>;
  mediaSection?: Maybe<SectionCreateManyInlineInput>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  fileName: Scalars["String"];
  handle: Scalars["String"];
  height?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  mediaApartment_every?: Maybe<ApartmentWhereInput>;
  mediaApartment_none?: Maybe<ApartmentWhereInput>;
  mediaApartment_some?: Maybe<ApartmentWhereInput>;
  mediaSection_every?: Maybe<SectionWhereInput>;
  mediaSection_none?: Maybe<SectionWhereInput>;
  mediaSection_some?: Maybe<SectionWhereInput>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: Maybe<DocumentTransformationInput>;
  image?: Maybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars["Boolean"]>;
};

export type AssetUpdateInput = {
  fileName?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>;
  mediaApartment?: Maybe<ApartmentUpdateManyInlineInput>;
  mediaSection?: Maybe<SectionUpdateManyInlineInput>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  /** Optional updates to localizations */
  localizations?: Maybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  mimeType?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Float"]>;
  width?: Maybe<Scalars["Float"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>;
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
  AND?: Maybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  fileName?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars["String"]>;
  handle?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars["Float"]>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  mediaApartment_every?: Maybe<ApartmentWhereInput>;
  mediaApartment_none?: Maybe<ApartmentWhereInput>;
  mediaApartment_some?: Maybe<ApartmentWhereInput>;
  mediaSection_every?: Maybe<SectionWhereInput>;
  mediaSection_none?: Maybe<SectionWhereInput>;
  mediaSection_some?: Maybe<SectionWhereInput>;
  mimeType?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  size?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars["Float"]>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
  width?: Maybe<Scalars["Float"]>;
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars["Float"]>;
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars["Float"]>;
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars["Float"]>>;
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars["Float"]>;
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars["Float"]>;
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars["Float"]>;
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars["Float"]>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars["String"];
  hex: Scalars["Hex"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars["Hex"]>;
  rgba?: Maybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars["ID"]>;
  /** Connect document before specified document */
  before?: Maybe<Scalars["ID"]>;
  /** Connect document at last position */
  end?: Maybe<Scalars["Boolean"]>;
  /** Connect document at first position */
  start?: Maybe<Scalars["Boolean"]>;
};

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
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
  format?: Maybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  createdAt: Scalars["DateTime"];
  data?: Maybe<Scalars["Json"]>;
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars["Int"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars["Int"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>;
};

export enum Links {
  Home = "home",
  Howto = "howto",
  Todo = "todo",
}

/** Locale system enumeration */
export enum Locale {
  De = "de",
  /** System locale */
  En = "en",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars["Float"];
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"];
  longitude: Scalars["Float"];
};

export type Mutation = {
  /** Create one apartment */
  createApartment?: Maybe<Apartment>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one navigation */
  createNavigation?: Maybe<Navigation>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one section */
  createSection?: Maybe<Section>;
  /** Create one translation */
  createTranslation?: Maybe<Translation>;
  /** Delete one apartment from _all_ existing stages. Returns deleted document. */
  deleteApartment?: Maybe<Apartment>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
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
   * Delete many Navigation documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavigationsConnection)
   */
  deleteManyNavigations: BatchPayload;
  /** Delete many Navigation documents, return deleted documents */
  deleteManyNavigationsConnection: NavigationConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many Section documents
   * @deprecated Please use the new paginated many mutation (deleteManySectionsConnection)
   */
  deleteManySections: BatchPayload;
  /** Delete many Section documents, return deleted documents */
  deleteManySectionsConnection: SectionConnection;
  /**
   * Delete many Translation documents
   * @deprecated Please use the new paginated many mutation (deleteManyTranslationsConnection)
   */
  deleteManyTranslations: BatchPayload;
  /** Delete many Translation documents, return deleted documents */
  deleteManyTranslationsConnection: TranslationConnection;
  /** Delete one navigation from _all_ existing stages. Returns deleted document. */
  deleteNavigation?: Maybe<Navigation>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one section from _all_ existing stages. Returns deleted document. */
  deleteSection?: Maybe<Section>;
  /** Delete one translation from _all_ existing stages. Returns deleted document. */
  deleteTranslation?: Maybe<Translation>;
  /** Publish one apartment */
  publishApartment?: Maybe<Apartment>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
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
   * Publish many Navigation documents
   * @deprecated Please use the new paginated many mutation (publishManyNavigationsConnection)
   */
  publishManyNavigations: BatchPayload;
  /** Publish many Navigation documents */
  publishManyNavigationsConnection: NavigationConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many Section documents
   * @deprecated Please use the new paginated many mutation (publishManySectionsConnection)
   */
  publishManySections: BatchPayload;
  /** Publish many Section documents */
  publishManySectionsConnection: SectionConnection;
  /**
   * Publish many Translation documents
   * @deprecated Please use the new paginated many mutation (publishManyTranslationsConnection)
   */
  publishManyTranslations: BatchPayload;
  /** Publish many Translation documents */
  publishManyTranslationsConnection: TranslationConnection;
  /** Publish one navigation */
  publishNavigation?: Maybe<Navigation>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one section */
  publishSection?: Maybe<Section>;
  /** Publish one translation */
  publishTranslation?: Maybe<Translation>;
  /** Unpublish one apartment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishApartment?: Maybe<Apartment>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
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
   * Unpublish many Navigation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavigationsConnection)
   */
  unpublishManyNavigations: BatchPayload;
  /** Find many Navigation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavigationsConnection: NavigationConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many Section documents
   * @deprecated Please use the new paginated many mutation (unpublishManySectionsConnection)
   */
  unpublishManySections: BatchPayload;
  /** Find many Section documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySectionsConnection: SectionConnection;
  /**
   * Unpublish many Translation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTranslationsConnection)
   */
  unpublishManyTranslations: BatchPayload;
  /** Find many Translation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTranslationsConnection: TranslationConnection;
  /** Unpublish one navigation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavigation?: Maybe<Navigation>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one section from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSection?: Maybe<Section>;
  /** Unpublish one translation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTranslation?: Maybe<Translation>;
  /** Update one apartment */
  updateApartment?: Maybe<Apartment>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
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
   * Update many navigations
   * @deprecated Please use the new paginated many mutation (updateManyNavigationsConnection)
   */
  updateManyNavigations: BatchPayload;
  /** Update many Navigation documents */
  updateManyNavigationsConnection: NavigationConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many sections
   * @deprecated Please use the new paginated many mutation (updateManySectionsConnection)
   */
  updateManySections: BatchPayload;
  /** Update many Section documents */
  updateManySectionsConnection: SectionConnection;
  /**
   * Update many translations
   * @deprecated Please use the new paginated many mutation (updateManyTranslationsConnection)
   */
  updateManyTranslations: BatchPayload;
  /** Update many Translation documents */
  updateManyTranslationsConnection: TranslationConnection;
  /** Update one navigation */
  updateNavigation?: Maybe<Navigation>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one section */
  updateSection?: Maybe<Section>;
  /** Update one translation */
  updateTranslation?: Maybe<Translation>;
  /** Upsert one apartment */
  upsertApartment?: Maybe<Apartment>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one navigation */
  upsertNavigation?: Maybe<Navigation>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one section */
  upsertSection?: Maybe<Section>;
  /** Upsert one translation */
  upsertTranslation?: Maybe<Translation>;
};

export type MutationCreateApartmentArgs = {
  data: ApartmentCreateInput;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateNavigationArgs = {
  data: NavigationCreateInput;
};

export type MutationCreatePageArgs = {
  data: PageCreateInput;
};

export type MutationCreateSectionArgs = {
  data: SectionCreateInput;
};

export type MutationCreateTranslationArgs = {
  data: TranslationCreateInput;
};

export type MutationDeleteApartmentArgs = {
  where: ApartmentWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteManyApartmentsArgs = {
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationDeleteManyApartmentsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationDeleteManyNavigationsArgs = {
  where?: Maybe<NavigationManyWhereInput>;
};

export type MutationDeleteManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<NavigationManyWhereInput>;
};

export type MutationDeleteManyPagesArgs = {
  where?: Maybe<PageManyWhereInput>;
};

export type MutationDeleteManyPagesConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<PageManyWhereInput>;
};

export type MutationDeleteManySectionsArgs = {
  where?: Maybe<SectionManyWhereInput>;
};

export type MutationDeleteManySectionsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<SectionManyWhereInput>;
};

export type MutationDeleteManyTranslationsArgs = {
  where?: Maybe<TranslationManyWhereInput>;
};

export type MutationDeleteManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<TranslationManyWhereInput>;
};

export type MutationDeleteNavigationArgs = {
  where: NavigationWhereUniqueInput;
};

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};

export type MutationDeleteSectionArgs = {
  where: SectionWhereUniqueInput;
};

export type MutationDeleteTranslationArgs = {
  where: TranslationWhereUniqueInput;
};

export type MutationPublishApartmentArgs = {
  to?: Array<Stage>;
  where: ApartmentWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyApartmentsArgs = {
  to?: Array<Stage>;
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationPublishManyApartmentsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  skip?: Maybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: Maybe<AssetManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyNavigationsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: Maybe<NavigationManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  skip?: Maybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: Maybe<NavigationManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyPagesArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  skip?: Maybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: Maybe<PageManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManySectionsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: Maybe<SectionManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManySectionsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  skip?: Maybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: Maybe<SectionManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyTranslationsArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where?: Maybe<TranslationManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Maybe<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  skip?: Maybe<Scalars["Int"]>;
  to?: Array<Stage>;
  where?: Maybe<TranslationManyWhereInput>;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishNavigationArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: NavigationWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishPageArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishSectionArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: SectionWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationPublishTranslationArgs = {
  locales?: Maybe<Array<Locale>>;
  publishBase?: Maybe<Scalars["Boolean"]>;
  to?: Array<Stage>;
  where: TranslationWhereUniqueInput;
  withDefaultLocale?: Maybe<Scalars["Boolean"]>;
};

export type MutationUnpublishApartmentArgs = {
  from?: Array<Stage>;
  where: ApartmentWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishManyApartmentsArgs = {
  from?: Array<Stage>;
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationUnpublishManyApartmentsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Maybe<Stage>;
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyNavigationsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<NavigationManyWhereInput>;
};

export type MutationUnpublishManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<NavigationManyWhereInput>;
};

export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<PageManyWhereInput>;
};

export type MutationUnpublishManyPagesConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<PageManyWhereInput>;
};

export type MutationUnpublishManySectionsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<SectionManyWhereInput>;
};

export type MutationUnpublishManySectionsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<SectionManyWhereInput>;
};

export type MutationUnpublishManyTranslationsArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<TranslationManyWhereInput>;
};

export type MutationUnpublishManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  first?: Maybe<Scalars["Int"]>;
  from?: Array<Stage>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Maybe<Stage>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where?: Maybe<TranslationManyWhereInput>;
};

export type MutationUnpublishNavigationArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where: NavigationWhereUniqueInput;
};

export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where: PageWhereUniqueInput;
};

export type MutationUnpublishSectionArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where: SectionWhereUniqueInput;
};

export type MutationUnpublishTranslationArgs = {
  from?: Array<Stage>;
  locales?: Maybe<Array<Locale>>;
  unpublishBase?: Maybe<Scalars["Boolean"]>;
  where: TranslationWhereUniqueInput;
};

export type MutationUpdateApartmentArgs = {
  data: ApartmentUpdateInput;
  where: ApartmentWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateManyApartmentsArgs = {
  data: ApartmentUpdateManyInput;
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationUpdateManyApartmentsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  data: ApartmentUpdateManyInput;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<ApartmentManyWhereInput>;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  data: AssetUpdateManyInput;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<AssetManyWhereInput>;
};

export type MutationUpdateManyNavigationsArgs = {
  data: NavigationUpdateManyInput;
  where?: Maybe<NavigationManyWhereInput>;
};

export type MutationUpdateManyNavigationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  data: NavigationUpdateManyInput;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<NavigationManyWhereInput>;
};

export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: Maybe<PageManyWhereInput>;
};

export type MutationUpdateManyPagesConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  data: PageUpdateManyInput;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<PageManyWhereInput>;
};

export type MutationUpdateManySectionsArgs = {
  data: SectionUpdateManyInput;
  where?: Maybe<SectionManyWhereInput>;
};

export type MutationUpdateManySectionsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  data: SectionUpdateManyInput;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<SectionManyWhereInput>;
};

export type MutationUpdateManyTranslationsArgs = {
  data: TranslationUpdateManyInput;
  where?: Maybe<TranslationManyWhereInput>;
};

export type MutationUpdateManyTranslationsConnectionArgs = {
  after?: Maybe<Scalars["ID"]>;
  before?: Maybe<Scalars["ID"]>;
  data: TranslationUpdateManyInput;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<TranslationManyWhereInput>;
};

export type MutationUpdateNavigationArgs = {
  data: NavigationUpdateInput;
  where: NavigationWhereUniqueInput;
};

export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};

export type MutationUpdateSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};

export type MutationUpdateTranslationArgs = {
  data: TranslationUpdateInput;
  where: TranslationWhereUniqueInput;
};

export type MutationUpsertApartmentArgs = {
  upsert: ApartmentUpsertInput;
  where: ApartmentWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertNavigationArgs = {
  upsert: NavigationUpsertInput;
  where: NavigationWhereUniqueInput;
};

export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};

export type MutationUpsertSectionArgs = {
  upsert: SectionUpsertInput;
  where: SectionWhereUniqueInput;
};

export type MutationUpsertTranslationArgs = {
  upsert: TranslationUpsertInput;
  where: TranslationWhereUniqueInput;
};

export type Navigation = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Navigation>;
  /** List of Navigation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  link?: Maybe<Links>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Navigation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title: Scalars["String"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type NavigationCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type NavigationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type NavigationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type NavigationHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type NavigationLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type NavigationPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type NavigationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type NavigationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type NavigationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type NavigationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavigationWhereUniqueInput;
};

/** A connection to a list of items. */
export type NavigationConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavigationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NavigationCreateInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  link?: Maybe<Links>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<NavigationCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NavigationCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type NavigationCreateLocalizationInput = {
  /** Localization input */
  data: NavigationCreateLocalizationDataInput;
  locale: Locale;
};

export type NavigationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<NavigationCreateLocalizationInput>>;
};

export type NavigationCreateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Create and connect multiple existing Navigation documents */
  create?: Maybe<Array<NavigationCreateInput>>;
};

export type NavigationCreateOneInlineInput = {
  /** Connect one existing Navigation document */
  connect?: Maybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: Maybe<NavigationCreateInput>;
};

/** An edge in a connection. */
export type NavigationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Navigation;
};

/** Identifies documents */
export type NavigationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  link?: Maybe<Links>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Links>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Links>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Links>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum NavigationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type NavigationUpdateInput = {
  link?: Maybe<Links>;
  /** Manage document localizations */
  localizations?: Maybe<NavigationUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars["String"]>;
};

export type NavigationUpdateLocalizationDataInput = {
  title?: Maybe<Scalars["String"]>;
};

export type NavigationUpdateLocalizationInput = {
  data: NavigationUpdateLocalizationDataInput;
  locale: Locale;
};

export type NavigationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<NavigationCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<NavigationUpdateLocalizationInput>>;
  upsert?: Maybe<Array<NavigationUpsertLocalizationInput>>;
};

export type NavigationUpdateManyInlineInput = {
  /** Connect multiple existing Navigation documents */
  connect?: Maybe<Array<NavigationConnectInput>>;
  /** Create and connect multiple Navigation documents */
  create?: Maybe<Array<NavigationCreateInput>>;
  /** Delete multiple Navigation documents */
  delete?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Disconnect multiple Navigation documents */
  disconnect?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Navigation documents */
  set?: Maybe<Array<NavigationWhereUniqueInput>>;
  /** Update multiple Navigation documents */
  update?: Maybe<Array<NavigationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Navigation documents */
  upsert?: Maybe<Array<NavigationUpsertWithNestedWhereUniqueInput>>;
};

export type NavigationUpdateManyInput = {
  link?: Maybe<Links>;
  /** Optional updates to localizations */
  localizations?: Maybe<NavigationUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars["String"]>;
};

export type NavigationUpdateManyLocalizationDataInput = {
  title?: Maybe<Scalars["String"]>;
};

export type NavigationUpdateManyLocalizationInput = {
  data: NavigationUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NavigationUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<NavigationUpdateManyLocalizationInput>>;
};

export type NavigationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationUpdateManyInput;
  /** Document search */
  where: NavigationWhereInput;
};

export type NavigationUpdateOneInlineInput = {
  /** Connect existing Navigation document */
  connect?: Maybe<NavigationWhereUniqueInput>;
  /** Create and connect one Navigation document */
  create?: Maybe<NavigationCreateInput>;
  /** Delete currently connected Navigation document */
  delete?: Maybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Navigation document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Update single Navigation document */
  update?: Maybe<NavigationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Navigation document */
  upsert?: Maybe<NavigationUpsertWithNestedWhereUniqueInput>;
};

export type NavigationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationUpdateInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

export type NavigationUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationCreateInput;
  /** Update document if it exists */
  update: NavigationUpdateInput;
};

export type NavigationUpsertLocalizationInput = {
  create: NavigationCreateLocalizationDataInput;
  locale: Locale;
  update: NavigationUpdateLocalizationDataInput;
};

export type NavigationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationUpsertInput;
  /** Unique document search */
  where: NavigationWhereUniqueInput;
};

/** Identifies documents */
export type NavigationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<NavigationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<NavigationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<NavigationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  link?: Maybe<Links>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Links>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Links>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Links>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Navigation record uniquely */
export type NavigationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  apartment?: Maybe<Apartment>;
  content?: Maybe<PageContentRichText>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  link: Links;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars["String"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type PageApartmentArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PageCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type PageHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type PageLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PagePublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type PageUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageContentRichText = {
  /** Returns HTMl representation */
  html: Scalars["String"];
  json: Scalars["RichTextAST"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** @deprecated Please use the 'json' field */
  raw: Scalars["RichTextAST"];
  references: Array<PageContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

export type PageContentRichTextEmbeddedTypes = Asset;

export type PageCreateInput = {
  apartment?: Maybe<ApartmentCreateOneInlineInput>;
  /** content input for default locale (en) */
  content?: Maybe<Scalars["RichTextAST"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  link: Links;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<PageCreateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PageCreateLocalizationDataInput = {
  content?: Maybe<Scalars["RichTextAST"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: Maybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  apartment?: Maybe<ApartmentWhereInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  link?: Maybe<Links>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Links>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Links>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Links>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type PageUpdateInput = {
  apartment?: Maybe<ApartmentUpdateOneInlineInput>;
  /** content input for default locale (en) */
  content?: Maybe<Scalars["RichTextAST"]>;
  link?: Maybe<Links>;
  /** Manage document localizations */
  localizations?: Maybe<PageUpdateLocalizationsInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars["String"]>;
};

export type PageUpdateLocalizationDataInput = {
  content?: Maybe<Scalars["RichTextAST"]>;
  title?: Maybe<Scalars["String"]>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateLocalizationInput>>;
  upsert?: Maybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: Maybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: Maybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: Maybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: Maybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: Maybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: Maybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: Maybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** content input for default locale (en) */
  content?: Maybe<Scalars["RichTextAST"]>;
  link?: Maybe<Links>;
  /** Optional updates to localizations */
  localizations?: Maybe<PageUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars["String"]>;
};

export type PageUpdateManyLocalizationDataInput = {
  content?: Maybe<Scalars["RichTextAST"]>;
  title?: Maybe<Scalars["String"]>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: Maybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: Maybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: Maybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Page document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Update single Page document */
  update?: Maybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: Maybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  apartment?: Maybe<ApartmentWhereInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  link?: Maybe<Links>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Links>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Links>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Links>>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
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
  /** Retrieve a single navigation */
  navigation?: Maybe<Navigation>;
  /** Retrieve document version */
  navigationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navigations */
  navigations: Array<Navigation>;
  /** Retrieve multiple navigations using the Relay connection interface */
  navigationsConnection: NavigationConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single section */
  section?: Maybe<Section>;
  /** Retrieve document version */
  sectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple sections */
  sections: Array<Section>;
  /** Retrieve multiple sections using the Relay connection interface */
  sectionsConnection: SectionConnection;
  /** Retrieve a single translation */
  translation?: Maybe<Translation>;
  /** Retrieve document version */
  translationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple translations */
  translations: Array<Translation>;
  /** Retrieve multiple translations using the Relay connection interface */
  translationsConnection: TranslationConnection;
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
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ApartmentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<ApartmentWhereInput>;
};

export type QueryApartmentsConnectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<ApartmentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<ApartmentWhereInput>;
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
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<AssetWhereInput>;
};

export type QueryNavigationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavigationWhereUniqueInput;
};

export type QueryNavigationVersionArgs = {
  where: VersionWhereInput;
};

export type QueryNavigationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NavigationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<NavigationWhereInput>;
};

export type QueryNavigationsConnectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<NavigationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<NavigationWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};

export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};

export type QueryPagesArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};

export type QueryPagesConnectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<PageWhereInput>;
};

export type QuerySectionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SectionWhereUniqueInput;
};

export type QuerySectionVersionArgs = {
  where: VersionWhereInput;
};

export type QuerySectionsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<SectionWhereInput>;
};

export type QuerySectionsConnectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<SectionOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<SectionWhereInput>;
};

export type QueryTranslationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TranslationWhereUniqueInput;
};

export type QueryTranslationVersionArgs = {
  where: VersionWhereInput;
};

export type QueryTranslationsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<TranslationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<TranslationWhereInput>;
};

export type QueryTranslationsConnectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<TranslationOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<TranslationWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Array<Locale>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  stage?: Stage;
  where?: Maybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"];
  b: Scalars["RGBAHue"];
  g: Scalars["RGBAHue"];
  r: Scalars["RGBAHue"];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars["String"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

export type Section = Node & {
  apartments: Array<Apartment>;
  content?: Maybe<SectionContentRichText>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Section>;
  /** List of Section versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  link: Links;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Section>;
  media: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  title: Scalars["String"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type SectionApartmentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ApartmentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<ApartmentWhereInput>;
};

export type SectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type SectionCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SectionDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type SectionHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type SectionLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type SectionMediaArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<AssetOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<AssetWhereInput>;
};

export type SectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type SectionPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type SectionUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type SectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: SectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type SectionConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SectionContentRichText = {
  /** Returns HTMl representation */
  html: Scalars["String"];
  json: Scalars["RichTextAST"];
  /** Returns Markdown representation */
  markdown: Scalars["String"];
  /** @deprecated Please use the 'json' field */
  raw: Scalars["RichTextAST"];
  references: Array<SectionContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars["String"];
};

export type SectionContentRichTextEmbeddedTypes = Asset;

export type SectionCreateInput = {
  apartments?: Maybe<ApartmentCreateManyInlineInput>;
  /** content input for default locale (en) */
  content?: Maybe<Scalars["RichTextAST"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  link: Links;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<SectionCreateLocalizationsInput>;
  media?: Maybe<AssetCreateManyInlineInput>;
  /** title input for default locale (en) */
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SectionCreateLocalizationDataInput = {
  content?: Maybe<Scalars["RichTextAST"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  title: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type SectionCreateLocalizationInput = {
  /** Localization input */
  data: SectionCreateLocalizationDataInput;
  locale: Locale;
};

export type SectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<SectionCreateLocalizationInput>>;
};

export type SectionCreateManyInlineInput = {
  /** Connect multiple existing Section documents */
  connect?: Maybe<Array<SectionWhereUniqueInput>>;
  /** Create and connect multiple existing Section documents */
  create?: Maybe<Array<SectionCreateInput>>;
};

export type SectionCreateOneInlineInput = {
  /** Connect one existing Section document */
  connect?: Maybe<SectionWhereUniqueInput>;
  /** Create and connect one Section document */
  create?: Maybe<SectionCreateInput>;
};

/** An edge in a connection. */
export type SectionEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Section;
};

/** Identifies documents */
export type SectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  apartments_every?: Maybe<ApartmentWhereInput>;
  apartments_none?: Maybe<ApartmentWhereInput>;
  apartments_some?: Maybe<ApartmentWhereInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  link?: Maybe<Links>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Links>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Links>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Links>>;
  media_every?: Maybe<AssetWhereInput>;
  media_none?: Maybe<AssetWhereInput>;
  media_some?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum SectionOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  LinkAsc = "link_ASC",
  LinkDesc = "link_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type SectionUpdateInput = {
  apartments?: Maybe<ApartmentUpdateManyInlineInput>;
  /** content input for default locale (en) */
  content?: Maybe<Scalars["RichTextAST"]>;
  link?: Maybe<Links>;
  /** Manage document localizations */
  localizations?: Maybe<SectionUpdateLocalizationsInput>;
  media?: Maybe<AssetUpdateManyInlineInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars["String"]>;
};

export type SectionUpdateLocalizationDataInput = {
  content?: Maybe<Scalars["RichTextAST"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SectionUpdateLocalizationInput = {
  data: SectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type SectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<SectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<SectionUpdateLocalizationInput>>;
  upsert?: Maybe<Array<SectionUpsertLocalizationInput>>;
};

export type SectionUpdateManyInlineInput = {
  /** Connect multiple existing Section documents */
  connect?: Maybe<Array<SectionConnectInput>>;
  /** Create and connect multiple Section documents */
  create?: Maybe<Array<SectionCreateInput>>;
  /** Delete multiple Section documents */
  delete?: Maybe<Array<SectionWhereUniqueInput>>;
  /** Disconnect multiple Section documents */
  disconnect?: Maybe<Array<SectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Section documents */
  set?: Maybe<Array<SectionWhereUniqueInput>>;
  /** Update multiple Section documents */
  update?: Maybe<Array<SectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Section documents */
  upsert?: Maybe<Array<SectionUpsertWithNestedWhereUniqueInput>>;
};

export type SectionUpdateManyInput = {
  /** content input for default locale (en) */
  content?: Maybe<Scalars["RichTextAST"]>;
  link?: Maybe<Links>;
  /** Optional updates to localizations */
  localizations?: Maybe<SectionUpdateManyLocalizationsInput>;
  /** title input for default locale (en) */
  title?: Maybe<Scalars["String"]>;
};

export type SectionUpdateManyLocalizationDataInput = {
  content?: Maybe<Scalars["RichTextAST"]>;
  title?: Maybe<Scalars["String"]>;
};

export type SectionUpdateManyLocalizationInput = {
  data: SectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<SectionUpdateManyLocalizationInput>>;
};

export type SectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SectionUpdateManyInput;
  /** Document search */
  where: SectionWhereInput;
};

export type SectionUpdateOneInlineInput = {
  /** Connect existing Section document */
  connect?: Maybe<SectionWhereUniqueInput>;
  /** Create and connect one Section document */
  create?: Maybe<SectionCreateInput>;
  /** Delete currently connected Section document */
  delete?: Maybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Section document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Update single Section document */
  update?: Maybe<SectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Section document */
  upsert?: Maybe<SectionUpsertWithNestedWhereUniqueInput>;
};

export type SectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SectionUpdateInput;
  /** Unique document search */
  where: SectionWhereUniqueInput;
};

export type SectionUpsertInput = {
  /** Create document if it didn't exist */
  create: SectionCreateInput;
  /** Update document if it exists */
  update: SectionUpdateInput;
};

export type SectionUpsertLocalizationInput = {
  create: SectionCreateLocalizationDataInput;
  locale: Locale;
  update: SectionUpdateLocalizationDataInput;
};

export type SectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SectionUpsertInput;
  /** Unique document search */
  where: SectionWhereUniqueInput;
};

/** Identifies documents */
export type SectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<SectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<SectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<SectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  apartments_every?: Maybe<ApartmentWhereInput>;
  apartments_none?: Maybe<ApartmentWhereInput>;
  apartments_some?: Maybe<ApartmentWhereInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  link?: Maybe<Links>;
  /** All values that are contained in given list. */
  link_in?: Maybe<Array<Links>>;
  /** All values that are not equal to given value. */
  link_not?: Maybe<Links>;
  /** All values that are not contained in given list. */
  link_not_in?: Maybe<Array<Links>>;
  media_every?: Maybe<AssetWhereInput>;
  media_none?: Maybe<AssetWhereInput>;
  media_some?: Maybe<AssetWhereInput>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  title?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

/** References Section record uniquely */
export type SectionWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type Translation = Node & {
  apartments: Array<Apartment>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Translation>;
  /** List of Translation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"];
  key: Scalars["String"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Translation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars["String"]>;
};

export type TranslationApartmentsArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
  locales?: Maybe<Array<Locale>>;
  orderBy?: Maybe<ApartmentOrderByInput>;
  skip?: Maybe<Scalars["Int"]>;
  where?: Maybe<ApartmentWhereInput>;
};

export type TranslationCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type TranslationCreatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type TranslationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type TranslationHistoryArgs = {
  limit?: Scalars["Int"];
  skip?: Scalars["Int"];
  stageOverride?: Maybe<Stage>;
};

export type TranslationLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"];
  locales?: Array<Locale>;
};

export type TranslationPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type TranslationPublishedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type TranslationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type TranslationUpdatedByArgs = {
  locales?: Maybe<Array<Locale>>;
};

export type TranslationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: TranslationWhereUniqueInput;
};

/** A connection to a list of items. */
export type TranslationConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TranslationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TranslationCreateInput = {
  apartments?: Maybe<ApartmentCreateManyInlineInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  key: Scalars["String"];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<TranslationCreateLocalizationsInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** value input for default locale (en) */
  value?: Maybe<Scalars["String"]>;
};

export type TranslationCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  value?: Maybe<Scalars["String"]>;
};

export type TranslationCreateLocalizationInput = {
  /** Localization input */
  data: TranslationCreateLocalizationDataInput;
  locale: Locale;
};

export type TranslationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<TranslationCreateLocalizationInput>>;
};

export type TranslationCreateManyInlineInput = {
  /** Connect multiple existing Translation documents */
  connect?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Create and connect multiple existing Translation documents */
  create?: Maybe<Array<TranslationCreateInput>>;
};

export type TranslationCreateOneInlineInput = {
  /** Connect one existing Translation document */
  connect?: Maybe<TranslationWhereUniqueInput>;
  /** Create and connect one Translation document */
  create?: Maybe<TranslationCreateInput>;
};

/** An edge in a connection. */
export type TranslationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: Translation;
};

/** Identifies documents */
export type TranslationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TranslationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  apartments_every?: Maybe<ApartmentWhereInput>;
  apartments_none?: Maybe<ApartmentWhereInput>;
  apartments_some?: Maybe<ApartmentWhereInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  key?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  key_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  key_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  key_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  key_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  key_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  key_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  key_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  key_starts_with?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
};

export enum TranslationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  KeyAsc = "key_ASC",
  KeyDesc = "key_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  ValueAsc = "value_ASC",
  ValueDesc = "value_DESC",
}

export type TranslationUpdateInput = {
  apartments?: Maybe<ApartmentUpdateManyInlineInput>;
  key?: Maybe<Scalars["String"]>;
  /** Manage document localizations */
  localizations?: Maybe<TranslationUpdateLocalizationsInput>;
  /** value input for default locale (en) */
  value?: Maybe<Scalars["String"]>;
};

export type TranslationUpdateLocalizationDataInput = {
  value?: Maybe<Scalars["String"]>;
};

export type TranslationUpdateLocalizationInput = {
  data: TranslationUpdateLocalizationDataInput;
  locale: Locale;
};

export type TranslationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<TranslationCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>;
  /** Localizations to update */
  update?: Maybe<Array<TranslationUpdateLocalizationInput>>;
  upsert?: Maybe<Array<TranslationUpsertLocalizationInput>>;
};

export type TranslationUpdateManyInlineInput = {
  /** Connect multiple existing Translation documents */
  connect?: Maybe<Array<TranslationConnectInput>>;
  /** Create and connect multiple Translation documents */
  create?: Maybe<Array<TranslationCreateInput>>;
  /** Delete multiple Translation documents */
  delete?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Disconnect multiple Translation documents */
  disconnect?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Translation documents */
  set?: Maybe<Array<TranslationWhereUniqueInput>>;
  /** Update multiple Translation documents */
  update?: Maybe<Array<TranslationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Translation documents */
  upsert?: Maybe<Array<TranslationUpsertWithNestedWhereUniqueInput>>;
};

export type TranslationUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: Maybe<TranslationUpdateManyLocalizationsInput>;
  /** value input for default locale (en) */
  value?: Maybe<Scalars["String"]>;
};

export type TranslationUpdateManyLocalizationDataInput = {
  value?: Maybe<Scalars["String"]>;
};

export type TranslationUpdateManyLocalizationInput = {
  data: TranslationUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TranslationUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: Maybe<Array<TranslationUpdateManyLocalizationInput>>;
};

export type TranslationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TranslationUpdateManyInput;
  /** Document search */
  where: TranslationWhereInput;
};

export type TranslationUpdateOneInlineInput = {
  /** Connect existing Translation document */
  connect?: Maybe<TranslationWhereUniqueInput>;
  /** Create and connect one Translation document */
  create?: Maybe<TranslationCreateInput>;
  /** Delete currently connected Translation document */
  delete?: Maybe<Scalars["Boolean"]>;
  /** Disconnect currently connected Translation document */
  disconnect?: Maybe<Scalars["Boolean"]>;
  /** Update single Translation document */
  update?: Maybe<TranslationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Translation document */
  upsert?: Maybe<TranslationUpsertWithNestedWhereUniqueInput>;
};

export type TranslationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TranslationUpdateInput;
  /** Unique document search */
  where: TranslationWhereUniqueInput;
};

export type TranslationUpsertInput = {
  /** Create document if it didn't exist */
  create: TranslationCreateInput;
  /** Update document if it exists */
  update: TranslationUpdateInput;
};

export type TranslationUpsertLocalizationInput = {
  create: TranslationCreateLocalizationDataInput;
  locale: Locale;
  update: TranslationUpdateLocalizationDataInput;
};

export type TranslationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TranslationUpsertInput;
  /** Unique document search */
  where: TranslationWhereUniqueInput;
};

/** Identifies documents */
export type TranslationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<TranslationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  apartments_every?: Maybe<ApartmentWhereInput>;
  apartments_none?: Maybe<ApartmentWhereInput>;
  apartments_some?: Maybe<ApartmentWhereInput>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  createdBy?: Maybe<UserWhereInput>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  key?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  key_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  key_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  key_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  key_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  key_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  key_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  key_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  key_starts_with?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  publishedBy?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedBy?: Maybe<UserWhereInput>;
  value?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  value_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  value_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  value_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  value_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  value_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  value_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  value_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  value_starts_with?: Maybe<Scalars["String"]>;
};

/** References Translation record uniquely */
export type TranslationWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
  key?: Maybe<Scalars["String"]>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"];
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars["String"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"];
  inheritLocale?: Scalars["Boolean"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars["Boolean"]>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: Maybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: Maybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: Maybe<Scalars["Boolean"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  id?: Maybe<Scalars["ID"]>;
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars["ID"]>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars["ID"]>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars["ID"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars["ID"]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars["ID"]>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars["ID"]>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars["ID"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  /** All values that are not equal to given value. */
  isActive_not?: Maybe<Scalars["Boolean"]>;
  kind?: Maybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: Maybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: Maybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: Maybe<Array<UserKind>>;
  name?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  name_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  name_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<Scalars["String"]>;
  picture?: Maybe<Scalars["String"]>;
  /** All values containing the given string. */
  picture_contains?: Maybe<Scalars["String"]>;
  /** All values ending with the given string. */
  picture_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are contained in given list. */
  picture_in?: Maybe<Array<Scalars["String"]>>;
  /** All values that are not equal to given value. */
  picture_not?: Maybe<Scalars["String"]>;
  /** All values not containing the given string. */
  picture_not_contains?: Maybe<Scalars["String"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: Maybe<Scalars["String"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: Maybe<Array<Scalars["String"]>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: Maybe<Scalars["String"]>;
  /** All values starting with the given string. */
  picture_starts_with?: Maybe<Scalars["String"]>;
  publishedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars["DateTime"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars["DateTime"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars["DateTime"]>>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars["DateTime"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars["DateTime"]>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars["DateTime"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars["DateTime"]>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: Maybe<Scalars["ID"]>;
};

export type Version = {
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"];
  revision: Scalars["Int"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type HeroQueryVariables = Exact<{ [key: string]: never }>;

export type HeroQuery = {
  apartments: Array<{
    name: string;
    location?: { latitude: number; longitude: number } | null | undefined;
    color?: { css: string } | null | undefined;
  }>;
};

export type ApartmentListQueryVariables = Exact<{ [key: string]: never }>;

export type ApartmentListQuery = { apartments: Array<{ slug: string }> };

export type PageQueryVariables = Exact<{
  pageType: Links;
  locale: Array<Locale> | Locale;
}>;

export type PageQuery = {
  pages: Array<{
    title?: string | null | undefined;
    content?: { html: string } | null | undefined;
  }>;
  sections: Array<{
    title: string;
    content?: { html: string } | null | undefined;
    media: Array<{ url: string }>;
  }>;
  navigations: Array<{ title: string; link?: Links | null | undefined }>;
  apartment?:
    | {
        name: string;
        airbnb?: string | null | undefined;
        location?: { latitude: number; longitude: number } | null | undefined;
        color?: { css: string } | null | undefined;
      }
    | null
    | undefined;
  translations: Array<{
    locale: Locale;
    key: string;
    value?: string | null | undefined;
  }>;
};

export type TranslationsQueryVariables = Exact<{
  locale: Array<Locale> | Locale;
}>;

export type TranslationsQuery = {
  translations: Array<{
    locale: Locale;
    key: string;
    value?: string | null | undefined;
  }>;
};

export type TranslationsFragment = {
  locale: Locale;
  key: string;
  value?: string | null | undefined;
};

export const TranslationsFragmentDoc = gql`
  fragment Translations on Translation {
    locale
    key
    value
  }
` as unknown as DocumentNode<TranslationsFragment, unknown>;
export const HeroDocument = gql`
  query Hero {
    apartments {
      name
      location {
        latitude
        longitude
      }
      color {
        css
      }
    }
  }
` as unknown as DocumentNode<HeroQuery, HeroQueryVariables>;
export const ApartmentListDocument = gql`
  query ApartmentList {
    apartments {
      slug
    }
  }
` as unknown as DocumentNode<ApartmentListQuery, ApartmentListQueryVariables>;
export const PageDocument = gql`
  query Page($pageType: Links!, $locale: [Locale!]!) {
    pages(where: { link: $pageType }) {
      title
      content {
        html
      }
    }
    sections(where: { link: $pageType }) {
      title
      content {
        html
      }
      media {
        url
      }
    }
    navigations {
      title
      link
    }
    apartment(where: { slug: "candor" }) {
      name
      airbnb
      location {
        latitude
        longitude
      }
      color {
        css
      }
    }
    translations(locales: $locale) {
      ...Translations
    }
  }
  ${TranslationsFragmentDoc}
` as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const TranslationsDocument = gql`
  query Translations($locale: [Locale!]!) {
    translations(locales: $locale) {
      ...Translations
    }
  }
  ${TranslationsFragmentDoc}
` as unknown as DocumentNode<TranslationsQuery, TranslationsQueryVariables>;

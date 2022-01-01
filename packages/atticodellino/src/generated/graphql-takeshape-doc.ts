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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Apartment = TsSearchable & {
  __typename?: 'Apartment';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _references?: Maybe<ApartmentReferencePaginatedList>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  airBnb?: Maybe<Scalars['String']>;
  airbnbIcal?: Maybe<Scalars['String']>;
  airbnbLink?: Maybe<Scalars['String']>;
  apartmentSet?: Maybe<ApartmentPaginatedList>;
  bookingIcal?: Maybe<Scalars['String']>;
  brandColor?: Maybe<TsColor>;
  code?: Maybe<Scalars['String']>;
  coverJpg?: Maybe<Asset>;
  coverWebp?: Maybe<Asset>;
  facebookLink?: Maybe<Scalars['String']>;
  faqSet?: Maybe<FaqPaginatedList>;
  key?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  lightColor?: Maybe<TsColor>;
  lighterColor?: Maybe<TsColor>;
  location?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  mapLink?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
  sponsor?: Maybe<Array<Maybe<Apartment>>>;
};


export type Apartment_ReferencesArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereInput>;
};


export type ApartmentApartmentSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereApartmentInput>;
};


export type ApartmentCoverJpgArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ApartmentCoverWebpArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ApartmentFaqSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereFaqInput>;
};


export type ApartmentSponsorArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ApartmentPaginatedList = {
  __typename?: 'ApartmentPaginatedList';
  items: Array<Apartment>;
  total: Scalars['Int'];
};

export type ApartmentReference = Apartment | Faq;

export type ApartmentReferencePaginatedList = {
  __typename?: 'ApartmentReferencePaginatedList';
  items?: Maybe<Array<Maybe<ApartmentReference>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Apartment search results */
export type ApartmentSearchResults = {
  __typename?: 'ApartmentSearchResults';
  results: Array<Apartment>;
  total: Scalars['Int'];
};

export type Article = TsSearchable & {
  __typename?: 'Article';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['JSON']>;
  contentHtml?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  relationship?: Maybe<Language>;
  searchSummary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type ArticleContentHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type ArticleRelationshipArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ArticlePaginatedList = {
  __typename?: 'ArticlePaginatedList';
  items: Array<Article>;
  total: Scalars['Int'];
};

/** Article search results */
export type ArticleSearchResults = {
  __typename?: 'ArticleSearchResults';
  results: Array<Article>;
  total: Scalars['Int'];
};

export type Asset = TsSearchable & {
  __typename?: 'Asset';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _references?: Maybe<AssetReferencePaginatedList>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  apartmentSet?: Maybe<ApartmentPaginatedList>;
  caption?: Maybe<Scalars['JSON']>;
  captionHtml?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  creditHtml?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  faqSet?: Maybe<FaqPaginatedList>;
  filename: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  /** @deprecated Use path instead */
  s3Key?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
};


export type Asset_ReferencesArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereInput>;
};


export type AssetApartmentSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereApartmentInput>;
};


export type AssetCaptionHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type AssetCreditHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type AssetFaqSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereFaqInput>;
};

export type AssetPaginatedList = {
  __typename?: 'AssetPaginatedList';
  items: Array<Asset>;
  total: Scalars['Int'];
};

export type AssetReference = Apartment | Faq;

export type AssetReferencePaginatedList = {
  __typename?: 'AssetReferencePaginatedList';
  items?: Maybe<Array<Maybe<AssetReference>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Asset search results */
export type AssetSearchResults = {
  __typename?: 'AssetSearchResults';
  results: Array<Asset>;
  total: Scalars['Int'];
};

export type BaseAsset = TsSearchable & {
  __typename?: 'BaseAsset';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['JSON']>;
  captionHtml?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  creditHtml?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  searchSummary?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
};


export type BaseAssetCaptionHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type BaseAssetCreditHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};

/** Describes a structural update to an array of data. */
export type ContentStructureInput = {
  /** A deep path to the array being updated (e.g. a.b[1].c). */
  path: Scalars['String'];
  /** An array where the indices represent the to index, and the values represent the from index.For example to transform ["a","b","c","d"] into ["c","a"], this value would be [2,0]. */
  structure?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

/** create Apartment input */
export type CreateApartmentInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  airBnb?: InputMaybe<Scalars['String']>;
  airbnbIcal?: InputMaybe<Scalars['String']>;
  airbnbLink?: InputMaybe<Scalars['String']>;
  bookingIcal?: InputMaybe<Scalars['String']>;
  brandColor?: InputMaybe<TsColorInput>;
  code?: InputMaybe<Scalars['String']>;
  coverJpg?: InputMaybe<TsRelationshipInput>;
  coverWebp?: InputMaybe<TsRelationshipInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  lightColor?: InputMaybe<TsColorInput>;
  lighterColor?: InputMaybe<TsColorInput>;
  location?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  mapLink?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sponsor?: InputMaybe<Array<InputMaybe<TsRelationshipInput>>>;
};

export type CreateApartmentResult = {
  __typename?: 'CreateApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Apartment>;
};

/** create Article input */
export type CreateArticleInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Scalars['String']>;
  relationship: TsRelationshipInput;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateArticleResult = {
  __typename?: 'CreateArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Article>;
};

/** create Asset input */
export type CreateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  filename: Scalars['String'];
  mimeType?: InputMaybe<Scalars['String']>;
  path: Scalars['String'];
  s3Key?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
};

export type CreateAssetResult = {
  __typename?: 'CreateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** create Faq input */
export type CreateFaqInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  answer: Scalars['JSON'];
  apartment: TsRelationshipInput;
  asset?: InputMaybe<TsRelationshipInput>;
  language: TsRelationshipInput;
  linkVideo?: InputMaybe<Scalars['String']>;
  question: Scalars['String'];
};

export type CreateFaqResult = {
  __typename?: 'CreateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

/** create Language input */
export type CreateLanguageInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
};

export type CreateLanguageResult = {
  __typename?: 'CreateLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Language>;
};

/** create Registrations input */
export type CreateRegistrationsInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  apartmentKey: Scalars['String'];
  email: Scalars['String'];
  guests?: InputMaybe<Array<InputMaybe<RegistrationsGuestsInput>>>;
  registrationStatus?: InputMaybe<Scalars['String']>;
};

export type CreateRegistrationsResult = {
  __typename?: 'CreateRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Registrations>;
};

/** create TsStaticSite input */
export type CreateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  destination: Scalars['String'];
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  idKey?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  provider?: Scalars['String'];
  secretKey?: InputMaybe<Scalars['String']>;
  templateHash?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type CreateTsStaticSiteResult = {
  __typename?: 'CreateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

export enum DefaultWorkflow {
  Disabled = 'disabled',
  Enabled = 'enabled'
}

/** delete Apartment input */
export type DeleteApartmentInput = {
  _id: Scalars['ID'];
};

export type DeleteApartmentResult = {
  __typename?: 'DeleteApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Article input */
export type DeleteArticleInput = {
  _id: Scalars['ID'];
};

export type DeleteArticleResult = {
  __typename?: 'DeleteArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Asset input */
export type DeleteAssetInput = {
  _id: Scalars['ID'];
};

export type DeleteAssetResult = {
  __typename?: 'DeleteAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Faq input */
export type DeleteFaqInput = {
  _id: Scalars['ID'];
};

export type DeleteFaqResult = {
  __typename?: 'DeleteFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Language input */
export type DeleteLanguageInput = {
  _id: Scalars['ID'];
};

export type DeleteLanguageResult = {
  __typename?: 'DeleteLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Registrations input */
export type DeleteRegistrationsInput = {
  _id: Scalars['ID'];
};

export type DeleteRegistrationsResult = {
  __typename?: 'DeleteRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete TsStaticSite input */
export type DeleteTsStaticSiteInput = {
  _id: Scalars['ID'];
};

export type DeleteTsStaticSiteResult = {
  __typename?: 'DeleteTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** duplicate Apartment input */
export type DuplicateApartmentInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  airBnb?: InputMaybe<Scalars['String']>;
  airbnbIcal?: InputMaybe<Scalars['String']>;
  airbnbLink?: InputMaybe<Scalars['String']>;
  bookingIcal?: InputMaybe<Scalars['String']>;
  brandColor?: InputMaybe<TsColorInput>;
  code?: InputMaybe<Scalars['String']>;
  coverJpg?: InputMaybe<TsRelationshipInput>;
  coverWebp?: InputMaybe<TsRelationshipInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  lightColor?: InputMaybe<TsColorInput>;
  lighterColor?: InputMaybe<TsColorInput>;
  location?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  mapLink?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sponsor?: InputMaybe<Array<InputMaybe<TsRelationshipInput>>>;
};

export type DuplicateApartmentResult = {
  __typename?: 'DuplicateApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Apartment>;
};

/** duplicate Article input */
export type DuplicateArticleInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<TsRelationshipInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type DuplicateArticleResult = {
  __typename?: 'DuplicateArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Article>;
};

/** duplicate Asset input */
export type DuplicateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  s3Key?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
};

export type DuplicateAssetResult = {
  __typename?: 'DuplicateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** duplicate Faq input */
export type DuplicateFaqInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  answer?: InputMaybe<Scalars['JSON']>;
  apartment?: InputMaybe<TsRelationshipInput>;
  asset?: InputMaybe<TsRelationshipInput>;
  language?: InputMaybe<TsRelationshipInput>;
  linkVideo?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

export type DuplicateFaqResult = {
  __typename?: 'DuplicateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

/** duplicate Language input */
export type DuplicateLanguageInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
};

export type DuplicateLanguageResult = {
  __typename?: 'DuplicateLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Language>;
};

/** duplicate Registrations input */
export type DuplicateRegistrationsInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  apartmentKey?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  guests?: InputMaybe<Array<InputMaybe<RegistrationsGuestsInput>>>;
  registrationStatus?: InputMaybe<Scalars['String']>;
};

export type DuplicateRegistrationsResult = {
  __typename?: 'DuplicateRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Registrations>;
};

/** duplicate TsStaticSite input */
export type DuplicateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  idKey?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  templateHash?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type DuplicateTsStaticSiteResult = {
  __typename?: 'DuplicateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

export type Faq = TsSearchable & {
  __typename?: 'Faq';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  answer: Scalars['JSON'];
  answerHtml?: Maybe<Scalars['String']>;
  apartment?: Maybe<Apartment>;
  asset?: Maybe<Asset>;
  language?: Maybe<Language>;
  linkVideo?: Maybe<Scalars['String']>;
  question: Scalars['String'];
  searchSummary?: Maybe<Scalars['String']>;
};


export type FaqAnswerHtmlArgs = {
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
};


export type FaqApartmentArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FaqAssetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FaqLanguageArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FaqPaginatedList = {
  __typename?: 'FaqPaginatedList';
  items: Array<Faq>;
  total: Scalars['Int'];
};

/** Faq search results */
export type FaqSearchResults = {
  __typename?: 'FaqSearchResults';
  results: Array<Faq>;
  total: Scalars['Int'];
};

export type HttpHeader = {
  __typename?: 'HttpHeader';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type HttpHeaderInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type Language = TsSearchable & {
  __typename?: 'Language';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _references?: Maybe<LanguageReferencePaginatedList>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  articleSet?: Maybe<ArticlePaginatedList>;
  code?: Maybe<Scalars['String']>;
  faqSet?: Maybe<FaqPaginatedList>;
  searchSummary?: Maybe<Scalars['String']>;
};


export type Language_ReferencesArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereInput>;
};


export type LanguageArticleSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereArticleInput>;
};


export type LanguageFaqSetArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereFaqInput>;
};

export type LanguagePaginatedList = {
  __typename?: 'LanguagePaginatedList';
  items: Array<Language>;
  total: Scalars['Int'];
};

export type LanguageReference = Article | Faq;

export type LanguageReferencePaginatedList = {
  __typename?: 'LanguageReferencePaginatedList';
  items?: Maybe<Array<Maybe<LanguageReference>>>;
  total?: Maybe<Scalars['Int']>;
};

/** Language search results */
export type LanguageSearchResults = {
  __typename?: 'LanguageSearchResults';
  results: Array<Language>;
  total: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Apartment */
  createApartment?: Maybe<CreateApartmentResult>;
  /** Create Article */
  createArticle?: Maybe<CreateArticleResult>;
  /** Create Asset */
  createAsset?: Maybe<CreateAssetResult>;
  /** Create Faq */
  createFaq?: Maybe<CreateFaqResult>;
  /** Create Language */
  createLanguage?: Maybe<CreateLanguageResult>;
  /** Create Registrations */
  createRegistrations?: Maybe<CreateRegistrationsResult>;
  /** Create TsStaticSite */
  createTsStaticSite?: Maybe<CreateTsStaticSiteResult>;
  /** Delete Apartment */
  deleteApartment?: Maybe<DeleteApartmentResult>;
  /** Delete Article */
  deleteArticle?: Maybe<DeleteArticleResult>;
  /** Delete Asset */
  deleteAsset?: Maybe<DeleteAssetResult>;
  /** Delete Faq */
  deleteFaq?: Maybe<DeleteFaqResult>;
  /** Delete Language */
  deleteLanguage?: Maybe<DeleteLanguageResult>;
  /** Delete Registrations */
  deleteRegistrations?: Maybe<DeleteRegistrationsResult>;
  /** Delete TsStaticSite */
  deleteTsStaticSite?: Maybe<DeleteTsStaticSiteResult>;
  /** Duplicate Apartment */
  duplicateApartment?: Maybe<DuplicateApartmentResult>;
  /** Duplicate Article */
  duplicateArticle?: Maybe<DuplicateArticleResult>;
  /** Duplicate Asset */
  duplicateAsset?: Maybe<DuplicateAssetResult>;
  /** Duplicate Faq */
  duplicateFaq?: Maybe<DuplicateFaqResult>;
  /** Duplicate Language */
  duplicateLanguage?: Maybe<DuplicateLanguageResult>;
  /** Duplicate Registrations */
  duplicateRegistrations?: Maybe<DuplicateRegistrationsResult>;
  /** Duplicate TsStaticSite */
  duplicateTsStaticSite?: Maybe<DuplicateTsStaticSiteResult>;
  /** Replace an asset file */
  replaceAsset?: Maybe<Upload>;
  /** Add Locale to Project */
  tsAddLocale?: Maybe<Scalars['JSONObject']>;
  /** Create Workflow */
  tsAddWorkflow?: Maybe<TsSaveWorkflowResponse>;
  /** Bootstrap Shopify Product data */
  tsBootstrapShopify?: Maybe<TsBootstrapResult>;
  /** Remove a Lock */
  tsBreakLock?: Maybe<Scalars['Boolean']>;
  /** Cancel Project Invite */
  tsCancelProjectInvite?: Maybe<TsInvite>;
  /** Cancel scheduled content status update */
  tsCancelStatusUpdate?: Maybe<Scalars['Boolean']>;
  /** Register a setup step as completed */
  tsCompleteSetupStep?: Maybe<Scalars['Boolean']>;
  /** Create an API Key */
  tsCreateApiKey?: Maybe<TsApiKey>;
  /** Create a Lock */
  tsCreateLock?: Maybe<TsLock>;
  /** Create an API Key */
  tsCreatePersonalAccessToken?: Maybe<TsPersonalAccessToken>;
  /** Create Project */
  tsCreateProject?: Maybe<TsProjectListItem>;
  /** Create role */
  tsCreateRole?: Maybe<TsRole>;
  /** Delete an API Key */
  tsDeleteApiKey?: Maybe<Scalars['Boolean']>;
  /** Delete an API Key */
  tsDeletePersonalAccessToken?: Maybe<Scalars['Boolean']>;
  /** Deactivate project */
  tsDeleteProject?: Maybe<Scalars['Boolean']>;
  /** Delete role */
  tsDeleteRole?: Maybe<Scalars['Boolean']>;
  /** Delete Workflow */
  tsDeleteWorkflow?: Maybe<TsRemoveWorkflowResponse>;
  /** Exports your project to a ZIP file, which you can then download */
  tsExportProject?: Maybe<Scalars['String']>;
  /** Extend a lock Project */
  tsExtendLock?: Maybe<TsLock>;
  /** Imports a project from a specified URI. */
  tsImportProject?: Maybe<Scalars['String']>;
  /** Remove Locale from Project */
  tsRemoveLocale?: Maybe<Scalars['JSONObject']>;
  /** Remove a Lock */
  tsRemoveLock?: Maybe<Scalars['Boolean']>;
  /** Remove Project Member */
  tsRemoveProjectMember?: Maybe<TsPermissions>;
  /** Remove a service from the current project schema */
  tsRemoveService?: Maybe<Scalars['JSONObject']>;
  /** Set the specified version as the current schema version. */
  tsRestoreSchemaVersion?: Maybe<SchemaVersionsRestorationResult>;
  /** Save service information */
  tsSaveService?: Maybe<Scalars['String']>;
  /** Schedule content status update */
  tsScheduleStatusUpdate?: Maybe<TsStatusUpdate>;
  /** Trigger health check for the specified service */
  tsTriggerHealthCheck?: Maybe<Scalars['Boolean']>;
  /** Update Default Locale for Project */
  tsUpdateDefaultLocale?: Maybe<Scalars['JSONObject']>;
  /** Update a token for a integration provider */
  tsUpdateIntegrationToken?: Maybe<TsIntegrationToken>;
  /** Update Invite Role */
  tsUpdateInviteRole?: Maybe<TsInvite>;
  /** Update Project */
  tsUpdateProject?: Maybe<TsProject>;
  /** Update Project Billing */
  tsUpdateProjectBilling?: Maybe<TsBilling>;
  /** Update Project Permissions */
  tsUpdateProjectPermissions?: Maybe<TsPermissions>;
  /** Update role */
  tsUpdateRole?: Maybe<TsRole>;
  /** Update the current project schema */
  tsUpdateSchema?: Maybe<Scalars['JSONObject']>;
  /** Update webhooks */
  tsUpdateWebhooks?: Maybe<TsWebhooks>;
  /** Update Workflow */
  tsUpdateWorkflow?: Maybe<TsSaveWorkflowResponse>;
  /** Get a URI to upload a project for import. */
  tsUploadProject?: Maybe<UploadProjectResult>;
  /** Update Apartment */
  updateApartment?: Maybe<UpdateApartmentResult>;
  /** Update Article */
  updateArticle?: Maybe<UpdateArticleResult>;
  /** Update Asset */
  updateAsset?: Maybe<UpdateAssetResult>;
  /** Update Faq */
  updateFaq?: Maybe<UpdateFaqResult>;
  /** Update Language */
  updateLanguage?: Maybe<UpdateLanguageResult>;
  /** Update Registrations */
  updateRegistrations?: Maybe<UpdateRegistrationsResult>;
  /** Update TsStaticSite */
  updateTsStaticSite?: Maybe<UpdateTsStaticSiteResult>;
  /** Initiate upload process for asset(s) */
  uploadAssets?: Maybe<Array<Maybe<Upload>>>;
};


export type MutationCreateApartmentArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateApartmentInput;
};


export type MutationCreateArticleArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateArticleInput;
};


export type MutationCreateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateAssetInput;
};


export type MutationCreateFaqArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateFaqInput;
};


export type MutationCreateLanguageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateLanguageInput;
};


export type MutationCreateRegistrationsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateRegistrationsInput;
};


export type MutationCreateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: CreateTsStaticSiteInput;
};


export type MutationDeleteApartmentArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteApartmentInput;
};


export type MutationDeleteArticleArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteArticleInput;
};


export type MutationDeleteAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteAssetInput;
};


export type MutationDeleteFaqArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteFaqInput;
};


export type MutationDeleteLanguageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteLanguageInput;
};


export type MutationDeleteRegistrationsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteRegistrationsInput;
};


export type MutationDeleteTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  input: DeleteTsStaticSiteInput;
};


export type MutationDuplicateApartmentArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateApartmentInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateArticleArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateArticleInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateAssetInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateFaqArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateFaqInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateLanguageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateLanguageInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateRegistrationsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateRegistrationsInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: DuplicateTsStaticSiteInput;
  locale?: InputMaybe<Scalars['String']>;
};


export type MutationReplaceAssetArgs = {
  _id: Scalars['ID'];
  _version: Scalars['Int'];
  file: TsFile;
  projectId?: InputMaybe<Scalars['ID']>;
};


export type MutationTsAddLocaleArgs = {
  locale: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationTsAddWorkflowArgs = {
  input: TsSaveWorkflowInput;
};


export type MutationTsBootstrapShopifyArgs = {
  idFieldName: Scalars['String'];
  serviceId: Scalars['ID'];
  serviceObjectType: ShopifyObjectType;
  shapeName: Scalars['String'];
};


export type MutationTsBreakLockArgs = {
  id?: InputMaybe<Scalars['ID']>;
  shapeId?: InputMaybe<Scalars['ID']>;
};


export type MutationTsCancelProjectInviteArgs = {
  email: Scalars['String'];
};


export type MutationTsCancelStatusUpdateArgs = {
  input: TsCancelStatusUpdateInput;
};


export type MutationTsCompleteSetupStepArgs = {
  stepKey: Scalars['String'];
};


export type MutationTsCreateApiKeyArgs = {
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};


export type MutationTsCreateLockArgs = {
  id?: InputMaybe<Scalars['ID']>;
  shapeId?: InputMaybe<Scalars['ID']>;
};


export type MutationTsCreatePersonalAccessTokenArgs = {
  name: Scalars['String'];
};


export type MutationTsCreateProjectArgs = {
  defaultTimezone: Scalars['String'];
  name: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};


export type MutationTsCreateRoleArgs = {
  input: TsRoleInput;
};


export type MutationTsDeleteApiKeyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationTsDeletePersonalAccessTokenArgs = {
  id: Scalars['ID'];
};


export type MutationTsDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type MutationTsDeleteRoleArgs = {
  name: Scalars['String'];
};


export type MutationTsDeleteWorkflowArgs = {
  input?: InputMaybe<TsDeleteWorkflowInput>;
};


export type MutationTsExportProjectArgs = {
  empty?: InputMaybe<Scalars['Boolean']>;
  origin?: InputMaybe<Scalars['String']>;
};


export type MutationTsExtendLockArgs = {
  id?: InputMaybe<Scalars['ID']>;
  shapeId?: InputMaybe<Scalars['ID']>;
};


export type MutationTsImportProjectArgs = {
  name?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  uri: Scalars['String'];
};


export type MutationTsRemoveLocaleArgs = {
  locale: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationTsRemoveLockArgs = {
  id?: InputMaybe<Scalars['ID']>;
  shapeId?: InputMaybe<Scalars['ID']>;
};


export type MutationTsRemoveProjectMemberArgs = {
  userId?: InputMaybe<Scalars['ID']>;
};


export type MutationTsRemoveServiceArgs = {
  serviceId: Scalars['String'];
};


export type MutationTsRestoreSchemaVersionArgs = {
  version: Scalars['Int'];
};


export type MutationTsSaveServiceArgs = {
  input: TsSaveServiceInput;
};


export type MutationTsScheduleStatusUpdateArgs = {
  input: TsScheduleStatusUpdateInput;
};


export type MutationTsTriggerHealthCheckArgs = {
  serviceId: Scalars['String'];
};


export type MutationTsUpdateDefaultLocaleArgs = {
  defaultLocale: Scalars['String'];
  version: Scalars['Int'];
};


export type MutationTsUpdateIntegrationTokenArgs = {
  provider: Scalars['String'];
  token?: InputMaybe<Scalars['String']>;
};


export type MutationTsUpdateInviteRoleArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
};


export type MutationTsUpdateProjectArgs = {
  avatarId?: InputMaybe<Scalars['ID']>;
  defaultTimezone?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationTsUpdateProjectBillingArgs = {
  coupon?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  planId?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationTsUpdateProjectPermissionsArgs = {
  role: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type MutationTsUpdateRoleArgs = {
  input: TsRoleInput;
};


export type MutationTsUpdateSchemaArgs = {
  input: TsUpdateSchemaInput;
};


export type MutationTsUpdateWebhooksArgs = {
  input: TsWebhooksInput;
};


export type MutationTsUpdateWorkflowArgs = {
  input: TsUpdateWorkflowInput;
};


export type MutationTsUploadProjectArgs = {
  name?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  projectId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApartmentArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateApartmentInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateArticleArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateArticleInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateAssetArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateAssetInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateFaqArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateFaqInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateLanguageArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateLanguageInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateRegistrationsArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateRegistrationsInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUpdateTsStaticSiteArgs = {
  clientMutationId?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  input: UpdateTsStaticSiteInput;
  locale?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
};


export type MutationUploadAssetsArgs = {
  files: Array<InputMaybe<TsFile>>;
  projectId?: InputMaybe<Scalars['ID']>;
};

/** Root of the Schema */
export type Query = {
  __typename?: 'Query';
  /** Get a Apartment by ID */
  getApartment?: Maybe<Apartment>;
  /** Returns a list Apartment in natural order. */
  getApartmentList?: Maybe<ApartmentPaginatedList>;
  /** Get a Article by ID */
  getArticle?: Maybe<Article>;
  /** Returns a list Article in natural order. */
  getArticleList?: Maybe<ArticlePaginatedList>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Faq by ID */
  getFaq?: Maybe<Faq>;
  /** Returns a list Faq in natural order. */
  getFaqList?: Maybe<FaqPaginatedList>;
  /** Get a Language by ID */
  getLanguage?: Maybe<Language>;
  /** Returns a list Language in natural order. */
  getLanguageList?: Maybe<LanguagePaginatedList>;
  /** Get a Registrations by ID */
  getRegistrations?: Maybe<Registrations>;
  /** Returns a list Registrations in natural order. */
  getRegistrationsList?: Maybe<RegistrationsPaginatedList>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  search?: Maybe<TsSearchableSearchResults>;
  searchApartmentIndex?: Maybe<ApartmentSearchResults>;
  searchArticleIndex?: Maybe<ArticleSearchResults>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchFaqIndex?: Maybe<FaqSearchResults>;
  searchLanguageIndex?: Maybe<LanguageSearchResults>;
  searchRegistrationsIndex?: Maybe<RegistrationsSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  /** Activity Log */
  tsGetActivityLog?: Maybe<Array<Maybe<TsActivityLogItem>>>;
  /** Get an API key by key and project */
  tsGetApiKey?: Maybe<TsApiKey>;
  /** Get all API Keys for a Project */
  tsGetApiKeysByProject?: Maybe<Array<Maybe<TsApiKey>>>;
  /** Get all available Shapes, Queries, and Mutations for connected Services */
  tsGetAvailableSchema?: Maybe<Scalars['JSONObject']>;
  /** Get the status of a site deploy */
  tsGetContentUsage?: Maybe<Array<Maybe<TsContentUsage>>>;
  /** Get the current health summary for all services */
  tsGetHealthSummary?: Maybe<Array<Maybe<TsHealthCheckListItem>>>;
  /** Most Recent Static Site Deploys */
  tsGetLatestSiteDeploys?: Maybe<Array<Maybe<TsActivityLogItem>>>;
  /** Get Locales for Project */
  tsGetLocales?: Maybe<TsLocales>;
  /** List of Patterns available for import. */
  tsGetPatternList?: Maybe<Array<Maybe<TsPattern>>>;
  /** List all payments for a project */
  tsGetPaymentList?: Maybe<TsBillingPaymentCursorPaginatedList>;
  /** Get an API key by key and project */
  tsGetPersonalAccessToken?: Maybe<TsPersonalAccessToken>;
  /** Get all personal access tokens for the current user */
  tsGetPersonalAccessTokenList?: Maybe<Array<Maybe<TsPersonalAccessToken>>>;
  /** List of Project Plans */
  tsGetPlanList?: Maybe<Array<Maybe<TsBillingPlan>>>;
  /** List potential preview paths */
  tsGetPreviewPathList?: Maybe<Array<Maybe<TsContentTypePreviewPaths>>>;
  /** Get a Project by id */
  tsGetProject?: Maybe<TsProject>;
  /** List of Project Members */
  tsGetProjectAdmins?: Maybe<Array<Maybe<TsUser>>>;
  /** Retrieve a project export. If the export is completed, you'll be provided with a path to it. */
  tsGetProjectExport?: Maybe<TsProjectExport>;
  /** Retrieve a project import. */
  tsGetProjectImport?: Maybe<TsProjectImport>;
  /** List of Projects */
  tsGetProjectList?: Maybe<Array<Maybe<TsProjectListItem>>>;
  /** List of Project Members */
  tsGetProjectMembers?: Maybe<Array<Maybe<TsUser>>>;
  /** List of active Project Members and the content they have open */
  tsGetProjectMembersLocationList?: Maybe<Array<Maybe<TsMemberLocation>>>;
  /** Get user/API role */
  tsGetRole?: Maybe<TsRole>;
  /** List user/API roles for the current project */
  tsGetRoleList?: Maybe<TsRolePaginatedList>;
  /** Get the full Schema by version */
  tsGetSchemaVersion?: Maybe<TsSchemaVersionResponse>;
  /** List the schema Versions */
  tsGetSchemaVersionList?: Maybe<TsSchemaVersionsPaginatedList>;
  /** Get all available Shapes, Queries, and Mutations for a single Service */
  tsGetServiceSchema?: Maybe<Scalars['JSONObject']>;
  /** Get static site preview token */
  tsGetSitePreviewToken?: Maybe<Scalars['String']>;
  /** Get upcoming scheduled content status updates */
  tsGetStatusUpdateList?: Maybe<TsStatusUpdateList>;
  tsGetUsage?: Maybe<TsUsageType>;
  /** Get webhook history items for a webhookUrl. Filter for a window of invocationTime with the from and to arguments. */
  tsGetWebhookHistory?: Maybe<Array<Maybe<TsWebhookHistory>>>;
  /** Get specific webhook history item by webhookUrl and invocationTime. */
  tsGetWebhookHistoryItem?: Maybe<TsWebhookHistory>;
  /** Get all webhooks */
  tsGetWebhooks?: Maybe<TsWebhooks>;
  /** Get a Lock by id */
  tsIsLocked?: Maybe<TsLock>;
  /** Get the status of a site deploy */
  tsSiteDeployStatus?: Maybe<TsSite>;
  withContext?: Maybe<WithContext>;
};


/** Root of the Schema */
export type QueryGetApartmentArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetApartmentListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereApartmentInput>;
};


/** Root of the Schema */
export type QueryGetArticleArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetArticleListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereArticleInput>;
};


/** Root of the Schema */
export type QueryGetAssetArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetAssetListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type QueryGetContentVersionArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  version: Scalars['Int'];
};


/** Root of the Schema */
export type QueryGetContentVersionListArgs = {
  from?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  size?: InputMaybe<Scalars['Int']>;
};


/** Root of the Schema */
export type QueryGetFaqArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetFaqListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereFaqInput>;
};


/** Root of the Schema */
export type QueryGetLanguageArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetLanguageListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereLanguageInput>;
};


/** Root of the Schema */
export type QueryGetRegistrationsArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetRegistrationsListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereRegistrationsInput>;
};


/** Root of the Schema */
export type QueryGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetTsStaticSiteListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type QuerySearchArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereInput>;
};


/** Root of the Schema */
export type QuerySearchApartmentIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereApartmentInput>;
};


/** Root of the Schema */
export type QuerySearchArticleIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereArticleInput>;
};


/** Root of the Schema */
export type QuerySearchAssetIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type QuerySearchFaqIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereFaqInput>;
};


/** Root of the Schema */
export type QuerySearchLanguageIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereLanguageInput>;
};


/** Root of the Schema */
export type QuerySearchRegistrationsIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereRegistrationsInput>;
};


/** Root of the Schema */
export type QuerySearchTsStaticSiteIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type QueryTaxonomySuggestArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryTsGetActivityLogArgs = {
  filters?: InputMaybe<Scalars['JSON']>;
};


/** Root of the Schema */
export type QueryTsGetApiKeyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Root of the Schema */
export type QueryTsGetContentUsageArgs = {
  id: Scalars['ID'];
};


/** Root of the Schema */
export type QueryTsGetPaymentListArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
};


/** Root of the Schema */
export type QueryTsGetPersonalAccessTokenArgs = {
  id: Scalars['ID'];
};


/** Root of the Schema */
export type QueryTsGetProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Root of the Schema */
export type QueryTsGetProjectExportArgs = {
  id: Scalars['String'];
};


/** Root of the Schema */
export type QueryTsGetProjectImportArgs = {
  id: Scalars['String'];
};


/** Root of the Schema */
export type QueryTsGetProjectMembersArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/** Root of the Schema */
export type QueryTsGetRoleArgs = {
  name: Scalars['String'];
};


/** Root of the Schema */
export type QueryTsGetSchemaVersionArgs = {
  includeDefaults?: InputMaybe<Scalars['Boolean']>;
  version: Scalars['Int'];
};


/** Root of the Schema */
export type QueryTsGetSchemaVersionListArgs = {
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


/** Root of the Schema */
export type QueryTsGetServiceSchemaArgs = {
  serviceId: Scalars['String'];
};


/** Root of the Schema */
export type QueryTsGetSitePreviewTokenArgs = {
  siteId: Scalars['String'];
};


/** Root of the Schema */
export type QueryTsGetStatusUpdateListArgs = {
  contentId: Scalars['String'];
  contentTypeName?: InputMaybe<Scalars['String']>;
  shapeName?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryTsGetWebhookHistoryArgs = {
  from?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  webhookUrl: Scalars['String'];
};


/** Root of the Schema */
export type QueryTsGetWebhookHistoryItemArgs = {
  invocationTime?: InputMaybe<Scalars['String']>;
  webhookUrl: Scalars['String'];
};


/** Root of the Schema */
export type QueryTsIsLockedArgs = {
  contentTypeId?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** Root of the Schema */
export type QueryTsSiteDeployStatusArgs = {
  siteId?: InputMaybe<Scalars['ID']>;
};


/** Root of the Schema */
export type QueryWithContextArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Registrations = TsSearchable & {
  __typename?: 'Registrations';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  apartmentKey: Scalars['String'];
  email: Scalars['String'];
  guests?: Maybe<Array<Maybe<RegistrationsGuests>>>;
  registrationStatus?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type RegistrationsGuests = {
  __typename?: 'RegistrationsGuests';
  birthDate: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
};

export type RegistrationsGuestsInput = {
  birthDate: Scalars['String'];
  documentNumber: Scalars['String'];
  documentType: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  nationality: Scalars['String'];
  placeOfBirth: Scalars['String'];
};

export type RegistrationsPaginatedList = {
  __typename?: 'RegistrationsPaginatedList';
  items: Array<Registrations>;
  total: Scalars['Int'];
};

/** Registrations search results */
export type RegistrationsSearchResults = {
  __typename?: 'RegistrationsSearchResults';
  results: Array<Registrations>;
  total: Scalars['Int'];
};

export type SchemaVersionsRestorationResult = {
  __typename?: 'SchemaVersionsRestorationResult';
  timestamp?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
};

export enum ServiceAuthentication {
  Aws = 'aws',
  Basic = 'basic',
  Bearer = 'bearer',
  Custom = 'custom',
  None = 'none',
  Oauth2 = 'oauth2',
  Oauth2Bearer = 'oauth2Bearer',
  SearchParams = 'searchParams'
}

export enum ServiceProvider {
  Auth0 = 'auth0',
  AwsLambda = 'awsLambda',
  Bigcommerce = 'bigcommerce',
  Commercelayer = 'commercelayer',
  Contentful = 'contentful',
  Fauna = 'fauna',
  Generic = 'generic',
  Graphcms = 'graphcms',
  Klaviyo = 'klaviyo',
  Mailchimp = 'mailchimp',
  Netlify = 'netlify',
  Notion = 'notion',
  Petfinder = 'petfinder',
  Shopify = 'shopify',
  Stripe = 'stripe',
  Takeshape = 'takeshape',
  Vercel = 'vercel'
}

export enum ServiceType {
  Authentication = 'authentication',
  Aws = 'aws',
  Deployment = 'deployment',
  Graphql = 'graphql',
  Openapi = 'openapi',
  Rest = 'rest',
  Takeshape = 'takeshape'
}

export enum ShopifyObjectType {
  Collection = 'collection',
  Product = 'product',
  ProductVariant = 'productVariant'
}

export type TsActivityLogItem = {
  __typename?: 'TSActivityLogItem';
  activityType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  projectId?: Maybe<Scalars['ID']>;
  siteId?: Maybe<Scalars['ID']>;
  stage?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type TsApiKey = {
  __typename?: 'TSApiKey';
  apiKey?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastUsed?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Scalars['JSON']>;
  projectId?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
};

export type TsBilling = {
  __typename?: 'TSBilling';
  cardDetails?: Maybe<TsBillingCardDetails>;
  discount?: Maybe<TsBillingDiscount>;
  email?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<TsBillingPlan>;
  trialEnd?: Maybe<Scalars['String']>;
};

export type TsBillingAmount = {
  __typename?: 'TSBillingAmount';
  discount?: Maybe<TsBillingDiscount>;
  refund?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type TsBillingCardDetails = {
  __typename?: 'TSBillingCardDetails';
  brand?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  last4?: Maybe<Scalars['String']>;
};

export type TsBillingDiscount = {
  __typename?: 'TSBillingDiscount';
  amountOff?: Maybe<Scalars['Int']>;
  code?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['String']>;
  percentOff?: Maybe<Scalars['Int']>;
};

export type TsBillingEntitlements = {
  __typename?: 'TSBillingEntitlements';
  apiRateLimit?: Maybe<Scalars['Int']>;
  apiRequests?: Maybe<Scalars['Int']>;
  bandwidth?: Maybe<Scalars['Int']>;
  contentEntries?: Maybe<Scalars['Int']>;
  deployTargets?: Maybe<Scalars['Int']>;
  locales?: Maybe<Scalars['Int']>;
  roles?: Maybe<Scalars['Int']>;
  users?: Maybe<Scalars['Int']>;
  webhooks?: Maybe<Scalars['Boolean']>;
  workflows?: Maybe<Scalars['Int']>;
};

export type TsBillingPayment = {
  __typename?: 'TSBillingPayment';
  amount?: Maybe<TsBillingAmount>;
  date?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsBillingPaymentCursorPaginatedList = {
  __typename?: 'TSBillingPaymentCursorPaginatedList';
  cursor?: Maybe<Scalars['ID']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  items?: Maybe<Array<Maybe<TsBillingPayment>>>;
};

export type TsBillingPlan = {
  __typename?: 'TSBillingPlan';
  amount?: Maybe<Scalars['Int']>;
  created?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  entitlements?: Maybe<TsBillingEntitlements>;
  id?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  intervalCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  trialPeriodDays?: Maybe<Scalars['String']>;
};

export type TsBootstrapResult = {
  __typename?: 'TSBootstrapResult';
  totalCreated?: Maybe<Scalars['Int']>;
};

export type TsCancelStatusUpdateInput = {
  contentId: Scalars['String'];
  contentTypeName?: InputMaybe<Scalars['String']>;
  shapeName?: InputMaybe<Scalars['String']>;
  timestamp: Scalars['String'];
};

export type TsColor = {
  __typename?: 'TSColor';
  hex?: Maybe<Scalars['String']>;
  hsl?: Maybe<TsColorHsl>;
  hsv?: Maybe<TsColorHsv>;
  rgb?: Maybe<TsColorRgb>;
};

export type TsColorHsl = {
  __typename?: 'TSColorHsl';
  a?: Maybe<Scalars['Float']>;
  h?: Maybe<Scalars['Float']>;
  l?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
};

export type TsColorHslInput = {
  a?: InputMaybe<Scalars['Float']>;
  h?: InputMaybe<Scalars['Float']>;
  l?: InputMaybe<Scalars['Float']>;
  s?: InputMaybe<Scalars['Float']>;
};

export type TsColorHsv = {
  __typename?: 'TSColorHsv';
  a?: Maybe<Scalars['Float']>;
  h?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  v?: Maybe<Scalars['Float']>;
};

export type TsColorHsvInput = {
  a?: InputMaybe<Scalars['Float']>;
  h?: InputMaybe<Scalars['Float']>;
  s?: InputMaybe<Scalars['Float']>;
  v?: InputMaybe<Scalars['Float']>;
};

export type TsColorInput = {
  hex?: InputMaybe<Scalars['String']>;
  hsl?: InputMaybe<TsColorHslInput>;
  hsv?: InputMaybe<TsColorHsvInput>;
  rgb?: InputMaybe<TsColorRgbInput>;
};

export type TsColorRgb = {
  __typename?: 'TSColorRgb';
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
};

export type TsColorRgbInput = {
  a?: InputMaybe<Scalars['Float']>;
  b?: InputMaybe<Scalars['Float']>;
  g?: InputMaybe<Scalars['Float']>;
  r?: InputMaybe<Scalars['Float']>;
};

export type TsContentLocation = {
  __typename?: 'TSContentLocation';
  contentId?: Maybe<Scalars['String']>;
  hasLock?: Maybe<Scalars['Boolean']>;
  shapeId?: Maybe<Scalars['String']>;
};

export type TsContentTypePreviewPaths = {
  __typename?: 'TSContentTypePreviewPaths';
  contentTypeId: Scalars['String'];
  contentTypeName: Scalars['String'];
  shapeName: Scalars['String'];
  sites: Array<Maybe<TsSitePreviewPaths>>;
};

export type TsContentUsage = {
  __typename?: 'TSContentUsage';
  baseUrl?: Maybe<Scalars['String']>;
  deployedAt?: Maybe<Scalars['String']>;
  siteId?: Maybe<Scalars['ID']>;
  siteTitle?: Maybe<Scalars['String']>;
  usages?: Maybe<Array<Maybe<TsPathUsage>>>;
};

export type TsDeleteWorkflowInput = {
  name: Scalars['String'];
  version: Scalars['Int'];
};

export type TsFile = {
  name: Scalars['String'];
  type: Scalars['String'];
};

export type TsHealthCheckListItem = {
  __typename?: 'TSHealthCheckListItem';
  health?: Maybe<TsHealthCheckSummary>;
  serviceId?: Maybe<Scalars['String']>;
};

export type TsHealthCheckSummary = {
  __typename?: 'TSHealthCheckSummary';
  check?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  projectId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  reasonCode?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
  triggeredBy?: Maybe<Scalars['String']>;
};

export type TsImagesConfig = {
  /** Default image parameters. See https://docs.imgix.com/apis/url  */
  default?: InputMaybe<Scalars['JSON']>;
  /** Large image parameters. See https://docs.imgix.com/apis/url  */
  large?: InputMaybe<Scalars['JSON']>;
  /** Medium image parameters. See https://docs.imgix.com/apis/url  */
  medium?: InputMaybe<Scalars['JSON']>;
  /** Small image parameters. See https://docs.imgix.com/apis/url  */
  small?: InputMaybe<Scalars['JSON']>;
};

export type TsIntegrationToken = {
  __typename?: 'TSIntegrationToken';
  provider: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type TsInvite = {
  __typename?: 'TSInvite';
  email?: Maybe<Scalars['ID']>;
  inviteCode?: Maybe<Scalars['ID']>;
  inviterUserId?: Maybe<Scalars['ID']>;
  projectId?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsLocales = {
  __typename?: 'TSLocales';
  defaultLocale: Scalars['String'];
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  version: Scalars['Int'];
};

export type TsLock = {
  __typename?: 'TSLock';
  expires?: Maybe<Scalars['String']>;
  user?: Maybe<TsUser>;
};

export type TsMemberLocation = {
  __typename?: 'TSMemberLocation';
  contentList?: Maybe<Array<Maybe<TsContentLocation>>>;
  userId: Scalars['String'];
};

export type TsPathUsage = {
  __typename?: 'TSPathUsage';
  depth?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
};

/** A pattern available for import. */
export type TsPattern = {
  __typename?: 'TSPattern';
  id: Scalars['String'];
  metadata?: Maybe<TsPatternMetadata>;
  uri?: Maybe<Scalars['String']>;
};

/** Metadata describing a pattern and its contents. */
export type TsPatternMetadata = {
  __typename?: 'TSPatternMetadata';
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TsPermissions = {
  __typename?: 'TSPermissions';
  projectId?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type TsPersonalAccessToken = {
  __typename?: 'TSPersonalAccessToken';
  accessToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  lastUsed?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type TsPreviewRoute = {
  __typename?: 'TSPreviewRoute';
  isPaginated?: Maybe<Scalars['Boolean']>;
  path: Scalars['String'];
  routeName: Scalars['String'];
};

/** A Project is you main workspace it stores the content that powers your API */
export type TsProject = {
  __typename?: 'TSProject';
  /** Project avatar */
  avatar?: Maybe<BaseAsset>;
  /** Takeshape project schema */
  billing?: Maybe<TsBilling>;
  /** Default project timezone */
  defaultTimezone: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  integrationTokens?: Maybe<Array<Maybe<TsIntegrationToken>>>;
  invite?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Takeshape project schema */
  schema?: Maybe<Scalars['JSON']>;
  /** Project status object */
  status?: Maybe<Scalars['JSON']>;
  template?: Maybe<TsPattern>;
  users?: Maybe<Array<Maybe<TsUser>>>;
};

/** Projects are exported to downloadable ZIP files. */
export type TsProjectExport = {
  __typename?: 'TSProjectExport';
  file?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsProjectImport = {
  __typename?: 'TSProjectImport';
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** A Project is you main workspace it stores the content that powers your API */
export type TsProjectListItem = {
  __typename?: 'TSProjectListItem';
  /** Project avatar */
  avatar?: Maybe<BaseAsset>;
  /** Default project timezone */
  defaultTimezone: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  invite?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Project status object */
  status?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type TsRelationshipInput = {
  contentTypeId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  shapeId?: InputMaybe<Scalars['String']>;
  shapeName?: InputMaybe<Scalars['String']>;
};

export type TsRemoveWorkflowResponse = {
  __typename?: 'TSRemoveWorkflowResponse';
  name?: Maybe<Scalars['String']>;
  removed?: Maybe<Scalars['Boolean']>;
  schemaVersion?: Maybe<Scalars['Int']>;
  shapes?: Maybe<Scalars['JSONObject']>;
};

export type TsResourceActions = {
  __typename?: 'TSResourceActions';
  actions?: Maybe<Array<Maybe<Scalars['String']>>>;
  resource: Scalars['String'];
};

export type TsResourceActionsInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  resource: Scalars['String'];
};

export type TsRole = {
  __typename?: 'TSRole';
  builtIn?: Maybe<Scalars['Boolean']>;
  conditions?: Maybe<Scalars['JSONObject']>;
  created?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Scalars['JSONObject'];
  updated?: Maybe<Scalars['String']>;
};

export type TsRoleInput = {
  conditions?: InputMaybe<Scalars['JSONObject']>;
  created?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Scalars['JSONObject'];
  updated?: InputMaybe<Scalars['String']>;
};

export type TsRolePaginatedList = {
  __typename?: 'TSRolePaginatedList';
  from?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<TsRole>>>;
  size?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSaveServiceInput = {
  /** An authentication object, matching the format required for the authenticationType above. */
  authentication?: InputMaybe<Scalars['JSON']>;
  /** The authentication strategy for this service connection. */
  authenticationType: ServiceAuthentication;
  /** Machine-readable identifier, should be the same as the property name on the services object. */
  id: Scalars['String'];
  /** A namespace to use for the imported types tied to this service. */
  namespace?: InputMaybe<Scalars['String']>;
  /** Configuration options passed to and handled by the provider. */
  options?: InputMaybe<Scalars['JSON']>;
  /** The provider of this service. */
  provider: ServiceProvider;
  /** The interface or features this service provides. */
  serviceType: ServiceType;
  /** Human-readable name for this service. */
  title: Scalars['String'];
  webhookId?: InputMaybe<Scalars['String']>;
};

export type TsSaveWorkflowInput = {
  version: Scalars['Int'];
  workflow: TsWorkflowInput;
};

export type TsSaveWorkflowResponse = {
  __typename?: 'TSSaveWorkflowResponse';
  projectId?: Maybe<Scalars['String']>;
  schemaVersion?: Maybe<Scalars['Int']>;
  shapes?: Maybe<Scalars['JSONObject']>;
  workflow?: Maybe<TsWorkflow>;
};

export type TsScheduleStatusUpdateInput = {
  contentId: Scalars['String'];
  contentTypeName?: InputMaybe<Scalars['String']>;
  shapeName?: InputMaybe<Scalars['String']>;
  status: Scalars['String'];
  timestamp: Scalars['String'];
};

export type TsSchemaVersion = {
  __typename?: 'TSSchemaVersion';
  defaultLocale?: Maybe<Scalars['String']>;
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  mutationCount?: Maybe<Scalars['Int']>;
  queryCount?: Maybe<Scalars['Int']>;
  schemaVersion?: Maybe<Scalars['String']>;
  shapeCount?: Maybe<Scalars['Int']>;
  updated?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  workflowCount?: Maybe<Scalars['Int']>;
};

export type TsSchemaVersionResponse = {
  __typename?: 'TSSchemaVersionResponse';
  schema?: Maybe<Scalars['JSONObject']>;
  status?: Maybe<Scalars['String']>;
};

export type TsSchemaVersionsPaginatedList = {
  __typename?: 'TSSchemaVersionsPaginatedList';
  from?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<TsSchemaVersion>>>;
  size?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSearchSort = {
  field: Scalars['String'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String'];
};

export type TsSearchSortInput = {
  field: Scalars['String'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String'];
};

export type TsSearchable = {
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

/** TSSearchable search results */
export type TsSearchableSearchResults = {
  __typename?: 'TSSearchableSearchResults';
  results: Array<TsSearchable>;
  total: Scalars['Int'];
};

export type TsShallowWhereTsColorHslInput = {
  a?: InputMaybe<TsWhereNumberInput>;
  h?: InputMaybe<TsWhereNumberInput>;
  l?: InputMaybe<TsWhereNumberInput>;
  s?: InputMaybe<TsWhereNumberInput>;
};

export type TsShallowWhereTsColorHsvInput = {
  a?: InputMaybe<TsWhereNumberInput>;
  h?: InputMaybe<TsWhereNumberInput>;
  s?: InputMaybe<TsWhereNumberInput>;
  v?: InputMaybe<TsWhereNumberInput>;
};

export type TsShallowWhereTsColorInput = {
  hex?: InputMaybe<TsWhereStringInput>;
  hsl?: InputMaybe<TsShallowWhereTsColorHslInput>;
  hsv?: InputMaybe<TsShallowWhereTsColorHsvInput>;
  rgb?: InputMaybe<TsShallowWhereTsColorRgbInput>;
};

export type TsShallowWhereTsColorRgbInput = {
  a?: InputMaybe<TsWhereNumberInput>;
  b?: InputMaybe<TsWhereNumberInput>;
  g?: InputMaybe<TsWhereNumberInput>;
  r?: InputMaybe<TsWhereNumberInput>;
};

export type TsSite = {
  __typename?: 'TSSite';
  message?: Maybe<Scalars['String']>;
  siteId?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
};

export type TsSitePreviewPaths = {
  __typename?: 'TSSitePreviewPaths';
  routes: Array<Maybe<TsPreviewRoute>>;
  siteId: Scalars['String'];
  siteTitle: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type TsStatusUpdate = {
  __typename?: 'TSStatusUpdate';
  id: Scalars['String'];
  payload?: Maybe<Scalars['JSONObject']>;
  timestamp: Scalars['String'];
  type: Scalars['String'];
};

export type TsStatusUpdateList = {
  __typename?: 'TSStatusUpdateList';
  items?: Maybe<Array<Maybe<TsStatusUpdate>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSuggestion = {
  __typename?: 'TSSuggestion';
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['ID']>;
  _shapeName?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type TsSuggestionPaginatedList = {
  __typename?: 'TSSuggestionPaginatedList';
  items?: Maybe<Array<Maybe<TsSuggestion>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsUpdateSchemaInput = {
  forms?: InputMaybe<Scalars['JSONObject']>;
  mutations?: InputMaybe<Scalars['JSONObject']>;
  queries?: InputMaybe<Scalars['JSONObject']>;
  shapes?: InputMaybe<Scalars['JSONObject']>;
  version: Scalars['Int'];
};

export type TsUpdateWorkflowInput = {
  name: Scalars['String'];
  version: Scalars['Int'];
  workflow: TsWorkflowInput;
};

export type TsUsageType = {
  __typename?: 'TSUsageType';
  /** Get user api calls */
  apiRequests?: Maybe<Scalars['Int']>;
  /** Get user bandwidth */
  bandwidth?: Maybe<Scalars['Int']>;
  /** Get user content entries */
  contentEntries?: Maybe<Scalars['Int']>;
  /** Get user sites */
  deployTargets?: Maybe<Scalars['Int']>;
  /** The usage period end time */
  endTime?: Maybe<Scalars['String']>;
  /** Get user locales */
  locales?: Maybe<Scalars['Int']>;
  /** Get user roles */
  roles?: Maybe<Scalars['Int']>;
  /** The usage period start time */
  startTime?: Maybe<Scalars['String']>;
  /** Get members for project */
  users?: Maybe<Scalars['Int']>;
  /** Get user workflows */
  workflows?: Maybe<Scalars['Int']>;
};

export type TsUser = {
  __typename?: 'TSUser';
  avatarPath?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
};

export type TsVersion = {
  __typename?: 'TSVersion';
  color?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  item?: Maybe<TsVersionResponse>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<TsUser>;
  version?: Maybe<Scalars['Int']>;
};


export type TsVersionItemArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type TsVersionResponse = {
  __typename?: 'TSVersionResponse';
  content?: Maybe<Scalars['JSONObject']>;
  schema?: Maybe<Scalars['JSONObject']>;
};

export type TsVersionsPaginatedList = {
  __typename?: 'TSVersionsPaginatedList';
  from?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<TsVersion>>>;
  size?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type TsWebhook = {
  __typename?: 'TSWebhook';
  headers?: Maybe<Array<Maybe<HttpHeader>>>;
  resourceActions?: Maybe<Array<Maybe<TsResourceActions>>>;
  webhookUrl: Scalars['String'];
};

export type TsWebhookHistory = {
  __typename?: 'TSWebhookHistory';
  _invocationTime: Scalars['String'];
  projectId: Scalars['ID'];
  stats: TsWebhookHistoryStats;
  webhookUrl: Scalars['String'];
};

export type TsWebhookHistoryError = {
  __typename?: 'TSWebhookHistoryError';
  message?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type TsWebhookHistoryRequest = {
  __typename?: 'TSWebhookHistoryRequest';
  body?: Maybe<Scalars['JSON']>;
  headers?: Maybe<Scalars['JSON']>;
  url: Scalars['String'];
};

export type TsWebhookHistoryResponse = {
  __typename?: 'TSWebhookHistoryResponse';
  body?: Maybe<Scalars['JSON']>;
  headers?: Maybe<Scalars['JSON']>;
  status: Scalars['String'];
  statusText?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type TsWebhookHistoryStats = {
  __typename?: 'TSWebhookHistoryStats';
  error?: Maybe<TsWebhookHistoryError>;
  invocationDuration: Scalars['Int'];
  invocationStartTime: Scalars['String'];
  request: TsWebhookHistoryRequest;
  response?: Maybe<TsWebhookHistoryResponse>;
  retrying: Scalars['Boolean'];
  succeeded: Scalars['Boolean'];
};

export type TsWebhookInput = {
  headers?: InputMaybe<Array<InputMaybe<HttpHeaderInput>>>;
  resourceActions?: InputMaybe<Array<InputMaybe<TsResourceActionsInput>>>;
  webhookUrl: Scalars['String'];
};

export type TsWebhooks = {
  __typename?: 'TSWebhooks';
  secret?: Maybe<Scalars['String']>;
  webhooks?: Maybe<Array<Maybe<TsWebhook>>>;
};

export type TsWebhooksInput = {
  resetSecret?: InputMaybe<Scalars['Boolean']>;
  webhooks?: InputMaybe<Array<InputMaybe<TsWebhookInput>>>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  code?: InputMaybe<TsWhereStringInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereApartmentAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereApartmentAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereApartmentNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereApartmentOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  code?: InputMaybe<TsWhereStringInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
};

export type TsWhereApartmentInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereApartmentAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereApartmentNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereApartmentOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  code?: InputMaybe<TsWhereStringInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereApartmentNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereApartmentAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereApartmentNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereApartmentOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  code?: InputMaybe<TsWhereStringInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereApartmentOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereApartmentAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereApartmentNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereApartmentOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  code?: InputMaybe<TsWhereStringInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
};

export type TsWhereApartmentRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsShallowWhereTsColorInput>;
  code?: InputMaybe<TsWhereStringInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsShallowWhereTsColorInput>;
  lighterColor?: InputMaybe<TsShallowWhereTsColorInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereArticleAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereArticleAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereArticleNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereArticleOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  path?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereArticleInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereArticleAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereArticleNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereArticleOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  path?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereArticleNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereArticleAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereArticleNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereArticleOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  path?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereArticleOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereArticleAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereArticleNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereArticleOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  path?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereAssetAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereAssetNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereAssetInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereAssetNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereAssetNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereAssetNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereAssetOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereAssetNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereAssetRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereBooleanInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Boolean']>;
};

export type TsWhereDateInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']>;
};

export type TsWhereDraftjsInput = {
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereFaqAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereFaqAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereFaqNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereFaqOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereFaqInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereFaqAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereFaqNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereFaqOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereFaqNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereFaqAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereFaqNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereFaqOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereFaqOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereFaqAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereFaqNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereFaqOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereIdInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TsWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  code?: InputMaybe<TsWhereStringInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereIntegerInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Int']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Int']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Int']>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereLanguageAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereLanguageAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereLanguageNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereLanguageOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereLanguageInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereLanguageAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereLanguageNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereLanguageOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  code?: InputMaybe<TsWhereStringInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereLanguageNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereLanguageAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereLanguageNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereLanguageOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  code?: InputMaybe<TsWhereStringInput>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereLanguageOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereLanguageAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereLanguageNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereLanguageOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereLanguageRelationshipInput = {
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  code?: InputMaybe<TsWhereStringInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  code?: InputMaybe<TsWhereStringInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNumberInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Float']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Float']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Float']>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  address?: InputMaybe<TsWhereStringInput>;
  airBnb?: InputMaybe<TsWhereStringInput>;
  airbnbIcal?: InputMaybe<TsWhereStringInput>;
  airbnbLink?: InputMaybe<TsWhereStringInput>;
  answer?: InputMaybe<TsWhereDraftjsInput>;
  apartment?: InputMaybe<TsWhereApartmentRelationshipInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  asset?: InputMaybe<TsWhereAssetRelationshipInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  bookingIcal?: InputMaybe<TsWhereStringInput>;
  brandColor?: InputMaybe<TsWhereTsColorInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  code?: InputMaybe<TsWhereStringInput>;
  content?: InputMaybe<TsWhereDraftjsInput>;
  coverJpg?: InputMaybe<TsWhereAssetRelationshipInput>;
  coverWebp?: InputMaybe<TsWhereAssetRelationshipInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  description?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  facebookLink?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  key?: InputMaybe<TsWhereStringInput>;
  language?: InputMaybe<TsWhereLanguageRelationshipInput>;
  latitude?: InputMaybe<TsWhereStringInput>;
  lightColor?: InputMaybe<TsWhereTsColorInput>;
  lighterColor?: InputMaybe<TsWhereTsColorInput>;
  linkVideo?: InputMaybe<TsWhereStringInput>;
  location?: InputMaybe<TsWhereStringInput>;
  longitude?: InputMaybe<TsWhereStringInput>;
  mapLink?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  path?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  question?: InputMaybe<TsWhereStringInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
  relationship?: InputMaybe<TsWhereLanguageRelationshipInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  sponsor?: InputMaybe<TsWhereApartmentRelationshipInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereRegistrationsAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereRegistrationsNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereRegistrationsGuestsInput = {
  birthDate?: InputMaybe<TsWhereStringInput>;
  documentNumber?: InputMaybe<TsWhereStringInput>;
  documentType?: InputMaybe<TsWhereStringInput>;
  firstName?: InputMaybe<TsWhereStringInput>;
  lastName?: InputMaybe<TsWhereStringInput>;
  nationality?: InputMaybe<TsWhereStringInput>;
  placeOfBirth?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereRegistrationsInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereRegistrationsNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereRegistrationsNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereRegistrationsNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereRegistrationsOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereRegistrationsNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereRegistrationsOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  apartmentKey?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  guests?: InputMaybe<TsWhereRegistrationsGuestsInput>;
  registrationStatus?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStringInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereTsColorHslInput = {
  a?: InputMaybe<TsWhereNumberInput>;
  h?: InputMaybe<TsWhereNumberInput>;
  l?: InputMaybe<TsWhereNumberInput>;
  s?: InputMaybe<TsWhereNumberInput>;
};

export type TsWhereTsColorHsvInput = {
  a?: InputMaybe<TsWhereNumberInput>;
  h?: InputMaybe<TsWhereNumberInput>;
  s?: InputMaybe<TsWhereNumberInput>;
  v?: InputMaybe<TsWhereNumberInput>;
};

export type TsWhereTsColorInput = {
  hex?: InputMaybe<TsWhereStringInput>;
  hsl?: InputMaybe<TsWhereTsColorHslInput>;
  hsv?: InputMaybe<TsWhereTsColorHsvInput>;
  rgb?: InputMaybe<TsWhereTsColorRgbInput>;
};

export type TsWhereTsColorRgbInput = {
  a?: InputMaybe<TsWhereNumberInput>;
  b?: InputMaybe<TsWhereNumberInput>;
  g?: InputMaybe<TsWhereNumberInput>;
  r?: InputMaybe<TsWhereNumberInput>;
};

/** AND takes an array of conditions that must appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereTsStaticSiteAndOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereTsStaticSiteNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
};

export type TsWhereTsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTsStaticSiteInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereTsStaticSiteNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
};

/** NOT takes a single condition that must not appear in the matching results. */
export type TsWhereTsStaticSiteNotOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereTsStaticSiteNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
};

/** OR takes an array of conditions that should appear in the matching results. Nested boolean operators can be used to create complex filters. */
export type TsWhereTsStaticSiteOrOperatorInput = {
  AND?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteAndOperatorInput>>>;
  NOT?: InputMaybe<TsWhereTsStaticSiteNotOperatorInput>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteOrOperatorInput>>>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
};

export type TsWhereTsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereWorkflowInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']>;
};

export type TsWorkflow = {
  __typename?: 'TSWorkflow';
  name: Scalars['String'];
  steps?: Maybe<Array<Maybe<TsWorkflowStep>>>;
  title: Scalars['String'];
};

export type TsWorkflowInput = {
  name: Scalars['String'];
  steps?: InputMaybe<Array<InputMaybe<TsWorkflowStepInput>>>;
  title: Scalars['String'];
};

export type TsWorkflowStep = {
  __typename?: 'TSWorkflowStep';
  canEdit?: Maybe<Array<Maybe<Scalars['String']>>>;
  color: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  live: Scalars['Boolean'];
  name: Scalars['String'];
  title: Scalars['String'];
};

export type TsWorkflowStepInput = {
  canEdit?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  key: Scalars['String'];
  live: Scalars['Boolean'];
  name: Scalars['String'];
  title: Scalars['String'];
};

export type TsStaticSite = TsSearchable & {
  __typename?: 'TsStaticSite';
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  _shapeId?: Maybe<Scalars['String']>;
  _shapeName?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _version?: Maybe<Scalars['Int']>;
  baseUrl?: Maybe<Scalars['String']>;
  destination: Scalars['String'];
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariables>>>;
  idKey?: Maybe<Scalars['String']>;
  privateAcl?: Maybe<Scalars['Boolean']>;
  provider: Scalars['String'];
  searchSummary?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  templateHash?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggers>>>;
};

export type TsStaticSiteEnvironmentVariables = {
  __typename?: 'TsStaticSiteEnvironmentVariables';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type TsStaticSitePaginatedList = {
  __typename?: 'TsStaticSitePaginatedList';
  items: Array<TsStaticSite>;
  total: Scalars['Int'];
};

/** TsStaticSite search results */
export type TsStaticSiteSearchResults = {
  __typename?: 'TsStaticSiteSearchResults';
  results: Array<TsStaticSite>;
  total: Scalars['Int'];
};

export type TsStaticSiteTriggers = {
  __typename?: 'TsStaticSiteTriggers';
  contentTypeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** update Apartment input */
export type UpdateApartmentInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  address?: InputMaybe<Scalars['String']>;
  airBnb?: InputMaybe<Scalars['String']>;
  airbnbIcal?: InputMaybe<Scalars['String']>;
  airbnbLink?: InputMaybe<Scalars['String']>;
  bookingIcal?: InputMaybe<Scalars['String']>;
  brandColor?: InputMaybe<TsColorInput>;
  code?: InputMaybe<Scalars['String']>;
  coverJpg?: InputMaybe<TsRelationshipInput>;
  coverWebp?: InputMaybe<TsRelationshipInput>;
  facebookLink?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  lightColor?: InputMaybe<TsColorInput>;
  lighterColor?: InputMaybe<TsColorInput>;
  location?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  mapLink?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  sponsor?: InputMaybe<Array<InputMaybe<TsRelationshipInput>>>;
};

export type UpdateApartmentResult = {
  __typename?: 'UpdateApartmentResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Apartment>;
};

/** update Article input */
export type UpdateArticleInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  content?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Scalars['String']>;
  relationship?: InputMaybe<TsRelationshipInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateArticleResult = {
  __typename?: 'UpdateArticleResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Article>;
};

/** update Asset input */
export type UpdateAssetInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  s3Key?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
};

export type UpdateAssetResult = {
  __typename?: 'UpdateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** update Faq input */
export type UpdateFaqInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  answer?: InputMaybe<Scalars['JSON']>;
  apartment?: InputMaybe<TsRelationshipInput>;
  asset?: InputMaybe<TsRelationshipInput>;
  language?: InputMaybe<TsRelationshipInput>;
  linkVideo?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
};

export type UpdateFaqResult = {
  __typename?: 'UpdateFaqResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Faq>;
};

/** update Language input */
export type UpdateLanguageInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
};

export type UpdateLanguageResult = {
  __typename?: 'UpdateLanguageResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Language>;
};

/** update Registrations input */
export type UpdateRegistrationsInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  apartmentKey?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  guests?: InputMaybe<Array<InputMaybe<RegistrationsGuestsInput>>>;
  registrationStatus?: InputMaybe<Scalars['String']>;
};

export type UpdateRegistrationsResult = {
  __typename?: 'UpdateRegistrationsResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Registrations>;
};

/** update TsStaticSite input */
export type UpdateTsStaticSiteInput = {
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _id: Scalars['ID'];
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  idKey?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  provider?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  templateHash?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
};

export type UpdateTsStaticSiteResult = {
  __typename?: 'UpdateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** A project file stored on s3 */
export type Upload = {
  __typename?: 'Upload';
  asset?: Maybe<Asset>;
  uploadUrl?: Maybe<Scalars['ID']>;
};

export type UploadProjectResult = {
  __typename?: 'UploadProjectResult';
  importId?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

/** This query allow you to pass context to your queries */
export type WithContext = {
  __typename?: 'WithContext';
  /** Get a Apartment by ID */
  getApartment?: Maybe<Apartment>;
  /** Returns a list Apartment in natural order. */
  getApartmentList?: Maybe<ApartmentPaginatedList>;
  /** Get a Article by ID */
  getArticle?: Maybe<Article>;
  /** Returns a list Article in natural order. */
  getArticleList?: Maybe<ArticlePaginatedList>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Faq by ID */
  getFaq?: Maybe<Faq>;
  /** Returns a list Faq in natural order. */
  getFaqList?: Maybe<FaqPaginatedList>;
  /** Get a Language by ID */
  getLanguage?: Maybe<Language>;
  /** Returns a list Language in natural order. */
  getLanguageList?: Maybe<LanguagePaginatedList>;
  /** Get a Registrations by ID */
  getRegistrations?: Maybe<Registrations>;
  /** Returns a list Registrations in natural order. */
  getRegistrationsList?: Maybe<RegistrationsPaginatedList>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  search?: Maybe<TsSearchableSearchResults>;
  searchApartmentIndex?: Maybe<ApartmentSearchResults>;
  searchArticleIndex?: Maybe<ArticleSearchResults>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchFaqIndex?: Maybe<FaqSearchResults>;
  searchLanguageIndex?: Maybe<LanguageSearchResults>;
  searchRegistrationsIndex?: Maybe<RegistrationsSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetApartmentArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetApartmentListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereApartmentInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetArticleArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetArticleListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereArticleInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  version: Scalars['Int'];
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionListArgs = {
  from?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  size?: InputMaybe<Scalars['Int']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetFaqArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetFaqListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereFaqInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetLanguageArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetLanguageListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereLanguageInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetRegistrationsArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetRegistrationsListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereRegistrationsInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteListArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchApartmentIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereApartmentInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchArticleIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereArticleInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchAssetIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchFaqIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereFaqInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchLanguageIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereLanguageInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchRegistrationsIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereRegistrationsInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchTsStaticSiteIndexArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  terms?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextTaxonomySuggestArgs = {
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['JSON']>;
  from?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  size?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
  terms?: InputMaybe<Scalars['String']>;
};

export type ApartmentQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type ApartmentQuery = { __typename?: 'Query', getApartmentList?: { __typename?: 'ApartmentPaginatedList', items: Array<{ __typename?: 'Apartment', airBnb?: string | null | undefined, latitude?: string | null | undefined, longitude?: string | null | undefined, name?: string | null | undefined, address?: string | null | undefined, airbnbLink?: string | null | undefined, facebookLink?: string | null | undefined, mapLink?: string | null | undefined, brandColor?: { __typename?: 'TSColor', hex?: string | null | undefined } | null | undefined, lightColor?: { __typename?: 'TSColor', rgb?: { __typename?: 'TSColorRgb', a?: number | null | undefined, b?: number | null | undefined, g?: number | null | undefined, r?: number | null | undefined } | null | undefined } | null | undefined, lighterColor?: { __typename?: 'TSColor', rgb?: { __typename?: 'TSColorRgb', a?: number | null | undefined, b?: number | null | undefined, g?: number | null | undefined, r?: number | null | undefined } | null | undefined } | null | undefined, coverJpg?: { __typename?: 'Asset', path: string } | null | undefined, coverWebp?: { __typename?: 'Asset', path: string } | null | undefined, sponsor?: Array<{ __typename?: 'Apartment', location?: string | null | undefined, key?: string | null | undefined, brandColor?: { __typename?: 'TSColor', hex?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined }> } | null | undefined, getLanguageList?: { __typename?: 'LanguagePaginatedList', items: Array<{ __typename?: 'Language', code?: string | null | undefined }> } | null | undefined, ApartmentKeys?: { __typename?: 'ApartmentPaginatedList', items: Array<{ __typename?: 'Apartment', key?: string | null | undefined }> } | null | undefined };

export type GetLangsApartmentListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLangsApartmentListQuery = { __typename?: 'Query', getLanguageList?: { __typename?: 'LanguagePaginatedList', items: Array<{ __typename?: 'Language', code?: string | null | undefined }> } | null | undefined, getApartmentList?: { __typename?: 'ApartmentPaginatedList', items: Array<{ __typename?: 'Apartment', key?: string | null | undefined }> } | null | undefined };

export type ApartmentSecretQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type ApartmentSecretQuery = { __typename?: 'Query', getApartmentList?: { __typename?: 'ApartmentPaginatedList', items: Array<{ __typename?: 'Apartment', airbnbIcal?: string | null | undefined, bookingIcal?: string | null | undefined }> } | null | undefined };

export type ApartmentCodeByAirBnbIdQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type ApartmentCodeByAirBnbIdQuery = { __typename?: 'Query', getApartmentList?: { __typename?: 'ApartmentPaginatedList', items: Array<{ __typename?: 'Apartment', code?: string | null | undefined, key?: string | null | undefined, address?: string | null | undefined, name?: string | null | undefined, airbnbLink?: string | null | undefined, mapLink?: string | null | undefined }> } | null | undefined };

export type GetArticleByPathQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type GetArticleByPathQuery = { __typename?: 'Query', getArticleList?: { __typename?: 'ArticlePaginatedList', items: Array<{ __typename?: 'Article', contentHtml?: string | null | undefined, title?: string | null | undefined }> } | null | undefined };


export const ApartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Apartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getApartmentList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"airBnb"}},{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"brandColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lightColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rgb"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"a"}},{"kind":"Field","name":{"kind":"Name","value":"b"}},{"kind":"Field","name":{"kind":"Name","value":"g"}},{"kind":"Field","name":{"kind":"Name","value":"r"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lighterColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rgb"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"a"}},{"kind":"Field","name":{"kind":"Name","value":"b"}},{"kind":"Field","name":{"kind":"Name","value":"g"}},{"kind":"Field","name":{"kind":"Name","value":"r"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverJpg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverWebp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"path"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"airbnbLink"}},{"kind":"Field","name":{"kind":"Name","value":"facebookLink"}},{"kind":"Field","name":{"kind":"Name","value":"sponsor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brandColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hex"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mapLink"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getLanguageList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"ApartmentKeys"},"name":{"kind":"Name","value":"getApartmentList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]}}]} as unknown as DocumentNode<ApartmentQuery, ApartmentQueryVariables>;
export const GetLangsApartmentListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLangsApartmentList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLanguageList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"getApartmentList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]}}]} as unknown as DocumentNode<GetLangsApartmentListQuery, GetLangsApartmentListQueryVariables>;
export const ApartmentSecretDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApartmentSecret"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getApartmentList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"airbnbIcal"}},{"kind":"Field","name":{"kind":"Name","value":"bookingIcal"}}]}}]}}]}}]} as unknown as DocumentNode<ApartmentSecretQuery, ApartmentSecretQueryVariables>;
export const ApartmentCodeByAirBnbIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApartmentCodeByAirBnbId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getApartmentList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"airBnb"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"airbnbLink"}},{"kind":"Field","name":{"kind":"Name","value":"mapLink"}}]}}]}}]}}]} as unknown as DocumentNode<ApartmentCodeByAirBnbIdQuery, ApartmentCodeByAirBnbIdQueryVariables>;
export const GetArticleByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticleByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getArticleList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"path"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentHtml"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleByPathQuery, GetArticleByPathQueryVariables>;
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
};

export type Mutation = {
  message?: Maybe<Scalars["Boolean"]>;
};

export type MutationMessageArgs = {
  email: Scalars["String"];
  message: Scalars["String"];
  name: Scalars["String"];
};

export type Query = {
  hello: Scalars["String"];
};

export type SendMessageMutationVariables = Exact<{
  name: Scalars["String"];
  email: Scalars["String"];
  message: Scalars["String"];
}>;

export type SendMessageMutation = { message?: boolean | null | undefined };

export const SendMessageDocument = gql`
  mutation sendMessage($name: String!, $email: String!, $message: String!) {
    message(name: $name, email: $email, message: $message)
  }
` as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;

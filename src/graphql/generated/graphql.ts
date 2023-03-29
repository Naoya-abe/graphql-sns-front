/* eslint-disable */
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateUserDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** login */
export type LoginModel = {
  __typename?: 'LoginModel';
  jwt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserModel;
  login: LoginModel;
};


export type MutationCreateUserArgs = {
  createUserDto: CreateUserDto;
};


export type MutationLoginArgs = {
  loginDto: LoginDto;
};

export type Query = {
  __typename?: 'Query';
  users: Array<UserModel>;
};

/** user */
export type UserModel = {
  __typename?: 'UserModel';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  nickname: Scalars['String'];
  selfIntroduction: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'UserModel', id: string, email: string, nickname: string, selfIntroduction: string, createdAt: any, updatedAt: any }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}},{"kind":"Field","name":{"kind":"Name","value":"selfIntroduction"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
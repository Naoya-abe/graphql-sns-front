/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation Login($email: String!, $password: String!) {\n  login(loginDto: {email: $email, password: $password}) {\n    jwt\n  }\n}": types.LoginDocument,
    "mutation CreatePost($content: String!) {\n  createPost(createPostDto: {content: $content}) {\n    id\n    content\n    userId\n    user {\n      id\n      email\n      nickname\n      selfIntroduction\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n}": types.CreatePostDocument,
    "query GetPosts {\n  posts {\n    id\n    content\n    userId\n    user {\n      id\n      email\n      nickname\n      selfIntroduction\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n}": types.GetPostsDocument,
    "mutation CreateUser($email: String!, $password: String!) {\n  createUser(createUserDto: {email: $email, password: $password}) {\n    id\n    email\n    nickname\n    selfIntroduction\n    createdAt\n    updatedAt\n  }\n}": types.CreateUserDocument,
    "query GetUsers {\n  users {\n    id\n    email\n    nickname\n    selfIntroduction\n    createdAt\n    updatedAt\n  }\n}": types.GetUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($email: String!, $password: String!) {\n  login(loginDto: {email: $email, password: $password}) {\n    jwt\n  }\n}"): (typeof documents)["mutation Login($email: String!, $password: String!) {\n  login(loginDto: {email: $email, password: $password}) {\n    jwt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreatePost($content: String!) {\n  createPost(createPostDto: {content: $content}) {\n    id\n    content\n    userId\n    user {\n      id\n      email\n      nickname\n      selfIntroduction\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreatePost($content: String!) {\n  createPost(createPostDto: {content: $content}) {\n    id\n    content\n    userId\n    user {\n      id\n      email\n      nickname\n      selfIntroduction\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPosts {\n  posts {\n    id\n    content\n    userId\n    user {\n      id\n      email\n      nickname\n      selfIntroduction\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetPosts {\n  posts {\n    id\n    content\n    userId\n    user {\n      id\n      email\n      nickname\n      selfIntroduction\n      createdAt\n      updatedAt\n    }\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($email: String!, $password: String!) {\n  createUser(createUserDto: {email: $email, password: $password}) {\n    id\n    email\n    nickname\n    selfIntroduction\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["mutation CreateUser($email: String!, $password: String!) {\n  createUser(createUserDto: {email: $email, password: $password}) {\n    id\n    email\n    nickname\n    selfIntroduction\n    createdAt\n    updatedAt\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUsers {\n  users {\n    id\n    email\n    nickname\n    selfIntroduction\n    createdAt\n    updatedAt\n  }\n}"): (typeof documents)["query GetUsers {\n  users {\n    id\n    email\n    nickname\n    selfIntroduction\n    createdAt\n    updatedAt\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
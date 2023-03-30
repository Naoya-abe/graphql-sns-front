import { CodegenConfig } from '@graphql-codegen/cli';

const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';

const config: CodegenConfig = {
  schema: GRAPHQL_ENDPOINT,
  documents: ['src/**/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;

// apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Create an HttpLink to connect to your GraphQL endpoint
const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4200/graphql",
});

// Create the Apollo Client instance
const client = new ApolloClient({
  link: link, // Use the 'link' option instead of 'uri'
  cache: new InMemoryCache(),
});

export default client;
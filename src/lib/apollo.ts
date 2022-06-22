import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/cl4ng6svk02on01xy6j8k8gam/master',
  cache: new InMemoryCache()
});
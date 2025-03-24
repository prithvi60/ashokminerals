"use client";

import { HeroUIProvider } from "@heroui/system";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export function Providers({ children }) {
  const client = new ApolloClient({
    // uri:process.env.NODE_ENV !== "production"? "https://dev-webibee.pantheonsite.io/":"https://webibee.com/api/graphql",
    uri: "https://dev-webibee.pantheonsite.io/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </ApolloProvider>
  );
}

import { ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cll1i7kal2iry01uj9wffbqm8/master",
    cache: new InMemoryCache(),
    
});

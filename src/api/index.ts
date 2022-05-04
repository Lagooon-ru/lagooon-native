import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const authLink = setContext(async (_, { headers }) => {
  const auth = await SecureStore.getItemAsync('auth');
  const token = JSON.parse(auth).token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // link: authLink.concat(createHttpLink({ uri: 'http://95.163.213.164/graphql' })),
  link: authLink.concat(createHttpLink({ uri: 'http://192.168.0.118:8000/graphql' })),
  cache: new InMemoryCache()
})

export const api = axios.create({
  // baseURL: 'http://95.163.213.164/',
  baseURL: 'http://192.168.0.118:8000/',
});
export const uploadImage = async (form, config) => api.post('/media/uploads', form, config);

export default client
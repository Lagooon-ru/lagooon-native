import React, {FC} from "react";
import {ApolloProvider} from "@apollo/client";
import client from "./src/api";
import AuthNavigation from "./src/navigations";
import {LogBox} from 'react-native'

const App: FC = () => {
  LogBox.ignoreAllLogs();
  return (
    <ApolloProvider
      client={client}
    >
      <AuthNavigation/>
    </ApolloProvider>
  );
}

export default App

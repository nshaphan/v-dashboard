import { createApp, provide, h } from "vue";
import { ApolloClient, ApolloLink, from, HttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";

// Cache implementation
const cache = new InMemoryCache();

interface Headers {
  authorization: string;
}

const token = "";

const httpLink = from([
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: Headers }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));
    return forward(operation); // Go to the next link in the chain. Similar to `next` in Express.js middleware.
  }),
  new HttpLink({ uri: "http://localhost:8080/graphql" }),
]);

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.component("DefaultLayout", DashboardLayout);
app.component("EmptyLayout", EmptyLayout);

app.use(router);
app.mount("#app");

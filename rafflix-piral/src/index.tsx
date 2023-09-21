import * as React from "react";
import { createRoot } from "react-dom/client";
import { createInstance, Piral, createStandardApi, createMenuApi } from "piral";
import { layout, errors, home } from "./layout";
import { createVueApi } from "piral-vue";

// change to your feed URL here (either using feed.piral.cloud or your own service)
const feedUrl = "https://feed.piral.cloud/api/v1/pilet/rafflix-piral";

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    routes: {
      "/": home,
    },
  },
  plugins: [...createStandardApi(), createMenuApi(), createVueApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

const root = createRoot(document.querySelector("#app"));

root.render(<Piral instance={instance} />);

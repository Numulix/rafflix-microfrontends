import * as React from "react";
import { Link } from "react-router-dom";
import type { PiletApi } from "rafflix-piral";
import Browse from "./components/Browse.vue";
import "./style.scss";

export function setup(app: PiletApi) {
  const MovieTile: React.FC = (props) => (
    <app.Extension name="MovieTile" params={props} />
  );

  app.registerMenu(() => <Link to="/browse">Browse</Link>);
  app.registerPage("/browse", app.fromVue(Browse, { MovieTile: MovieTile }));
}

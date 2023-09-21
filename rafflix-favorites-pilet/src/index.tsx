import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'rafflix-piral';
import {MovieTileProps} from "./models/prototypes";
import Favorites from "./components/Favorites";
import {FavoriteToggle} from "./components/FavoriteToggle";
import "./style.scss"

export function setup(app: PiletApi) {
    const MovieTile: React.FC<MovieTileProps> = (props) => (
        <app.Extension name="MovieTile" params={props} />
    );

    app.registerMenu("Favorites", () => <Link to="/favorites">Favorites</Link>);
    app.registerPage("/favorites", () => <Favorites MovieTile={MovieTile} />);
    app.registerExtension("ListToggle", ({ params }) => ( <FavoriteToggle {...params} /> ));
}

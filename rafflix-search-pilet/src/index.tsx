import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'rafflix-piral';
import {MovieTileProps} from "./models/prototypes";
import {SearchExtension} from "./components/SearchExtension";
import './style.scss';

export function setup(app: PiletApi) {
    const MovieTile: React.FC<MovieTileProps> = (props) => (
        <app.Extension name="MovieTile" params={props} />
    );

    app.registerExtension("header-items", () => (
        <SearchExtension MovieTile={MovieTile} />
    ));
}

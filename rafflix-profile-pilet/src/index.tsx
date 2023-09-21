import * as React from 'react';
import {Link} from 'react-router-dom';
import type {PiletApi} from 'rafflix-piral';
import ProfileExtension from "./components/ProfileExtension.vue";
import ProfilePage from "./components/ProfilePage.vue";
import './style.scss';


export function setup(app: PiletApi) {
    app.registerExtension("header-items", app.fromVue(ProfileExtension));
    app.registerPage("/profile", app.fromVue(ProfilePage));
}

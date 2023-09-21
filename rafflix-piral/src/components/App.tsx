import { ExtensionSlot, LayoutProps } from "piral-core";
import * as React from "react";
import Logo from "./Logo";
import { Menu } from "piral";
import Footer from "./Footer";
import {Redirect, Route} from "react-router-dom";

const App: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div className="main-wrapper">
      <header className="Header">
        <Logo />
        <Menu type="general" />
        <ExtensionSlot name="header-items" />
      </header>
        <Route exact path="/">
            <Redirect to="/browse" />
        </Route>
      {children}
    </div>
    <Footer />
  </>
);

export default App;

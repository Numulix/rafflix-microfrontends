import * as React from "react";
import { MenuContainerProps } from "piral-menu";

const Navigation: React.FC<MenuContainerProps> = ({ children }) => (
  <div id="navigation" className="Navigation">
    <nav>
      <ul>{children}</ul>
    </nav>
  </div>
);

export default Navigation;

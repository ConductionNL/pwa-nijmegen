import * as React from "react";
import Logo from "../../images/logo_nijmegen.svg";

export default function Header() {
  return (
    <header className="utrecht-page-header">
      <div className="header-align container">
        <img src={Logo} className="utrecht-logo"/>
      </div>
    </header>
  );
}

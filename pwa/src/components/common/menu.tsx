import * as React from "react";
import { useUrlContext } from "../../context/urlContext";
import { getUser, isLoggedIn, logout } from "../../services/auth";
import { navigate } from "gatsby-link";

export default function MainMenu() {
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setContext({
        baseUrl: window.GATSBY_BASE_URL,
        frontendUrl: window.GATSBY_FRONTEND_URL,
      });
    }
  }, []);
  const [context, setContext] = React.useState({
    baseUrl: "",
    frontendUrl: "",
  });

  return (
    <div className="utrecht-navhtml">
      <nav className="topnav utrecht-topnav__list">
        <div className="container">
          <div className="d-inline">
            <ul className="utrecht-topnav__list">
              <li className="utrecht-topnav__item">
                {isLoggedIn() && (
                  <span className="utrecht-topnav__link">{getUser().name}</span>
                )}
              </li>
              <li className="utrecht-topnav__item">
                {isLoggedIn() ? (
                  <span className="utrecht-topnav__link" onClick={handleLogout}>
                    Uitloggen
                  </span>
                ) : (
                  <a
                    className="utrecht-topnav__link"
                    href={
                      context.baseUrl +
                      "/digid/login?returnUrl=" +
                      context.frontendUrl +
                      "/redirect"
                    }
                  >
                    Inloggen
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

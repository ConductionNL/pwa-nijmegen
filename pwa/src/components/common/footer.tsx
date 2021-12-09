import * as React from "react";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { Link } from "gatsby";

export default function Footer() {
  return (
    <footer className="utrecht-page-footer">
      {/* <div className="container">
        <div className="row">
          <div className="col-xs-12  col-sm-4">
            <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
              Diensten
            </h4>
            <p className="utrecht-paragraph">
              <Link to="/moving" color="inherit">
                Verhuizen
              </Link>
            </p>
            <p className="utrecht-paragraph">
              <Link to="/marriage" color="inherit">
                Huwelijk
              </Link>
            </p>
            <p className="utrecht-paragraph">
              <Link to="/certificates" color="inherit">
                Uittreksels
              </Link>
            </p>
          </div>

          <div className="col-xs-12  col-sm-4">
            <address className="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
              <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
                Contact
              </h4>
              <p className="utrecht-paragraph">
                <i className="fas fa-building" /> Stadswinkel, Mariënburg 30
              </p>
              <p className="utrecht-paragraph">
                <a href="tel:14 024" color="inherit">
                  <i className="fas fa-phone" /> 14 024
                </a>
              </p>
              <p className="utrecht-paragraph">
                <a href="mailto:gemeente@nijmegen.nl" color="inherit">
                  <i className="fas fa-mail" /> gemeente@nijmegen.nl
                </a>
              </p>
            </address>
          </div>

          <div className="col-xs-12  col-sm-4">
            <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
              Openingstijden
            </h4>
            <p className="utrecht-paragraph">
              Maandag - woensdag: 9.00 - 17.00 <br />
              Donderdag: 9.00 - 20.00 <br />
              Vrijdag: 9.00 - 17.00
            </p>
          </div>

        </div>
      </div> */}
    </footer >
  );
}

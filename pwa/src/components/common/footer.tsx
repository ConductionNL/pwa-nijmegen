import * as React from "react";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";

export default function Footer() {
  return (
    <footer className="utrecht-page-footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">
              Contact
            </h3>
            <div>
              <i className="fas fa-phone-alt mr-2" />
              <a
                href="tel:14024"
                className="utrecht-link utrecht-link--telephone"
              >
                14024
              </a>
            </div>
            <div>
              <i className="fas fa-at mr-2" />
              <a
                href="mailto:gemeente@nijmegen.nl"
                className="utrecht-link utrecht-link--telephone"
              >
                ifo@demodam.nl
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div className="float-right">
              <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">
                Openingstijden
              </h3>
              <p className="utrecht-paragraph utrecht-paragraph--distanced">
                <strong>Maandag - woensdag: 9.00 - 17.00</strong>
                <br />
                <strong>Donderdag: 9.00 - 20.00</strong>
                <br />
                <strong>Vrijdag: 9.00 - 17.00</strong>
              </p>
            </div>
          </div>
          <div className="col-12 ml-auto fit-content">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}

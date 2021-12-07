import * as React from "react";
import Layout from "../components/common/layout";
import { useUrlContext } from "../context/urlContext";
import { useUserContext } from "../context/userContext";
import { Link } from "gatsby";
import DigiDImage from "../images/digid_button.svg";

const IndexPage = () => {
  const context = useUrlContext();
  const user = useUserContext().user;

  React.useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Layout>
      <main>
        <title>Nijmegen</title>
        <div>
          <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
            {user == null ?
              "Mijn Nijmegen" :
              "Welkom " + user.name
            }
          </h1>
          <h6 className="utrecht-heading-6 utrecht-heading-6--distanced">
            Bekijk uw gegevens, meldingen, aanvragen of uitkeringsgegevens op uw persoonlijke gemeentepagina.
          </h6>

          {user == null ? (
          <a className="nijmegen-login-button" href={context.baseUrl + "/digid/login?returnUrl=" + context.frontendUrl + "/redirect"}>
            <div>
              <img src={DigiDImage} width='55px' height='55px' />
              <b>
                INLOGGEN
              </b>
            </div>
          </a>
          ) : (
          <Link
            to="/data"
            className="nijmegen-login-button">
            <div>
              <b>
                MIJN GEGEVENS
              </b>
            </div>
          </Link>
          )}

          <br />

          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
            Wat moet u weten
          </h4>

          <p className="utrecht-paragraph">
            In Mijn Nijmegen vindt u:
          </p>

          <ul className="utrecht-unordered-list utrecht-unordered-list--distanced">
            <li className="utrecht-unordered-list__item">Uw persoonsgegevens</li>
            <li className="utrecht-unordered-list__item">Gegevens over uw diensten</li>
            <li className="utrecht-unordered-list__item">Gegevens over uw zaken</li>
            <li className="utrecht-unordered-list__item">Uw informatie in uw kluis</li>
          </ul>

        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

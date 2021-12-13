import * as React from "react";
import Layout from "../components/common/layout";
import { Link } from "gatsby";
import DigiDImage from "../images/digid_button.svg";
import { getUser, isLoggedIn } from "../services/auth";
import { Alert } from "@conductionnl/nl-design-system/lib/Alert/src/alert";

const IndexPage = () => {

  console.log(getUser())
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

  const AlertBody = () => {
    return (
      <p className="utrecht-paragraph">Alert message here!</p>
    )
  }

  const Alert = () => {
    return (
      <Alert body={AlertBody} alertClass="danger" />
    )
  }

  const RemoveAlert = () => {
    let alert = document.findElementById
  }

  return (
    <Layout>
      <main>
        {
         Alert
        }
        {
         console.log(Alert)
        }
        <title>Nijmegen</title>
        <div>
          <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
            {!isLoggedIn() ?
              "Mijn Nijmegen" :
              "Welkom " + getUser().name
            }
          </h1>
          <h6 className="utrecht-heading-6 utrecht-heading-6--distanced">
            Bekijk uw gegevens, meldingen, aanvragen of uitkeringsgegevens op uw persoonlijke gemeentepagina.
          </h6>

          {!isLoggedIn() ? (
            <a
              className={"nijmegen-login-button"}
              href={
                context.baseUrl +
                "/digid/login?returnUrl=" +
                context.frontendUrl +
                "/redirect"
              }
            >
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

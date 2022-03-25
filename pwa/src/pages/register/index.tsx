import * as React from "react";
import Layout from "../../components/common/layout";
import {List} from "@conductionnl/nl-design-system/lib/List/src/list";
import {Accordion} from "@conductionnl/nl-design-system/lib/Accordion/src/accordion";
import {MainActionMenu} from "../../components/common/actionMenu";
import {getUser, isLoggedIn} from "../../services/auth";
import {Breadcrumbs} from "@conductionnl/nl-design-system/lib/Breadcrumbs/src/breadcrumbs";
import { Card } from "@conductionnl/nl-design-system/lib/Card/src/card";
import "../../styles/main.css"

const Index = () => {
  const [context, setContext] = React.useState(null);
  const [person, setPerson] = React.useState(null);

    React.useEffect(() => {
      if (typeof window !== "undefined" && context === null) {
        setContext({
          apiUrl: window.GATSBY_API_URL,
          frontendUrl: window.GATSBY_FRONTEND_URL,
        });
      } else {
        if (isLoggedIn()) {
          fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${getUser().username}?expand=ouders,kinderen`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
          })
            .then(response => response.json())
            .then((data) => {
              if (data.error !== undefined && data.error.status !== undefined && data.error.status == 404) {
                getPersonWithoutExpand();
              } else {
                setPerson(data);
              }
            });
        }
      }
    }, [context]);

  const getPersonWithoutExpand = () => {
    fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${getUser().username}`, {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then((data) => {
        setPerson(data);
      });
  }

  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <MainActionMenu />
            </div>
            <div className="col-md-6 col-sm-12">
              <Breadcrumbs items={[{
                render: function () {
                  return "Home ";
                }, name: "home", link: "/"
              }, {
                render: function () {
                  return (<><i className="fas fa-chevron-right"/> Verwerkingsregister</>);
                }, name: "data"
              }]}/>
              <h4 className="utrecht-heading-1">Verwerkingsregister</h4>
              <br/>
              <>
               table hier
              </>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;


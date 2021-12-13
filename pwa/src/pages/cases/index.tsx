import * as React from "react";
import Layout from "../../components/common/layout";
import DigiDImage from "../../images/digid_button.svg";
import { Table } from "@conductionnl/nl-design-system/lib/Table/src/table";
import {MainActionMenu} from "../../components/common/actionMenu";
import {getUser, isLoggedIn} from "../../services/auth";
import {Breadcrumbs} from "@conductionnl/nl-design-system/lib/Breadcrumbs/src/breadcrumbs";

const IndexPage = () => {
  const [context, setContext] = React.useState(null);
  const [dossiers, setDossiers] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        apiUrl: window.GATSBY_API_URL,
        frontendUrl: window.GATSBY_FRONTEND_URL,
      });
    } else {
      if (isLoggedIn()) {
        fetch(`${context.apiUrl}/gateways/vrijbrp_dossiers/api/v1/dossiers/search`, {
          method: 'POST',
          credentials: 'include',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            "bsns": [
              '693789128'
            ],
          })
        })
          .then(response => response.json())
          .then((data) => {
            console.log(data);
            if (data.result !== undefined && data.result.content !== undefined) {
              let dossiers = data.result.content;
              for (let i = 0; i < dossiers.length; i++) {
                dossiers[i].id = i;
              }
              setDossiers(dossiers);
            } else {
              setDossiers(null);
            }
          });
      }
    }
  }, [context]);

  return (
    <Layout>
      <main>
        <title>Mijn aanvragen</title>

        <div className="row">
        <div className="col-2">
          <MainActionMenu />
        </div>
        <div className="col-10">
          <Breadcrumbs items={[{render: function () {return "Home";}, name: "home", link: "/index"}, {render: function () {return "Mijn aanvragen";}, name: "cases", link: "/cases"}]} />
          <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
            Aanvragen
          </h1>
          {
            dossiers !== null ?
            <Table columns={[{ headerName: "ID", field: "id" }, { headerName: "Description", field: "description" }, { headerName: "Start date", field: "startDate" }]} rows={dossiers} />
            :
            <p className="utrecht-paragraph">Geen resultaten gevonden</p>
          }
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default IndexPage;

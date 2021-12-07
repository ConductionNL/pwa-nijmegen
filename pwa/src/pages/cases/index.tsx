import * as React from "react";
import Layout from "../../components/common/layout";
import { useUrlContext } from "../../context/urlContext";
import { useUserContext } from "../../context/userContext";
import { Link } from "gatsby";
import DigiDImage from "../../images/digid_button.svg";
import {ActionMenu, BreakpointActionMenu} from "@conductionnl/nl-design-system/lib/ActionMenu/src/actionMenu";
import { Table } from "@conductionnl/nl-design-system/lib/Table/src/table";

const IndexPage = () => {
  const context = useUrlContext();
  const user = useUserContext().user;

  const [dossiers, setDossiers] = React.useState(null);

  const getDossiers = () => {
    fetch(context.apiUrl + '/gateways/vrijbrp_dossiers/api/v1/dossiers/search', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
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

  React.useEffect(() => {
    console.log(user);
    getDossiers();
  }, []);

  return (
    <Layout>
      <main>
        <title>Mijn aanvragen</title>

        <div className="row">
        <div className="col-3">
          <ActionMenu
            items={[{ name: 'Diensten', icon: 'fas fa-shopping-cart', link: '/products' }, { name: 'Mijn aanvragen', icon: 'fas fa-list-alt', link: '/cases' }, { name: 'Mijn gegevens', icon: 'fas fa-id-card-alt', link: '/data' }, { name: 'Mijn kluis', icon: 'fas fa-lock', link: '/vault' }]}
            breakpoint={BreakpointActionMenu.mobile}
          />
        </div>
        <div className="col-9">
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

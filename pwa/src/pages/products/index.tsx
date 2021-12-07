import * as React from "react";
import Layout from "../../components/common/layout";
import { useUrlContext } from "../../context/urlContext";
import { useUserContext } from "../../context/userContext";
import { Link } from "gatsby";
import {ActionMenu, BreakpointActionMenu} from "@conductionnl/nl-design-system/lib/ActionMenu/src/actionMenu";
import {Card} from "@conductionnl/nl-design-system/lib/Card/src/card";
import { Table } from "@conductionnl/nl-design-system/lib/Table/src/table";
import {MainActionMenu} from "../../components/common/actionMenu";

const IndexPage = () => {
  const context = useUrlContext();
  const user = useUserContext().user;

  const [products, setProducts] = React.useState(null);

  const getProducts = () => {
    fetch(context.apiUrl + '/gateways/products', {
      method: 'GET',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data['hydra:member'] !== undefined && data['hydra:member'] !== undefined) {
          setProducts(data);
        } else {
          setProducts(null);
        }
      });
  }

  const hardcodedProducts = [
    {
      id: 1,
      name: "Verhuizen",
      description: "Verhuizen, emigreren, briefadres, geheimhouding persoonsgegevens"
    },
    {
      id: 2,
      name: "Uittreksel en verklaringen",
      description: "Uittreksel burgelijke stand, basisregistratie personen, VOG"
    },
    {
      id: 3,
      name: "Trouwen, partnerschap, scheiden",
      description: "Trouwen, geregistreerd partnerschap, scheiden"
    }];

  const createCardBody = (product: { description: string; id: string; }) => {
    return (<>
      <p className="utrecht-paragraph">{product.description}</p>
      <Link to={"/products" + product.id} className="utrecht-link text-right float-right mt-2">Bekijken</Link>
    </>)
  }

  React.useEffect(() => {
    console.log(user);
    // getProducts();
    setProducts(hardcodedProducts);
  }, []);

  return (
    <Layout>
      <main>
        <title>Diensten</title>

        <div className="row">
          <div className="col-3">
            <MainActionMenu />
          </div>
          <div className="col-9">
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
              Diensten
            </h1>
            {
              products !== null && products.length != 0 &&
                <div className="row">
                {products.map((product: { name: string; }) => (
                  <div className="col-6">
                    <Card title={product.name} cardBody={createCardBody(product)} />
                  </div>
                ))}
               </div>
            }
          </div>
        </div>

      </main>
    </Layout>
  );
};

export default IndexPage;

import * as React from "react";
import Layout from "../../components/common/layout";
import { Link } from "gatsby";
import {Card} from "@conductionnl/nl-design-system/lib/Card/src/card";
import {MainActionMenu} from "../../components/common/actionMenu";
import {isLoggedIn} from "../../services/auth";
import {Breadcrumbs} from "@conductionnl/nl-design-system/lib/Breadcrumbs/src/breadcrumbs";

const IndexPage = () => {
  const [context, setContext] = React.useState(null);
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        apiUrl: window.GATSBY_API_URL,
      });
    } else {
      if (isLoggedIn()) {
        fetch(`${context.apiUrl}/gateways/products`, {
          credentials: 'include',
          headers: {'Content-Type': 'application/json'},
        })
          .then(response => response.json())
          .then((data) => {
            console.log(data);
            if (data['hydra:member'] !== undefined && data['hydra:member'] !== undefined) {
              setProducts(data);
            } else {
              setProducts(hardcodedProducts);
            }
          });
      }
    }
  }, [context]);

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
  return (
    <Layout>
      <main>
        <title>Diensten</title>

        <div className="row">
          <div className="col-2">
            <MainActionMenu />
          </div>
          <div className="col-10">
            <Breadcrumbs items={[{
              render: function () {
                return "Home ";
              }, name: "home", link: "/"
            }, {
              render: function () {
                return (<><i className="fas fa-chevron-right"/> Diensten</>);
              }, name: "products"
            }]}/>
            <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
              Diensten
            </h1>
            {
              products !== null && products.length != 0 &&
                <div className="row">
                {products.map((product: { name: string; description: string; id: string; }) => (
                  <div className="col-6" key={product.name}>
                    <Card title={product.name} cardBody={function () { return(createCardBody(product))}} />
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

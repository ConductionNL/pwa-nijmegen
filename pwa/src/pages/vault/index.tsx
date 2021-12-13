import {
  BottomNavigation,
  BreakpointBottomNavigation
} from "@conductionnl/nl-design-system/lib/BottomNavigation/src/bottomNavigation";
import * as React from "react";
import Layout from "../../components/common/layout";
import {MainActionMenu} from "../../components/common/actionMenu";
import Waardepapieren from "../../components/vault/waardepapieren";
import {Breadcrumbs} from "@conductionnl/nl-design-system/lib/Breadcrumbs/src/breadcrumbs";

const Index = () => {
  return (
    <Layout>
      <main>
        <div className="container">
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
                  return (<><i className="fas fa-chevron-right"/> Mijn kluis</>);
                }, name: "vault"
              }]}/>
              <h4 className="utrecht-heading-1">Mijn kluis</h4>
              <br/>
              <>
                <Waardepapieren />
              </>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;

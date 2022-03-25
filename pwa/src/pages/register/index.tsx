import * as React from "react";
import Layout from "../../components/common/layout";
import {MainActionMenu} from "../../components/common/actionMenu";
import {Breadcrumbs} from "@conductionnl/nl-design-system/lib/Breadcrumbs/src/breadcrumbs";
import "../../styles/main.css"
import RegisterTable from "../../components/register/registerTable";

const Index = () => {
  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <MainActionMenu />
            </div>
            <div className="col-md-10 col-sm-12">
              <Breadcrumbs items={[{
                render: function () {
                  return "Home ";
                }, name: "home", link: "/"
              }, {
                render: function () {
                  return (<><i className="fas fa-chevron-right"/> Verwerkingsregister</>);
                }, name: "register"
              }]}/>
              <br/>
             <RegisterTable />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;


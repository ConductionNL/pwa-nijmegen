import * as React from "react";
import Layout from "../../components/common/layout";
import {MainActionMenu} from "../../components/common/actionMenu";
import {Breadcrumbs} from "@conductionnl/nl-design-system/lib/Breadcrumbs/src/breadcrumbs";
import ContractCard from "../../components/contract/contractCard";

const IndexPage = (props: any) => {
  const id: string = props.params.id === "new" ? null : props.params.id;

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
                return (<><i className="fas fa-chevron-right"/> Contracten inzien</>);
              }, name: "contract", link: "/contract"
            },
            {
              render: function () {
                return (<><i className="fas fa-chevron-right"/> Contract tekenen</>);
              }, name: "signContract"
            }]}/>
            <br/>
            <ContractCard {...{ id }} />
          </div>
        </div>
      </div>
    </main>
  </Layout>
  );
};

export default IndexPage;

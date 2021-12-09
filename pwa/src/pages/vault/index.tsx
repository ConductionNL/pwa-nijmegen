import {
  BottomNavigation,
  BreakpointBottomNavigation
} from "@conductionnl/nl-design-system/lib/BottomNavigation/src/bottomNavigation";
import * as React from "react";
import Layout from "../../components/common/layout";
import {MainActionMenu} from "../../components/common/actionMenu";
import Waardepapieren from "../../components/vault/waardepapieren";

const Index = () => {
  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <MainActionMenu />
              <BottomNavigation
                items={[{name: 'Diensten', icon: 'fas fa-shopping-cart', link: '/index'}, {
                  name: 'Mijn aanvragen',
                  icon: 'fas fa-list-alt',
                  link: ''
                }, {name: 'Mijn gegevens', icon: 'fas fa-id-card-alt', link: ''}, {
                  name: 'Mijn kluis',
                  icon: 'fas fa-lock',
                  link: ''
                }]}
                breakpoint={BreakpointBottomNavigation.mobile}
              />
            </div>
            <div className="col-9">
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

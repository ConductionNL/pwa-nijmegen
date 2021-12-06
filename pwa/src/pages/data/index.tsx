import BottomNavigation, { Breakpoint } from "@conductionnl/nl-design-system/lib/BottomNavigation/src/bottomNavigation";
import * as React from "react";
import Layout from "../../components/common/layout";

const Index = () => {

  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <BottomNavigation
                items={[{name: 'Diensten', icon: 'fas fa-shopping-cart', link: '/index'}, {name: 'Mijn aanvragen', icon: 'fas fa-list-alt', link: ''}, {name: 'Mijn gegevens', icon: 'fas fa-id-card-alt'}, {name: 'Mijn kluis', icon: 'fas fa-lock'}]}
                breakpoint={Breakpoint.mobile}
              />
            </div>
            <div className="col-9">
              <h4 className="utrecht-heading-1">Mijn gegevens</h4>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;

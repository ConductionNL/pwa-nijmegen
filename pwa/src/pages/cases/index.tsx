import * as React from "react";
import Layout from "../../components/common/layout";
import { useUrlContext } from "../../context/urlContext";
import { useUserContext } from "../../context/userContext";
import { Link } from "gatsby";
import DigiDImage from "../../images/digid_button.svg";
import BottomNavigation, { Breakpoint } from "@conductionnl/nl-design-system/lib/BottomNavigation/src/bottomNavigation";

const IndexPage = () => {
  const context = useUrlContext();
  const user = useUserContext().user;

  React.useEffect(() => {
    console.log(user);
  }, []);

  return (
    <Layout>
      <main>
        <title>Nijmegen</title>

        <div className="col-3">
          <BottomNavigation
            items={[{ name: 'Diensten', icon: 'fas fa-shopping-cart', link: '/products' }, { name: 'Mijn aanvragen', icon: 'fas fa-list-alt', link: '/cases' }, { name: 'Mijn gegevens', icon: 'fas fa-id-card-alt' }, { name: 'Mijn kluis', icon: 'fas fa-lock' }]}
            breakpoint={Breakpoint.mobile}
          />
        </div>
        <div className="col-9">
        <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
          {user == null ?
            "Mijn Nijmegen" :
            "Welkom " + user.name
          }
        </h1>
        </div>

      </main>
    </Layout>
  );
};

export default IndexPage;

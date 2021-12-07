import {
  BottomNavigation,
  BreakpointBottomNavigation
} from "@conductionnl/nl-design-system/lib/BottomNavigation/src/bottomNavigation";
import * as React from "react";
import Layout from "../../components/common/layout";
import {ActionMenu, BreakpointActionMenu} from "@conductionnl/nl-design-system/lib/ActionMenu/src/actionMenu";
import {List} from "@conductionnl/nl-design-system/lib/List/src/list";
import {useUrlContext} from "../../context/urlContext";
import {useUserContext} from "../../context/userContext";
import {Accordion} from "@conductionnl/nl-design-system/lib/Accordion/src/accordion";

const Index = () => {
  const context = useUrlContext();
  const user = useUserContext().user;

  const [person, setPerson] = React.useState(null);

  console.log('user')
  console.log(user);
  console.log(person)

  const getPerson = () => {
    fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${user.username}?expand=ouders,kinderen`, {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then((data) => {
        console.log('data')
        console.log(data);
        if (data.error !== undefined && data.error.status !== undefined && data.error.status == 404) {
          getPersonWithoutExpand();
        } else {
          setPerson(data);
          // const children = person['_embedded'].kinderen;
        }
        console.log(data)
      });
  }

  const getPersonWithoutExpand = () => {
    fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${user.username}`, {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then((data) => {
        setPerson(data);
      });
  }


  React.useEffect(() => {
    if (user !== null) {
      getPerson();
    }
  }, []);

  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ActionMenu
                items={[{name: 'Diensten', icon: 'fas fa-shopping-cart', link: '/index'}, {
                  name: 'Mijn aanvragen',
                  icon: 'fas fa-list-alt',
                  link: ''
                }, {name: 'Mijn gegevens', icon: 'fas fa-id-card-alt', link: ''}, {
                  name: 'Mijn kluis',
                  icon: 'fas fa-lock',
                  link: ''
                }]}
                breakpoint={BreakpointActionMenu.mobile}
              />
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
              <h4 className="utrecht-heading-1">Mijn gegevens</h4>
              <br/>
              <>
                {
                  person !== null && person.naam !== undefined && person.naam.voornamen && (
                    <List items={[{name: "Voornaam", value: person.naam.voornamen},
                      {name: "Achternaam", value: person.naam.geslachtsnaam},
                      {name: "Geslacht", value: person.geslachtsaanduiding}
                    ]}/>
                  )
                }
                {
                  person !== null && (
                    <List items={[{name: "Straat", value: person.verblijfplaats.adresregel1},
                      {name: "Plaats", value: person.verblijfplaats.woonplaats},
                      {name: "Vanaf", value: person.verblijfplaats.datumAanvangAdreshouding.datum},
                      {name: "Aantal bewoners", value: ""}
                    ]}/>
                  )
                }
                {
                  person !== null && person['_embedded'] !== undefined && person['_embedded'] !== null && person['_embedded'].kinderen !== undefined && person['_embedded'].kinderen !== null &&
                  <Accordion items={[{
                    id: 'kinderenItem', title: 'Kinderen', render: function () {
                      return (
                        person['_embedded'].kinderen.map((row) => (
                          <List items={[{name: "Voornamen", value: row.naam.voornamen},
                            {name: "Achternaam", value: row.naam.geslachtsnaam},
                            {name: "Geslacht", value: row.geslachtsaanduiding}
                          ]}/>
                        ))
                      )
                    }
                  }]} id={"kinderen"}/>
                }
                {
                  person !== null && person['_embedded'] !== undefined && person['_embedded'] !== null && person['_embedded'].ouders !== undefined && person['_embedded'].ouders !== null &&
                  <Accordion items={[{
                    id: 'oudersItem', title: 'Ouders', render: function () {
                      return (
                        person['_embedded'].ouders.map((row) => (
                          <List items={[{name: "Voornamen", value: row.naam.voornamen},
                            {name: "Achternaam", value: row.naam.geslachtsnaam},
                            {name: "Geslacht", value: row.geslachtsaanduiding}
                          ]}/>
                        ))
                      )
                    }
                  }]} id={"ouders"}/>
                }
              </>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Index;

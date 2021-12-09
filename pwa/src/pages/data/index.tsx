import {
  BottomNavigation,
  BreakpointBottomNavigation
} from "@conductionnl/nl-design-system/lib/BottomNavigation/src/bottomNavigation";
import * as React from "react";
import Layout from "../../components/common/layout";
import {List} from "@conductionnl/nl-design-system/lib/List/src/list";
import {Accordion} from "@conductionnl/nl-design-system/lib/Accordion/src/accordion";
import {MainActionMenu} from "../../components/common/actionMenu";
import {getUser, isLoggedIn} from "../../services/auth";

const Index = () => {
  const [context, setContext] = React.useState(null);
  const [person, setPerson] = React.useState(null);

    React.useEffect(() => {
      if (typeof window !== "undefined" && context === null) {
        setContext({
          apiUrl: window.GATSBY_API_URL,
          frontendUrl: window.GATSBY_FRONTEND_URL,
        });
      } else {
        if (isLoggedIn()) {
          fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${getUser().username}?expand=ouders,kinderen`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
          })
            .then(response => response.json())
            .then((data) => {
              if (data.error !== undefined && data.error.status !== undefined && data.error.status == 404) {
                getPersonWithoutExpand();
              } else {
                setPerson(data);
              }
            });
        }
      }
    }, [context]);

  const getPersonWithoutExpand = () => {
    fetch(`${context.apiUrl}/gateways/brp/ingeschrevenpersonen/${getUser().username}`, {
      credentials: 'include',
      headers: {'Content-Type': 'application/json'},
    })
      .then(response => response.json())
      .then((data) => {
        setPerson(data);
      });
  }

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
              <h4 className="utrecht-heading-1">Mijn gegevens</h4>
              <br/>
              <>
                {
                  person !== null && person.naam !== undefined && (
                    <List items={[{name: "Voornaam", value: person.naam.voornamen ?? null},
                      {name: "Achternaam", value: person.naam.voorletters !== null ? `${person.naam.voorletters} ${person.naam.geslachtsnaam}` : person.naam.geslachtsnaam == null ? null : person.naam.geslachtsnaam},
                      {name: "Geslacht", value: person.geslachtsaanduiding ?? null}
                    ]}/>
                  )
                }
                {
                  person !== null && person.verblijfplaats !== undefined && (
                    <List items={[{name: "Straat", value: person.verblijfplaats.straat ?? null},
                      {name: "Huisnummer", value: person.verblijfplaats.huisnummer ?? null},
                      {name: "Postcode", value: person.verblijfplaats.postcode ?? null},
                      {name: "Plaats", value: person.verblijfplaats.woonplaats ?? null},
                      {name: "Vanaf", value: person.verblijfplaats.datumAanvangAdreshouding.datum ?? null},
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
                            {name: "Achternaam", value: row.naam.voorletters !== null ? `${row.naam.voorletters} ${row.naam.geslachtsnaam}` : row.naam.geslachtsnaam == null ? null : row.naam.geslachtsnaam},
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
                            {name: "Achternaam", value: row.naam.voorletters !== null ? `${row.naam.voorletters} ${row.naam.geslachtsnaam}` : row.naam.geslachtsnaam == null ? null : row.naam.geslachtsnaam},
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

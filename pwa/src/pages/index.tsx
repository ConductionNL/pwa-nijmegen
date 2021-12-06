import * as React from "react";
import Layout from "../components/common/layout";
import { useUrlContext } from "../context/urlContext";

const IndexPage = () => {
  const context = useUrlContext();

  React.useEffect(() => {
    console.log(context.apiUrl);
    console.log(context.meUrl);
  }, []);

  return (
    <Layout>
      <main>
        <title>Skeleton app</title>
        <div>
          <h1 className="utrecht-heading-1 utrecht-heading-1--distanced">
            Welkom
          </h1>
          <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
            Dit is de skeleton NL Design applicatie.
          </h4>
          <p className="utrecht-p">
            Het doel van deze skeleton applicatie is om meerdere design tokens
            te testen over een set NL Design componenten. Ook zou je deze
            applicatie als template kunnen gebruiken om zelf een app te bouwen
            in NL Design. De link naar onze github repo:
            https://github.com/ConductionNL/nl-design-skeleton-gatsby
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

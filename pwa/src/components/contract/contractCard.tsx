import * as React from "react";
import {
  Card,
} from "@conductionnl/nl-design-system/lib";

interface ContractCardProps {
  id?: string;
}

export const ContractCard: React.FC<ContractCardProps> = ({ id }) => {
  const [context, setContext] = React.useState(null);
  const [contract, setContract] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        adminUrl: window.GATSBY_ADMIN_URL,
      });
    } else {
        fetch(`${context.adminUrl}/contracts/${id}`, {
          credentials: 'include',
          headers: {'Content-Type': 'application/json'},
        })
          .then(response => response.json())
          .then((data) => {
            setContract(data)
          });
      }
  }, [context]);

  return (
      <Card
        title={"Contract tekenen"}
        cardBody={function () {
          return (
            <div className="row">
              <div className="col-12">
              info in card 
              </div>
            </div>
          );
        }}
      />
  );
};

export default ContractCard;

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
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'c3fbb3a8-9f94-4679-b204-31e80d853d68'
          },
        })
          .then(response => response.json())
          .then((data) => {
            setContract(data)
          });
      }
  }, [context]);

  return (
      <Card
        title={contract?.application.name}
        cardBody={function () {
          return (
            <div className="row">
              <div className="col-12">
                <b>Do you agree to these grants: </b>
                <br/>
                <ul>
                {
                  contract?.grants.map((value, idx) => {
                    return (
                      <li key={idx}>{value}</li>
                    )
                  })
                }
                </ul>
                <br/>
                <b>Purpose: Klantgegevens ophalen</b>
                <div>
                  <input type="checkbox" id="agreement" name="agreement"/>  
                  <label for="agreement"> {' I agree'}</label>
                </div>
                <div>
                  <input type="checkbox" id="disagreement" name="disagreement"/>  
                  <label for="disagreement">{' I disagree'}</label>
                </div>
                <br/>
                <div>
                  <button className="utrecht-button" type="button">Sign</button>
                </div>
                
              </div>
            </div>
          );
        }}
      />
  );
};

export default ContractCard;

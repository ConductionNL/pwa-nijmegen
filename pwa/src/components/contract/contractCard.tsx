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
    if (contract !== null) {
      setContract({ id: '1234', application: {name: 'Kiss application'}, user: '4cc436c4-e45f-4e7f-a37c-abc9f5b3edf2', appSignedDate: '2020/12/12 12:15:05', userSignedDate: '2020/12/12 12:15:05'});
    }
  }, [contract]);

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
        title={"Sign contract for Kiss application"}
        cardHeader={function () {
          return (
           <h4>{''} </h4>
          );
        }}
        cardBody={function () {
          return (
            <div className="row">
              <div className="col-12">
                <b>Do you agree to these grants: </b>
                <ul>
                  <li>GET.ingeschrevenpersonen.address</li>
                  <li>GET.ingeschrevenpersonen.email</li>
                  <li>GET.ingeschrevenpersonen.phone</li>
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

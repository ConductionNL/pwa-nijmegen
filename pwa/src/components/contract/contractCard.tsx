import * as React from "react";
import {
  Card,
} from "@conductionnl/nl-design-system/lib";

interface ContractCardProps {
  id?: string;
}

export const ContractCard: React.FC<ContractCardProps> = ({ id }) => {

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

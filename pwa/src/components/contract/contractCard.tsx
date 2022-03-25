import * as React from "react";
import {
  GenericInputComponent,
  TextareaGroup,
  Spinner,
  Card,
  Accordion,
  Modal,
} from "@conductionnl/nl-design-system/lib";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";

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

import * as React from "react";
import {
  SelectInputComponent,
  WaardepapierenTable,
} from "@conductionnl/nl-design-system";
import {documentDownload} from "../utility/DocumentDownload";
import Modal from "@conductionnl/nl-design-system/lib/Modal/src/modal";
import {getUser, isLoggedIn} from "../../services/auth";
import {navigate} from "gatsby-link";

export default function Waardepapieren() {
  const [context, setContext] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        apiUrl: window.GATSBY_API_URL,
        frontendUrl: window.GATSBY_FRONTEND_URL,
        organizationUrl: window.GATSBY_ORGANIZATION,
        waardepapierenPaymentRequired: window.WAARDEPAPIEREN_PAYMENT_REQUIRED,
      });
    } else {
      if (isLoggedIn()) {
        fetch(
          `${context.apiUrl}/gateways/waardepapieren-register/certificates?person=${getUser().username}`,
          {
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => {
            setWaardepapieren(data["hydra:member"]);
          });
      }
    }
  }, [context]);

  const refreshTable = () => {
    setWaardepapieren(null);
    fetch(
      `${context.apiUrl}/gateways/waardepapieren-register/certificates?person=${getUser().username}`,
      {
        credentials: 'include',
        headers: {'Content-Type': 'application/json'},
      })
      .then(response => response.json())
      .then((data) => {
        setWaardepapieren(data['hydra:member']);
      });
  }

  const [waardepapieren, setWaardepapieren] = React.useState(null);

  const options = [
    {
      name: "Akte van geboorte",
      value: "akte_van_geboorte",
    },
    {
      name: "Verklaring van in leven zijn",
      value: "verklaring_van_in_leven_zijn",
    },
    {
      name: "Uitreksel basis registratie personen",
      value: "uitreksel_basis_registratie_personen",
    },
  ];

  const handleCertificate = (event) => {
    event.preventDefault();
    const type = event.target.waardepapier.value;

    let price = null;

    switch (type) {
      case "akte_van_geboorte":
        price = 1400;
        break;
      case "verklaring_van_in_leven_zijn":
        price = 1400;
        break;
      case "uitreksel_basis_registratie_personen":
        break;
      default:
        price = null;
        break;
    }

    if (price === null) {
      return;
    }

    const body = {
      organization: context.organizationUrl,
      price: price,
      type: type,
      person: getUser().id,
      name: getUser().name,
      ingenicoUrl: `${context.frontendUrl}/pay-certificate`,
    };

    if (context.waardepapierenPaymentRequired) {
      fetch(`${context.apiUrl}/gateways/waardepapieren-service/payments`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (typeof window !== "undefined") {
            window.sessionStorage.setItem("payment", JSON.stringify(data));
            navigate("/pay-certificate");
          }
        });
    } else {
      fetch(`${context.apiUrl}/gateways/waardepapieren-service/certificates`, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
      })
        .then((response) => {
          if (response.ok) {
            refreshTable();
            navigate("/vault");
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          if (typeof window !== "undefined") {
          }
        });
    }
  };
  
  return (
    <>
      <div>
        <div style={{textAlign: "right"}}>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#claims">
            Claims
          </button>
        </div>
        <Modal title={"Claims"}
               id={"claims"}
               body={function () {
                 return (
                   <form onSubmit={handleCertificate} className={"mb-4"}>
                     <div className="row">
                       <div className="col-12">
                         <SelectInputComponent
                           required={true}
                           options={options}
                           name={"waardepapier"}
                           nameOverride={"Type Claim"}
                           id={"waardepapieren"}
                         />
                       </div>
                       <br/>
                       <div className="col-12">
                         <button data-bs-dismiss="modal" className={"utrecht-button"}>Aanvragen</button>
                       </div>
                     </div>
                   </form>
                 )
               }}/>
      </div>
      {waardepapieren !== null ? (
        <WaardepapierenTable
          rows={waardepapieren}
          fileFunction={documentDownload}
        />
      ) : (
        <WaardepapierenTable
          rows={[]}
          fileFunction={documentDownload}
        />
      )
      }
    </>
  );
}

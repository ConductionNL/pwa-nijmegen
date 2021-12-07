import * as React from "react";
import {
  WaardepapierenTable,
} from "@conductionnl/nl-design-system";
import { documentDownload } from "../utility/DocumentDownload";
import {useUrlContext} from "../../context/urlContext";
import {useUserContext} from "../../context/userContext";

export default function Waardepapieren() {
  const context = useUrlContext();
  const person = useUserContext().user;

  const [waardepapieren, setWaardepapieren] = React.useState(null);

  React.useEffect(() => {
    fetch(`${context.apiUrl}/gateways/waardepapieren-register/certificates?person=${person.bsn}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then((data) => {
        setWaardepapieren(data['hydra:member']);
        console.log('Waardepapieren:')
        console.log(data['hydra:member'])
      });
  }, []);

  return (
    <>
      { waardepapieren !== null &&
      waardepapieren > 0 ? (
        <WaardepapierenTable
          rows={waardepapieren}
          fileFunction={documentDownload}
        />
      ) : (
        <p className="utrecht-paragraph">Geen resultaten gevonden</p>
      )
      }
    </>
  );
}

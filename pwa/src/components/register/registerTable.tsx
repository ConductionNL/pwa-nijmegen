import * as React from "react";
import { Card, Table } from "@conductionnl/nl-design-system/lib";

export default function RegisterTable() {
  const [context, setContext] = React.useState(null);
  const [registers, setRegisters] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        apiUrl: window.GATSBY_API_URL,
      });
    } else {
        fetch(`${context.apiUrl}/verwerkingsacties`, {
          credentials: 'include',
          headers: {'Content-Type': 'application/json'},
        })
          .then(response => response.json())
          .then((data) => {
            setRegisters(data)
          });
      }
  }, [context]);

  return (
    <Card
      title={"Verwerkingsregister"}
      cardBody={function () {
        return (
          <div className="row">
            <div className="col-12">
                  <Table
                    columns={[
                      {
                        headerName: "Vertrouwelijkheid",
                        field: "vertrouwelijkheid",
                      },
                      {
                        headerName: "Bewaartermijn",
                        field: "bewaartermijn",
                      },
                      {
                        headerName: "Gegevensbron",
                        field: "gegevensbron",
                      },
                      {
                        headerName: "Tijdstip",
                        field: "tijdstip",
                        renderCell: (item: { tijdstip: string }) => new Date(item.tijdstip).toLocaleString("nl-NL"),
                      },
                    ]}
                    rows={registers ?? []}
                  />
            </div>
          </div>
        );
      }}
    />
  );
}

import * as React from "react";
import { Card, Table } from "@conductionnl/nl-design-system/lib";
import { Link } from "gatsby";

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
                        headerName: "Name",
                        field: "name",
                      },
                      {
                        headerName: "Description",
                        field: "description",
                      },
                      {
                        field: "id",
                        headerName: " ",
                        renderCell: (item: { id: string }) => {
                          return (
                            <div className="utrecht-link d-flex justify-content-end">
                              <Link className="utrecht-link d-flex justify-content-end" to={`/endpoints/${item.id}`}>
                                <button className="utrecht-button btn-sm btn-success">
                                 Edit
                                </button>
                              </Link>
                            </div>
                          );
                        },
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

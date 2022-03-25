import * as React from "react";
import { Card, Table } from "@conductionnl/nl-design-system/lib";
import { Link } from "gatsby";

export default function ContractTable() {
  const [context, setContext] = React.useState(null);
  const [contracts, setContracts] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        adminUrl: window.GATSBY_ADMIN_URL,
      });
    } else {
        fetch(`${context.adminUrl}/contracts`, {
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'c3fbb3a8-9f94-4679-b204-31e80d853d68'
        },
        })
          .then(response => response.json())
          .then((data) => {
            setContracts(data)
          });
      }
  }, [context]);

  return (
    <Card
      title={"Contracten"}
      cardBody={function () {
        return (
          <div className="row">
            <div className="col-12">
                  <Table
                    columns={[
                      {
                        headerName: "Application",
                        field: "application",
                        valueFormatter: (item: { name: string }) => {
                          return item ? item.name : "";
                        },
                      },
                      {
                        headerName: "User",
                        field: "user",
                      },
                      {
                        headerName: "App signed at",
                        field: "appSignedDate",
                      },
                      {
                        headerName: "User signed at",
                        field: "userSignedAt",
                      },
                      {
                        field: "id",
                        headerName: " ",
                        renderCell: (item: { id: string }) => {
                          return (
                            <div className="utrecht-link d-flex justify-content-end">
                              <Link className="utrecht-link d-flex justify-content-end" to={`/contracts/${item.id}`}>
                                <button className="utrecht-button btn-sm btn-success">
                                 Edit
                                </button>
                              </Link>
                            </div>
                          );
                        },
                      },
                    ]}
                    rows={contracts ?? [{application: {name: 'No results found'}, user: '', appSignedDate: '',userSignedAt: '' }]}
                  />
            </div>
          </div>
        );
      }}
    />
  );
}

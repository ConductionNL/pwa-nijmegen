import * as React from "react";
import { Card, Table } from "@conductionnl/nl-design-system/lib";
import { Link } from "gatsby";

export default function ContractTable() {
  const [context, setContext] = React.useState(null);
  const [contracts, setContracts] = React.useState(null);

  React.useEffect(() => {
    if (contracts !== null) {
      setContracts([{ id: '1234', application: {name: 'Kiss application'}, user: '4cc436c4-e45f-4e7f-a37c-abc9f5b3edf2', appSignedDate: '2020/12/12 12:15:05', userSignedDate: '2020/12/12 12:15:05'}]);
    }
  }, [contracts]);

  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        adminUrl: window.GATSBY_ADMIN_URL,
      });
    } else {
        fetch(`${context.adminUrl}/contracts`, {
          credentials: 'include',
          headers: {'Content-Type': 'application/json'},
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

              {
                contracts &&
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
                        field: "userSignedDate",
                      },
                      {
                        field: "id",
                        headerName: " ",
                        renderCell: (item: { id: string }) => {
                          return (
                            <div className="utrecht-link d-flex justify-content-end">
                              <Link className="utrecht-link d-flex justify-content-end" to={`/contract/${item.id}`}>
                                <button className="utrecht-button btn-sm btn-success">
                                 Edit
                                </button>
                              </Link>
                            </div>
                          );
                        },
                      },
                    ]}
                    rows={[{ id: '1234', application: {name: 'Kiss application'}, user: '4cc436c4-e45f-4e7f-a37c-abc9f5b3edf2', appSignedDate: '', userSignedDate: ''}]}
                  />
              }
            </div>
          </div>
        );
      }}
    />
  );
}

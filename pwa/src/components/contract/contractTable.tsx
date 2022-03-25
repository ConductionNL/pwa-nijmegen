import * as React from "react";
import { Card, Table } from "@conductionnl/nl-design-system/lib";
import { Link } from "gatsby";

export default function ContractTable() {

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
                        headerName: "Name",
                        field: "name",
                      },
                      {
                        headerName: "Path",
                        field: "path",
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
                    rows={[]}
                  />
            </div>
          </div>
        );
      }}
    />
  );
}

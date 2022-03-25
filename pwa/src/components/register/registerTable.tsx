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
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzUxMiJ9.eyJ1c2VySWQiOiI1OWM1N2JmMy1hYjMwLTRhYTItOWQ4OS1hODFkODEwNTI1M2YiLCJyb2xlcyI6WyJ1c2VyIiwiZ3JvdXAuYWRtaW4iLCJzY29wZS5QT1NULmFkbWluIiwic2NvcGUuR0VULmFkbWluIiwic2NvcGUuREVMRVRFLmFkbWluIiwic2NvcGUuUFVULmFkbWluIl0sInNlc3Npb24iOiJjYzEwNmFjOS01MmMyLTRjZGMtODU5MS01NTQxOWNlNzY3ZDUiLCJjc3JmVG9rZW4iOiI2Yzg1OTM3YzQ4ZDk5MzFmYzIyMGYxZC45aHktMlptd3RFVV9ueU5nZXFCZTduSmVsbUUyNTFBTTBtdnFHblhiMkFZLnhFdm90NmpLakNON3lXeE5QOGRwM2hndF9CZHVyMk5ablNpeldSLTVna202ZTlxVDRkdnREVWpkYWciLCJpc3MiOiJodHRwczpcL1wvZ2F0ZXdheS5jb21tb24tZ3JvdW5kLmRldlwvYXBpXC92MlwvdWMiLCJpYXMiOjE2NDgyMjExMzcsImV4cCI6MTY0ODIyNDczN30.W-C5G8hMjNZ6ZI8UyXUyd8Wungqiqc-BtUCJn1tM_0-tbjtflDz53xuG-Xi1nvfxIBsN-F6Sfcsj5Dk6J5NZ6fGARptFuMNDjtAIIUDCJrcbrjxFniHBV-b8cqh4nJGny9L4EE4c0co5F3cjrIRXg6n0R65vvmTKKuAzS0e-onkHVhzNyhoYGpwOVPMYvQFQwJ-knV-Zb4gw0ylPqfW5lkgh5LWs6o2nok6t2LiFnOvNjRSxC1SC5D2PRUmm8LDhgw9GO3yKwRaGwuL5RMH4C4lMZuIzkzEaqCzRqGAYKkEF_-6Lk2j9E1nUWQV7rJX0ankm-17TFHRT_hj34dtCmw'
          },
        })
          .then(response => response.json())
          .then((data) => {
            setRegisters(data.results)
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
                  rows={registers ?? [{vertrouwelijkheid: '', bewaartermijn: '', gegevensbron: '', tijdstip: '' }]}
                />
            </div>
          </div>
        );
      }}
    />
  );
}

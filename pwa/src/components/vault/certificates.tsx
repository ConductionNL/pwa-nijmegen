import Card from "@conductionnl/nl-design-system/lib/Card/src/card";
import { Link } from "gatsby";
import * as React from "react";
import { isLoggedIn } from "../../services/auth";
import { navigate } from "gatsby-link";

export default function Certificates() {
  const [context, setContext] = React.useState(null);
  React.useEffect(() => {
    if (typeof window !== "undefined" && context === null) {
      setContext({
        apiUrl: window.GATSBY_API_URL,
      });
    } else {
      if (isLoggedIn() && typeof window !== "undefined") {
        const queryString = window.location.search;

        if (queryString.length === 0) {
          setPayment(
            JSON.parse(window.sessionStorage.getItem("payment") as string)
          );
        } else {
          handlePayment();
        }
      }
    }
  }, [context]);

  const [payment, setPayment] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const handlePayment = () => {
    setLoading(true);
    const payment = JSON.parse(
      window.sessionStorage.getItem("payment") as string
    );

    if (typeof window !== "undefined") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const orderId = urlParams.get("orderID");

      if (payment.orderId !== orderId) {
        navigate("/");
      }

      fetch(
        `${context.apiUrl}/gateways/service/payments/${payment.id}/certificate${queryString}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          navigate("/");
        });
    }
  };

  const handleBack = () => {
    console.log(payment);
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("payment");
      navigate("/");
    }
  };

  return (
    <>
      <div>
        <Card
          title={"Betalen"}
          cardHeader={function () {
            return (
              <>
                {loading === null && (
                  <button onClick={handleBack} className="utrecht-button">
                    Terug
                  </button>
                )}
              </>
            );
          }}
          cardBody={function () {
            return (
              <>
                {loading !== null && (
                  <>
                    <div className="text-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  </>
                )}
                {payment !== null && loading === null && (
                  <form method="POST" action={payment.redirectUrl}>
                    <div className="row">
                      <div className="col-12 text-start">
                        <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
                          <strong>Waardepapier:</strong>{" "}
                          {payment.type.replaceAll("_", " ")}
                        </h4>
                      </div>
                      <div className="col-12 text-start">
                        <h4 className="utrecht-heading-4 utrecht-heading-4--distanced">
                          <strong>Kost:</strong> € {payment.price / 100},-
                        </h4>
                      </div>
                      <div className="col-12 text-start mt-4">
                        <button className={"utrecht-button"}>Betalen</button>
                      </div>
                    </div>
                    {Object.entries(payment.configuration).map(
                      ([key, value]) => {
                        return (
                          <input
                            key={key}
                            type="hidden"
                            name={key}
                            value={value}
                          />
                        );
                      }
                    )}
                  </form>
                )}
              </>
            );
          }}
        />
      </div>
    </>
  );
}

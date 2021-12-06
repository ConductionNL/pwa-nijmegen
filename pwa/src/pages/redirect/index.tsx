import * as React from "react";
import Layout from "../../components/common/layout";
import { useEffect } from "react";
import { useUrlContext } from "../../context/urlContext";
import { navigate } from "gatsby-link";
import { setUser } from "../../services/auth";

const Redirect = () => {
  const urlContext = useUrlContext();

  const handleLogin = () => {
    fetch(urlContext.meUrl, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Something went wrong.");
      })
      .then(function (data) {
        setUser(data);

        if (urlContext.loginRedirect !== "null") {
          navigate("/" + urlContext.loginRedirect);
        } else {
          navigate("/");
        }
      })
      .catch(function () {
        navigate("/");
      });
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <Layout>
      <main>
        <div className="row text-center">
          <div className="col-12">
            <h1 className="utrecht-heading-1">Aan het inloggen</h1>
          </div>
          <div className="col-12">
            <h4 className="utrecht-heading-4">even geduld alstublieft..</h4>
          </div>
          <div className="col-12 mt-5">
            <div
              className="spinner-border text-primary redirect-loader-size"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Redirect;

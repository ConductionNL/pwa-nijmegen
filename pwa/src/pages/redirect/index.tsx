import * as React from "react";
import Layout from "../../components/common/layout";
import { navigate } from "gatsby-link";
import { setUser } from "../../services/auth";

const Redirect = () => {
  const [context, setContext] = React.useState(null);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (context === null) {
        setContext({
          meUrl: window.GATSBY_ME_URL,
          loginRedirect: window.GATSBY_REDIRECT_URL,
        });
      } else {
        handleLogin();
      }
    }
  }, [context]);

  const handleLogin = () => {
    fetch(context.meUrl, {
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setUser(data);

        if (context.loginRedirect !== "null") {
          navigate("/" + context.loginRedirect);
        } else {
          navigate("/");
        }
      });
  };

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

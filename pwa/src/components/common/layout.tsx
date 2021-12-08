import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.css";
import MainMenu from "./menu";
import { Helmet } from "react-helmet";

export default function Layout({ children }) {

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setContext({
        defaultTheme: window.GATSBY_DEFAULT_THEME,
      });
    }
  }, []);
  const [context, setContext] = React.useState({
    defaultTheme: "",
  });

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={`https://unpkg.com/@conductionnl/${context.defaultTheme}-design-tokens/dist/index.css`}
        />
      </Helmet>
      <div className={`utrecht-document ${context.defaultTheme}-theme`}>
        <div className="utrecht-page">
          <Header />
          <MainMenu />
          <div className="utrecht-page-content">
            <div className="container py-4">{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

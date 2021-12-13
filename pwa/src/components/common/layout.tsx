import * as React from "react";
import Footer from "./footer";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.css";
import MainMenu from "./menu";
import { Helmet } from "react-helmet";
import favicon from '../../images/favicon.ico'

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
        rel="icon"
        type="image/x-icon"
        href={favicon}
        sizes="16x16"
      />
      <meta name="icon" content="favicon" />
      <link id="favicon" rel="icon" type="image/x-icon" href="../../../src/images/favicon.ico" sizes="16x16" data-react-helmet="true" />
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

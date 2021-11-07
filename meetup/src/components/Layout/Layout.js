import Headers from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <Headers />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default Layout;

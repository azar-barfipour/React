import { Fragment } from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Groups from "./components/Groups/Groups";
import Calendar from "./components/Calendar/Calendar";
import YourGroups from "./components/Groups/YourGroups/YourGroups";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Layout>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home">
          <YourGroups />
          <Calendar />
        </Route>
        <Route path="/Explore">
          <Groups />
        </Route>
      </Layout>
    </Fragment>
  );
}

export default App;

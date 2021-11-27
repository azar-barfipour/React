import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Groups from "./pages/Groups";
import Calendar from "./pages/Calendar";
import YourGroups from "./pages/YourGroups";
import GroupItemsDetails from "./pages/GroupItemsDetails";
import Auth from "./pages/Auth";
import Event from "./pages/Events";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" exact>
          {/* <YourGroups /> */}
          <Calendar />
        </Route>
        <Route path="/Home/AddEvent">
          {/* <YourGroups /> */}
          <Event />
        </Route>
        <Route path="/Explore" exact>
          <Groups />
        </Route>
        <Route path="/Explore/:groupDetailId">
          <GroupItemsDetails />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

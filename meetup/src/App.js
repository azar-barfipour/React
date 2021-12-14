import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar";
import EventItemDetails from "./pages/EventItemDetails";
import Auth from "./pages/Auth";
import Event from "./pages/Events";
import Search from "./pages/Search";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" exact>
          <Calendar />
        </Route>
        <Route path="/Home/AddEvent">
          <Event />
        </Route>
        <Route path="/Explore" exact>
          <Search />
        </Route>
        <Route path="/Explore/:eventDetailId">
          <EventItemDetails />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

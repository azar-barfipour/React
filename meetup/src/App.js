import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Groups from "./pages/Groups";
import Calendar from "./pages/Calendar";
import YourGroups from "./pages/YourGroups";
import { Redirect } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;

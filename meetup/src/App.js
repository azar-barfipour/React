import { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Groups from "./components/Groups/Groups";
import Calendar from "./components/Calendar/Calendar";
import YourGroups from "./components/Groups/YourGroups/YourGroups";

function App() {
  return (
    <Fragment>
      <Header />
      <Route path="/Home">
        <YourGroups />
        <Calendar />
      </Route>
      <Route path="/Explore">
        <Groups />
      </Route>
      <Footer />
    </Fragment>
  );
}

export default App;

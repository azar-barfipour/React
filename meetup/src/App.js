import react, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Groups from "./components/Groups/Groups";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <Fragment>
      <Header />
      <Groups />
      <Calendar />
      <Footer />
    </Fragment>
  );
}

export default App;

import react, { fragment } from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Groups from "./components/Groups/Groups";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <fragment>
      <Header />
      <Groups />
      <Calendar />
      <Footer />
    </fragment>
  );
}

export default App;

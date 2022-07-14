import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Calendar from "./pages/Calendar";
import EventItemDetails from "./pages/EventItemDetails";
import Auth from "./pages/Auth";
import Event from "./pages/Events";
import Search from "./pages/Search";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/Home" element={<Navigate to="/" />} />
        <Route path="/Home/AddEvent" element={<Event />} />
        <Route path="/Explore" element={<Search />} />
        <Route path="/Explore/:eventDetailId" element={<EventItemDetails />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Layout>
  );
}

export default App;

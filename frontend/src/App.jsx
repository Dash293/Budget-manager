import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Frequency from "@pages/Frequency";
import Dashboard from "@pages/Dashboard";
import EditCategories from "@pages/EditCategories";
import NewTransaction from "@pages/NewTransaction";
import Settings from "@pages/Settings";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/new-transaction" element={<NewTransaction />} />;
          <Route path="/dashboard" element={<Dashboard />} />;
          <Route path="/settings" element={<Settings />} />;
          <Route path="/edit-category" element={<EditCategories />} />;
          <Route path="/frequency" element={<Frequency />} />;
        </Routes>
      </main>
      <Navbar />
    </div>
  );
}

export default App;

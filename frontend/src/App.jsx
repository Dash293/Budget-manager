import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import Header from "@components/Header";
import Navbar from "@components/Navbar";
import Frequency from "@pages/Frequency";
import Dashboard from "@pages/Dashboard";
import EditCategories from "@pages/EditCategories";
import AddExpense from "@pages/AddExpense";
import AddRevenue from "@pages/AddRevenue";
import Settings from "@pages/Settings";
import Categories from "@pages/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/add-expense" element={<AddExpense />} />;
          <Route path="/add-revenue" element={<AddRevenue />} />;
          <Route path="/dashboard" element={<Dashboard />} />;
          <Route path="/categories" element={<Categories />} />;
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

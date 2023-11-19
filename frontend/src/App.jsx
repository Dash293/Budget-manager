import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import ActivityDetail from "@pages/ActivityDetails";
import LoginPage from "@pages/LoginPage";
import SignUpPage from "@pages/SignupPage";
import PrivateRoute from "./components/Auth/privateRoute";

function App() {
  const location = useLocation();

  const validRoutes = [
    "/",
    "/add-expense",
    "/add-revenue",
    "/activity-detail",
    "/dashboard",
    "/categories",
    "/settings",
    "/edit-category",
    "/frequency",
  ];

  // Function to check if the current path should display the header and navbar
  const isRouteValid = validRoutes.some(
    (route) =>
      location.pathname === route || location.pathname.startsWith(`${route}/`)
  );

  return (
    <div className="App">
      {isRouteValid && <Header />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/add-expense"
            element={
              <PrivateRoute>
                <AddExpense />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-revenue"
            element={
              <PrivateRoute>
                <AddRevenue />
              </PrivateRoute>
            }
          />
          <Route
            path="/activity-detail/:id"
            element={
              <PrivateRoute>
                <ActivityDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRoute>
                <Categories />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-category"
            element={
              <PrivateRoute>
                <EditCategories />
              </PrivateRoute>
            }
          />
          <Route
            path="/frequency"
            element={
              <PrivateRoute>
                <Frequency />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
      {isRouteValid && <Navbar />}
    </div>
  );
}

export default App;

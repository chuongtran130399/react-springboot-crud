import React from "react";
import Header from "./components/header";
import ListEmployee from "./components/list-employee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/add-employee";
import * as ROUTES from './constant/routes'


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path={ROUTES.DASHBOARD} element={<ListEmployee />}/>
            <Route path={ROUTES.EMPLOYEESLIST} element={<ListEmployee />}/>
            <Route path={ROUTES.ADDEMPLOYEE} element={<AddEmployee />}/>
            <Route path={ROUTES.EDITEMPLOYEE} element={<AddEmployee />}/>
          </Routes>
        </div>
        </Router>
    </div>
  );
};

export default App;

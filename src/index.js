import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/global.css";
import Userloginpage from "./modules/user/auth/Userloginpage";
import Userregistorpage from "./modules/user/auth/Userregistorpage";
import Userlandingpage from "./modules/user/dashboard/Userlandingpage";
import Usermainpage from "./modules/user/dashboard/Usermainpage";
import Userlist from "./modules/user/dashboard/Userlist";
import Servicepage from "./modules/user/dashboard/Servicepage";
import Features from "./modules/user/dashboard/Features";
import Product from "./modules/user/dashboard/Product";
import Db from "./modules/user/dashboard/Db";
import Errorpage from "./modules/user/sharecomponents/Errorpage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userloginpage />} />
        <Route path="/registor" element={<Userregistorpage />} />

        <Route path="/landing" element={<Userlandingpage />}>
          <Route index element={<Usermainpage />} />
          <Route path="features" element={<Features />} />
          <Route path="userlist" element={<Userlist />} />
          <Route path="service" element={<Servicepage />} />
          <Route path="products" element={<Product />} />
          <Route path="db" element={<Db/>}/>
          
          <Route path="*" element={<Errorpage />} />
        </Route>

        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
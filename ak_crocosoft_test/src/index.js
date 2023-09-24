//react
import React from 'react';

//react dom
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

//router dom v6
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//confg
import reportWebVitals from "./reportWebVitals";

//redux
import { Provider } from "react-redux";

import store from "./Store";


// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap Bundle JS
import "bootstrap/dist/css/bootstrap.min.css";

//styles
import './index.css';

//components
import App from './App';

//sideBar
import SideBar from "./Components/General/SideBar/sideBar";

//Modal
import Modal from "./Components/General/popUp/popUp";

//routing
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      // <div className="d-flex app-container">
      <div className="">
        {/*global routes*/}
        <SideBar />
        {/* <Outlet /> */}
        {/* <Modal /> */}
      </div>
    ),
    errorElement: <h4>page not found</h4>,
    children: [
      {
        path: '/home',
        element: <App />
      }
    ]
  },

  //login
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

reportWebVitals();

//react
import React from 'react';

//react dom
import ReactDOM from "react-dom/client";

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
import Quiz from './Components/Quizs/quizes';

import QuizDetails from './Components/QuizDetails/quizDetails';

//sideBar
import SideBar from "./Components/General/SideBar/globalTitleAndBtt";

//Modal
import Modal from "./Components/General/popUp/popUp";

//routing
const routes = createBrowserRouter([

  {
    path: "/",
    element: (
      <div className="p-5 app-container">
        <SideBar />
        <Modal />
      </div>
    ),
    errorElement: <h4>page not found</h4>,
    children: [
      { index: true, element: <Quiz /> },
      { path: 'quiz', element: <Quiz /> },
      { path: "addAndEditquiz", element: <QuizDetails /> },
      { path: "addAndEditquiz/:quezId", element: <QuizDetails /> },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();

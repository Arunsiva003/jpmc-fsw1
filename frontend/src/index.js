import ReactDOM  from "react-dom/client"
import App from "./App"
import "./index.css"
import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import { UserProvider } from './userContext';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    {/* <UserProvider> */}
      <App />
    {/* </UserProvider> */}
  </React.StrictMode>
)

// // App.jsx or similar
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import { UserProvider } from './userContext'; // Adjust the import path as necessary

// ReactDOM.render(
//   <React.StrictMode>
//     <UserProvider>
//       <App />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// createRoot(document.getElementById("root")).render(<App />)
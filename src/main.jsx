import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./providers/LanguageProviders.jsx"; // المسار اللي إنتِ عاملاه
 import store from "./redux/store";
import { Provider } from "react-redux";


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
      <Provider store={store}>
        <App />
     </Provider> 
     </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);

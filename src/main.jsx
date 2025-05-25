import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";
import { ThemeProvider } from "./context/ThemeContext";

// Configure Amplify with your backend
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <App user={user} signOut={signOut} />
        )}
      </Authenticator>
    </ThemeProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./provider";
import "./index.css";
import { App } from "./routes";
import { MainLayout } from "./components/layouts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </AppProvider>
  </StrictMode>
);

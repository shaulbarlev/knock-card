import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./card.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Card />
  </StrictMode>
);

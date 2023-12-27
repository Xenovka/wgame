import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App.tsx";
import NavBar from "./lib/layouts/NavBar/index.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NextUIProvider>
            <main className="dark text-foreground bg-background p-4">
                <NavBar />
                <App />
            </main>
        </NextUIProvider>
    </React.StrictMode>
);

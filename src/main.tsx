import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";

import NavBar from "./lib/layouts/NavBar/index.tsx";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.tsx";

const routes = router;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NextUIProvider>
            <main className="dark text-foreground bg-background p-4">
                <NavBar />
                <RouterProvider router={routes} />
            </main>
        </NextUIProvider>
    </React.StrictMode>
);

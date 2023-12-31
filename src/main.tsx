import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { RouterProvider } from "react-router-dom";

import NavBar from "./lib/layouts/NavBar/index.tsx";

import "./index.css";
import router from "./routes/index.tsx";

const routes = router;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NextUIProvider>
            <NextThemesProvider>
                <main className="dark text-foreground p-4">
                    <NavBar />
                    <RouterProvider router={routes} />
                </main>
            </NextThemesProvider>
        </NextUIProvider>
    </React.StrictMode>
);

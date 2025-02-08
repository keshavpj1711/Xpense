import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen w-full">
                <Header />
                <Outlet />
            </main>

            <div className="p-10 text-center mt-10">
                Work Under Progress...⚠️
            </div>
        </div>
    )
}

export default AppLayout
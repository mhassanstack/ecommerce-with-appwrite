import { Outlet } from "react-router";
import Header from "./Header";
import Cart from "./Cart";
import { useState } from "react";

function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <>
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} ></Header>
            <Cart isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}></Cart>
            <Outlet></Outlet>
        </>
    );
}

export default Layout;
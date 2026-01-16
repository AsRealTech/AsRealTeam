import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="container-fluid">
        <div className="container">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    </div>
  );
}

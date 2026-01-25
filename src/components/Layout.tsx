import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
        <div className="container">
            <Navigation />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </div>
  );
}

import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { CatalogPage } from "../pages/CatalogPage";
import { AboutUsPage } from "../pages/AboutUsPage";
import { ContactsPage } from "../pages/ContactsPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { MainPage } from "../pages/MainPage";
import { CartPage } from "../pages/CartPage";
import { UserPage } from "../pages/UserPage";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
                <Route path="/catalogue" element={<CatalogPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/user" element={<UserPage />} />
            </Route>
        </Routes>
    );
}
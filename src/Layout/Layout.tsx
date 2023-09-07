
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => (
    <main className={"layout"}>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
);

export default Layout;
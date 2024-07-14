import { Outlet } from "react-router-dom";
import css from "./MainLayout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
    <div className={css.pageWrap}>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

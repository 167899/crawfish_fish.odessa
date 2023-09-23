import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import css from './Layout.module.css'

const Layout = () => {

  return (
    <div
      className={css.layout}
    >
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
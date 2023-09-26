import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';
import { Footer } from 'components/Footer/Footer';

const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

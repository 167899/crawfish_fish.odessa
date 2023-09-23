import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Button } from "./Button/Button";
import { Cart } from "pages/Cart/Cart";
// import { Header } from "./Header/Header";


import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}
    >
          <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} /> 
        </Route>
      </Routes>
     <Button></Button>
    </div>
  );
};

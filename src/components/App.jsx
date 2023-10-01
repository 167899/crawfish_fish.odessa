import { Route, Routes } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Cart } from 'pages/Cart/Cart';
import { AboutUs } from 'pages/AboutUs/AboutUs';
import { Contacts } from 'pages/Contacts/Contacts';
import { PaymentAndDelivery } from 'pages/PaymentAndDelivery/PaymentAndDelivery';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/payment-delivery" element={<PaymentAndDelivery />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

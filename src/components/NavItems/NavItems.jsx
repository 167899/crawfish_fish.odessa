import { NavLink } from 'react-router-dom';

import css from './NavItems.module.css';

const navItems = [
  { href: '', text: 'Головна' },
  { href: 'about-us', text: 'Про нас' },
  { href: 'contacts', text: 'Контакти' },
  { href: 'payment-delivery', text: 'Оплата та доставка' },
  { href: 'cart', text: 'Корзина' },
];

export const NavItems = () => {
  return (
    <>
      <nav className={css.nav}>
        {navItems.map(({ href, text }) => (
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isActive && 'rgba(255, 255, 255)',
              };
            }}
            to={href}
            key={text}
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

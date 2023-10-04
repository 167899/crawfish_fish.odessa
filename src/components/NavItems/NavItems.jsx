import { NavLink } from 'react-router-dom';

import css from './NavItems.module.css';

const navItems = [
  { href: '', text: 'Головна' },
  { href: 'about-us', text: 'Про нас' },
  { href: 'contacts', text: 'Контакти' },
  { href: 'payment-delivery', text: 'Оплата та доставка' },
  { href: 'cart', text: 'Корзина' },
];

export const NavItems = ({ addClassName }) => {
  return (
    <>
      <nav className={`${css.nav} ${css[addClassName]}`}>
        {navItems.map(({ href, text }) => (
          <NavLink
            style={({ isActive }) => {
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

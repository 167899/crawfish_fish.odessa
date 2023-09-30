import { NavLink } from 'react-router-dom';

import css from './NavItems.module.css';

const navItems = [
  { href: '', text: 'Home' },
  { href: 'about-us', text: 'About us' },
  { href: 'contacts', text: 'Contacts' },
  { href: 'payment-delivery', text: 'Payment and delivery' },
  { href: 'cart', text: 'Cart' },
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

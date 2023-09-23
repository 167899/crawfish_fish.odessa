import { NavItems } from 'components/NavItems/NavItems';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
     <NavItems/>
    </div>
  );
};
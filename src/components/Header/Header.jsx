import { NavItems } from 'components/NavItems/NavItems';
import logo2 from './logo2.png';
import css from './Header.module.css';
import { SvgSelector } from 'components/Icons/Icons';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={`container containerFlex ${css.containerHeaderFlex}`}>
        <div className={css.iconContainer}>
          <img
            width="73px"
            height="82px"
            src={logo2}
            alt="logo"
            className={css.logo}
          />
          <SvgSelector id={'boorger'}></SvgSelector>
        </div>
        <NavItems />
        <div className={css.phoneNumber}>
          <a className={css.phoneNumberLink} href="tel:+380660245006">
            <span>тел. </span>
            +38 066 024 50 06
          </a>
        </div>
      </div>
    </header>
  );
};

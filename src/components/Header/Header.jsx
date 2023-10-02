import { NavItems } from 'components/NavItems/NavItems';
import css from './Header.module.css';
import { SvgSelector } from 'components/Icons/Icons';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={`container containerFlex ${css.containerHeaderFlex}`}>
        <div className={css.iconContainer}>
          <Link to={''}>
            <SvgSelector
              className={'logoMinHeader'}
              id={'logo-min'}
            ></SvgSelector>
          </Link>
          <SvgSelector id={'boorger'}></SvgSelector>
        </div>
        <div className={css.textBlock}>
          <div className={css.phoneNumber}>
            <a className={css.phoneNumberLink} href="tel:+380660245006">
              <span>тел. </span>
              +38 066 024 50 06
            </a>
          </div>{' '}
          <NavItems />
        </div>
      </div>
    </header>
  );
};

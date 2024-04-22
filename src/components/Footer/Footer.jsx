import { SvgSelector } from 'components/Icons/Icons';
import css from './Footer.module.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container containerFlex ${css.containerRevers}`}>
        <div className={css.footerLogoBlock}>
          <Link to={''}>
            <SvgSelector
              className={'logoMinFooter'}
              id={'logo-min'}
            ></SvgSelector>
          </Link>
   
        </div>
<div className={css.addressBlock}>
          <address>
            <h3 className={css.addressTitle}>Контакти</h3>
            <ul className={css.address}>
              <li className={css.addressItem}>
                <a
                  className={css.addressLink}
                  href="https://maps.app.goo.gl/89Nf5dApeSS4btsu9"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  м. Одеса, вул. Мала Арнаутська, 55
                </a>
              </li>
              <li className={css.addressItem}>
                <a className={css.addressLink} href="tel:+380660245006">
                  <span>тел. </span>
                  +38 066 024 50 06
                </a>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </footer>
  );
};

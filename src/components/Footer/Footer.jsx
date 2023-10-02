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

        <div className={css.socialNetworkBlock}>
          <h2 className={css.footerTitle}>приєднатися</h2>
          <ul className={css.socialNetworks}>
            <li className={css.socialNetworksItem}>
              <a
                href="https://instagram.com/crawfish_fish.odessa?igshid=NzZlODBkYWE4Ng=="
                className={css.socialNetworksLink}
              >
                <SvgSelector id={'instagram'}></SvgSelector>
              </a>
            </li>
            <li className={css.socialNetworksItem}>
              <a
                href="https://www.facebook.com/profile.php?id=100075881057105"
                className={css.socialNetworksLink}
              >
                <SvgSelector id={'facebook'}></SvgSelector>
              </a>
            </li>
            <li className={css.socialNetworksItem}>
              <a
                href="invite.viber.com/?g2=AQB0RGxUcpvBs02WGJT6X%2FYCRk4e4pZ50b%2Bg1hgXzpfqkkXNiqDwCw94vqdMu00D"
                className={css.socialNetworksLink}
              >
                <SvgSelector id={'viber'}></SvgSelector>
              </a>
            </li>
          </ul>
        </div>
        <div class={css.addressBlock}>
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

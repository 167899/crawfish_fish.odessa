import { SvgSelector } from 'components/Icons/Icons';
import css from './Footer.module.css';
import logo2 from './logo2.png';

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.conteiner}>
        <div class={css.address_block}>
          <address>
            <h3 className={css.address_title}>Контакти</h3>
            <ul className={css.address}>
              <li className={css.address_item}>
                <a
                  className={css.address_link}
                  href="https://maps.app.goo.gl/89Nf5dApeSS4btsu9"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  м. Одеса, вул. Мала Арнаутська, 55
                </a>
              </li>
              <li className={css.address_item}>
                <a className={css.address_link} href="tel:+380660245006">
                  <span>тел. </span>
                  +38 066 024 50 06
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className={css.socialBetworkBlock}>
          <h2 className={css.footerTitle}>присоединяйтесь</h2>
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
        <div className={css.footerLogoBlock}>
          <img
            width="130px"
            height="147px"
            src={logo2}
            alt="logo"
            className={css.logo2}
          />
        </div>
      </div>
    </footer>
  );
};

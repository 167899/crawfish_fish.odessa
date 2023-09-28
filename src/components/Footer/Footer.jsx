import css from './Footer.module.css';
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
      </div>
    </footer>
  );
};

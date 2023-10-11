import css from './Contacts.module.css';
export const Contacts = () => {
  return (
    <div className={`container ${css.contacts}`}>
      <h2>Контакти</h2>
      <h3>Адреса </h3>
      <p>Наша адреса: м.Одеса, вул. Мала Арнаутська, 55</p>
      <p>
        {' '}
        Ми знаходимося за зручною адресою, де ви можете забрати своє замовлення,
        якщо вам більше до вподоби самовивіз.
      </p>
      <p> Години роботи: 10:00 - 21:00, без вихідних</p>
      <h3>Зв'яжіться з нами</h3>
      <p>
        {' '}
        Ми завжди готові відповісти на ваші питання, надати консультації та
        приймати ваші замовлення. Зв'яжіться з нами за телефоном або через
        соціальні мережі:
      </p>

      <p>
        Телефон:{' '}
        <a className={css.addressLink} href="tel:+380660245006">
          +38 066 024 50 06
        </a>
      </p>
      <p>
        <a
          href="https://instagram.com/crawfish_fish.odessa?igshid=NzZlODBkYWE4Ng=="
          className={css.socialNetworksLink}
        >
          Instagram |
        </a>{' '}
        <a
          href="https://www.facebook.com/profile.php?id=100075881057105"
          className={css.socialNetworksLink}
        >
          Facebook |
        </a>{' '}
        <a
          href="invite.viber.com/?g2=AQB0RGxUcpvBs02WGJT6X%2FYCRk4e4pZ50b%2Bg1hgXzpfqkkXNiqDwCw94vqdMu00D"
          className={css.socialNetworksLink}
        >
          Viber
        </a>
      </p>
      <p>
        Не соромтеся зателефонувати або написати нам, і ми з радістю вам
        допоможемо! Дякуємо, що обрали нас для своїх гастрономічних насолод!
      </p>
    </div>
  );
};

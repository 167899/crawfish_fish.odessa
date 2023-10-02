import css from './PaymentAndDelivery.module.css';
export const PaymentAndDelivery = () => {
  return (
    <div className={`container ${css.paymentAndDelivery}`}>
      <h2>Доставка і оплата</h2>
      <h3>Доставка</h3>
      <p>
        Ми пропонуємо зручну послугу доставки по місту, щоб забезпечити вас
        свіжими морепродуктами, живими раками та розливним пивом прямо до вашого
        столу. Для вашого комфорту ми співпрацюємо з надійними службами таксі, і
        вартість доставки розраховується за тарифами оператора.
      </p>
      <h3> Самовивіз</h3>
      <p>
        Якщо ви бажаєте самостійно забрати своє замовлення, ми будемо раді
        бачити вас за адресою:
      </p>
      <p>Адреса: Мала Арнаутська, 55</p>
      <p>Години роботи: 10:00 - 21:00, без вихідних</p>
      <h3>Оплата</h3>
      <p> Ми пропонуємо два зручних варіанти оплати для вашого замовлення:</p>
      <p>
        Оплата на карту банку: Ви можете оплатити своє замовлення попередньо,
        перерахувавши суму на нашу банківську карту. Після оформлення замовлення
        ми надамо вам реквізити для оплати. Після підтвердження оплати ми
        негайно розпочнемо підготовку та доставку вашого замовлення.
      </p>
      <p>
        Оплата готівкою: Ви також можете сплатити за ваше замовлення готівкою, у
        разі самовивозу з нашого магазину.
      </p>
      <p>
        Обирайте зручний для вас спосіб оплати, і ми гарантуємо найвищу якість
        продуктів та послуг!
      </p>
      <p>
        Для замовлення та уточнення умов оплати зв'яжіться з нами за телефоном:
      </p>
      <p>
        Телефон:{' '}
        <a className={css.phoneLink} href="tel:+380660245006">
          +38 066 024 50 06
        </a>
      </p>
      <p>
        Наша команда готова приймати ваші замовлення та відповідати на всі ваші
        запити. Ми працюємо для вашого задоволення та зручності!
      </p>
      <p>Дякуємо, що вибрали нас для своїх гастрономічних насолод!</p>
    </div>
  );
};
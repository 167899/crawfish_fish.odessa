import { Button } from 'components/Button/Button';

import css from './Cart.module.css';
import { Link } from 'react-router-dom';
import { SvgSelector } from 'components/Icons/Icons';
export const Cart = () => {
  return (
    <div className={`'conteiner' ${css.cartContainer}`}>
      <div className={css.emptyCart}>
        <SvgSelector id={'cart'}></SvgSelector>
        <p>Кошик порожній</p>
        <Link className={css.emptyCartLink} to={'/'}>
          <Button
            name="Повернутися до покупок"
            className={css.appButton}
          ></Button>
        </Link>
      </div>
    </div>
  );
};

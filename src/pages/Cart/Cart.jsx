import { Button } from 'components/Button/Button';
import css from './Cart.module.css';
import { Link } from 'react-router-dom';
import { SvgSelector } from 'components/Icons/Icons';
import { products } from 'services/products';

export const Cart = () => {
  // const { name, detail, image, price } = products[0];
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
      <div className={css.backdrop}>
        <div className={css.productCard}>
          <h2>Ваше замовлення</h2>

          <ul className={css.productList}>
            {products.map(product => (
              <li key={product.name}>
                <div className={css.productBlock}>
                  <div className={css.modalImg}>
                    <img src={product.image} alt={product.name}></img>
                  </div>
                  <div className={css.productName}>
                    <h3>{product.name}</h3>
                    <p>{product.detail}</p>
                    <p>
                      {product.price} <span>грн за 100г</span>
                    </p>
                  </div>
                  <div className={css.productButtonsBlock}>
                    <div className={css.counterButtonsBlock}>
                      <Button
                        className={css.counterButton}
                        name={<SvgSelector id={'decrement'}></SvgSelector>}
                      ></Button>
                      <input className={css.counterText} type="text" />
                      <Button
                        className={css.counterButton}
                        name={<SvgSelector id={'increment'}></SvgSelector>}
                      ></Button>
                    </div>
                    <div className={css.priceBlock}>
                      {product.price * 10}
                      <span>грн.</span>
                    </div>
                    <Button
                      className={css.closeButton}
                      name={<SvgSelector id={'increment'}></SvgSelector>}
                    ></Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className={css.buttonsBlock}>
            <Link className={css.btnLinck} to={'/'}>
              <Button
                className={`${css.navigateButtonLeft} ${css.navigateButton}`}
                name={'Продовжити покупки'}
              ></Button>
            </Link>
            <Link className={css.btnLinck} to={'/cart'}>
              <Button
                className={css.navigateButton}
                name={'Підтвердити замовлення'}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

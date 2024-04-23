import { Button } from 'components/Button/Button';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';
import { SvgSelector } from 'components/Icons/Icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from 'redux/counterSlice';

export const Modal = ({ name, detail, image, price, active, onClose }) => {
  const dispatch = useDispatch();
  const { value } = useSelector(state => state.counter);
  if (!active) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className={css.backdrop} onClick={onClose}>
      <div
        className={css.productCard}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <h2>Товар додано у кошик</h2>
        <div className={css.productBlock}>
          <div className={css.modalImg}>
            <img src={image} alt={name}></img>
          </div>
          <div className={css.productName}>
            <h3>{name}</h3>
            <p>{detail}</p>
            <p>{price}</p>
          </div>
          <div className={css.productButtonsBlock}>
            <div className={css.counterButtonsBlock}>
              <Button
                onClick={() => dispatch(decrement())}
                className={css.counterButton}
                name={<SvgSelector id={'decrement'}></SvgSelector>}
              ></Button>
              <input className={css.counterText} type="text" value= {{value}.value.toFixed(3)} />
              <Button
                onClick={() => dispatch(increment())}
                className={css.counterButton}
                name={<SvgSelector id={'increment'}></SvgSelector>}
              ></Button>
            </div>
            <div className={css.priceBlock}>
              {(Number({ price }.price) * Number({ value }.value)).toFixed(2)}
              <span> грн.</span>
            </div>
            <Button
              className={css.closeButton}
              name={<SvgSelector id={'increment'}></SvgSelector>}
              onClick={onClose}
            ></Button>
          </div>
        </div>
        <div className={css.buttonsBlock}>
          <Link className={css.btnLinck} to={'/'}>
            <Button
              className={`${css.navigateButtonLeft} ${css.navigateButton}`}
              name={'Продовжити покупки'}
              onClick={onClose}
            ></Button>
          </Link>
          <Link className={css.btnLinck} to={'/cart'}>
            <Button
              className={css.navigateButton}
              name={'Перейти до кошика'}
            ></Button>
          </Link>
        </div>
      </div>
    </div>,
    document.getElementById('root')
  );
};

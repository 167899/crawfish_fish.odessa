import { Button } from 'components/Button/Button';

import css from './Cart.module.css';
export const Cart = () => {
  return (
    <>
      <Button name="Go back" className={css.appButton}></Button>
      Cart
    </>
  );
};

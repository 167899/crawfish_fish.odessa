import { Button } from 'components/Button/Button';
import css from './ProductList.module.css';

export const ProductList = ({ products }) => {
  return (
    <ul className={css.productList}>
      {products.map(product => (
        <li key={product.name}>
          <h2> {product.name} </h2>
          <img src={product.image} alt={product.name} />
          <Button name={'Add to cart'} className={css.addBtn}></Button>
        </li>
      ))}
    </ul>
  );
};

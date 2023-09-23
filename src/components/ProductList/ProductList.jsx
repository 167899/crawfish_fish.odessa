import css from './ProductList.module.css';

export const ProductList = ({ products }) => {
  return (
    <ul className={css.productList}>
      {products.map(product => (
        <li key={product.id}>
          <p> {product.id} </p>
        </li>
      ))}
    </ul>
  );
};

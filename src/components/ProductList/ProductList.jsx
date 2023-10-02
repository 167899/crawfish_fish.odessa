import { Button } from 'components/Button/Button';
import css from './ProductList.module.css';

export const ProductList = ({ products, sectionName }) => {
  return (
    <section className={css.products}>
      <h2>{sectionName}</h2>
      <ul className={css.productList}>
        {products.map(product => (
          <li key={product.name}>
            <div className={css.imageConteiner}>
              <img
                width="100%"
                height="auto"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className={css.textBlock}>
              <h3> {product.name} </h3>
              <p>{product.detail}</p>
              <p className={css.price}>{product.price} грн. за 100г
              </p>
              <Button name={'Замовити'} className={css.addBtn}></Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

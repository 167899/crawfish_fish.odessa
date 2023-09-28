import { Hero } from 'components/Hero/Hero';
import { ProductList } from 'components/ProductList/ProductList';
import { products } from 'services/products';
import css from './Home.module.css'

export const Home = () => {
  return (
    <>
    <Hero></Hero>
    <div className={css.conteiner}>
      <ProductList products={products}></ProductList>
    </div>
    </>
  );
};

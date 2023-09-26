import { Hero } from 'components/Hero/Hero';
import { ProductList } from 'components/ProductList/ProductList';
import { products } from 'services/products';

export const Home = () => {
  return (
    <>
    <Hero></Hero>
      <ProductList products={products}></ProductList>
    </>
  );
};

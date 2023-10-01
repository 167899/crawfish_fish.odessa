import { Hero } from 'components/Hero/Hero';
import { ProductList } from 'components/ProductList/ProductList';
import { products } from 'services/products';

export const Home = () => {
  return (
    <>
      <Hero></Hero>
      <div className="container">
        <ProductList products={products}></ProductList>
      </div>
    </>
  );
};

import { Hero } from 'components/Hero/Hero';
import { ProductList } from 'components/ProductList/ProductList';
import { products } from 'services/products';
import { products2 } from 'services/products2';

export const Home = () => {
  return (
    <>
      <Hero></Hero>
      <div className="container">
        <ProductList products={products} sectionName={'Живі раки'}></ProductList>
        <ProductList products={products2} sectionName={'Варені раки класичні'}></ProductList>
      </div>
    </>
  );
};

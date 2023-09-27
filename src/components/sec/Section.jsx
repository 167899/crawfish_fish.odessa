// import css from './Section.module.css';
import { ProductList } from "components/ProductList/ProductList";
import { products } from 'services/products';
export const Section = () => {
  return (
    <section>
     <ProductList products={products}></ProductList>

    </section>
  );
};

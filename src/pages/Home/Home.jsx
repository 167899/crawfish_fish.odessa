import { ProductList } from "components/ProductList/ProductList";
import { products } from "services/products";

export const Home = () => {
    return (
      <>
        <ProductList products={products}></ProductList>
      </>
    );
  };

import { Hero } from 'components/Hero/Hero';
import { Modal } from 'components/Modal/Modal';
import { ProductList } from 'components/ProductList/ProductList';
import { products, products2 } from 'services/products';

export const Home = () => {
  const { name, detail, image, price } = products[0];

  return (
    <>
      <Hero></Hero>
      <div className="container">
        <ProductList
          products={products}
          sectionName={'Живі раки'}
        ></ProductList>
        <ProductList
          products={products2}
          sectionName={'Варені раки класичні'}
        ></ProductList>
        <Modal name={name} detail={detail} image={image} price={price}></Modal>
      </div>
    </>
  );
};

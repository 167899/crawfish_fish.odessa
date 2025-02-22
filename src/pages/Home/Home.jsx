import { Hero } from 'components/Hero/Hero';
// import { Modal } from 'components/Modal/Modal';
import { ProductList } from 'components/ProductList/ProductList';
// import { products, products2 } from 'services/products';

export const Home = () => {
  // const { name, detail, image, price } = products[0];

  return (
    <>
      <Hero></Hero>
      <div className="container">
        <ProductList
          categoryId={3}
          sectionName={'Живі раки'}
        ></ProductList>
        <ProductList
          categoryId={4}
          sectionName={'Сушена риба / снеки'}
        ></ProductList>
        <ProductList
          categoryId={2}
          sectionName={'Живе пиво'}
        ></ProductList>
         <ProductList
          categoryId={6}
          sectionName={'Морожені продукти'}
        ></ProductList>
        {/* <ProductList
          categoryId={5}
          sectionName={'Пакування'}
        ></ProductList> */}
        {/* <Modal name={name} detail={detail} image={image} price={price}></Modal> */}
      </div>
    </>
  );
};

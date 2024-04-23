import { Button } from 'components/Button/Button';
import css from './ProductList.module.css';
import { Modal } from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import { getProductList } from 'services/api';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from 'redux/counterSlice';

export const ProductList = ({ categoryId, sectionName }) => {
  const [showModal, setShowModal] = useState(false);
  const [showProduct, setProduct] = useState([]);
  const [showModalProps, setModalProps] = useState({});

  const dispatch = useDispatch();

  const onShowModal = e => {
    if (showModal === false) {
      setShowModal(true);
      setModalProps({
        image:
          e.target.parentElement.parentElement.children[0].children[0]
            .currentSrc,
        name: e.target.parentElement.parentElement.children[1].children[0]
          .textContent,
        detail:
          e.target.parentElement.parentElement.children[1].children[1]
            .textContent,
        price:
        e.target.parentElement.parentElement.children[1].children[2].firstChild.textContent
      });
      
    }
  };
  const closeModal = () => {
    setShowModal(false);
    dispatch(reset())
  };

  const products = showProduct;

  useEffect(() => {
    getProductList().then(data => setProduct(data.data.data.items));
  }, []);

  return (
    <section className={css.products}>
      <h2>{sectionName}</h2>
      <ul className={css.productList}>
        {products.map(
          product =>
            product.active === 1 &&
            product.categoryId === categoryId && (
              <li key={product.nomenclatureName}>
                <div className={css.imageConteiner}>
                  <img
                    width="100%"
                    height="auto"
                    src={`https://img-1.skyservice.pro/uploads/images/bb4f4a20-e572-41d5-90fb-69ed6e92c66d/${product.logo}`}
                    alt={product.nomenclatureName}
                  />
                </div>
                <div className={css.textBlock}>
                  <h3> {product.nomenclatureName} </h3>
                  <p>{product.uktzed}</p>
                  <p className={css.price}>
                   <span>{product.price}</span>  грн. за {product.unit}
                  </p>
                  <Button
                    name={'Замовити'}
                    className={css.addBtn}
                    onClick={onShowModal}
                  ></Button>
                </div>
              </li>
            )
        )}
        {/* {products.map(product => {
          if(product.active === 1 && product.categoryId === categoryId) { 
            return(
          <li key={product.nomenclatureName}>
            <div className={css.imageConteiner}>
              <img
                width="100%"
                height="auto"
                src={`https://img-1.skyservice.pro/uploads/images/bb4f4a20-e572-41d5-90fb-69ed6e92c66d/${product.logo}`}
                alt={product.nomenclatureName}
              />
            </div>
            <div className={css.textBlock}>
              <h3> {product.nomenclatureName} </h3>
              <p>{product.uktzed}</p>
              <p className={css.price}>{product.price} грн. за {product.unit}</p>
              <Button
                name={'Замовити'}
                className={css.addBtn}
                onClick={onShowModal}
              ></Button>
            </div>
          </li>
        )}
        }
    
      
   
        )} */}
      </ul>
      <Modal
        active={showModal}
        onClose={closeModal}
        image={showModalProps.image}
        name={showModalProps.name}
        detail={showModalProps.detail}
        price={showModalProps.price}
      ></Modal>
    </section>
  );
};

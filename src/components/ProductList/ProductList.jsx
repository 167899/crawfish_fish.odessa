import { Button } from 'components/Button/Button';
import css from './ProductList.module.css';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ProductList = ({ products, sectionName }) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    if (showModal === false) {
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
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
              <p className={css.price}>{product.price} грн. за 100г</p>
              <Button
                name={'Замовити'}
                className={css.addBtn}
                onClick={onShowModal}
              ></Button>
            </div>
          </li>
        ))}
      </ul>
      <Modal active={showModal} onClose={closeModal}></Modal>
    </section>
  );
};

import css from './Button.module.css';

export const Button = () => {
  return (
    <>
      <button type="button" className={css.button}>
        Go back
      </button>
    </>
  );
};
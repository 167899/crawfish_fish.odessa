import css from './Button.module.css';

export const Button = ({ name, className }) => {
  return (
    <>
      <button type="button" className={`${className} ${css.button}`}>
        {name}
      </button>
    </>
  );
};

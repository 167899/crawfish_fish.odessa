import css from './Button.module.css';

export const Button = ({ name, className, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick} className={`${css.button} ${className}`}>
        {name}
      </button>
    </>
  );
};

import css from './Button.module.css';

export const Button = ({ name, className, onClick, type = 'button' }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${css.button} ${className}`}
      >
        {name}
      </button>
    </>
  );
};

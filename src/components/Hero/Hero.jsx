import css from './Hero.module.css';
import logo from './logo.png';
export const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.logoRound}>
        <img src={logo} alt="logo" className={css.logo} />
      </div>
    </section>
  );
};

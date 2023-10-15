import ChangeTheme from '../../functions/ChangeTheme';
import Logo from '../SVG/Logo/Logo';
import Theme from '../SVG/Theme/Theme';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <a href="/" className={styles.header__logo}>
          <Logo />
        </a>
        <button
          type="button"
          className={styles.header__theme}
          onClick={() => {
            ChangeTheme();
          }}
        >
          <Theme />
        </button>
      </div>
    </div>
  );
}

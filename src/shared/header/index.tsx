import logo from '../../assets/images/logos/logo.png';
import styles from './header.module.scss'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" />
      </div>
      {/* <div className={styles.header__search}>
        <input placeholder=' # Search by tag' type="text" />
      </div> */}
    </div>
  )
}
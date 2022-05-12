import { NavLink } from "react-router-dom"
import { Todos, Events } from "./components"
import { Header } from "../../shared/header"
import styles from './dayPage.module.scss'

export const DayPage = () => {
  return (
    <div className={styles.day}>
      <Header />
      <div className={styles.day__body}>
        <div className={styles.link}>
          <NavLink to='/'>home</NavLink>
        </div>
        <div className={styles.day__info}>
          <Todos />
          <Events />
        </div>
      </div>
    </div>
  )
}
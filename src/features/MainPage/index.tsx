import { Calendar } from "./components/Calendar";
import { Header } from '../../shared/header' 
import styles from './mainPage.module.scss'

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <Header />
      <Calendar />
    </div>
  )
}
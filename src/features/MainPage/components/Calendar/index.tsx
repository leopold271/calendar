import React from "react";
import styles from './calendar.module.scss'
import { CalendarHeader, Dates, Previews } from "./components";
import { WeekDays } from "./components/WeekDays";

export const Calendar = () => {

  // const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className={styles.calendar__wrapper}>
      <div className={styles.calendar}>
        <CalendarHeader/>
        <WeekDays/>
        <Dates/>
        <Previews/>
      </div>
    </div>

  )
}
import React, { useEffect } from "react";
import { startOfMonth, endOfMonth, format, startOfWeek, addDays, endOfWeek } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import styles from './dates.module.scss';
import { selectCurrDate } from "../../../../store/selectors";
import { useAppSelector } from "../../../../../../store/hooks";
import { DateCell } from './dateCell'

export const Dates = () => {

  const currentDate = useAppSelector(selectCurrDate)

  useEffect(() => {

  }, [])

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);


  let renderedDays = []
  const renderedRows = []
  let day = startDate
  let formattedDate = ''


  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, 'd');
      renderedDays.push(<DateCell key={i} monthStart={monthStart} day={day} formattedDate={formattedDate} />)
      day = addDays(day, 1)
    }

    renderedRows.push(
      <div key={uuidv4()} className={styles.dates__row}>
        {renderedDays}
      </div>
    )
    renderedDays = []
  }

  return (
    <div className={styles.dates}>
      {renderedRows}
    </div>
  )
}
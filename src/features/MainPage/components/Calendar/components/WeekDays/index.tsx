import React from "react";
import {startOfWeek, format, addDays} from "date-fns";
import styles from './weekDays.module.scss';
import { useSelector } from "react-redux";
import {selectCurrDate} from '../../../../store/selectors'

export const WeekDays = () => {

  const currentDate = useSelector(selectCurrDate)

  const days = [];
  const dateFormat = 'cccc';
  let startDate = startOfWeek(currentDate, {weekStartsOn: 1})

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className={styles.weekDay} key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    )
  }

  return (
    <div className={styles.weekDays}>
      {days}
    </div>
  )
}
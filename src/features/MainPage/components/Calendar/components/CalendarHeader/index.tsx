import React from "react";
import {format} from "date-fns";
import styles from './calendarHeader.module.scss';
import rightArrow from '../../../../../../assets/images/icons/right-arrow.png';
import leftArrow from '../../../../../../assets/images/icons/back.png';
import doubleRightArrow from '../../../../../../assets/images/icons/double-right-arrow.png';
import doubleLeftArrow from '../../../../../../assets/images/icons/double-back-arrow.png'
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import { selectCurrDate } from "../../../../store/selectors";
import { setNextMonth, setNextYear, setPrevMonth, setPrevYear } from "../../../../store";

export const CalendarHeader = () => {

  const dispatch = useAppDispatch();

  const dateFormat = "MMMM yyyy";

  const currentDate = useAppSelector(selectCurrDate);

  const addMonth = () => {
    dispatch(setNextMonth())
  }

  const subMonth = () => {
    dispatch(setPrevMonth())
  }

  const addYear = () => {
    dispatch(setNextYear())
  }

  const subYear = () => {
    dispatch(setPrevYear())
  }

  return (
    <div className={styles.calendarHeader}>
      <div id='1st' onClick={subYear} className={styles.calendarHeader__icon}>
        <button >
          <img src={doubleLeftArrow} alt="doubleLeftArrow" />
        </button>
      </div>
      <div id='2nd' onClick={subMonth}  className={styles.calendarHeader__icon} >
        <button >
          <img src={leftArrow} alt="leftArrow" />
        </button>
      </div>
      <div className={styles.calendarHeader__date}>
        <span>{format(currentDate, dateFormat)}</span>
      </div>
      <div id='3d' onClick={addMonth} className={styles.calendarHeader__icon}>
        <button>
          <img src={rightArrow} alt="rightArrow" />
        </button>
      </div>
      <div id='4d' onClick={addYear} className={styles.calendarHeader__icon}>
        <button >
          <img src={doubleRightArrow} alt="doubleRightArrow" />
        </button>
      </div>
    </div>
  )
}
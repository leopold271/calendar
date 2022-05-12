import { isSameMonth, isSameDay } from 'date-fns';
import classNames from 'classnames';
import styles from './dates.module.scss';
import { setSelectedDate } from "../../../../store";
import { selectSelectedDate, selectToday } from "../../../../store/selectors";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import add from '../../../../../../assets/images/icons/add.png'
import forward from '../../../../../../assets/images/icons/forward.png'
import { Link, useNavigate } from 'react-router-dom';

interface Iprops {
  formattedDate: string,
  day: Date,
  monthStart: Date
}

export const DateCell = (props: Iprops) => {
  const selectedDate = useAppSelector(selectSelectedDate);
  const today = useAppSelector(selectToday);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDateCellClick = () => {
    
    dispatch(setSelectedDate(props.day))
  }

  const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  }

  const handleForwardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let path = 'dayPage';
    navigate(path)
    e.stopPropagation();
  }

  return (
    <div className={classNames(styles.dates__cell, {
      [styles.dates__cell_disabled]: !isSameMonth(props.day, props.monthStart),
      [styles.dates__cell_current]: isSameDay(props.day, today),
      [styles.dates__cell_selected]: isSameDay(props.day, selectedDate)
    })} onClick={handleDateCellClick}>

      <div className={styles.dates__date}>
        {props.formattedDate}
      </div>
      <div className={styles.dates__buttons} >
        <button onClick={handleAddClick} className={styles.dates__addButton}>
          <img src={add} alt='add'/>
        </button>
        <button onClick={handleForwardClick} className={styles.dates__forwardButton}>
          <img src={forward} alt='forward' />
        </button>
      </div>
    </div>
  )
}
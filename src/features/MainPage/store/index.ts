import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { subMonths, subYears, addMonths, addYears } from "date-fns";

interface mainPageState {
  today: Date
  currentDate: Date,
  selectedDate: Date
}

const initialState : mainPageState = {
  today: new Date(),
  currentDate: new Date(),
  selectedDate: new Date()
}

const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setNextMonth: (state) => {
      state.currentDate = addMonths(state.currentDate, 1)
    },
    setPrevMonth: (state) => {
      state.currentDate = subMonths(state.currentDate, 1)
    },
    setNextYear: (state) => {
      state.currentDate = addYears(state.currentDate, 1)
    },
    setPrevYear: (state) => {
      state.currentDate = subYears(state.currentDate, 1)
    },
    setSelectedDate: (state, action: PayloadAction<Date>) => {
      state.selectedDate = action.payload
    }
  }
})

export default mainPageSlice.reducer

export const { setNextMonth, setPrevMonth, setNextYear, setPrevYear, setSelectedDate} = mainPageSlice.actions
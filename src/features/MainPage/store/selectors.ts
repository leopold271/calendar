import { RootState } from "../../../store/rootReducer";

export const selectCurrDate = (state: RootState): typeof state.mainPage.currentDate  => state.mainPage.currentDate 
export const selectSelectedDate = (state: RootState): typeof state.mainPage.selectedDate => state.mainPage.selectedDate;
export const selectToday = (state: RootState): typeof state.mainPage.today => state.mainPage.today;
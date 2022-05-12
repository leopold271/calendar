import { combineReducers } from "redux";
import mainPageReducer from '../features/MainPage/store/index'


const rootReducer = combineReducers({
  mainPage: mainPageReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer
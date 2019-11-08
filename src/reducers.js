import {combineReducers} from "redux";
import yearViewReducer from './containers/YearView/reducer';
import monthViewReducer from './components/MonthView/reducer';

export default combineReducers({
    yearViewReducer,
    monthViewReducer,
});

import React from "react";
import YearView from "../../containers/YearView";
import MonthView from "../../containers/MonthView";
import {connect} from "react-redux";
import './style.scss';
import './reset.scss';

const App = (props) => <div className='calendar'>{props.month !== '' ? <MonthView/> : <YearView/>}</div>;

function mapStateToProps(state) {
    return {
        month: state.yearViewReducer.month,
    };
}

export default connect(mapStateToProps)(App)

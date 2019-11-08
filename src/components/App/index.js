import React from "react";
import YearView from "../../containers/YearView";
import MonthView from "../MonthView";
import {connect} from "react-redux";
import './reset.scss';

const App = (props) => props.month ? <MonthView/> : <YearView/>;

function mapStateToProps(state) {
    return {
        month: state.yearViewReducer.month,
    };
}

export default connect(mapStateToProps)(App)

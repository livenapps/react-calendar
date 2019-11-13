import React from "react";
import YearView from "../YearView";
import MonthView from "../MonthView";
import {connect} from "react-redux";
import './style.scss';
import './reset.scss';
import {setDay} from "../MonthView/actions";
import {setMonth, setYear} from "../YearView/actions";
import {resetDate} from "./actions";

class App extends React.Component {
    componentDidMount() {
        const initialDate = this.props.date;

        if (initialDate) {
            if (initialDate instanceof Date) {
                this.props.setYear(initialDate.getUTCFullYear());
                this.props.setMonth(initialDate.getUTCMonth());
                this.props.setDay(initialDate.getUTCDate());
            } else if (typeof initialDate === 'string') {
                try {
                    const [year, month, day] = initialDate.split('-').map(el => Number(el));
                    const date = new Date(Date.UTC(year, month - 1, day));

                    if (year !== date.getUTCFullYear() || month - 1 !== date.getUTCMonth() || day !== date.getUTCDate()) {
                        throw new Error('Incorrect date format. Use string in format "year-month-day"');
                    } else {
                        this.props.setYear(year);
                        this.props.setMonth(month - 1);
                        this.props.setDay(day);
                    }
                } catch (e) {
                    console.error(e);
                }
            } else {
                throw new Error('Incorrect date format. Use Date object or string in format "year-month-day"');
            }
        }

    }

    render() {
        return <div className='calendar'>{this.props.month !== '' ? <MonthView/> : <YearView/>}</div>;
    }
}

function mapStateToProps(state) {
    return {
        month: state.yearViewReducer.month,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setDay: (day) => dispatch(setDay(day)),
        setMonth: (month) => dispatch(setMonth(month)),
        setYear: (year) => dispatch(setYear(year)),
        resetDate: (date) => dispatch(resetDate(date)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

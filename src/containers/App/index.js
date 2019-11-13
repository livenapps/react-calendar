import React from "react";
import YearView from "../YearView";
import MonthView from "../MonthView";
import {connect} from "react-redux";
import {setDay} from "../MonthView/actions";
import {setMonth, setYear} from "../YearView/actions";
import './style.scss';
import './reset.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const initialDate = this.props.initialDate;

        if (initialDate) {
            const errorMsg = 'Incorrect date format. Use Date object or string in format "year-month-day"';

            if (initialDate instanceof Date) {
                this.props.setYear(initialDate.getUTCFullYear());
                this.props.setMonth(initialDate.getUTCMonth());
                this.props.setDay(initialDate.getUTCDate());
            } else if (typeof initialDate === 'string') {
                try {
                    const [year, month, day] = initialDate.split('-').map(el => Number(el));
                    const date = new Date(Date.UTC(year, month - 1, day));

                    if (year !== date.getUTCFullYear() || month - 1 !== date.getUTCMonth() || day !== date.getUTCDate()) {
                        throw new Error(errorMsg);
                    } else {
                        this.props.setYear(year);
                        this.props.setMonth(month - 1);
                        this.props.setDay(day);
                    }
                } catch (e) {
                    console.error(e);
                }
            } else {
                throw new Error(errorMsg);
            }
        }
    }

    render() {
        return <div className='calendar'>
            {this.props.month !== '' ? <MonthView data={this.props.data}/> : <YearView/>}
        </div>;
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

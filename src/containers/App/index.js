import React from "react";
import YearView from "../YearView";
import MonthView from "../MonthView";
import {connect} from "react-redux";
import {setDate} from "./actions";
import './style.scss';
import './reset.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        props.store && typeof props.onChange === 'function' && props.store.subscribe(()=>{
            props.onChange(props.store.getState().calendarReducer);
        });
    }

    componentDidMount() {
        const initialDate = this.props.initialDate;

        if (initialDate) {
            const errorMsg = 'Incorrect date format. Use Date object or string in format "year-month-day"';

            if (initialDate instanceof Date) {
                this.props.setDate({
                    day: initialDate.getUTCDate(),
                    month: initialDate.getUTCMonth(),
                    year: initialDate.getUTCFullYear(),
                });
            } else if (typeof initialDate === 'string') {
                try {
                    const [year, month, day] = initialDate.split('-').map(el => Number(el));
                    const date = new Date(Date.UTC(year, month - 1, day));

                    if (year !== date.getUTCFullYear() || month - 1 !== date.getUTCMonth() || day !== date.getUTCDate()) {
                        throw new Error(errorMsg);
                    } else {
                        this.props.setDate({
                            day,
                            month: month - 1,
                            year,
                        });
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
        month: state.calendarReducer.month,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setDate: (date) => dispatch(setDate(date)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

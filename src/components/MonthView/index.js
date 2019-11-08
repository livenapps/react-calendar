import React from 'react';
import {connect} from "react-redux";

const MonthView = (props) => {
    const rootClass = 'month-view';

    console.log(props.year, props.month, props.day);

    return (
        <section className={`${rootClass}`}>
            {rootClass}
        </section>
    );
};

function mapStateToProps(state) {
    return {
        year: state.yearViewReducer.year,
        month: state.yearViewReducer.month,
        day: state.monthViewReducer.day,
    };
}

export default connect(mapStateToProps)(MonthView);

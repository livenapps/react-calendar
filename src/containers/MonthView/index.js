import React from 'react';
import {connect} from "react-redux";
import {ReactComponent as TileMenuIcon} from "../App/assets/tile-menu.svg";
import {ReactComponent as ArrowLeft} from "../App/assets/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../App/assets/arrow-right.svg";
import {setDate, setDay, setMonth, setYear} from "../App/actions";
import {MONTHS, MIN_SWIPE} from '../App/constants';
import './styles.scss';

class MonthView extends React.Component {
  constructor(props) {
    super(props);
    this.class = 'month-view';
    this.touchCoordinates = {
      startY: null,
      endY: null,
    };
    this.date = new Date(Date.UTC(props.year, props.month, 1));

    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
  }

  get days() {
    const days = [];
    const monthColor = MONTHS[this.props.month].color;

    for (let i = 0; i < new Date(this.props.year, this.props.month).getUTCDay(); i++) {
      days.push(<div className={`${this.class}__day-wrapper`} key={`key-${i}`}/>);
    }
    for (let i = 1; i <= new Date(this.props.year, this.props.month + 1, 0).getDate(); i++) {
      const isSelected = this.props.day === i ? `${this.class}__day--selected` : '';
      const selectedClassName = this.props.day === i ? `${this.class}__day--selected` : '';
      const selectedDayStyles = isSelected ? {
        borderColor: monthColor,
        color: monthColor,
      } : {animationDelay: `${.01 * i}s`};

      days.push(<div className={`${this.class}__day-wrapper`} key={i}>
        <div className={`${this.class}__day ${selectedClassName}`} style={selectedDayStyles}
             onClick={() => {
               this.props.setDay(i);
             }}>
          {i}
        </div>
      </div>);
    }

    return days;
  }

  onTouchStart(e) {
    this.touchCoordinates.startX = e.touches[0].clientX;
    this.touchCoordinates.endX = e.touches[0].clientX;
  }

  onTouchMove(e) {
    this.touchCoordinates.endX = e.touches[0].clientX;
  }

  onTouchEnd() {
    const startX = this.touchCoordinates.startX;
    const endX = this.touchCoordinates.endX;

    if (startX > endX && startX - endX > MIN_SWIPE) {
      this.changeMonth(1);
    } else if (Math.abs(endX - startX) > MIN_SWIPE) {
      this.changeMonth(-1);
    }
  }

  changeMonth(n) {
    this.date.setUTCMonth(this.date.getUTCMonth() + n);

    const date = [this.date.getUTCFullYear(), this.date.getUTCMonth() + 1, 0];
    const currentMonthDays = new Date(Date.UTC(...date)).getUTCDate();

    this.props.setDate({
      day: this.props.day ? Math.min(currentMonthDays, this.props.day) : '',
      month: this.date.getUTCMonth(),
      year: this.date.getUTCFullYear(),
    });
  }

  render() {
    const monthColor = MONTHS[this.props.month].color;

    return <section className={`${this.class}`}>
      <TileMenuIcon className={`${this.class}__btn ${this.class}__btn--back`}
                    onClick={() => {
                      this.props.resetMonth();
                      this.props.resetDay();
                    }}/>
      <div className={`${this.class}__title-wrapper`}>
        <ArrowLeft
          className={`${this.class}__btn ${this.class}__btn--arrow`}
          onClick={() => {
            this.changeMonth(-1)
          }}
        />
        <div>
          <div className={`${this.class}__title`} style={{color: monthColor}}>
            {MONTHS[this.props.month].name.full}
          </div>
          <div className={`${this.class}__subtitle`}>
            <span className={`${this.class}__year`}>{this.props.year}</span>
          </div>
        </div>
        <ArrowRight
          className={`${this.class}__btn ${this.class}__btn--arrow`}
          onClick={() => {
            this.changeMonth(1)
          }}
        />
      </div>

      <div className={`${this.class}__month-wrapper`}
           onTouchStart={this.onTouchStart}
           onTouchMove={this.onTouchMove}
           onTouchEnd={this.onTouchEnd}
      >
        <div className={`${this.class}__days-wrapper`}>
          {this.days}
        </div>
      </div>
    </section>
  }
}

function mapStateToProps(state) {
  return {
    year: state.calendarReducer.year,
    month: state.calendarReducer.month,
    day: state.calendarReducer.day,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setDate: (day) => dispatch(setDate(day)),
    setDay: (day) => dispatch(setDay(day)),
    setMonth: (month) => dispatch(setMonth(month)),
    setYear: (year) => dispatch(setYear(year)),
    resetMonth: () => dispatch(setMonth('')),
    resetDay: () => dispatch(setDay('')),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthView);

import React from 'react';
import {connect} from "react-redux";
import {ReactComponent as ArrowLeft} from './assets/arrow-left.svg';
import {ReactComponent as ArrowRight} from './assets/arrow-right.svg';
import {setYear, setMonth} from "./actions";
import {MONTHS, MIN_SWIPE} from '../App/constants';
import './styles.scss';

class YearView extends React.Component {
    constructor(props) {
        super(props);
        this.class = 'year-view';
        this.touchCoordinates = {
            startX: null,
            endX: null,
        };

        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
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
            this.props.nextYear(this.props.year);

        } else if (Math.abs(endX - startX) > MIN_SWIPE) {
            this.props.prevYear(this.props.year);
        }
    }

    render() {
        return <section className={`${this.class}`}
                        onTouchStart={this.onTouchStart}
                        onTouchMove={this.onTouchMove}
                        onTouchEnd={this.onTouchEnd}
        >
            <div className={`${this.class}__title`}>
                {this.props.year}
            </div>
            <div className={`${this.class}__body`}>
                <ArrowLeft
                    className={`${this.class}__btn ${this.class}__btn--arrow`}
                    onClick={() => {
                        this.props.prevYear(this.props.year);
                    }}
                />
                <div className={`${this.class}__wrapper`}>
                    {MONTHS.map((el, i) =>
                        <div key={el.name.short} className={`${this.class}__month`} title={el.name.full}
                             style={{backgroundColor: el.color, animationDelay: `${.03 * i}s`}}
                             onClick={()=>this.props.setMonth(i)}
                        > {el.name.short} </div>
                    )}
                </div>
                <ArrowRight
                    className={`${this.class}__btn ${this.class}__btn--arrow`}
                    onClick={() => {
                        this.props.nextYear(this.props.year)
                    }}
                />
            </div>
        </section>
    };
}

function mapStateToProps(state) {
    return {
        year: state.yearViewReducer.year,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        prevYear: (year) => dispatch(setYear(year - 1)),
        nextYear: (year) => dispatch(setYear(year + 1)),
        setMonth: (month) => {dispatch(setMonth(month))},
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(YearView);

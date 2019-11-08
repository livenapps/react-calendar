import React from 'react';
import {connect} from "react-redux";
import {ReactComponent as TileMenuIcon} from './assets/tile-menu.svg';
import {ReactComponent as ArrowLeft} from './assets/arrow-left.svg';
import {ReactComponent as ArrowRight} from './assets/arrow-right.svg';
import {setYear, setMonth} from "./actions";
import './styles.scss';

const month = [
    {
        name: {
            short: 'Jan',
            full: 'January',
        },
        color: '#637bfe',
    },
    {
        name: {
            short: 'Feb',
            full: 'February',
        },
        color: '#33bfff',
    },
    {
        name: {
            short: 'Mar',
            full: 'March',
        },
        color: '#1de9b6',
    },
    {
        name: {
            short: 'Apr',
            full: 'April',
        },
        color: '#00e676',
    },
    {
        name: {
            short: 'May',
            full: 'May',
        },
        color: '#91ff35',
    },
    {
        name: {
            short: 'Jun',
            full: 'June',
        },
        color: '#ffc400',
    },
    {
        name: {
            short: 'Jul',
            full: 'July',
        },
        color: '#ff9100',
    },
    {
        name: {
            short: 'Aug',
            full: 'August',
        },
        color: '#ff6333',
    },
    {
        name: {
            short: 'Sep',
            full: 'September',
        },
        color: '#ff4569',
    },
    {
        name: {
            short: 'Okt',
            full: 'October',
        },
        color: '#f73378',
    },
    {
        name: {
            short: 'Nov',
            full: 'November',
        },
        color: '#dd33fa',
    },
    {
        name: {
            short: 'Dec',
            full: 'December',
        },
        color: '#834bff',
    }
];

class YearView extends React.Component {
    constructor(props) {
        super(props);
        this.rootClass = 'year-view';
        this.touchCoordinates = {
            startX: null,
            endX: null,
        };
        this.touchMinSwipe = '100';

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

        if (startX > endX && startX - endX > this.touchMinSwipe) {
            this.props.nextYear(this.props.year);
        } else if (Math.abs(endX - startX) > this.touchMinSwipe) {
            this.props.prevYear(this.props.year);
        }
    }

    render() {
        console.log(this.props);
        return <section className={`${this.rootClass}`}
                        onTouchStart={this.onTouchStart}
                        onTouchMove={this.onTouchMove}
                        onTouchEnd={this.onTouchEnd}
        >
            <TileMenuIcon className={`${this.rootClass}__btn ${this.rootClass}__btn--back`}/>
            <div className={`${this.rootClass}__title`}>
                {this.props.year}
            </div>
            <div className={`${this.rootClass}__body`}>
                <ArrowLeft
                    className={`${this.rootClass}__btn ${this.rootClass}__btn--arrow ${this.rootClass}__btn--arrow-left`}
                    onClick={() => {
                        this.props.prevYear(this.props.year);
                    }}
                />
                <div className={`${this.rootClass}__months-wrapper`}>
                    {month.map((el, i) =>
                        <div key={el.name.short} className={`${this.rootClass}__month`} title={el.name.full}
                             style={{backgroundColor: el.color, animationDelay: `${.03 * i}s`}}
                             onClick={()=>this.props.setMonth(i)}
                        > {el.name.short} </div>
                    )}
                </div>
                <ArrowRight
                    className={`${this.rootClass}__btn ${this.rootClass}__btn--arrow ${this.rootClass}__btn--arrow-right`}
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

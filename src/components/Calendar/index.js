import React from 'react';
import {ReactComponent as TileMenuIcon} from './assets/tile-menu.svg';
import {ReactComponent as ArrowLeft} from './assets/arrow-left.svg';
import {ReactComponent as ArrowRight} from './assets/arrow-right.svg';
import './styles.scss';
import './reset.scss';

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

export default (props) => {
    const rootClass = 'calendar';
    const date = props.date ? props.date instanceof Date ? props.date : new Date(props.date) : new Date();

    return (
        <section className={`${rootClass}`}>
            <TileMenuIcon className={`${rootClass}__btn ${rootClass}__btn--back`}/>
            <div className={`${rootClass}__title`}>
                {date.getFullYear()}
            </div>
            <div className={`${rootClass}__body`}>
                <ArrowLeft className={`${rootClass}__btn ${rootClass}__btn--arrow ${rootClass}__btn--arrow-left`}/>
                <div className={`${rootClass}__months-wrapper`}>
                    {month.map((el, i) =>
                        <div key={el.name.short} className={`${rootClass}__month`} title={ el.name.full }
                             style={{ backgroundColor: el.color, animationDelay: `${.2*i}s` }}> {el.name.short} </div>
                    )}
                </div>
                <ArrowRight className={`${rootClass}__btn ${rootClass}__btn--arrow ${rootClass}__btn--arrow-right`}/>
            </div>
        </section>
    );
}

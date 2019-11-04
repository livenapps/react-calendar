import React from 'react';
import './reset.scss';

export default (props) => {
  const rootClass = 'calendar';
  const date = props.date || new Date();

  return (
    <section className={ `${ rootClass }` }>
      <div className={ `${ rootClass }__header` }>
        <h1 className={ `${ rootClass }__year` }>{props.date.getFullYear()}</h1>
        <span className={ `${ rootClass }__btn ${ rootClass }__btn--menu` }>=</span>
      </div>
      <span className={ `${ rootClass }__btn ${ rootClass }__btn--arrow-left` }>prev</span>
      <div className={ `${ rootClass }__months-wrapper` }>
        <div className={ `${ rootClass }__month` }>J</div>
      </div>
      <span className={ `${ rootClass }__btn ${ rootClass }__btn--arrow-next` }>next</span>
    </section>
  );
}

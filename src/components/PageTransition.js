import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const timeout = {
  enter: 300,
  exit: 300
};

const PageTransition = props => {
  const location = props.location;
  const pathname = location.pathname;

  console.log(pathname);

  return (
    <TransitionGroup>
      <CSSTransition key={pathname} classNames="page" timeout={timeout}>
        <Route location={location} render={() => (
          <Switch>
            {props.children}
          </Switch>
        )}
        />
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(PageTransition);
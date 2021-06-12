import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components and Pages
import NavBar from '../components/navBar';

function PageRoutes() {
  return (
    <Router>
      <NavBar />
      <section>
        <Switch>
          {/* frontend routes goes in here */}
        </Switch>
      </section>
    </Router>
  );
}

export default PageRoutes;
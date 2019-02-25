import React from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Converter from '../Converter';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <PerseidsHeader>
        Greek Beta Code Converter
      </PerseidsHeader>
      <main role="main">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Converter} />
            <Route exact path="/b/:string/" component={Converter} />
            <Route exact path="/u/:string/" component={Converter} />
          </Switch>
        </div>
      </main>
      <PerseidsFooter
        report="https://github.com/perseids-project/beta-code-js"
        github="https://github.com/perseids-project/beta-code-js/issues"
      />
    </React.Fragment>
  </Router>
);

export default App;


import React from 'react';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import I18n from '../I18n';

import styles from './App.module.css';

import Converter from '../Converter';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <PerseidsHeader>
        <I18n t="header.title" />
      </PerseidsHeader>
      <main role="main" className={styles.main}>
        <div className={`container ${styles.container}`}>
          <Switch>
            <Route exact path="/" component={Converter} />
          </Switch>
        </div>
      </main>
      <PerseidsFooter
        report="https://github.com/perseids-project/beta-code-js"
        github="https://github.com/perseids-project/beta-code-js/issues"
        doi="10.5281/zenodo.3967309"
      />
    </>
  </Router>
);

export default App;

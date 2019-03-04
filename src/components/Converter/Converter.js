import React, { Component } from 'react';
import { greekToBetaCode, betaCodeToGreek } from 'beta-code-js';

import styles from './Converter.module.css';

class Converter extends Component {
  state = {
    beta: '',
    unicode: '',
  }

  constructor(props) {
    super(props);

    this.handleBetaChange = this.handleBetaChange.bind(this);
    this.handleUnicodeChange = this.handleUnicodeChange.bind(this);
  }

  handleBetaChange(event) {
    const { value } = event.target;

    this.setState({
      beta: value,
      unicode: betaCodeToGreek(value),
    });
  }

  handleUnicodeChange(event) {
    const { value } = event.target;

    this.setState({
      beta: greekToBetaCode(value),
      unicode: value,
    });
  }

  render() {
    const { beta, unicode } = this.state;

    return (
      <React.Fragment>
        <div className="row pt-4 mb-3">
          <div className="col-12 text-center">
            <h1 className="h3 font-weight-normal">
              Greek Beta Code Converter
            </h1>
          </div>
        </div>

        <div className={`row ${styles.row}`}>
          <div className="col-6">
            <div className="d-block d-sm-none">
              <h4 className="text-center">
                Unicode
              </h4>
            </div>
            <div className="d-none d-sm-block">
              <h4 className="text-center">
                 Greek Unicode
              </h4>
            </div>
            <textarea
              className={`${styles.textarea} form-control input-lg`}
              type="text"
              placeholder="μῆνιν ἄειδε θεὰ ..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={this.handleUnicodeChange}
              value={unicode}
            />
          </div>

          <div className="col-6">
            <h4 className="text-center">Beta Code</h4>
            <textarea
              className={`${styles.textarea} form-control input-lg`}
              type="text"
              placeholder="mh=nin a)/eide qea\ ..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={this.handleBetaChange}
              value={beta}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Converter;
